// TopNav + Footer
(function () {
  const { useEffect, useState } = React;

  const NAV_LINKS = [
    { id: "nyheter", label: "Nyheter", href: "/nyheter" },
    { id: "om", label: "Om oss", menu: [
      { label: "Klubbens historia", href: "/nyheter/klubbens-historia" },
      { label: "Lokalavdelningar", href: "/nyheter/lokalavdelningar" },
      { label: "Styrelsen", href: "/nyheter/styrelsen" },
      { label: "Kommittéer", href: "/nyheter/kommitteer" },
      { label: "Funktionärer", href: "/funktionarer" },
      { label: "Kontakt", href: "/nyheter/kontakt" },
    ]},
    { id: "lokal", label: "Lokalavdelningar", megamenu: true },
    { id: "aktivitet", label: "Aktiviteter", href: "/aktiviteter" },
    { id: "jakt", label: "Jakt & utställning", menu: [
      { label: "Jaktprov", href: "/provform/jaktprov" },
      { label: "Eftersöksprov", href: "/provform/eftersoksprov" },
      { label: "Fullbruksprov", href: "/provform/fullbruksprov" },
      { label: "Viltspår", href: "/provform/viltspar" },
      { label: "Utställning", href: "/provform/utstallning" },
    ]},
    { id: "raser", label: "Våra raser", href: "/raser" },
    { id: "dokument", label: "Dokument" },
  ];

  function TopNav() {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(null);
    const [hoveredClub, setHoveredClub] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const currentId = (() => {
      if (!pathname || pathname === "/") return "home";
      if (pathname.startsWith("/aktiviteter")) return "aktivitet";
      if (pathname.startsWith("/generic")) return "nyheter";
      if (pathname.startsWith("/nyheter")) return "nyheter";
      if (pathname.startsWith("/lokal")) return "lokal";
      return null;
    })();

    return (
      <header
        className={`sticky top-0 z-30 border-b transition-colors duration-200 ${scrolled ? "bg-white/90 backdrop-blur-md border-svk-border" : "bg-svk-surface border-svk-border"}`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-svk flex items-center gap-8 h-[88px]">
          <Link href="/" className="flex items-center gap-4 no-underline">
            <img src="assets/logo-svk.png" className="w-14 h-14 object-contain" alt=""/>
            <div className="leading-tight">
              <div className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight">Svenska Vorstehklubben</div>
              <div className="text-[12px] text-svk-ink-500 mt-1">Specialklubb under Svenska Kennelklubben</div>
            </div>
          </Link>
          <div className="flex-1"/>
          <label className="hidden md:inline-flex items-center gap-2.5 bg-svk-bg border border-svk-border rounded-full px-4 py-2 text-[13px] text-svk-ink-500 w-[280px] cursor-text">
            <IconSearch size={14}/>
            <span className="flex-1">Sök på webbplatsen…</span>
            <kbd className="text-[10px] font-mono border border-svk-border rounded px-1 py-[1px] text-svk-ink-500">⌘K</kbd>
          </label>
          <Button variant="primary" size="sm">Bli medlem</Button>
        </div>

        <div className="container-svk flex items-center gap-1 h-[48px] border-t border-svk-border">
          <nav className="flex gap-0.5 flex-1">
            {NAV_LINKS.map((l) => {
              const active = currentId === l.id;
              const hasDropdown = l.menu || l.megamenu;
              return (
                <div key={l.id} className="relative" onMouseEnter={() => setOpen(hasDropdown ? l.id : null)}>
                  <Link
                    href={l.href || "#"}
                    className={`relative inline-flex items-center gap-1.5 px-4 h-[48px] text-[13.5px] no-underline ${active ? "text-svk-green-700 font-semibold" : "text-svk-ink-800 font-medium hover:text-svk-green-700"}`}
                  >
                    {l.label}
                    {hasDropdown && <IconChevronDown size={11} className="opacity-60"/>}
                    {active && <span className="absolute left-4 right-4 -bottom-px h-[2px] bg-svk-green-600"/>}
                  </Link>
                  {open === l.id && l.menu && (
                    <div className="absolute top-full left-0 min-w-[220px] bg-white border border-svk-border rounded-[10px] shadow-svk-md p-1.5 z-40">
                      {l.menu.map((m) => {
                        const label = typeof m === "string" ? m : m.label;
                        const href = typeof m === "string" ? "#" : m.href;
                        return (
                          <Link key={label} href={href} onClick={() => setOpen(null)} className="block px-3 py-2 text-[13.5px] text-svk-ink-800 rounded-md cursor-pointer hover:bg-svk-green-50 hover:text-svk-green-700 no-underline">{label}</Link>
                        );
                      })}
                    </div>
                  )}
                  {open === l.id && l.megamenu && (
                    <div className="fixed left-0 right-0 top-[136px] bg-white border-t border-b border-svk-border shadow-svk-md z-40">
                      <div className="container-svk py-10 grid grid-cols-[1fr_1.3fr] gap-12">
                        <div className="max-w-[300px]">
                          <Eyebrow>10 lokalavdelningar</Eyebrow>
                          <h3 className="font-serif text-[26px] text-svk-ink-900 tracking-svk-tight mt-2 mb-2 leading-tight">Hitta din lokalavdelning</h3>
                          <p className="text-sm text-svk-ink-600 leading-relaxed mb-4">Lokalavdelningarna arrangerar prov, utställningar, träffar och utbildning — nära dig.</p>
                          <SwedenMap clubs={LOCAL_CLUBS} onPick={(s) => { router.push("/lokal/" + s); setOpen(null); }} hovered={hoveredClub} setHovered={setHoveredClub}/>
                        </div>
                        <div>
                          <Eyebrow tone="muted">Alla avdelningar</Eyebrow>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-3">
                            {LOCAL_CLUBS.map((c) => (
                              <Link
                                key={c.slug}
                                href={"/lokal/" + c.slug}
                                onMouseEnter={() => setHoveredClub(c.slug)}
                                onMouseLeave={() => setHoveredClub(null)}
                                onClick={() => setOpen(null)}
                                className={`group flex items-center justify-between py-2.5 border-b border-svk-border no-underline ${hoveredClub === c.slug ? "text-svk-orange-600" : "text-svk-ink-800 hover:text-svk-green-700"}`}
                              >
                                <div>
                                  <div className="font-semibold text-[14px]">{c.name}</div>
                                  <div className="text-[12px] text-svk-ink-500">{c.region}</div>
                                </div>
                                <IconArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <a className="hidden lg:inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white bg-svk-orange-500 hover:bg-svk-orange-600 rounded-md px-3 py-1.5 cursor-pointer transition-colors ml-3 whitespace-nowrap">
            <IconArrowUpRight size={12}/> Besök SVK Insight
          </a>
        </div>
      </header>
    );
  }

  function Footer() {
    return (
      <footer className="bg-svk-ink-900 text-white mt-24">
        <div className="border-b border-white/10">
          <div className="container-svk py-12 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <Eyebrow tone="white">Nyhetsbrev</Eyebrow>
              <h3 className="font-serif text-[30px] font-semibold text-white tracking-svk-tight mt-2 mb-2 leading-tight">Håll dig uppdaterad.</h3>
              <p className="text-[15px] text-white/70 max-w-md leading-relaxed">Ett mejl i månaden med prov, utställningar, avelsnyheter och samtal om fågelhundar.</p>
            </div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()} action="#">
              <input className="input bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white" placeholder="din@mejl.se"/>
              <Button variant="onbrand">Prenumerera</Button>
            </form>
          </div>
        </div>

        <div className="container-svk py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <img src="assets/logo-svk.png" className="w-12 h-12 object-contain" style={{ filter: "brightness(0) invert(1)" }} alt=""/>
              <div>
                <div className="font-serif text-[18px] font-semibold">Svenska Vorstehklubben</div>
                <div className="text-[12px] text-white/60">Specialklubb under Svenska Kennelklubben</div>
              </div>
            </Link>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-md mt-5">Grundad 1918. En klubb för sju kontinentala stående fågelhundar — och för alla som delar passionen för dem.</p>
            <div className="flex gap-2 mt-5">
              <a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center cursor-pointer"><IconFacebook size={15}/></a>
              <a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center cursor-pointer"><IconInstagram size={15}/></a>
            </div>
          </div>
          {[
            { title: "Klubben", links: ["Om oss", "Klubbens historia", "Styrelsen", "Kommittéer", "Fullmäktige"] },
            { title: "Medlem", links: ["Bli medlem", "Mina sidor", "Avelsråd", "Uppfödarlista"] },
            { title: "Kontakt", links: ["+46 123 456 789", "info@vorsteh.se", "Stockholm, Sverige"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => <li key={l}><a className="text-[14px] text-white/85 hover:text-white cursor-pointer">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10">
          <div className="container-svk py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/50">
            <div>© 2026 Svenska Vorstehklubben. Alla rättigheter förbehållna.</div>
            <div className="flex gap-5">
              <a className="hover:text-white cursor-pointer">Integritetspolicy</a>
              <a className="hover:text-white cursor-pointer">Cookies</a>
              <a className="hover:text-white cursor-pointer">Tillgänglighet</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  Object.assign(window, { TopNav, Footer });
})();
