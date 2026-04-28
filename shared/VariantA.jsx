// Variant A — "Editorial Sidebar"
// Hero band (breadcrumb + title + lede + meta), full-width hero image,
// two-col body+rail. Rail holds: author, dates, tags, related files,
// related officials, related pages. Gallery under body as a strip.
//
// Umbraco mapping:
//   title       -> H1
//   lede        -> hero deck
//   mainImage   -> full-width band after hero
//   body        -> article blocks (prose-svk)
//   gallery     -> ImageStrip under body
//   tags        -> rail chips
//   author/date -> rail panel "Publicerat"
//   relatedFiles/Officials/Pages -> rail panels + bottom band

function BodyBlocks({ blocks }) {
  return (
    <article className="prose-svk max-w-[680px]">
      {blocks.map((b, i) => {
        if (b.type === "lead")
          return (
            <p key={i} className="text-[19px] text-svk-ink-800 leading-[1.6] font-[500] mb-6">
              {b.text}
            </p>
          );
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
        if (b.type === "quote")
          return (
            <blockquote key={i}>
              {b.text}
              {b.cite && <><br /><span className="text-[14px] font-sans not-italic text-svk-ink-500 mt-2 inline-block">— {b.cite}</span></>}
            </blockquote>
          );
        if (b.type === "list")
          return (
            <ul key={i}>
              {b.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          );
        return null;
      })}
    </article>
  );
}

function RailPanel({ eyebrow, title, children, variant = "default" }) {
  const base =
    variant === "surface"
      ? "bg-svk-surface-2 border border-svk-border"
      : variant === "dark"
      ? "bg-svk-ink-900 border border-svk-ink-900 text-white"
      : "bg-white border border-svk-border";
  return (
    <div className={`${base} rounded-[10px] p-5`}>
      {eyebrow && (
        <Eyebrow tone={variant === "dark" ? "white" : "muted"} className="mb-1">{eyebrow}</Eyebrow>
      )}
      {title && (
        <div className={`font-serif text-[17px] font-semibold tracking-svk-tight mb-3 ${variant === "dark" ? "text-white" : "text-svk-ink-900"}`}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

function FileRow({ f }) {
  return (
    <a className="flex items-center gap-3 py-2.5 border-b border-svk-border last:border-0 hover:text-svk-green-700 cursor-pointer">
      <div className="w-8 h-8 rounded-md bg-svk-surface-2 border border-svk-border text-svk-ink-500 inline-flex items-center justify-center shrink-0 font-mono text-[10px] font-semibold uppercase">
        {f.kind || "pdf"}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-semibold text-svk-ink-900 leading-tight">{f.title}</div>
        <div className="text-[11px] text-svk-ink-500 mt-0.5">{f.meta}</div>
      </div>
      <IconDownload size={14} className="text-svk-ink-500 shrink-0" />
    </a>
  );
}

function RelatedPageRow({ p }) {
  return (
    <a className="group flex items-start justify-between gap-3 py-3 border-b border-svk-border last:border-0 cursor-pointer">
      <div className="min-w-0">
        <div className="text-[10.5px] uppercase tracking-[0.14em] font-semibold text-svk-green-600">
          {p.kicker}
        </div>
        <div className="font-serif text-[16px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.25] mt-1 group-hover:text-svk-green-700">
          {p.title}
        </div>
        <div className="text-[12px] text-svk-ink-500 leading-snug mt-1">{p.desc}</div>
      </div>
      {p.external ? (
        <IconArrowUpRight size={14} className="text-svk-ink-400 group-hover:text-svk-green-700 mt-1 shrink-0" />
      ) : (
        <IconChevronRight size={14} className="text-svk-ink-400 group-hover:text-svk-green-700 mt-1 shrink-0" />
      )}
    </a>
  );
}

function GalleryStrip({ images }) {
  const [active, setActive] = React.useState(null);
  return (
    <section className="bg-svk-surface-2 border-y border-svk-border py-14">
      <div className="container-svk">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <Eyebrow>Bildgalleri</Eyebrow>
            <h2 className="font-serif text-[28px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">
              Från helgen i Örebro
            </h2>
          </div>
          <span className="text-[12px] text-svk-ink-500">{images.length} bilder · klicka för att förstora</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative aspect-square rounded-md overflow-hidden group"
            >
              <Photo photoKey={im.photoKey} kind={im.kind} alt={im.caption} />
              <div className="absolute inset-0 bg-svk-ink-900/0 group-hover:bg-svk-ink-900/25 transition-colors" />
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/90 text-svk-ink-900 inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <IconZoomIn size={13} />
              </div>
            </button>
          ))}
        </div>
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
    </section>
  );
}

function GenericPageVariantA({ data }) {
  const d = data;
  return (
    <main data-screen-label="A Editorial Sidebar">
      {/* Hero band */}
      <div className="bg-svk-surface border-b border-svk-border">
        <div className="container-svk py-10 md:py-14">
          <Breadcrumb items={d.breadcrumb} />
          <div className="flex gap-1.5 mt-5 mb-5 flex-wrap">
            <Chip tone="green">{d.tags[0]}</Chip>
            {d.tags.slice(1).map((t) => (
              <Chip key={t} tone="outline">{t}</Chip>
            ))}
          </div>
          <h1 className="font-serif text-[44px] md:text-[56px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.05] max-w-4xl mb-5">
            {d.title}
          </h1>
          <p className="text-[19px] text-svk-ink-600 leading-[1.5] max-w-3xl mb-6">{d.lede}</p>
          <div className="flex flex-wrap gap-6 text-[13px] text-svk-ink-500 items-center">
            <span className="inline-flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[12px] font-semibold inline-flex items-center justify-center">
                {d.author.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
              </div>
              <span className="text-svk-ink-800 font-[500]">Av {d.author.name}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconCalendar size={13} /> Publicerad {d.publishDate}
            </span>
            <span className="inline-flex items-center gap-1.5 text-svk-ink-400">·</span>
            <span>Uppdaterad {d.updatedDate}</span>
          </div>
        </div>
      </div>

      {/* Main image */}
      <div className="bg-svk-bg">
        <div className="container-svk pt-10">
          <figure className="mb-0">
            <div className="aspect-[16/8] rounded-[10px] overflow-hidden">
              <Photo photoKey={d.mainImage.photoKey} alt={d.mainImage.caption} position="50% 35%" />
            </div>
            <figcaption className="text-[12.5px] text-svk-ink-500 mt-3 italic flex items-center gap-3">
              <span className="flex-1">{d.mainImage.caption}</span>
              <span className="text-svk-ink-400">{d.mainImage.credit}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Body + rail */}
      <div className="container-svk py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 items-start">
        <BodyBlocks blocks={d.body} />

        <aside className="space-y-5 lg:sticky lg:top-32">
          <RailPanel eyebrow="Publicerat" title={d.publishDate}>
            <div className="flex items-center gap-3 pb-3 border-b border-svk-border">
              <div className="w-10 h-10 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[15px] font-semibold inline-flex items-center justify-center">
                {d.author.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[13.5px] text-svk-ink-900">{d.author.name}</div>
                <div className="text-[11.5px] text-svk-ink-500">{d.author.role}</div>
              </div>
            </div>
            <div className="pt-3 flex gap-2">
              <button className="btn-ghost btn-sm flex-1 justify-center"><IconShare size={12} /> Dela</button>
              <button className="btn-ghost btn-sm flex-1 justify-center"><IconPrint size={12} /> Skriv ut</button>
            </div>
          </RailPanel>

          <RailPanel eyebrow="Ämnen">
            <div className="flex gap-1.5 flex-wrap">
              {d.tags.map((t) => <Chip key={t} tone="outline">{t}</Chip>)}
            </div>
          </RailPanel>

          <RailPanel eyebrow="Dokument" title={`${d.relatedFiles.length} filer`}>
            {d.relatedFiles.slice(0, 4).map((f) => <FileRow key={f.title} f={f} />)}
            {d.relatedFiles.length > 4 && (
              <a className="link-arrow text-[13px] font-semibold text-svk-green-700 mt-3 inline-flex">
                Se alla {d.relatedFiles.length} dokument <IconArrowRight size={11} />
              </a>
            )}
          </RailPanel>

          <RailPanel eyebrow="Kontakt" title="Ansvariga personer">
            <div className="-my-1">
              {d.relatedOfficials.map((p) => <ContactCard key={p.name} person={p} variant="compact" />)}
            </div>
          </RailPanel>
        </aside>
      </div>

      {/* Gallery strip */}
      <GalleryStrip images={d.gallery} />

      {/* Related pages band */}
      <section className="bg-svk-ink-900 text-white py-16">
        <div className="container-svk">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <Eyebrow tone="white">Relaterat innehåll</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold tracking-svk-tight mt-2">Läs vidare</h2>
            </div>
            <a className="link-arrow text-sm font-semibold text-white/85 hover:text-white cursor-pointer">
              Alla sidor om avel <IconArrowRight size={12} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.relatedPages.map((p) => (
              <a key={p.title}
                 className="block p-5 border border-white/15 rounded-[10px] hover:border-white/40 cursor-pointer group h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/55 font-semibold">
                    {p.kicker}
                  </div>
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

window.GenericPageVariantA = GenericPageVariantA;
window.BodyBlocks = BodyBlocks;
window.RailPanel = RailPanel;
window.FileRow = FileRow;
window.RelatedPageRow = RelatedPageRow;
window.GalleryStrip = GalleryStrip;
