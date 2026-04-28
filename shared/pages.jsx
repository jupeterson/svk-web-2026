// All pages as components
(function () {
  const { useMemo, useState } = React;

  // ============= HOME =============
  function HomePage() {
    const sites = [
      { title: "Riksprovet 2026", sub: "28 augusti · Kiruna", desc: "Årets höjdpunkt för fågelhundar i fjällen.", photoKey: "fjalljakt", href: "/riksprovet" },
      { title: "Riksutställningen", sub: "27 maj · Borås", desc: "Alla sju raser samlade under ett tält.", photoKey: "pointer-fjall", href: "/riksutstallning" },
      { title: "Fullmäktige 2026", sub: "12 april · Stockholm", desc: "Klubbens årliga beslutande möte.", photoKey: null, photo: "forest", href: "/generic" },
    ];
    return (
      <main>
        <section className="relative">
          <div className="relative h-[620px] overflow-hidden">
            <Photo photoKey="fjalljakt" position="55% 40%" className="absolute inset-0"/>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"/>
            <div className="container-svk relative h-full flex items-center">
              <div className="bg-white border border-svk-border rounded-[4px] p-10 max-w-[520px] shadow-svk-lg">
                <Eyebrow>Specialklubb under SKK · sedan 1918</Eyebrow>
                <h1 className="font-serif text-[54px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.02] mt-3 mb-4">Svenska<br/>Vorstehklubben</h1>
                <p className="text-[17px] text-svk-ink-600 leading-[1.55] mb-7">Välkommen. Här hittar du aktiviteter, jaktprov, utställningar och en gemenskap som delar passionen för våra kontinentala stående fågelhundar.</p>
                <div className="flex gap-2.5">
                  <Button variant="primary" size="md" href="/aktiviteter">Se aktiviteter <IconArrowRight size={14}/></Button>
                  <Button variant="secondary" size="md">Bli medlem</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-svk-border">
            <div className="container-svk grid grid-cols-2 md:grid-cols-4 divide-x divide-svk-border">
              {[["1918","Grundad"],["7","Raser"],["10","Lokalavdelningar"],["2 400+","Medlemmar"]].map(([n,l]) => (
                <div key={l} className="py-7 px-6 first:pl-0">
                  <div className="font-serif text-[30px] font-semibold text-svk-ink-900 tracking-svk-tight leading-none">{n}</div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-svk-ink-500 font-semibold mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-svk-bg py-20 md:py-24">
          <div className="container-svk">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div><Eyebrow>Aktuellt</Eyebrow><h2 className="font-serif text-[40px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 leading-tight">Senaste nyheterna</h2></div>
              <Link href="/nyheter" className="link-arrow text-sm font-semibold text-svk-green-700 no-underline">Alla nyheter <IconArrowRight size={12}/></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{NEWS.slice(0,3).map((n) => <NewsCard key={n.id} n={n} href={`/nyheter/${n.id}`}/>)}</div>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-24">
          <div className="max-w-screen-xl mx-auto relative overflow-hidden rounded-[14px] bg-gradient-to-br from-svk-green-700 via-svk-green-800 to-svk-ink-900 text-white p-10 md:p-14">
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}/>
            <div className="relative grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <Eyebrow tone="white" className="text-svk-orange-200">SVK Insight · extern tjänst</Eyebrow>
                <h2 className="font-serif text-[34px] md:text-[42px] font-semibold tracking-svk-tight mt-3 mb-4 leading-[1.08] max-w-xl">Sveriges mest omfattande databas för kontinentala fågelhundar.</h2>
                <p className="text-[16px] text-white/80 leading-[1.55] max-w-lg mb-6">Provresultat, avelsdata och hälsa i ett verktyg för uppfödare, hundägare och alla som arbetar med avel.</p>
                <div className="flex gap-2.5 flex-wrap">
                  <Button variant="accent"><IconExternal size={14}/> Besök SVK Insight</Button>
                  <Button variant="onbrand">Läs mer om Insight</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[10px] p-6 font-mono text-[12px]">
                  <div className="text-white/50 mb-2">&gt; sök hund</div>
                  <div className="text-svk-orange-200 mb-3">Bella av Fjällvägen</div>
                  <div className="space-y-1.5 text-white/70">
                    {[["Reg. nr.","SE12345/2019","white"],["Ras","Korthårig vorsteh","white"],["Prov","14 resultat","green"],["HD-status","A","green"],["Avkommor","3 kullar","white"]].map(([k,v,c]) => (
                      <div key={k} className="flex justify-between"><span>{k}</span><span className={c === "green" ? "text-svk-green-300" : "text-white"}>{v}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-svk-surface-2 py-20 md:py-24">
          <div className="container-svk">
            <div className="text-center max-w-xl mx-auto mb-10">
              <Eyebrow>Sju raser, en klubb</Eyebrow>
              <h2 className="font-serif text-[40px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-3 leading-tight">Våra raser</h2>
              <p className="text-[16px] text-svk-ink-600 leading-[1.55]">Svenska Vorstehklubben arbetar med sju unika raser, var och en med sina speciella egenskaper och historia.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {BREEDS.map((b) => (
                <article key={b.slug} className="card card-hover hover:shadow-svk-md flex flex-col h-full cursor-pointer group">
                  <div className="aspect-[4/3] relative shrink-0">
                    <Photo photoKey={b.photoKey} kind={b.photo} alt={b.name}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-serif text-[17px] font-semibold text-svk-ink-900 tracking-svk-tight mb-1 leading-tight">{b.name}</h3>
                    <p className="text-[12px] text-svk-ink-600 leading-snug mb-2 line-clamp-2">{b.tagline}</p>
                    <span className="link-arrow text-[12px] font-semibold text-svk-green-700 mt-auto">Läs om rasen <IconArrowRight size={11}/></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-svk-bg py-20 md:py-24">
          <div className="container-svk">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div><Eyebrow>Kommande</Eyebrow><h2 className="font-serif text-[40px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 leading-tight">Aktiviteter</h2></div>
              <Link href="/aktiviteter" className="link-arrow text-sm font-semibold text-svk-green-700 no-underline">Alla aktiviteter <IconArrowRight size={12}/></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{ACTIVITIES.slice(0,3).map((e) => <ActivityCardLarge key={e.id} e={e}/>)}</div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24 border-y border-svk-border">
          <div className="container-svk">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end mb-10 gap-4">
              <div><Eyebrow tone="orange">Minisites</Eyebrow><h2 className="font-serif text-[40px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 leading-tight max-w-xl">Tre större evenemang, tre dedikerade sajter.</h2></div>
              <p className="text-[15px] text-svk-ink-600 leading-[1.55] max-w-sm">Varje år lyfter vi fram våra största evenemang med egen information, anmälan och uppdateringar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sites.map((s) => (
                <Link key={s.title} href={s.href} className="relative rounded-[14px] overflow-hidden aspect-[4/5] group block no-underline">
                  <Photo photoKey={s.photoKey} kind={s.photo} className="absolute inset-0"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-svk-ink-900 via-svk-ink-900/40 to-transparent"/>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <Eyebrow tone="white" className="mb-2">{s.sub}</Eyebrow>
                    <h3 className="font-serif text-[28px] font-semibold tracking-svk-tight leading-tight mb-1">{s.title}</h3>
                    <p className="text-[14px] text-white/75 leading-snug mb-4">{s.desc}</p>
                    <div className="inline-flex items-center gap-2 text-[13px] font-semibold self-start bg-white/10 backdrop-blur border border-white/20 rounded-full px-3.5 py-1.5 group-hover:bg-white group-hover:text-svk-ink-900 transition-colors">Till minisiten <IconArrowUpRight size={13}/></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-svk-surface-2 relative overflow-hidden border-t border-svk-border">
          <div className="container-svk relative py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="max-w-xl">
              <Eyebrow>Bli medlem</Eyebrow>
              <h2 className="font-serif text-[44px] font-semibold text-svk-ink-900 tracking-svk-tight mt-3 mb-4 leading-[1.05]">Var med och skriv nästa kapitel.</h2>
              <p className="text-[16px] text-svk-ink-600 leading-[1.6] max-w-lg">Klubbens historia lever vidare genom sina medlemmar. Bli en del av gemenskapen och hjälp oss bevara traditionen för framtida generationer.</p>
            </div>
            <div className="flex gap-2.5"><Button variant="primary" size="lg">Bli medlem</Button><Button variant="secondary" size="lg">Kontakta oss</Button></div>
          </div>
        </section>
      </main>
    );
  }

  // ============= AKTIVITETER =============
  function ActivitiesPage() {
    const [state, setState] = useState({ q: "", type: "", club: "", from: "", to: "" });
    const [view, setView] = useState("grid");
    const filtered = useMemo(() => ACTIVITIES.filter((e) => {
      if (state.q && !e.title.toLowerCase().includes(state.q.toLowerCase())) return false;
      if (state.type && e.type !== state.type) return false;
      if (state.club && e.local !== state.club) return false;
      if (state.from && e.dateShort < state.from) return false;
      if (state.to && e.dateShort > state.to) return false;
      return true;
    }), [state]);

    return (
      <main>
        <PageHeader eyebrow="Kalender" title="Aktiviteter" sub="Kommande aktiviteter, prov och utställningar hos Svenska Vorstehklubben och våra lokalavdelningar."/>
        <section className="bg-svk-bg py-10">
          <div className="container-svk">
            <div className="mb-6">
              <div className="bg-white border border-svk-border rounded-[10px] p-3 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_auto_auto_auto] gap-2 items-center shadow-svk-xs">
                <div className="relative">
                  <IconSearch size={14} className="absolute top-3 left-3 text-svk-ink-500"/>
                  <input className="input pl-9" placeholder="Sök aktiviteter…" value={state.q} onChange={(e) => setState((s) => ({...s, q: e.target.value}))}/>
                </div>
                <select className="input" value={state.type} onChange={(e) => setState((s) => ({...s, type: e.target.value}))}>
                  <option value="">Alla typer</option>
                  {ACTIVITY_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
                <select className="input" value={state.club} onChange={(e) => setState((s) => ({...s, club: e.target.value}))}>
                  <option value="">Alla lokalavdelningar</option>
                  {LOCAL_CLUBS.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
                </select>
                <input type="date" className="input" value={state.from} onChange={(e) => setState((s) => ({...s, from: e.target.value}))}/>
                <input type="date" className="input" value={state.to} onChange={(e) => setState((s) => ({...s, to: e.target.value}))}/>
                <button className="btn-secondary" onClick={() => setState({q:"",type:"",club:"",from:"",to:""})}>Rensa</button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="text-[13px] text-svk-ink-500">Visar <span className="text-svk-ink-900 font-semibold">{filtered.length}</span> av {ACTIVITIES.length} aktiviteter</div>
              <div className="flex items-center gap-1 bg-white border border-svk-border rounded-md p-0.5">
                {[["grid","Rutnät"],["list","Lista"]].map(([v,l]) => (
                  <button key={v} onClick={() => setView(v)} className={`px-3 py-1.5 text-[12.5px] font-semibold rounded inline-flex items-center gap-1.5 transition-colors ${view === v ? "bg-svk-ink-900 text-white" : "text-svk-ink-600 hover:text-svk-ink-900"}`}>{l}</button>
                ))}
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="bg-white border border-svk-border rounded-[10px] p-12 text-center">
                <div className="font-serif text-[22px] text-svk-ink-900 mb-1">Inga aktiviteter hittades</div>
                <div className="text-[14px] text-svk-ink-500">Prova att rensa filtren eller söka på något annat.</div>
              </div>
            )}

            {view === "grid" ? (
              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">{filtered.map((e) => <ActivityCardLarge key={e.id} e={e}/>)}</div>
            ) : (
              <div className="space-y-3">
                {filtered.map((e) => (
                  <Link key={e.id} href={activityHref(e)} className="card card-hover hover:shadow-svk-md grid grid-cols-[180px_1fr_auto] gap-5 items-center p-4 no-underline">
                    <div className="aspect-[4/3] rounded-md overflow-hidden"><Photo photoKey={e.photoKey} kind={e.photo} alt={e.title}/></div>
                    <div>
                      <div className="flex gap-1.5 mb-2">
                        <Chip tone={e.type === "Riksprovet" || e.type === "Riksutställning" ? "accent" : "green"}>{e.type}</Chip>
                        <Chip tone="outline" size="sm">{e.local}</Chip>
                      </div>
                      <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight mb-1.5">{e.title}</h3>
                      <p className="text-[13.5px] text-svk-ink-600 leading-snug mb-2 max-w-2xl line-clamp-1">{e.lede}</p>
                      <div className="flex gap-4 text-[12.5px] text-svk-ink-500">
                        <span className="inline-flex items-center gap-1.5"><IconCalendar size={12}/> {e.date}</span>
                        <span className="inline-flex items-center gap-1.5"><IconPin size={12}/> {e.loc}</span>
                      </div>
                    </div>
                    <div className="pr-4"><Button variant="secondary" size="sm">Anmäl <IconArrowRight size={12}/></Button></div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }

  // ============= LOCAL CLUB =============
  const BOARD = [
    { name: "Karin Forsberg", role: "Ordförande", email: "karin@vastsvenska.vorsteh.se", phone: "+46 70 234 56 78" },
    { name: "Mats Ekblad", role: "Sekreterare", email: "mats@vastsvenska.vorsteh.se", phone: "+46 70 345 67 89" },
    { name: "Lena Holm", role: "Provledare", email: "lena@vastsvenska.vorsteh.se", phone: "+46 70 456 78 90" },
    { name: "Johan Sund", role: "Utställnings­ansvarig", email: "johan@vastsvenska.vorsteh.se", phone: "+46 70 567 89 01" },
  ];
  function LocalClubPage({ slug }) {
    const club = LOCAL_CLUBS.find((c) => c.slug === slug) || LOCAL_CLUBS[1];
    const clubActivities = ACTIVITIES.filter((a) => a.local === club.name).slice(0, 3);
    const clubNews = NEWS.filter((n) => n.local === club.name);
    const tabs = ["Startsida", "Aktiviteter", "Nyheter", "Våra champions", "Vandringspriser", "Styrelsen", "Dokument", "Kontakt"];

    return (
      <main>
        <div className="bg-svk-ink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-70"><Photo photoKey="pointer-fjall" className="absolute inset-0"/></div>
          <div className="absolute inset-0 bg-gradient-to-r from-svk-ink-900/85 via-svk-ink-900/55 to-svk-ink-900/10"/>
          <div className="container-svk py-16 md:py-20 relative">
            <div className="text-[12px] uppercase tracking-[0.16em] text-svk-orange-200 font-semibold mb-3">Lokalavdelning · {club.region}</div>
            <h1 className="font-serif text-[56px] md:text-[76px] font-semibold tracking-svk-tight leading-[1.02] mb-4">{club.name}</h1>
            <p className="text-[18px] text-white/75 leading-[1.55] max-w-xl mb-6">En av tio lokalavdelningar inom Svenska Vorstehklubben. Vi arrangerar jaktprov, utställningar, träffar och utbildning i {club.region}.</p>
            <div className="flex gap-2.5 flex-wrap"><Button variant="accent">Bli medlem här</Button><Button variant="onbrand">Se kommande aktiviteter</Button></div>
          </div>
        </div>

        <div className="bg-svk-surface border-b border-svk-border sticky top-[136px] z-20">
          <div className="container-svk flex gap-1 overflow-x-auto">
            {tabs.map((t, i) => (
              <a key={t} className={`px-4 py-3.5 text-[13px] font-semibold whitespace-nowrap cursor-pointer relative ${i === 0 ? "text-svk-green-700" : "text-svk-ink-700 hover:text-svk-green-700"}`}>
                {t}{i === 0 && <span className="absolute left-4 right-4 bottom-0 h-[2px] bg-svk-green-600"/>}
              </a>
            ))}
          </div>
        </div>

        <section className="bg-svk-bg py-14">
          <div className="container-svk grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12">
            <div>
              <Eyebrow>Välkommen</Eyebrow>
              <h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-3 mb-4 leading-tight">Nära dig, året runt.</h2>
              <p className="text-[17px] text-svk-ink-600 leading-[1.6] mb-4">{club.name} är lokalavdelningen för medlemmar i {club.region}. Hos oss hittar du allt från vårprov till utställningar, och gemenskap med andra vorsteh­ägare i regionen.</p>
              <p className="text-[17px] text-svk-ink-600 leading-[1.6]">Välkommen att höra av dig till styrelsen — eller ännu hellre, kom och säg hej på nästa träff.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 content-start">
              {[["1924","Avdelning bildad"],["312","Medlemmar"],["18","Aktiviteter/år"],["7","Styrelse"]].map(([n,l]) => (
                <div key={l} className="bg-white border border-svk-border rounded-[10px] p-5">
                  <div className="font-serif text-[30px] font-semibold text-svk-ink-900 tracking-svk-tight leading-none">{n}</div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-svk-ink-500 font-semibold mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-svk-surface-2 py-14">
          <div className="container-svk">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div><Eyebrow>Kommande</Eyebrow><h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Aktiviteter i {club.region.split(",")[0]}</h2></div>
              <Link href="/aktiviteter" className="link-arrow text-sm font-semibold text-svk-green-700 no-underline">Alla aktiviteter <IconArrowRight size={12}/></Link>
            </div>
            {clubActivities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {clubActivities.map((e) => (
                  <Link key={e.id} href={activityHref(e)} className="card card-hover hover:shadow-svk-md flex flex-col h-full no-underline">
                    <div className="aspect-[16/10] shrink-0"><Photo photoKey={e.photoKey} kind={e.photo} alt={e.title}/></div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex gap-1.5 mb-2"><Chip tone="green">{e.type}</Chip></div>
                      <h3 className="font-serif text-[19px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight mb-2 line-clamp-2">{e.title}</h3>
                      <div className="text-[12.5px] text-svk-ink-500 flex items-center gap-1.5 mb-1"><IconCalendar size={12}/> {e.date}</div>
                      <div className="text-[12.5px] text-svk-ink-500 flex items-center gap-1.5 mb-3"><IconPin size={12}/> {e.loc}</div>
                      <span className="link-arrow text-[12.5px] font-semibold text-svk-green-700 mt-auto">Läs mer <IconArrowRight size={11}/></span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-svk-border rounded-[10px] p-10 text-center text-svk-ink-500">Inga kommande aktiviteter just nu.</div>
            )}
          </div>
        </section>

        <section className="bg-svk-bg py-14">
          <div className="container-svk grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
            <div>
              <div className="flex items-end justify-between mb-6">
                <div><Eyebrow>Aktuellt</Eyebrow><h2 className="font-serif text-[28px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Nyheter från avdelningen</h2></div>
                <a className="link-arrow text-[13px] font-semibold text-svk-green-700 cursor-pointer">Alla <IconArrowRight size={11}/></a>
              </div>
              <div className="space-y-3">
                {(clubNews.length ? clubNews : NEWS.slice(0,3)).slice(0,3).map((n) => (
                  <Link key={n.id} href="/generic" className="card card-hover hover:shadow-svk-md grid grid-cols-[140px_1fr] gap-4 p-3 items-center no-underline">
                    <div className="aspect-[4/3] rounded overflow-hidden"><Photo photoKey={n.photoKey} kind={n.photo} alt={n.title}/></div>
                    <div>
                      <Chip tone="green" size="sm">{n.chip}</Chip>
                      <h3 className="font-serif text-[18px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-1 leading-tight">{n.title}</h3>
                      <div className="text-[12px] text-svk-ink-500">{n.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-end justify-between mb-6">
                <div><Eyebrow>Arkiv</Eyebrow><h2 className="font-serif text-[28px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Dokument</h2></div>
                <a className="link-arrow text-[13px] font-semibold text-svk-green-700 cursor-pointer">Alla <IconArrowRight size={11}/></a>
              </div>
              <div className="bg-white border border-svk-border rounded-[10px] divide-y divide-svk-border">
                {DOCUMENTS.slice(0,5).map((d) => (
                  <a key={d.title} className="flex items-center gap-3 px-4 py-3.5 hover:bg-svk-green-50 cursor-pointer group">
                    <div className="w-9 h-9 rounded bg-svk-surface-2 inline-flex items-center justify-center text-svk-ink-700 border border-svk-border"><IconFile size={15}/></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-semibold text-svk-ink-900 truncate group-hover:text-svk-green-700">{d.title}</div>
                      <div className="text-[11.5px] text-svk-ink-500 truncate">{d.meta}</div>
                    </div>
                    <IconDownload size={14} className="text-svk-ink-500"/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-svk-surface-2 py-14">
          <div className="container-svk">
            <Eyebrow>Kontaktpersoner</Eyebrow>
            <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-8">Styrelsen i {club.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {BOARD.map((p) => (
                <div key={p.name} className="bg-white border border-svk-border rounded-[10px] p-5">
                  <div className="w-11 h-11 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[17px] font-semibold inline-flex items-center justify-center mb-3">{p.name.split(" ").map((s) => s[0]).join("").slice(0,2)}</div>
                  <div className="font-semibold text-[14.5px] text-svk-ink-900">{p.name}</div>
                  <div className="text-[12px] text-svk-ink-500 mb-3">{p.role}</div>
                  <div className="space-y-1 text-[12.5px] text-svk-ink-700">
                    <div className="flex items-center gap-2 truncate"><IconMail size={12} className="text-svk-ink-500 shrink-0"/> <span className="truncate">{p.email}</span></div>
                    <div className="flex items-center gap-2"><IconPhone size={12} className="text-svk-ink-500"/> {p.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ============= RIKSPROVET =============
  function RiksprovetPage() {
    const d = RIKSPROVET;
    return (
      <main>
        <div className="bg-svk-ink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-70"><Photo photoKey="fjalljakt" className="absolute inset-0"/></div>
          <div className="absolute inset-0 bg-gradient-to-r from-svk-ink-900/85 via-svk-ink-900/55 to-svk-ink-900/10"/>
          <div className="container-svk py-16 md:py-20 relative">
            <Link href="/aktiviteter" className="text-[13px] text-white/75 hover:text-white inline-flex items-center gap-1.5 mb-5 no-underline"><IconArrowLeft size={13}/> Tillbaka till aktiviteter</Link>
            <div className="flex gap-1.5 mb-4"><Chip tone="accent">Riksprovet {d.year}</Chip><Chip tone="ghost">{d.edition}</Chip></div>
            <h1 className="font-serif text-[56px] md:text-[88px] font-semibold tracking-svk-tight leading-[0.98] mb-5 max-w-4xl">Fågelhundens år<br/>i fjällen.</h1>
            <p className="text-[19px] text-white/85 max-w-2xl leading-[1.5] mb-8">Fyra dagar på Nuolajärvis vidder — {d.starters} startande, {d.judges} domare, sju raser. Svenska Vorstehklubbens flaggskepps­prov på dalripa och fjällripa, arrangerat av {d.host}.</p>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-end">
              <div><Eyebrow tone="white" className="mb-3">Starten om</Eyebrow><Countdown iso={d.countdownTo}/></div>
              <div className="flex gap-3 flex-wrap">
                <Button variant="accent" size="lg">Anmäl dig — {d.deadline}</Button>
                <Button variant="onbrand" size="lg"><IconDownload size={14}/> Ladda ner PM</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-svk-border">
          <div className="container-svk py-7 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {[["Datum", d.dateLabel, IconCalendar],["Plats", `${d.venue}, ${d.town}`, IconPin],["Startande", `${d.starters} hundar`, IconUsers],["Domare", `${d.judges} erfarna`, IconAward],["Terräng", d.terrain, IconNav]].map(([k,v,I]) => (
              <div key={k}>
                <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-svk-ink-500 font-semibold mb-1.5"><I size={11}/> {k}</div>
                <div className="text-[14.5px] text-svk-ink-900 font-[500] leading-tight">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-svk py-3 text-[12.5px] text-svk-ink-500">
          <Link href="/" className="hover:text-svk-ink-900">Hem</Link><span className="mx-1.5">/</span>
          <Link href="/aktiviteter" className="hover:text-svk-ink-900">Aktiviteter</Link><span className="mx-1.5">/</span>
          <span className="text-svk-ink-700">Riksprovet {d.year}</span>
        </div>

        <EventQuickLinks items={d.quickLinks}/>

        <section className="container-svk py-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <Eyebrow>Om Riksprovet</Eyebrow>
            <h2 className="font-serif text-[40px] md:text-[48px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.05] mt-3 mb-6 max-w-3xl">Det största provet på året — för raserna som stannar.</h2>
            <div className="prose-svk max-w-[680px]">
              <p className="text-[19px] text-svk-ink-800 leading-[1.6] font-[500]">Sedan 1952 samlas klubbens sju raser varje augusti i de norrländska fjällen för att mäta hund­arbetet på fågel i autentiska marker.</p>
              <p>Hundarna arbetar i par eller ensamt över hedmarker, myrar och björkskog. Bedömningen sker i fyra klasser — från UKL för hundar 9–24 månader till EKL där elitens skärpa avgör SM-guldet.</p>
              <p>Riksprovet arrangeras årligen av en värd­avdelning i tur och ordning. {d.year} står {d.host} värd, med bas på {d.venue} strax utanför {d.town}.</p>
            </div>
          </div>
          <aside id="anmalan" className="scroll-mt-24 lg:sticky lg:top-32 space-y-4">
            <div className="bg-white border border-svk-border rounded-[14px] p-5 shadow-svk-sm">
              <Eyebrow>Anmälan</Eyebrow>
              <div className="flex items-baseline gap-3 mt-2 mb-0.5">
                <div className="font-serif text-[34px] font-semibold text-svk-ink-900 tracking-svk-tight leading-none">{d.price.member.toLocaleString("sv-SE")} kr</div>
                <div className="text-[13px] text-svk-ink-500 line-through">{d.price.full.toLocaleString("sv-SE")} kr</div>
              </div>
              <div className="text-[12.5px] text-svk-ink-500 mb-4">Medlemspris. Ej medlem: {d.price.full.toLocaleString("sv-SE")} kr.</div>
              <div className="space-y-2 text-[13px] text-svk-ink-700 mb-5 pb-5 border-b border-svk-border">
                <div className="flex items-center gap-2"><IconCalendar size={13} className="text-svk-ink-500"/> Sista anmälan: {d.deadline}</div>
                <div className="flex items-center gap-2"><IconUsers size={13} className="text-svk-ink-500"/> {d.classes.reduce((s,c) => s + c.spots, 0)} av {d.starters} platser kvar</div>
                <div className="flex items-center gap-2"><IconPin size={13} className="text-svk-ink-500"/> {d.venue}, {d.town}</div>
              </div>
              <div className="space-y-1.5 mb-4">
                {d.classes.map((c) => (
                  <div key={c.code} className="flex items-center justify-between text-[13px]">
                    <span className="text-svk-ink-800 font-[500]">{c.code} — {c.name}</span>
                    <span className={`font-mono tabular-nums ${c.spots === 0 ? "text-svk-ink-500" : "text-svk-green-700 font-semibold"}`}>{c.spots === 0 ? "Fullt" : `${c.spots} kvar`}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" size="md" className="w-full justify-center">Anmäl dig nu</Button>
              <Button variant="ghost" size="sm" className="w-full justify-center mt-2"><IconDownload size={13}/> Ladda ner PM (PDF)</Button>
            </div>
            <div className="bg-svk-surface-2 border border-svk-border rounded-[10px] p-4 text-[12.5px] text-svk-ink-700 leading-[1.55]">
              <div className="flex items-center gap-2 text-svk-ink-900 font-semibold mb-1.5"><IconInfo size={13}/> Jaktkort krävs</div>
              Från 16 år. Medföljande person utan hund är gratis men måste förhandsanmälas.
            </div>
          </aside>
        </section>

        <section id="klasser" className="scroll-mt-24 bg-svk-surface-2 py-16 border-t border-svk-border">
          <div className="container-svk">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div><Eyebrow>Klasser & kval­kriterier</Eyebrow><h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Fyra klasser, samma fjäll.</h2></div>
              <a className="link-arrow text-sm font-semibold text-svk-green-700 cursor-pointer">Fullständiga regler <IconArrowRight size={12}/></a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {d.classes.map((c) => (
                <div key={c.code} className="bg-white border border-svk-border rounded-[12px] p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] font-semibold text-svk-orange-600 bg-svk-orange-100 rounded-md px-2 py-1">{c.code}</span>
                    <span className={`text-[11px] font-semibold ${c.spots === 0 ? "text-svk-ink-500" : "text-svk-green-700"}`}>{c.spots === 0 ? "● Fullt" : `● ${c.spots} platser kvar`}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight mb-1">{c.name}</h3>
                  <div className="text-[12.5px] text-svk-ink-500 mb-3">{c.starters} startplatser</div>
                  <p className="text-[13.5px] text-svk-ink-700 leading-[1.55] flex-1">{c.qual}</p>
                  <a className="mt-4 text-[13px] font-semibold text-svk-green-700 link-arrow cursor-pointer">Läs mer <IconArrowRight size={11}/></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="program" className="scroll-mt-24">
          <EventProgram program={d.program} eyebrow="Program" title="Fyra dagar i fjällen." intro="Heldagsprov under fredag och lördag, inramade av domarmöten, klubbmiddag och söndagens prisutdelning. Allt vid Camp Ripan."/>
        </div>

        <section className="bg-svk-bg border-t border-b border-svk-border py-4">
          <EventJudges judges={d.judges_list} eyebrow="Domarkår" title="Fjorton erfarna ögon." intro="Sex auktoriserade domare leder bedömningen i fält — från unghundsklass till elit och fullbruk." footnote="Samtliga domare är auktoriserade av SKK. Fullständig CV-förteckning finns i PM."/>
        </section>

        <section id="provmark" className="scroll-mt-24 container-svk py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <Eyebrow>Provmark</Eyebrow>
              <h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-4">Nuolajärvi — hedarna bortom Torneträsk.</h2>
              <p className="text-[15px] text-svk-ink-700 leading-[1.65] mb-5">Provmarken ligger 18 km nordväst om Camp Ripan och omfattar cirka 42 km² öppen fjällhed på 650–1 100 m.ö.h. Fem släpp­platser (S1–S5) fördelar hundarna över terrängen — lottning sker dag 1 kl. 07:15.</p>
              <div className="space-y-2.5 text-[13.5px] text-svk-ink-700">
                <div className="flex gap-3"><span className="inline-block w-3 h-3 rounded-full bg-svk-green-700 mt-1 shrink-0"/><span><b className="text-svk-ink-900">Camp Ripan</b> — samling, lottning, måltider.</span></div>
                <div className="flex gap-3"><span className="inline-block w-3 h-3 rounded-full bg-svk-orange-500 mt-1 shrink-0"/><span><b className="text-svk-ink-900">S1–S5</b> — släpp­platser, transport med ATV/egen bil.</span></div>
                <div className="flex gap-3"><span className="inline-block w-3 h-3 rounded-full bg-[#b9ced5] mt-1 shrink-0"/><span><b className="text-svk-ink-900">Sápmejávri</b> — fiske ej tillåtet under provdagar.</span></div>
              </div>
              <Button variant="secondary" size="md" className="mt-6"><IconDownload size={13}/> Ladda ner markkarta (PDF, 2.1 MB)</Button>
            </div>
            <div className="aspect-[16/10] rounded-[12px] overflow-hidden border border-svk-border"><MarkMap tone="light"/></div>
          </div>
        </section>

        <section id="resa" className="scroll-mt-24 bg-svk-surface-2 py-16 border-t border-svk-border">
          <div className="container-svk">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow>Resa & logi</Eyebrow>
                <h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Här ses vi.</h2>
                <p className="text-[14px] text-svk-ink-600 mt-2 max-w-lg">Samling sker vid Camp Ripan i Kiruna. Transfer från flygplats och station ingår i anmälan.</p>
              </div>
              <div className="text-[13px] text-svk-ink-500">Rabattkod <span className="font-mono font-semibold text-svk-ink-900">RIKS26</span> gäller hos våra logipartners.</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 mb-10 items-stretch">
              <div className="aspect-[4/3] lg:aspect-auto min-h-[380px]">
                <MeetupMap coords={[67.866, 20.238]} label="Camp Ripan" subtitle="Kiruna · 67.866° N, 20.238° Ö" eyebrow="Samlingsplats" address="Camp Ripan, Kiruna" pinColor="#e5741f" popupLines={["Campingvägen 5, 981 35 Kiruna","Lottning dag 1 · 07:15","Måltider & kvällsprogram"]} secondaryCoords={[67.8219, 20.3369]} secondaryTooltip="Kiruna Airport · 15 min med transfer"/>
              </div>
              <div className="bg-white border border-svk-border rounded-[12px] p-6 flex flex-col">
                <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight mb-4 pb-3 border-b border-svk-border">Transport till Kiruna</h3>
                <div className="space-y-4 flex-1">
                  {d.travel.map((t) => {
                    const Ico = t.mode === "Flyg" ? IconPlane : t.mode === "Tåg" ? IconNav : IconTarget;
                    return (
                      <div key={t.mode} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-svk-surface-2 border border-svk-border inline-flex items-center justify-center shrink-0 text-svk-green-700"><Ico size={16}/></div>
                        <div>
                          <div className="font-semibold text-[14px] text-svk-ink-900">{t.mode}</div>
                          <div className="text-[13px] text-svk-ink-700 leading-[1.55]">{t.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 pt-4 border-t border-svk-border text-[12.5px] text-svk-ink-500 leading-[1.5]">Från Kiruna Airport/station ca 15 min till Camp Ripan. Samåkning organiseras via lokalavdelningen.</div>
              </div>
            </div>

            <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight mb-4">Boende</h3>
            <div className="space-y-3">
              {d.logistics.map((l) => (
                <div key={l.title} className="bg-white border border-svk-border rounded-[10px] p-5 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-1"><IconHome size={16} className="text-svk-green-700"/><h4 className="font-serif text-[20px] font-semibold text-svk-ink-900 tracking-svk-tight">{l.title}</h4></div>
                    <div className="text-[13px] text-svk-ink-700">{l.sub}</div>
                    <div className="text-[12.5px] text-svk-ink-500 mt-1">{l.meta} · {l.note}</div>
                  </div>
                  <div className="md:text-right">
                    <div className="font-serif text-[18px] font-semibold text-svk-ink-900 tracking-svk-tight">{l.price}</div>
                    <a className="text-[12.5px] text-svk-green-700 font-semibold link-arrow cursor-pointer">Boka <IconArrowRight size={10}/></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-svk py-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div><Eyebrow>Packlista</Eyebrow><h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Förbered hund och förare.</h2></div>
            <a className="link-arrow text-sm font-semibold text-svk-green-700 cursor-pointer"><IconDownload size={12}/> Hela packlistan (PDF)</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {d.packing.map((p) => (
              <div key={p.group} className="bg-white border border-svk-border rounded-[10px] p-6">
                <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight mb-4 pb-3 border-b border-svk-border">{p.group}</h3>
                <ul className="space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 items-start text-[14px] text-svk-ink-800"><IconCheck size={14} className="text-svk-green-600 mt-1 shrink-0"/><span className="leading-[1.5]">{it}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="partners" className="scroll-mt-24 bg-white border-t border-svk-border py-16">
          <div className="container-svk">
            <Eyebrow>Samarbetspartners</Eyebrow>
            <h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-8">Riksprovet görs möjligt av.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {d.partners.map((p) => (
                <div key={p.name} className="aspect-[3/2] bg-svk-surface-2 border border-svk-border rounded-[10px] relative overflow-hidden group">
                  <PartnerLogo name={p.name}/>
                  <div className="absolute top-2 left-2 text-[9.5px] uppercase tracking-[0.14em] font-semibold text-svk-ink-500">{p.kind}</div>
                  <div className="absolute bottom-2 right-2 text-[9.5px] uppercase tracking-[0.14em] font-semibold text-svk-orange-600">{p.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-svk-bg py-16 border-t border-svk-border">
          <div className="container-svk">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div><Eyebrow>Tidigare vinnare</Eyebrow><h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Vandringspriset Carlanderska.</h2></div>
              <div className="text-[13px] text-svk-ink-500">Instiftat 1952 · Arkiv finns i klubbens museum</div>
            </div>
            <div className="bg-white border border-svk-border rounded-[10px] overflow-hidden">
              <div className="grid grid-cols-[72px_1fr_1.2fr_1fr_1fr] px-5 py-3 bg-svk-surface-2 border-b border-svk-border text-[10.5px] uppercase tracking-[0.14em] font-semibold text-svk-ink-500">
                <div>År</div><div>Hund</div><div>Ras</div><div>Förare</div><div>Avdelning</div>
              </div>
              {d.winners.map((w, i) => (
                <div key={w.year} className={`grid grid-cols-[72px_1fr_1.2fr_1fr_1fr] px-5 py-3.5 border-b border-svk-border last:border-0 items-center ${i === 0 ? "bg-svk-orange-50/40" : ""}`}>
                  <div className="font-mono text-[13px] font-semibold text-svk-ink-900 tabular-nums">{w.year}</div>
                  <div className="font-serif text-[15px] text-svk-ink-900 font-[500] italic flex items-center gap-2">{i === 0 && <IconTrophy size={13} className="text-svk-orange-600"/>}{w.dog}</div>
                  <div className="text-[13.5px] text-svk-ink-700">{w.breed}</div>
                  <div className="text-[13.5px] text-svk-ink-700">{w.handler}</div>
                  <div className="text-[13.5px] text-svk-ink-500">{w.club}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-svk py-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div><Eyebrow>Media & reportage</Eyebrow><h2 className="font-serif text-[36px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2">Riksprovet i bild och ord.</h2></div>
            <a className="link-arrow text-sm font-semibold text-svk-green-700 cursor-pointer">Till mediabiblioteket <IconArrowRight size={12}/></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {d.media.map((m) => (
              <a key={m.title} className="group cursor-pointer block">
                <div className="aspect-[4/5] rounded-[10px] overflow-hidden relative mb-3">
                  <Photo photoKey={m.src}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-svk-ink-900/80 via-transparent to-transparent"/>
                  <div className="absolute top-3 left-3"><Chip tone="ghost" size="sm">{m.kind}</Chip></div>
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight mb-1 group-hover:text-svk-green-700">{m.title}</h3>
                <div className="text-[12px] text-svk-ink-500">{m.date}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-svk-green-800 text-white py-16 relative overflow-hidden">
          <div className="container-svk grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center relative">
            <div>
              <Eyebrow tone="white">Sista chansen</Eyebrow>
              <h2 className="font-serif text-[44px] md:text-[54px] font-semibold tracking-svk-tight mt-3 mb-4 leading-[1.05]">Anmälan stänger {d.deadline}.</h2>
              <p className="text-[17px] text-white/85 leading-[1.55] max-w-xl">Platserna fördelas i den ordning anmälningar inkommer — men fullbruksklassen har separat ranking. Välkommen upp i fjället.</p>
              <div className="flex gap-3 mt-6 flex-wrap"><Button variant="accent" size="lg">Anmäl dig nu</Button><Button variant="onbrand" size="lg">Kontakta provledningen</Button></div>
            </div>
            <div className="bg-white/5 border border-white/15 rounded-[12px] p-6">
              <Eyebrow tone="white" className="mb-3">Provledning</Eyebrow>
              <div className="text-[15px] font-semibold mb-0.5">Erik Nordin</div>
              <div className="text-[12.5px] text-white/65 mb-4">Överdomare & provledare · SVK Malmfälten</div>
              <div className="space-y-2 text-[13.5px] text-white/85">
                <div className="flex items-center gap-2"><IconMail size={13}/> riksprovet@svk.se</div>
                <div className="flex items-center gap-2"><IconPhone size={13}/> +46 70 000 00 00</div>
                <div className="flex items-center gap-2"><IconHome size={13}/> Kiruna, Lappland</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ============= RIKSUTSTÄLLNING =============
  function RiksutstallningPage() {
    const d = RIKSUTSTALLNING;
    return (
      <main>
        <div className="bg-svk-ink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-70"><Photo photoKey="pointer-fjall" position="50% 38%" className="absolute inset-0"/></div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,22,19,0.85) 0%, rgba(15,22,19,0.55) 45%, rgba(15,22,19,0.15) 100%)" }}/>
          <div className="relative container-svk py-20 md:py-28">
            <Eyebrow tone="white">Aktivitet · Utställning</Eyebrow>
            <h1 className="font-serif text-[44px] md:text-[68px] font-semibold tracking-svk-tight leading-[1.02] mt-3 mb-5 max-w-3xl">{d.title}</h1>
            <div className="flex items-center gap-6 flex-wrap text-[15px]">
              <span className="flex items-center gap-2"><IconCalendar size={15}/> {d.dateLabel}</span>
              <span className="flex items-center gap-2"><IconPin size={15}/> {d.venue}, {d.town}</span>
            </div>
          </div>
        </div>

        <div className="container-svk py-3 text-[12.5px] text-svk-ink-500">
          <Link href="/" className="hover:text-svk-ink-900">Hem</Link><span className="mx-1.5">/</span>
          <Link href="/aktiviteter" className="hover:text-svk-ink-900">Aktiviteter</Link><span className="mx-1.5">/</span>
          <span className="text-svk-ink-700">{d.title}</span>
        </div>

        <EventQuickLinks items={d.quickLinks}/>

        <section id="hitta-hit" className="scroll-mt-24 bg-svk-surface-2/50 border-y border-svk-border">
          <div className="container-svk py-12 md:py-14">
            <div className="flex items-baseline justify-between flex-wrap gap-4 mb-6">
              <div className="max-w-2xl">
                <Eyebrow>Resa & samling</Eyebrow>
                <h2 className="font-serif text-[32px] md:text-[40px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.05] mt-2 mb-3">Hitta hit.</h2>
                <p className="text-[14.5px] text-svk-ink-700 leading-[1.65]">Samling sker vid {d.directions.address.line1} i {d.directions.address.line2}. Utställningen är skyltad från väg E20 — följ gröna SVK-skyltar sista biten.</p>
              </div>
              <div className="text-[12.5px] text-svk-ink-500 text-right">
                <span className="text-svk-ink-600">Rabattkod </span><span className="font-mono font-semibold text-svk-ink-900">RIKSUTST26</span><span className="text-svk-ink-600"> gäller hos våra logipartners.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-stretch">
              <div className="relative rounded-[12px] overflow-hidden border border-svk-border aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
                <MeetupMap coords={d.coords} label={d.directions.address.line1} subtitle={`${d.directions.address.line2} · ${d.venue}`} eyebrow="Samlingsplats" address={`${d.directions.address.line1}, ${d.directions.address.line2}`} pinColor="#3c8a4b" popupLines={[d.directions.address.line2, d.dateLabel, `Arr. ${d.host}`]} zoom={10}/>
              </div>

              <div className="card p-6 flex flex-col">
                <div className="font-serif text-[20px] font-semibold text-svk-ink-900 tracking-svk-tight pb-3 mb-4 border-b border-svk-border">Transport till {d.directions.address.line2}</div>
                <ul className="space-y-4 flex-1">
                  {d.directions.routes.slice(0,3).map((r, i) => {
                    const Ico = [IconNav, IconArrowUpRight, IconPin][i] || IconNav;
                    return (
                      <li key={r.from} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-svk-green-50 text-svk-green-700 inline-flex items-center justify-center shrink-0 border border-svk-green-200"><Ico size={14}/></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[13.5px] text-svk-ink-900 mb-0.5">{r.from}</div>
                          <div className="text-[12.5px] text-svk-ink-600 leading-[1.55]">{r.steps[0]}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <a href={d.directions.googleMapsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-5 pt-4 border-t border-svk-border text-[13px] font-semibold text-svk-green-700 link-arrow no-underline"><IconNav size={12}/> Öppna i Google Maps</a>
              </div>
            </div>

            <div className="mt-5 bg-svk-orange-50 border-l-[3px] border-svk-orange-500 rounded-[6px] px-4 py-3 flex gap-3 items-start">
              <IconInfo size={15} className="text-svk-orange-500 shrink-0 mt-0.5"/>
              <div className="text-[12.5px] text-svk-ink-700 leading-[1.55]"><b className="text-svk-ink-900">Tips:</b> {d.directions.tip}</div>
            </div>
          </div>
        </section>

        <section className="container-svk pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
            <div className="space-y-8 min-w-0">
              <div className="aspect-[16/7] rounded-[12px] overflow-hidden"><Photo photoKey="fjalljakt" position="50% 50%" className="w-full h-full"/></div>

              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-svk-green-50 text-svk-green-700 inline-flex items-center justify-center shrink-0"><IconTrophy size={18}/></div>
                  <div>
                    <h2 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight mb-3">{d.welcome.title}</h2>
                    <p className="text-[14.5px] text-svk-ink-700 leading-[1.65]">{d.welcome.intro}</p>
                  </div>
                </div>
              </div>

              <div className="text-[14.5px] text-svk-ink-700 leading-[1.75] space-y-3 px-2">
                {d.welcome.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <div id="program" className="scroll-mt-24"><EventProgram program={d.program} title="Program" inline/></div>
              <div id="domare" className="scroll-mt-24"><EventJudges judges={d.judges} title="Domare" inline/></div>

              <div id="boende" className="scroll-mt-24">
                <div className="card p-6">
                  <h2 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight mb-5 flex items-center gap-2"><IconHome size={18} className="text-svk-green-700"/> Boende</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {d.lodging.map((l) => (
                      <div key={l.title} className="bg-svk-surface-2/60 rounded-[10px] p-5 flex flex-col">
                        <div className="font-semibold text-[15px] text-svk-ink-900 mb-1">{l.title}</div>
                        <div className="text-[12.5px] text-svk-ink-600 mb-3">{l.desc}</div>
                        <div className="font-serif text-[22px] font-semibold text-svk-green-700 tracking-svk-tight mb-3">{l.price}</div>
                        <ul className="text-[12.5px] text-svk-ink-700 space-y-1 mt-auto">
                          {l.features.map((f, i) => <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-svk-green-500"/> {f}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-svk-border">
                    <h3 className="font-serif text-[17px] font-semibold text-svk-ink-900 tracking-svk-tight mb-3 flex items-center gap-2"><IconUtensils size={15} className="text-svk-green-700"/> Måltider</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {d.meals.map((m) => (
                        <div key={m.label} className="bg-svk-surface-2/60 rounded-[8px] p-3 text-center">
                          <div className="font-semibold text-[13px] text-svk-ink-900">{m.label}</div>
                          <div className="text-[11px] text-svk-ink-500 mt-0.5 font-mono tabular-nums">{m.time}</div>
                          <div className="text-[13px] font-semibold text-svk-green-700 mt-1.5">{m.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-5 self-start lg:sticky lg:top-6">
              <div className="bg-svk-green-700 text-white rounded-[12px] p-5">
                <h3 className="font-serif text-[20px] font-semibold tracking-svk-tight mb-2">Anmäl dig nu!</h3>
                <div className="flex items-center gap-2 text-[12.5px] text-white/80 mb-4"><IconCalendar size={12}/> Sista anmälan: {d.regDeadline}</div>
                <button disabled={!d.regOpen} className="w-full rounded-[8px] py-2.5 text-[13px] font-semibold bg-white/20 text-white/80 cursor-not-allowed border border-white/10">{d.regOpen ? "Anmäl dig nu" : "Anmälan öppnar snart"}</button>
              </div>

              <div className="card p-5">
                <h3 className="font-semibold text-[14px] text-svk-ink-900 mb-3">Anmälningsavgifter</h3>
                <div className="space-y-2">
                  {d.fees.map((f) => (
                    <div key={f.label} className="flex justify-between items-center text-[13px] border-b border-svk-border last:border-0 pb-2 last:pb-0">
                      <span className="text-svk-ink-700">{f.label}</span>
                      <span className={f.price === "Gratis" ? "text-svk-green-700 font-semibold" : "text-svk-ink-900 font-semibold"}>{f.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-semibold text-[14px] text-svk-ink-900 mb-3">Betalning</h3>
                <div className="space-y-1.5 text-[13px]">
                  <div className="flex justify-between"><span className="text-svk-ink-500">Plusgiro:</span><span className="text-svk-ink-900 font-mono tabular-nums">{d.payment.plusgiro}</span></div>
                  <div className="flex justify-between"><span className="text-svk-ink-500">Swish:</span><span className="text-svk-ink-900 font-mono tabular-nums">{d.payment.swish}</span></div>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-semibold text-[14px] text-svk-ink-900 mb-3">Kontakt</h3>
                <div className="space-y-4">
                  {d.contacts.map((c) => (
                    <div key={c.name}>
                      <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-svk-green-700 mb-1">{c.role}</div>
                      <div className="font-semibold text-[13.5px] text-svk-ink-900">{c.name}</div>
                      <a href={"mailto:" + c.email} className="flex items-center gap-2 text-[12.5px] text-svk-ink-600 hover:text-svk-green-700 mt-1 break-all"><IconMail size={11} className="shrink-0"/> {c.email}</a>
                      <a href={"tel:" + c.phone.replace(/\s/g, "")} className="flex items-center gap-2 text-[12.5px] text-svk-ink-600 hover:text-svk-green-700 mt-0.5"><IconPhone size={11} className="shrink-0"/> {c.phone}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-semibold text-[14px] text-svk-ink-900 mb-3">Mer information</h3>
                <div className="space-y-2">
                  {d.moreLinks.map((l) => {
                    const map = { gift: IconGift, users: IconUsers, award: IconAward };
                    const toneMap = { gift: "text-red-600", users: "text-svk-orange-500", award: "text-purple-600" };
                    const Ico = map[l.icon] || IconInfo;
                    return (
                      <a key={l.label} href={"#" + l.label.toLowerCase()} className="flex items-center justify-between text-[13px] py-2 border-b border-svk-border last:border-0 hover:text-svk-green-700 cursor-pointer group">
                        <span className="flex items-center gap-2.5"><Ico size={14} className={toneMap[l.icon] || "text-svk-ink-500"}/><span className="text-svk-ink-900 font-medium">{l.label}</span></span>
                        <IconChevronRight size={12} className="text-svk-ink-500 group-hover:text-svk-green-700"/>
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    );
  }

  // ============= GENERIC (fallback) =============
  function GenericPage() {
    return (
      <main>
        <PageHeader back="Tillbaka" backHref="/" eyebrow="Sida" title="Denna sida är en placeholder" sub="I denna prototyp har endast några utvalda sidor implementerats i detalj: startsidan, aktiviteter, en lokalavdelning, Riksprovet 2026 och Riksutställningen 2026. Övriga länkar leder hit."/>
        <section className="container-svk py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {[["Startsidan","/"],["Aktiviteter","/aktiviteter"],["SVK Västsvenska","/lokal/vastsvenska"],["Riksprovet 2026","/riksprovet"],["Riksutställningen","/riksutstallning"]].map(([l,h]) => (
              <Link key={h} href={h} className="card card-hover hover:shadow-svk-md p-5 no-underline block">
                <div className="font-serif text-[18px] font-semibold text-svk-ink-900 tracking-svk-tight">{l}</div>
                <div className="text-[12.5px] text-svk-ink-500 mt-1 font-mono">{h}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // ============= ARTICLE (news / general page — editorial sidebar) =============
  const ARTICLES = {
    "nya-regler-jaktprov-2025": {
      kicker: "Avel & prov",
      local: "SVK Malmfälten",
      title: "Nya regler för jaktprov från 2025",
      lede: "Från den 1 januari 2025 gäller uppdaterade bedömningskriterier för flera moment. Viktigast för dig som förare är förändringarna kring apportering och stadga.",
      publishDate: "4 september 2025",
      updatedDate: "8 september 2025",
      author: { name: "Erik Nordin", role: "Ordförande provkommittén" },
      mainImage: { photoKey: "vinter-jakt", caption: "Jaktprov på rapphöna, SVK Mellansvenska 2024.", credit: "Foto: Maria Lundqvist" },
      body: [
        { type: "p", text: "SKK och SVK har tillsammans arbetat fram nya jaktprovsbestämmelser som börjar gälla 1 januari 2025. Bakgrunden är en översyn som pågått sedan 2023 där erfarenheter från förare, domare och provledare har samlats in." },
        { type: "h3", text: "Det här är nytt" },
        { type: "list", items: [
          "Apporteringsmomentet bedöms i tre delsteg istället för ett samlat betyg.",
          "Stadga vid flukt kräver nu minst fem sekunders ro innan skott.",
          "Rapportering i PM-format ersätts av digital kritikbok i SKK Start.",
        ]},
        { type: "p", text: "För den enskilda provdeltagaren innebär det inga stora förändringar i träning eller utrustning. Domarkåren får utbildning under hösten 2024 så alla är redo när säsongen drar igång." },
        { type: "h3", text: "Har du frågor?" },
        { type: "p", text: "Kontakta din lokalavdelning eller provkommittén via formuläret längst ned på sidan. Vi kommer att hålla ett digitalt informationsmöte den 12 november 2024 — anmälan via kalendern." },
      ],
      tags: ["Jaktprov", "Regler", "2025"],
      relatedFiles: [
        { title: "Jaktprovs­bestämmelser 2025", meta: "PDF · 2,4 MB · giltig från 2025-01-01", kind: "pdf" },
        { title: "Sammanfattning — vad är nytt", meta: "PDF · 310 kB", kind: "pdf" },
      ],
      relatedOfficials: [
        { name: "Erik Nordin", role: "Ordförande provkommittén", email: "erik@vorsteh.se", phone: "+46 70 123 45 67" },
        { name: "Ingrid Söderberg", role: "Sekreterare", email: "ingrid@vorsteh.se" },
      ],
      relatedPages: [
        { kicker: "Kommande", title: "Digitalt informationsmöte 12 nov", desc: "Genomgång av de nya reglerna med frågestund." },
        { kicker: "Dokument", title: "Alla regeldokument", desc: "Stadgar, prov- och utställningsregler samlade." },
        { kicker: "Lokalavdelning", title: "SVK Malmfälten", desc: "Arrangör av Riksprovet 2026." },
      ],
    },
    "lokalavdelningar": {
      kicker: "Om SVK",
      local: "Kansliet",
      title: "Lokalavdelningar",
      lede: "SVK är indelat i tio lokalavdelningar som täcker hela landet. Via din lokalavdelning hittar du träningar, kurser och medlemsträffar nära dig.",
      publishDate: "12 januari 2026",
      updatedDate: "3 februari 2026",
      author: { name: "Anna Berg", role: "Kanslichef" },
      mainImage: { photoKey: "pointer-fjall", caption: "Medlemsträff hos SVK Västsvenska.", credit: "Foto: Johan Sund" },
      body: [
        { type: "p", text: "På SVK:s Facebooksida och lokalavdelningarnas Facebooksidor hittar man mer information om kurser, träningar och lokala arrangemang." },
        { type: "p", text: "Många lokalavdelningar arrangerar också medlemsträffar som också informeras om på respektive hemsida." },
        { type: "p", text: "Lokalavdelningarna har följande geografiska uppdelning:" },
        { type: "table", head: ["Lokalavdelning", "Län"], rows: [
          ["SVK/Östra", "Stockholm, Uppsala, Södermanland"],
          ["SVK/Småland-Östergötland", "Östergötland, Jönköping, Kronoberg, Kalmar"],
          ["SVK/Gotland", "Gotland"],
          ["SVK/Södra", "Blekinge, Skåne"],
          ["SVK/Västsvenska", "Halland, Västra Götaland"],
          ["SVK/Mellansvenska", "Värmland, Örebro, Västmanland, Dalarna, Gävleborg"],
          ["SVK/Jämtland-Västernorrland", "Västernorrland, Jämtland"],
          ["SVK/Västerbotten", "Västerbotten"],
          ["SVK/Bottenviken", "Norrbotten, utom Kiruna, Pajala, Gällivare och Jokkmokks kommuner"],
          ["SVK/Malmfälten", "Kiruna, Pajala, Gällivare och Jokkmokks kommuner"],
        ]},
        { type: "p", text: "Hitta din lokalavdelning via menyn \"Lokalavdelningar\" i toppen — där finns också karta och kontaktuppgifter." },
      ],
      tags: ["Lokalavdelningar", "Om SVK"],
      relatedFiles: [
        { title: "Karta över lokalavdelningar", meta: "PDF · 480 kB", kind: "pdf" },
      ],
      relatedOfficials: [
        { name: "Anna Berg", role: "Kanslichef", email: "kansli@vorsteh.se" },
      ],
      relatedPages: [
        { kicker: "Översikt", title: "Karta över Sverige", desc: "Se alla tio lokalavdelningar på kartan." },
        { kicker: "Medlem", title: "Bli medlem", desc: "Medlemskap ger tillgång till alla lokalavdelningar." },
      ],
    },
  };

  function ArticleBody({ blocks }) {
    return (
      <article className="prose-svk max-w-[680px]">
        {blocks.map((b, i) => {
          if (b.type === "lead") return <p key={i} className="text-[19px] text-svk-ink-800 leading-[1.6] font-[500] mb-6">{b.text}</p>;
          if (b.type === "p") return <p key={i}>{b.text}</p>;
          if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
          if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
          if (b.type === "list") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
          if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
          if (b.type === "table") return (
            <table key={i}>
              {b.head && <thead><tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>}
              <tbody>{b.rows.map((row, j) => (
                <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>
              ))}</tbody>
            </table>
          );
          return null;
        })}
      </article>
    );
  }

  function ArticleRailPanel({ eyebrow, title, children }) {
    return (
      <div className="bg-white border border-svk-border rounded-[10px] p-5">
        {eyebrow && <Eyebrow tone="muted" className="mb-1">{eyebrow}</Eyebrow>}
        {title && <div className="font-serif text-[17px] font-semibold tracking-svk-tight text-svk-ink-900 mb-3">{title}</div>}
        {children}
      </div>
    );
  }

  function ArticlePage({ slug }) {
    const d = ARTICLES[slug] || ARTICLES["nya-regler-jaktprov-2025"];
    return (
      <main data-screen-label="Article">
        {/* Hero band */}
        <div className="bg-svk-surface border-b border-svk-border">
          <div className="container-svk py-10 md:py-14">
            <Link href="/" className="text-[13px] inline-flex items-center gap-1.5 text-svk-ink-500 hover:text-svk-green-700 mb-4 no-underline">
              <IconArrowLeft size={13}/> Nyheter
            </Link>
            <div className="flex gap-1.5 mb-5 flex-wrap">
              <Chip tone="green">{d.kicker}</Chip>
              <Chip tone="outline">{d.local}</Chip>
            </div>
            <h1 className="font-serif text-[40px] md:text-[52px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.06] max-w-3xl mb-4">{d.title}</h1>
            <p className="text-[18px] text-svk-ink-600 leading-[1.5] max-w-2xl mb-6">{d.lede}</p>
            <div className="flex flex-wrap gap-5 text-[13px] text-svk-ink-500 items-center">
              <span className="inline-flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[12px] font-semibold inline-flex items-center justify-center">
                  {d.author.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                </div>
                <span className="text-svk-ink-800 font-[500]">Av {d.author.name}</span>
              </span>
              <span className="inline-flex items-center gap-1.5"><IconCalendar size={13}/> Publicerad {d.publishDate}</span>
              {d.updatedDate && <span className="text-svk-ink-400">Uppdaterad {d.updatedDate}</span>}
            </div>
          </div>
        </div>

        {/* Main image */}
        <div className="bg-svk-bg">
          <div className="container-svk pt-10">
            <figure>
              <div className="aspect-[16/8] rounded-[10px] overflow-hidden">
                <Photo photoKey={d.mainImage.photoKey} alt={d.mainImage.caption} position="50% 40%"/>
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
          <ArticleBody blocks={d.body}/>

          <aside className="space-y-5 lg:sticky lg:top-32">
            <ArticleRailPanel eyebrow="Publicerat" title={d.publishDate}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-svk-green-100 text-svk-green-700 font-serif text-[15px] font-semibold inline-flex items-center justify-center">
                  {d.author.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[13.5px] text-svk-ink-900">{d.author.name}</div>
                  <div className="text-[11.5px] text-svk-ink-500">{d.author.role}</div>
                </div>
              </div>
            </ArticleRailPanel>

            <ArticleRailPanel eyebrow="Ämnen">
              <div className="flex gap-1.5 flex-wrap">
                {d.tags.map((t) => <Chip key={t} tone="outline">{t}</Chip>)}
              </div>
            </ArticleRailPanel>

            {d.relatedFiles && d.relatedFiles.length > 0 && (
              <ArticleRailPanel eyebrow="Dokument" title={`${d.relatedFiles.length} filer`}>
                {d.relatedFiles.map((f) => (
                  <a key={f.title} className="flex items-center gap-3 py-2.5 border-b border-svk-border last:border-0 hover:text-svk-green-700 cursor-pointer">
                    <div className="w-8 h-8 rounded-md bg-svk-surface-2 border border-svk-border text-svk-ink-500 inline-flex items-center justify-center shrink-0 font-mono text-[10px] font-semibold uppercase">{f.kind || "pdf"}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-semibold text-svk-ink-900 leading-tight">{f.title}</div>
                      <div className="text-[11px] text-svk-ink-500 mt-0.5">{f.meta}</div>
                    </div>
                    <IconDownload size={14} className="text-svk-ink-500 shrink-0"/>
                  </a>
                ))}
              </ArticleRailPanel>
            )}

            {d.relatedOfficials && d.relatedOfficials.length > 0 && (
              <ArticleRailPanel eyebrow="Kontakt" title="Ansvariga">
                {d.relatedOfficials.map((p) => (
                  <div key={p.name} className="py-3 border-b border-svk-border last:border-0">
                    <div className="font-semibold text-[13.5px] text-svk-ink-900">{p.name}</div>
                    <div className="text-[11.5px] text-svk-ink-500">{p.role}</div>
                    {p.email && <div className="text-[12px] text-svk-green-700 mt-1">{p.email}</div>}
                  </div>
                ))}
              </ArticleRailPanel>
            )}
          </aside>
        </div>

        {/* Related pages band */}
        {d.relatedPages && d.relatedPages.length > 0 && (
          <section className="bg-svk-ink-900 text-white py-14">
            <div className="container-svk">
              <Eyebrow tone="white">Relaterat</Eyebrow>
              <h2 className="font-serif text-[28px] font-semibold tracking-svk-tight mt-2 mb-8">Läs vidare</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {d.relatedPages.map((p) => (
                  <a key={p.title} className="block p-5 border border-white/15 rounded-[10px] hover:border-white/40 cursor-pointer group h-full">
                    <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/55 font-semibold mb-2">{p.kicker}</div>
                    <div className="font-serif text-[19px] font-semibold leading-[1.2] tracking-svk-tight mb-2 group-hover:text-svk-orange-200">{p.title}</div>
                    <div className="text-[12.5px] text-white/65 leading-snug">{p.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    );
  }

  // ============= FUNKTIONÄRER =============
  const FUNKTIONARER = [
    { id: 1, name: "Jonas Peterson", role: "IT-gruppen", roleColor: "green", clubs: ["SVK Malmfälten", "SVK Västsvenska", "SVK Mellansvenska"], email: "jonas.u.peterson@gmail.com", phone: "0727437850", initials: "JP", avatarTone: "stone" },
    { id: 2, name: "Anna Nylander", role: "IT-gruppen", roleColor: "orange", clubs: [], email: "anna@example.com", initials: "AN", avatarTone: "green" },
    { id: 3, name: "Emma Forss", role: "Avelsfunktionär", roleColor: "green", clubs: ["SVK Södra"], email: "kleinermunsterlander@vorsteh.se", phone: "070-597 39 72", initials: "EF", avatarTone: "amber" },
    { id: 4, name: "Susanne Westman", role: "Avelsfunktionär", roleColor: "orange", clubs: ["SVK Västsvenska"], email: "kortharvorsteh@vorsteh.se", phone: "070-345 18 79", initials: "SW", avatarTone: "blue" },
    { id: 5, name: "Maria Tjärnström", role: "Avelsfunktionär", roleColor: "green", clubs: ["SVK Mellansvenska"], email: "kortharvorsteh@vorsteh.se", phone: "070-281 37 77", initials: "MT", avatarTone: "purple" },
    { id: 6, name: "Erik Nordin", role: "Provkommitté", roleColor: "green", clubs: ["SVK Malmfälten"], email: "erik@vorsteh.se", phone: "+46 70 123 45 67", initials: "EN", avatarTone: "green" },
    { id: 7, name: "Ingrid Söderberg", role: "Provkommitté", roleColor: "green", clubs: ["SVK Jämtland-Västernorrland"], email: "ingrid@vorsteh.se", initials: "IS", avatarTone: "stone" },
    { id: 8, name: "Lars Hoff", role: "Domarkommitté", roleColor: "orange", clubs: ["SVK Bottenviken"], email: "lars.hoff@vorsteh.se", phone: "070-456 78 90", initials: "LH", avatarTone: "amber" },
    { id: 9, name: "Karin Sjöberg", role: "Utställnings­kommitté", roleColor: "green", clubs: ["SVK Jämtland-Västernorrland"], email: "karin@vorsteh.se", phone: "070-234 56 78", initials: "KS", avatarTone: "blue" },
    { id: 10, name: "Johan Sund", role: "Utställnings­kommitté", roleColor: "orange", clubs: ["SVK Västsvenska"], email: "johan@vorsteh.se", phone: "070-567 89 01", initials: "JS", avatarTone: "purple" },
    { id: 11, name: "Maja Lindén", role: "Domarkommitté", roleColor: "green", clubs: ["SVK Mellansvenska"], email: "maja.linden@vorsteh.se", phone: "070-678 90 12", initials: "ML", avatarTone: "green" },
    { id: 12, name: "Anna Berg", role: "Kansliet", roleColor: "green", clubs: [], email: "kansli@vorsteh.se", phone: "08-123 45 67", initials: "AB", avatarTone: "stone" },
  ];

  const AVATAR_TONES = {
    stone: "bg-stone-200 text-stone-700",
    green: "bg-svk-green-100 text-svk-green-700",
    amber: "bg-amber-100 text-amber-800",
    blue: "bg-sky-100 text-sky-800",
    purple: "bg-violet-100 text-violet-800",
  };

  function FunktionarCard({ f }) {
    return (
      <div className="flex gap-4 py-5">
        <div className={"w-12 h-12 rounded-full inline-flex items-center justify-center font-semibold text-[14px] shrink-0 " + (AVATAR_TONES[f.avatarTone] || AVATAR_TONES.stone)}>
          {f.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[15px] text-svk-ink-900 leading-tight">{f.name}</div>
          <div className={"text-[13px] font-semibold mt-0.5 " + (f.roleColor === "orange" ? "text-svk-orange-500" : "text-svk-green-600")}>{f.role}</div>
          {f.clubs.length > 0 && (
            <div className="text-[12.5px] text-svk-ink-500 mt-1.5 leading-snug">{f.clubs.join(", ")}</div>
          )}
          <div className="mt-2.5 space-y-1">
            {f.phone && (
              <a href={"tel:" + f.phone.replace(/\s/g,"")} className="flex items-center gap-2 text-[13px] text-svk-ink-700 hover:text-svk-green-700 no-underline">
                <IconPhone size={12} className="text-svk-ink-400"/> {f.phone}
              </a>
            )}
            {f.email && (
              <a href={"mailto:" + f.email} className="flex items-center gap-2 text-[13px] text-svk-ink-700 hover:text-svk-green-700 no-underline">
                <IconMail size={12} className="text-svk-ink-400"/> <span className="truncate">{f.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  function FunktionarerPage() {
    const [q, setQ] = useState("");
    const [role, setRole] = useState("");
    const [club, setClub] = useState("");

    const allRoles = useMemo(() => Array.from(new Set(FUNKTIONARER.map((f) => f.role))).sort(), []);
    const allClubs = useMemo(() => Array.from(new Set(FUNKTIONARER.flatMap((f) => f.clubs))).sort(), []);

    const filtered = FUNKTIONARER.filter((f) => {
      if (role && f.role !== role) return false;
      if (club && !f.clubs.includes(club)) return false;
      if (q) {
        const t = q.toLowerCase();
        return [f.name, f.role, f.email || "", f.phone || "", ...f.clubs].some((s) => s.toLowerCase().includes(t));
      }
      return true;
    });

    function clearFilters() { setQ(""); setRole(""); setClub(""); }
    const hasFilter = q || role || club;

    return (
      <main data-screen-label="Funktionärer">
        <div className="bg-svk-surface border-b border-svk-border">
          <div className="container-svk py-12 md:py-14 text-center">
            <Eyebrow tone="muted" className="mb-3">Om oss</Eyebrow>
            <h1 className="font-serif text-[44px] md:text-[52px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.05] mb-4">Funktionärer</h1>
            <p className="text-[17px] text-svk-ink-600 max-w-xl mx-auto">Sök och filtrera bland Svenska Vorstehklubbens funktionärer.</p>
          </div>
        </div>

        <section className="container-svk py-10">
          {/* Filter bar */}
          <div className="bg-white border border-svk-border rounded-[10px] p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center shadow-svk-xs">
            <div className="relative flex-1 min-w-0">
              <IconSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-svk-ink-400 pointer-events-none"/>
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Sök funktionärer..."
                className="input pl-9"
              />
            </div>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="input md:w-[200px] cursor-pointer">
              <option value="">Alla roller</option>
              {allRoles.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={club} onChange={(e) => setClub(e.target.value)} className="input md:w-[220px] cursor-pointer">
              <option value="">Alla lokalavdelningar</option>
              {allClubs.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={clearFilters} disabled={!hasFilter} className={"px-4 py-2.5 rounded-md text-[13px] font-semibold whitespace-nowrap transition-colors " + (hasFilter ? "bg-svk-surface-2 text-svk-ink-800 border border-svk-border hover:bg-svk-border" : "bg-svk-surface-2 text-svk-ink-400 border border-svk-border cursor-not-allowed")}>
              Rensa filter
            </button>
          </div>

          {/* Result count */}
          <div className="text-[13px] text-svk-ink-500 mt-5 mb-2">
            Visar {filtered.length} av {FUNKTIONARER.length} funktionärer
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-svk-surface-2 border border-svk-border rounded-[10px] mt-4">
              <div className="font-serif text-[20px] text-svk-ink-900 mb-1">Inga träffar</div>
              <div className="text-[14px] text-svk-ink-500">Prova att rensa eller ändra filter.</div>
            </div>
          ) : (
            <div>
              {Array.from({ length: Math.ceil(filtered.length / 2) }).map((_, rowIdx) => {
                const a = filtered[rowIdx * 2];
                const b = filtered[rowIdx * 2 + 1];
                const isLast = rowIdx === Math.ceil(filtered.length / 2) - 1;
                return (
                  <div key={rowIdx} className={"grid grid-cols-1 md:grid-cols-2 gap-x-10 " + (isLast ? "" : "border-b border-svk-border")}>
                    <div className={b ? "border-b border-svk-border md:border-b-0" : ""}>
                      <FunktionarCard f={a}/>
                    </div>
                    {b && <FunktionarCard f={b}/>}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    );
  }

  Object.assign(window, { HomePage, ActivitiesPage, LocalClubPage, RiksprovetPage, RiksutstallningPage, GenericPage, ArticlePage, FunktionarerPage });
})();
