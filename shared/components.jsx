// Shared components: PageHeader, Countdown, PartnerLogo, MarkMap, SwedenMap,
// ActivityCardLarge, NewsCard, ContactCard, MeetupMap, EventProgram, EventJudges, EventQuickLinks

(function () {
  const { useEffect, useRef, useState } = React;

  // ---------- PageHeader ----------
  function PageHeader({ back, backHref, eyebrow, title, sub, tone = "light" }) {
    const dark = tone === "dark";
    return (
      <section className={dark ? "bg-svk-ink-900 text-white relative overflow-hidden noise-bg" : "bg-svk-surface border-b border-svk-border"}>
        <div className="container-svk py-16 md:py-20 relative">
          {back && (
            <Link href={backHref || "/"} className={"text-[13px] inline-flex items-center gap-1.5 cursor-pointer mb-4 no-underline " + (dark ? "text-white/65 hover:text-white" : "text-svk-ink-500 hover:text-svk-green-700")}>
              <IconArrowLeft size={13}/> {back}
            </Link>
          )}
          {eyebrow && <Eyebrow tone={dark ? "white" : "brand"}>{eyebrow}</Eyebrow>}
          <h1 className={`font-serif font-semibold tracking-svk-tight leading-[1.03] mt-3 mb-4 ${dark ? "text-white" : "text-svk-ink-900"} text-[48px] md:text-[64px]`}>{title}</h1>
          {sub && <p className={`text-[17px] leading-[1.55] max-w-2xl ${dark ? "text-white/75" : "text-svk-ink-600"}`}>{sub}</p>}
        </div>
      </section>
    );
  }

  // ---------- Countdown ----------
  function Countdown({ iso, tone = "dark" }) {
    const [mounted, setMounted] = useState(false);
    const [now, setNow] = useState(() => new Date());
    useEffect(() => { setMounted(true); const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
    const target = new Date(iso);
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000); diff -= h * 3600000;
    const m = Math.floor(diff / 60000); diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    const cellCls = tone === "dark" ? "bg-white/10 border border-white/15 text-white" : "bg-white border border-svk-border text-svk-ink-900";
    const subCls = tone === "dark" ? "text-white/55" : "text-svk-ink-500";
    const cells = mounted ? [[d, "dagar"], [h, "timmar"], [m, "min"], [s, "sek"]] : [["--", "dagar"], ["--", "timmar"], ["--", "min"], ["--", "sek"]];
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-md">
        {cells.map(([n, l]) => (
          <div key={l} className={`rounded-[10px] px-3 py-3 md:px-4 md:py-4 ${cellCls}`}>
            <div className="font-serif text-[28px] md:text-[36px] font-semibold leading-none tabular-nums tracking-tight">{typeof n === "number" ? String(n).padStart(2, "0") : n}</div>
            <div className={`text-[10.5px] uppercase tracking-[0.14em] font-semibold mt-1.5 ${subCls}`}>{l}</div>
          </div>
        ))}
      </div>
    );
  }

  // ---------- PartnerLogo ----------
  function PartnerLogo({ name }) {
    const initials = name.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    const hue = (name.charCodeAt(0) * 37 + name.length * 11) % 360;
    return (
      <div className="h-full w-full flex items-center justify-center select-none" style={{ color: `oklch(0.35 0.04 ${hue})`, letterSpacing: "0.04em" }}>
        <span className="font-serif font-semibold text-[20px]">{initials}</span>
        <span className="ml-2 text-[11.5px] font-semibold tracking-[0.18em] uppercase text-svk-ink-600">{name.split(/\s+/)[0]}</span>
      </div>
    );
  }

  // ---------- MarkMap ----------
  function MarkMap({ tone = "light" }) {
    const stroke = tone === "light" ? "#cfcabe" : "rgba(255,255,255,0.22)";
    const ink = tone === "light" ? "#4a524b" : "rgba(255,255,255,0.75)";
    const accent = "#e5741f";
    return (
      <svg viewBox="0 0 560 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="560" height="340" fill={tone === "light" ? "#f4f2ec" : "#1a1f1c"}/>
        {[0,1,2,3,4,5].map((i) => (
          <path key={i} d={`M-20 ${60 + i*45} C 120 ${30 + i*45}, 260 ${120 + i*45}, 400 ${70 + i*45} S 600 ${130 + i*45}, 600 ${130 + i*45}`} fill="none" stroke={stroke} strokeWidth="1"/>
        ))}
        <path d="M80 220 C 120 200, 200 200, 230 230 C 250 260, 180 280, 130 275 C 90 270, 60 250, 80 220 Z" fill={tone === "light" ? "#d9e3e8" : "#243137"} stroke={stroke}/>
        <text x="160" y="253" fill={ink} fontSize="11" fontFamily="serif" fontStyle="italic" textAnchor="middle">Sápmejávri</text>
        <path d="M230 230 C 280 240, 330 260, 380 255 C 430 250, 480 240, 540 245" fill="none" stroke={tone === "light" ? "#b9ced5" : "#2d4046"} strokeWidth="3"/>
        {[[140,130,"S1"],[250,110,"S2"],[330,180,"S3"],[410,120,"S4"],[470,200,"S5"]].map(([x,y,n]) => (
          <g key={n}>
            <circle cx={x} cy={y} r="7" fill={accent} stroke="white" strokeWidth="2"/>
            <text x={x} y={y-12} fill={ink} fontSize="10" fontWeight="700" textAnchor="middle">{n}</text>
          </g>
        ))}
        <g>
          <circle cx="90" cy="90" r="9" fill="#255a31" stroke="white" strokeWidth="2"/>
          <text x="90" y="72" fill={ink} fontSize="11" fontWeight="700" textAnchor="middle">Camp Ripan</text>
        </g>
        <g transform="translate(510, 40)"><path d="M0 14 L8 -10 L16 14 L8 8 Z" fill={ink}/><text x="8" y="30" fill={ink} fontSize="10" fontWeight="700" textAnchor="middle">N</text></g>
        <g transform="translate(430, 300)"><rect x="0" y="0" width="80" height="4" fill={ink}/><text x="40" y="18" fill={ink} fontSize="10" textAnchor="middle">2 km</text></g>
      </svg>
    );
  }

  // ---------- SwedenMap ----------
  function SwedenMap({ clubs, onPick, hovered, setHovered }) {
    return (
      <svg viewBox="0 0 100 110" className="w-full h-auto">
        <defs><linearGradient id="sweden-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef1e4"/><stop offset="1" stopColor="#dfe3d0"/></linearGradient></defs>
        <path d="M 62 4 L 67 9 L 70 17 L 66 23 L 68 30 L 72 34 L 70 40 L 65 44 L 60 48 L 57 54 L 54 60 L 52 66 L 48 70 L 44 73 L 40 75 L 36 72 L 32 68 L 30 62 L 32 58 L 35 54 L 38 50 L 36 45 L 34 40 L 36 36 L 40 32 L 44 28 L 48 22 L 52 16 L 56 10 L 60 6 Z M 30 72 L 33 76 L 32 82 L 30 86 L 34 90 L 38 94 L 42 98 L 46 102 L 52 104 L 56 100 L 58 94 L 56 88 L 52 84 L 48 80 L 44 78 L 40 76 Z"
          fill="url(#sweden-fill)" stroke="#cfcabe" strokeWidth="0.4"/>
        {clubs.map((c) => {
          const active = hovered === c.slug;
          return (
            <g key={c.slug} onMouseEnter={() => setHovered(c.slug)} onMouseLeave={() => setHovered(null)} onClick={() => onPick(c.slug)} style={{cursor: "pointer"}}>
              <circle cx={c.x} cy={c.y} r={active ? 3.2 : 1.6} fill={active ? "#e5741f" : "#2e6f3c"} stroke="#fff" strokeWidth="0.5" style={{transition: "all 180ms cubic-bezier(0.2,0.7,0.2,1)"}}/>
              {active && <text x={c.x + 4} y={c.y + 1} fontSize="2.8" fill="#1a1f1c" fontWeight="600" fontFamily="Manrope, sans-serif">{c.short}</text>}
            </g>
          );
        })}
      </svg>
    );
  }

  // ---------- Cards ----------
  function activityHref(e) {
    if (e.id === "riksprovet-2026" || e.type === "Riksprovet") return "/riksprovet";
    if (e.type === "Riksutställning") return "/riksutstallning";
    return "/generic";
  }
  function ActivityCardLarge({ e }) {
    return (
      <Link href={activityHref(e)} className="card card-hover hover:shadow-svk-md flex flex-col group h-full no-underline">
        <div className="aspect-[16/10] relative shrink-0">
          <Photo photoKey={e.photoKey} kind={e.photo} alt={e.title}/>
          <div className="absolute left-3 bottom-3 flex gap-1.5">
            <Chip tone={e.type === "Riksprovet" || e.type === "Riksutställning" ? "accent" : "ghost"}>{e.type}</Chip>
            <Chip tone="ghost">{e.local}</Chip>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight mb-3 line-clamp-2">{e.title}</h3>
          <div className="text-[13px] text-svk-ink-600 flex items-center gap-1.5 mb-1"><IconCalendar size={13}/> {e.date}</div>
          <div className="text-[13px] text-svk-ink-600 flex items-center gap-1.5 mb-3"><IconPin size={13}/> {e.loc}</div>
          <p className="text-[14px] text-svk-ink-600 leading-[1.55] mb-4 line-clamp-2">{e.lede}</p>
          <span className="link-arrow text-[13px] font-semibold text-svk-green-700 mt-auto">Läs mer & anmäl dig <IconArrowRight size={12}/></span>
        </div>
      </Link>
    );
  }
  function NewsCard({ n, href = "/nyheter" }) {
    return (
      <Link href={href} className="card card-hover hover:shadow-svk-md flex flex-col group h-full no-underline">
        <div className="aspect-[16/10] shrink-0"><Photo photoKey={n.photoKey} kind={n.photo} alt={n.title}/></div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex gap-1.5 mb-3"><Chip tone="green">{n.chip}</Chip><Chip tone="outline" size="sm">{n.local}</Chip></div>
          <h3 className="font-serif font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.18] mb-2 text-[20px] line-clamp-2">{n.title}</h3>
          <div className="text-[12px] text-svk-ink-500 flex items-center gap-1.5 mb-3"><IconCalendar size={12}/> {n.date}</div>
          <span className="link-arrow text-[13px] font-semibold text-svk-green-700 mt-auto">Läs mer <IconArrowRight size={12}/></span>
        </div>
      </Link>
    );
  }
  function ContactCard({ person }) {
    return (
      <div className="bg-white border border-svk-border rounded-[10px] p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[18px] font-semibold inline-flex items-center justify-center">
            {person.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div className="font-semibold text-[14.5px] text-svk-ink-900">{person.name}</div>
            <div className="text-[12px] text-svk-ink-500">{person.role}</div>
          </div>
        </div>
        <div className="space-y-1.5 text-[13px] text-svk-ink-700">
          <div className="flex items-center gap-2"><IconMail size={13} className="text-svk-ink-500"/> {person.email}</div>
          <div className="flex items-center gap-2"><IconPhone size={13} className="text-svk-ink-500"/> {person.phone}</div>
        </div>
      </div>
    );
  }

  // ---------- MeetupMap (Leaflet) ----------
  function MeetupMap({ coords, label, subtitle, eyebrow = "Samlingsplats", popupLines = [], address, pinColor = "#3c8a4b",
                      secondaryCoords, secondaryIcon = "plane", secondaryTooltip, zoom = 13 }) {
    const ref = useRef(null);
    useEffect(() => {
      if (!ref.current || !coords) return;
      let map, cancelled = false;
      (async () => {
        // leaflet is attached on window by the <script> tag in index.html
        const L = window.L;
        if (!L || cancelled || !ref.current) return;
        map = L.map(ref.current, { center: coords, zoom, scrollWheelZoom: false, zoomControl: true });
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
          attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>, © <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd", maxZoom: 19,
        }).addTo(map);
        const pinIcon = L.divIcon({
          className: "",
          html: `<div style="position:relative;width:36px;height:48px;"><div style="position:absolute;inset:0;filter:drop-shadow(0 2px 4px rgba(0,0,0,.25));"><svg viewBox="0 0 36 48" width="36" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M18 0C8 0 0 7.7 0 17.3 0 29 18 48 18 48s18-19 18-30.7C36 7.7 28 0 18 0z" fill="${pinColor}"/><circle cx="18" cy="17" r="6" fill="white"/></svg></div></div>`,
          iconSize: [36, 48], iconAnchor: [18, 48], popupAnchor: [0, -44],
        });
        const mapsUrl = address ? "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(address) : null;
        const popupBody = `<div style="font-family: Georgia, serif; min-width: 200px;"><div style="font-size:10px;font-weight:700;letter-spacing:1.5px;color:#6a7168;text-transform:uppercase;margin-bottom:4px;">${eyebrow}</div><div style="font-size:17px;font-weight:600;color:#1a1f1c;line-height:1.2;margin-bottom:4px;">${label || ""}</div><div style="font-family:system-ui,sans-serif;font-size:12px;color:#6a7168;line-height:1.5;">${popupLines.map((l) => l).join("<br>")}</div>${mapsUrl ? `<a href="${mapsUrl}" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px;font-family:system-ui,sans-serif;font-size:12px;color:#255a31;font-weight:600;text-decoration:none;">Vägbeskrivning →</a>` : ""}</div>`;
        L.marker(coords, { icon: pinIcon }).addTo(map).bindPopup(popupBody).openPopup();
        if (secondaryCoords) {
          const iconSvg = secondaryIcon === "plane"
            ? '<path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2 3 8l6 3-2 2-3-0.5-1 1L7 15l2 3 1-1-0.5-3 2-2 3 6z"/>'
            : '<circle cx="12" cy="12" r="4"/>';
          const secIcon = L.divIcon({
            className: "",
            html: `<div style="width:24px;height:24px;border-radius:50%;background:white;border:2px solid #1a1f1c;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 3px rgba(0,0,0,.2);"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1a1f1c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${iconSvg}</svg></div>`,
            iconSize: [24, 24], iconAnchor: [12, 12],
          });
          const sec = L.marker(secondaryCoords, { icon: secIcon }).addTo(map);
          if (secondaryTooltip) sec.bindTooltip(secondaryTooltip, { direction: "top", offset: [0, -8] });
          L.polyline([secondaryCoords, coords], { color: "#6a7168", weight: 2, opacity: 0.5, dashArray: "5, 6" }).addTo(map);
          map.fitBounds([coords, secondaryCoords], { padding: [40, 40] });
        }
      })();
      return () => { cancelled = true; if (map) map.remove(); };
    }, []);
    return (
      <div className="relative w-full h-full">
        <div ref={ref} className="absolute inset-0 rounded-[12px] overflow-hidden" style={{zIndex: 0}}/>
        {label && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-svk-border rounded-[8px] px-4 py-3 shadow-svk-sm pointer-events-none" style={{zIndex: 500}}>
            <Eyebrow tone="muted" className="mb-0.5">{eyebrow}</Eyebrow>
            <div className="font-serif text-[17px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight">{label}</div>
            {subtitle && <div className="text-[12px] text-svk-ink-600 mt-0.5">{subtitle}</div>}
          </div>
        )}
      </div>
    );
  }

  // ---------- EventProgram ----------
  function EventProgram({ program, eyebrow = "Program", title = "Schema", intro, tone = "light", inline = false, icon = true }) {
    if (!program || !program.length) return null;
    const hasDays = typeof program[0] === "object" && "day" in program[0];
    const days = hasDays
      ? program.map((d) => ({ day: d.day, items: d.items.map((it) => (Array.isArray(it) ? { time: it[0], title: it[1] } : it)) }))
      : [{ day: null, items: program }];
    const isDark = tone === "dark";
    const cardCls = isDark ? "bg-white/5 border border-white/10" : "bg-white border border-svk-border";
    const titleCls = isDark ? "text-white" : "text-svk-ink-900";
    const rowLocCls = isDark ? "text-white/55" : "text-svk-ink-500";
    const rowTitleCls = isDark ? "text-white" : "text-svk-ink-900";
    const introCls = isDark ? "text-white/70" : "text-svk-ink-600";
    const dayDivider = isDark ? "text-white/60" : "text-svk-ink-500";

    const body = (<>
      {inline ? (
        <h2 className={`font-serif text-[22px] font-semibold ${titleCls} tracking-svk-tight mb-4 flex items-center gap-2`}>
          {icon && <IconCalendar size={18} className="text-svk-green-700"/>} {title}
        </h2>
      ) : (
        <div className="max-w-2xl mb-10">
          <Eyebrow tone={isDark ? "white" : undefined}>{eyebrow}</Eyebrow>
          <h2 className={`font-serif text-[36px] font-semibold ${titleCls} tracking-svk-tight mt-2 mb-3`}>{title}</h2>
          {intro && <p className={`text-[14.5px] ${introCls} leading-[1.6]`}>{intro}</p>}
        </div>
      )}
      <div className={inline ? "space-y-6" : `${cardCls} rounded-[12px] p-6 md:p-7 space-y-6`}>
        {days.map((day, i) => (
          <div key={day.day || i}>
            {day.day && (
              <div className="flex items-baseline gap-3 mb-3">
                <div className={`font-mono text-[11px] tracking-[0.18em] font-semibold ${dayDivider}`}>DAG {i + 1}</div>
                <h3 className={`font-serif text-[19px] font-semibold ${titleCls} tracking-svk-tight`}>{day.day}</h3>
              </div>
            )}
            <div className="space-y-2">
              {day.items.map((p, j) => (
                <div key={j} className={`flex items-center gap-4 ${isDark ? "bg-white/5" : "bg-svk-surface-2/60"} rounded-[8px] p-3`}>
                  <span className="font-mono text-[12.5px] font-bold text-white bg-svk-green-700 rounded-full px-3 py-1 shrink-0 tabular-nums">{p.time}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-[14px] ${rowTitleCls}`}>{p.title}</div>
                    {p.loc && <div className={`text-[12px] ${rowLocCls} flex items-center gap-1 mt-0.5`}><IconPin size={11}/> {p.loc}</div>}
                  </div>
                  {p.price && <span className={`text-[13px] font-semibold ${isDark ? "text-svk-green-500" : "text-svk-green-700"} shrink-0`}>{p.price}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>);

    if (inline) return <div className="card p-6">{body}</div>;
    const sectionCls = isDark ? "bg-svk-ink-900 text-white" : "bg-svk-surface-2 border-t border-svk-border";
    return <section className={`${sectionCls} py-16`}><div className="container-svk">{body}</div></section>;
  }

  function initialsFromName(name) {
    return name.split(/\s+/).filter(Boolean).map((s) => s[0]).join("").slice(0, 2).toUpperCase();
  }

  function EventJudges({ judges, eyebrow = "Domarkår", title = "Domare", intro, footnote, tone = "light", inline = false, icon = true }) {
    if (!judges || !judges.length) return null;
    const isDark = tone === "dark";
    const cardCls = isDark ? "bg-white/5 border border-white/10" : inline ? "bg-svk-surface-2/60" : "bg-white border border-svk-border";
    const titleCls = isDark ? "text-white" : "text-svk-ink-900";
    const introCls = isDark ? "text-white/70" : "text-svk-ink-600";
    const bodyCls = isDark ? "text-white/75" : "text-svk-ink-700";
    const subCls = isDark ? "text-white/55" : "text-svk-ink-500";
    const compact = !inline && judges.length >= 3;

    const body = (<>
      {inline ? (
        <h2 className={`font-serif text-[22px] font-semibold ${titleCls} tracking-svk-tight mb-5 flex items-center gap-2`}>
          {icon && <IconUsers size={18} className="text-svk-green-700"/>} {title}
        </h2>
      ) : (
        <div className="max-w-2xl mb-8">
          <Eyebrow tone={isDark ? "white" : undefined}>{eyebrow}</Eyebrow>
          <h2 className={`font-serif text-[36px] font-semibold ${titleCls} tracking-svk-tight mt-2 mb-3`}>{title}</h2>
          {intro && <p className={`text-[14.5px] ${introCls} leading-[1.6]`}>{intro}</p>}
        </div>
      )}

      <div className={compact ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" : "space-y-5"}>
        {judges.map((j) => {
          const initials = j.initials || initialsFromName(j.name);
          return (
            <div key={j.name} className={`${cardCls} rounded-[12px] ${compact ? "p-5" : "p-6"}`}>
              <div className={`flex items-start gap-4 ${j.bio || j.merits ? "mb-3" : ""}`}>
                <div className="w-12 h-12 rounded-full bg-svk-green-700 text-white font-serif text-[15px] font-semibold inline-flex items-center justify-center shrink-0">{initials}</div>
                <div className="flex-1 min-w-0">
                  <div className={`font-serif text-[17px] font-semibold ${titleCls} tracking-svk-tight leading-tight`}>{j.name}</div>
                  {j.role && <div className={`text-[12.5px] font-semibold ${isDark ? "text-svk-orange-200" : "text-svk-green-700"} mt-0.5`}>{j.role}</div>}
                  {(j.club || j.years != null) && <div className={`text-[12.5px] ${subCls} mt-1`}>{[j.club, j.years != null ? `${j.years} år som domare` : null].filter(Boolean).join(" · ")}</div>}
                  {j.breeds && j.breeds.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {j.breeds.map((b) => <Chip key={b} tone="green" size="sm">{b}</Chip>)}
                    </div>
                  )}
                </div>
              </div>
              {j.bio && <p className={`text-[13.5px] ${bodyCls} leading-[1.6] mb-4`}>{j.bio}</p>}
              {j.merits && j.merits.length > 0 && (
                <div>
                  <div className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${subCls} mb-2`}>Erfarenhet & meriter</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                    {j.merits.map((m, k) => (
                      <div key={k} className={`flex items-start gap-2 text-[13px] ${bodyCls}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-svk-green-500 mt-1.5 shrink-0"/>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {footnote && <div className={`mt-6 text-[13px] ${subCls}`}>{footnote}</div>}
    </>);

    if (inline) return <div className="card p-6">{body}</div>;
    const sectionCls = isDark ? "bg-svk-ink-900 text-white" : "bg-svk-bg";
    return <section className={`${sectionCls} py-16`}><div className="container-svk">{body}</div></section>;
  }

  const TONE_MAP = {
    blue: { bg: "#dbeafe", fg: "#2563eb" },
    green: { bg: "#d1fae5", fg: "#3c8a4b" },
    blue2: { bg: "#dbeafe", fg: "#2563eb" },
    red: { bg: "#fee2e2", fg: "#dc2626" },
    amber: { bg: "#fef3c7", fg: "#d97706" },
    purple: { bg: "#ede9fe", fg: "#7c3aed" },
    orange: { bg: "#ffe7d4", fg: "#c85518" },
  };
  const ICON_MAP = { nav: IconNav, calendar: IconCalendar, home: IconHome, gift: IconGift, heart: IconHeart, trophy: IconTrophy, users: IconUsers, file: IconFile, plane: IconPlane, target: IconTarget };

  function EventQuickLinks({ items }) {
    if (!items || !items.length) return null;
    return (
      <section className="container-svk pt-2 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item) => {
            const t = TONE_MAP[item.tone] || TONE_MAP.green;
            const Ico = ICON_MAP[item.icon] || IconInfo;
            return (
              <a key={item.title} href={"#" + item.anchor} className="card card-hover p-5 block group">
                <div className="w-10 h-10 rounded-[8px] inline-flex items-center justify-center mb-4" style={{ background: t.bg, color: t.fg }}>
                  <Ico size={18}/>
                </div>
                <div className="font-serif text-[15px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight">{item.title}</div>
                <div className="text-[12px] text-svk-ink-500 mt-1 leading-[1.4]">{item.sub}</div>
              </a>
            );
          })}
        </div>
      </section>
    );
  }

  Object.assign(window, { PageHeader, Countdown, PartnerLogo, MarkMap, SwedenMap, activityHref, ActivityCardLarge, NewsCard, ContactCard, MeetupMap, EventProgram, EventJudges, EventQuickLinks });
})();
