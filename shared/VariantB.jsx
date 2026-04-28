// Variant B — "Magazine Index"
// Left column: TOC + metadata card (sticky). Center: wide editorial body with
// hero image framed by the column. Right: nothing — gallery, files, related
// officials, and related pages get their own full-width bands under the body.
//
// The difference from Variant A is IA: everything that was in the rail is
// promoted to dedicated page sections, so the reader focuses on the body
// without a crowded sidebar. TOC auto-highlights as you scroll.

function TOC({ sections, activeId, onPick }) {
  return (
    <nav className="text-[13px]">
      <div className="eyebrow text-svk-ink-500 mb-3">Innehåll</div>
      <ol className="space-y-0">
        {sections.map((s, i) => {
          const active = s.id === activeId;
          return (
            <li key={s.id}>
              <a
                onClick={() => onPick(s.id)}
                className={`flex items-baseline gap-3 py-2 pl-3 cursor-pointer border-l-2 transition-colors ${
                  active
                    ? "border-svk-green-600 text-svk-green-700 font-semibold"
                    : "border-svk-border text-svk-ink-700 hover:text-svk-ink-900 hover:border-svk-border-s"
                }`}
              >
                <span className="font-mono text-[10.5px] tabular-nums text-svk-ink-400 w-4">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">{s.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function MetaCard({ d }) {
  return (
    <div className="bg-white border border-svk-border rounded-[10px] p-5">
      <div className="eyebrow text-svk-ink-500 mb-3">Om sidan</div>
      <div className="space-y-3 text-[13px]">
        <div>
          <div className="text-[11px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">Författare</div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[13px] font-semibold inline-flex items-center justify-center">
              {d.author.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-[13px] text-svk-ink-900 truncate">{d.author.name}</div>
              <div className="text-[11.5px] text-svk-ink-500 truncate">{d.author.role}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-svk-border">
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">Publicerad</div>
            <div className="text-svk-ink-900 font-[500] text-[13px]">{d.publishDate}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">Uppdaterad</div>
            <div className="text-svk-ink-900 font-[500] text-[13px]">{d.updatedDate}</div>
          </div>
        </div>
        <div className="pt-3 border-t border-svk-border">
          <div className="text-[11px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-2">Ämnen</div>
          <div className="flex gap-1.5 flex-wrap">
            {d.tags.map((t) => <Chip key={t} tone="outline">{t}</Chip>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function BodyBlocksWithAnchors({ blocks, onActiveChange }) {
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const handler = () => {
      const els = containerRef.current?.querySelectorAll("h2[id]") || [];
      let cur = null;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < 180) cur = el.id;
      });
      if (cur) onActiveChange(cur);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [onActiveChange]);

  let hIdx = 0;
  return (
    <article ref={containerRef} className="prose-svk max-w-none">
      {blocks.map((b, i) => {
        if (b.type === "lead")
          return (
            <p key={i} className="text-[20px] text-svk-ink-800 leading-[1.55] font-[500] mb-8 max-w-[640px]">
              {b.text}
            </p>
          );
        if (b.type === "p") return <p key={i} className="max-w-[640px]">{b.text}</p>;
        if (b.type === "h2") {
          const id = "sec-" + hIdx++;
          return <h2 key={i} id={id} className="scroll-mt-32">{b.text}</h2>;
        }
        if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
        if (b.type === "quote")
          return (
            <blockquote key={i} className="font-serif text-[26px] leading-[1.35] text-svk-ink-900 my-10 pl-0 border-l-0 not-italic">
              <span className="font-serif text-svk-green-500 text-[40px] leading-none mr-1 align-top">“</span>
              {b.text}
              {b.cite && <div className="text-[13px] font-sans text-svk-ink-500 mt-3 not-italic">— {b.cite}</div>}
            </blockquote>
          );
        if (b.type === "list")
          return (
            <ul key={i} className="max-w-[640px]">
              {b.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          );
        return null;
      })}
    </article>
  );
}

function FileCard({ f }) {
  return (
    <a className="group bg-white border border-svk-border rounded-[10px] p-5 flex items-start gap-4 hover:border-svk-border-s hover:shadow-svk-sm transition-all cursor-pointer">
      <div className="w-11 h-14 rounded-[4px] bg-svk-surface-2 border border-svk-border text-svk-ink-600 inline-flex items-center justify-center shrink-0 font-mono text-[11px] font-semibold uppercase relative">
        <span>{f.kind || "pdf"}</span>
        <span className="absolute -top-[1px] -right-[1px] w-3 h-3 bg-svk-bg border-l border-b border-svk-border" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14.5px] font-semibold text-svk-ink-900 leading-tight group-hover:text-svk-green-700">{f.title}</div>
        <div className="text-[12px] text-svk-ink-500 mt-1">{f.meta}</div>
      </div>
      <IconDownload size={16} className="text-svk-ink-400 group-hover:text-svk-green-700 mt-1 shrink-0" />
    </a>
  );
}

function GalleryMosaic({ images }) {
  const [active, setActive] = React.useState(null);
  return (
    <>
      <div className="grid grid-cols-6 gap-2 auto-rows-[140px]">
        {images.map((im, i) => {
          const big = i === 0 || i === 3;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-md group ${big ? "col-span-3 row-span-2" : "col-span-2"}`}
              style={{ gridColumn: big ? "span 3" : "span 2" }}
            >
              <Photo photoKey={im.photoKey} kind={im.kind} alt={im.caption} />
              <div className="absolute inset-0 bg-svk-ink-900/0 group-hover:bg-svk-ink-900/25 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-svk-ink-900/75 to-transparent text-white text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {im.caption}
              </div>
            </button>
          );
        })}
      </div>
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-svk-ink-900/85 flex items-center justify-center p-8 cursor-zoom-out"
          onClick={() => setActive(null)}
        >
          <div className="max-w-[900px] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[16/10] rounded-[10px] overflow-hidden bg-svk-ink-900">
              <Photo photoKey={images[active].photoKey} kind={images[active].kind} alt={images[active].caption} />
            </div>
            <div className="mt-3 flex items-center justify-between text-white/80 text-[13px]">
              <span>{images[active].caption}</span>
              <button onClick={() => setActive(null)} className="inline-flex items-center gap-1.5 hover:text-white">
                <IconClose size={14} /> Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function GenericPageVariantB({ data }) {
  const d = data;
  const sections = d.body
    .filter((b) => b.type === "h2")
    .map((b, i) => ({ id: "sec-" + i, label: b.text }));
  const [active, setActive] = React.useState(sections[0]?.id);

  return (
    <main data-screen-label="B Magazine Index" className="bg-svk-bg">
      {/* Hero: text only, wide */}
      <div className="container-svk pt-12 pb-8">
        <Breadcrumb items={d.breadcrumb} />
        <div className="flex gap-1.5 mt-5 mb-5 flex-wrap">
          {d.tags.map((t, i) => (
            <Chip key={t} tone={i === 0 ? "green" : "outline"}>{t}</Chip>
          ))}
        </div>
        <h1 className="font-serif text-[52px] md:text-[76px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[0.98] max-w-5xl mb-6">
          {d.title}
        </h1>
        <p className="text-[21px] text-svk-ink-600 leading-[1.45] max-w-3xl font-[400]">{d.lede}</p>
      </div>

      {/* Main image — full bleed within container */}
      <div className="container-svk">
        <figure>
          <div className="aspect-[21/9] rounded-[10px] overflow-hidden">
            <Photo photoKey={d.mainImage.photoKey} alt={d.mainImage.caption} position="50% 35%" />
          </div>
          <figcaption className="text-[12.5px] text-svk-ink-500 mt-3 italic flex items-center gap-3">
            <span className="flex-1">{d.mainImage.caption}</span>
            <span className="text-svk-ink-400">{d.mainImage.credit}</span>
          </figcaption>
        </figure>
      </div>

      {/* TOC + body */}
      <div className="container-svk py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-14 items-start">
        <aside className="lg:sticky lg:top-32 space-y-6">
          <TOC sections={sections} activeId={active} onPick={(id) => {
            const el = document.getElementById(id);
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" });
          }} />
          <MetaCard d={d} />
          <div className="flex gap-2">
            <button className="btn-ghost btn-sm flex-1 justify-center"><IconShare size={12} /> Dela</button>
            <button className="btn-ghost btn-sm flex-1 justify-center"><IconPrint size={12} /> Skriv ut</button>
          </div>
        </aside>
        <div className="max-w-[720px]">
          <BodyBlocksWithAnchors blocks={d.body} onActiveChange={setActive} />
        </div>
      </div>

      {/* Files band */}
      <section className="bg-svk-surface border-y border-svk-border py-16">
        <div className="container-svk">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <Eyebrow>Dokument & material</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">
                Ladda ner från konferensen
              </h2>
            </div>
            <span className="text-[12.5px] text-svk-ink-500">{d.relatedFiles.length} filer</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {d.relatedFiles.map((f) => <FileCard key={f.title} f={f} />)}
          </div>
        </div>
      </section>

      {/* Gallery band */}
      <section className="py-16">
        <div className="container-svk">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <Eyebrow>Bildgalleri</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">
                Från helgen i Örebro
              </h2>
            </div>
            <span className="text-[12.5px] text-svk-ink-500">{d.gallery.length} bilder</span>
          </div>
          <GalleryMosaic images={d.gallery} />
        </div>
      </section>

      {/* Officials band */}
      <section className="bg-svk-surface-2 border-y border-svk-border py-16">
        <div className="container-svk">
          <Eyebrow>Ansvariga personer</Eyebrow>
          <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-8">
            Avelskommittén
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {d.relatedOfficials.map((p) => <ContactCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="bg-svk-ink-900 text-white py-16">
        <div className="container-svk">
          <Eyebrow tone="white">Relaterat innehåll</Eyebrow>
          <h2 className="font-serif text-[32px] font-semibold tracking-svk-tight mt-2 mb-8">Läs vidare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.relatedPages.map((p) => (
              <a key={p.title}
                 className="block p-5 border border-white/15 rounded-[10px] hover:border-white/40 cursor-pointer group h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/55 font-semibold">{p.kicker}</div>
                  {p.external ? <IconArrowUpRight size={13} className="text-white/40 group-hover:text-svk-orange-200" /> : <IconArrowRight size={13} className="text-white/40 group-hover:text-white" />}
                </div>
                <div className="font-serif text-[20px] font-semibold leading-[1.15] tracking-svk-tight mb-2 group-hover:text-svk-orange-200">
                  {p.title}
                </div>
                <div className="text-[12.5px] text-white/65 leading-snug">{p.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

window.GenericPageVariantB = GenericPageVariantB;
