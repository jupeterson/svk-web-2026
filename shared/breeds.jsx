// Rasdata + hub-sida + detaljsida för Svenska Vorstehklubbens 7 raser
(function () {
  "use strict";
  const { useState, useEffect, useMemo } = React;

  // ============= UTÖKAD RASDATA =============
  // Berikar BREEDS (basic info) med detaljerat innehåll per ras
  const BREED_DETAILS = {
    "kortharig-vorsteh": {
      group: "FCI grupp 7",
      origin: "Tyskland",
      height: "58–66 cm",
      weight: "20–32 kg",
      lifespan: "12–14 år",
      coat: "Kort, tät, hårt åtliggande",
      colors: "Brun, brun­skimmel, svart, svart­skimmel",
      registered2024: 412,
      breedingPlans: 38,
      activeStuds: 47,
      activeBitches: 124,
      historik: [
        "Korthårig vorsteh — eller Deutsch Kurzhaar — har sina rötter i 1700-talets tyska jaktkultur, där spanska pointertyper kombinerades med tyska brackor för att skapa en mångsidig brukshund.",
        "Stamboken FCI 119 öppnades 1879 och rasen tog tidigt formen av den moderna fågelhund vi känner idag. Till Sverige kom de första hundarna runt sekelskiftet 1900.",
        "Idag är korthåriga vorsteh den största rasen inom Svenska Vorstehklubben, med stark förankring i jaktproven på fjäll, fält och i skog."
      ],
      anvandning: [
        "Mångsidig stående fågelhund — fält, fjäll och skog.",
        "Apportering på land och vatten.",
        "Eftersök på klövvilt — meriterande för championat.",
        "Drev- och stötjakt i kombination med stånd­arbete."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Stora, snabba slag med god vidd. Anpassar tempot till terräng och fågelförekomst." },
        { title: "Stånd", desc: "Fast och uthålligt stånd. Klassisk hög stil med rakt rygg och hög svans." },
        { title: "Apportering", desc: "Stark apportgalenskap — väl utvecklad bär- och simlust." },
        { title: "Mentalitet", desc: "Lugn, balanserad, samarbetsvillig. Trivs som familjemedlem året om." }
      ],
      bra: [
        "Behöver dagligen mycket motion — minimum 1–2 timmars aktivitet.",
        "Mår bäst i hem där hela familjen är delaktig i hundens liv.",
        "Inte en \"ut-och-pinka\"-ras — kräver jakt eller likvärdig sysselsättning.",
        "Pälsvård minimal: borstning vid behov."
      ],
      // Genomsnitt över de senaste 3 årens jaktprov
      pollStats: [
        { label: "Sök", value: 7.4, max: 10 },
        { label: "Vidd", value: 7.1, max: 10 },
        { label: "Fart", value: 7.8, max: 10 },
        { label: "Stil", value: 7.5, max: 10 },
        { label: "Stånd", value: 7.6, max: 10 },
        { label: "Apportering", value: 7.9, max: 10 }
      ]
    },
    "stravharig-vorsteh": {
      group: "FCI grupp 7",
      origin: "Tyskland",
      height: "60–68 cm",
      weight: "27–32 kg",
      lifespan: "12–14 år",
      coat: "Strävhårig, vattenavstötande, ca 4 cm",
      colors: "Brun­skimmel, brun, svart­skimmel",
      registered2024: 287,
      breedingPlans: 24,
      activeStuds: 31,
      activeBitches: 86,
      historik: [
        "Strävhårig vorsteh (Deutsch Drahthaar) togs fram i Tyskland under sent 1800-tal. Avsikten var att skapa en mer härdig, vatten­tålig vorsteh för fullbruks­jakt.",
        "Genom korsningar mellan korthårig vorsteh, pudelpointer och griffon fick rasen sin karaktäristiska sträva päls och robusta kropp.",
        "Rasen kom till Sverige på 1960-talet och har sedan dess vuxit stadigt — främst tack vare sin mångsidighet i jakt, eftersök och vatten­arbete."
      ],
      anvandning: [
        "Allroundjakt över hela året, även i tuffa förhållanden.",
        "Eftersök på klövvilt — extra duglig på blod­spår.",
        "Jakt på sjöfågel och vattenarbete.",
        "Skogsjakt på rådjur, vildsvin och småvilt."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Bred, metodisk sökning. Något lugnare tempo än korthåriga." },
        { title: "Stånd", desc: "Mycket stadigt stånd, även på markvilt och varierande terräng." },
        { title: "Apportering", desc: "Stark vattenpassion. Apporterar gärna på iskall sjö." },
        { title: "Mentalitet", desc: "Modig, beskyddande, något mer reserverad än korthåriga." }
      ],
      bra: [
        "Pälsen klarar Sverige väl — kräver dock viss trimning.",
        "Räknas som något \"hetare\" än korthåriga — passar förare med jakterfarenhet.",
        "Utmärkt familjehund i rätt händer.",
        "Mår dåligt av att lämnas ensam under långa pass."
      ],
      pollStats: [
        { label: "Sök", value: 7.0, max: 10 },
        { label: "Vidd", value: 6.6, max: 10 },
        { label: "Fart", value: 7.0, max: 10 },
        { label: "Stil", value: 7.2, max: 10 },
        { label: "Stånd", value: 7.8, max: 10 },
        { label: "Apportering", value: 8.2, max: 10 }
      ]
    },
    "langharig-vorsteh": {
      group: "FCI grupp 7",
      origin: "Tyskland",
      height: "60–70 cm",
      weight: "27–32 kg",
      lifespan: "12–14 år",
      coat: "Mjuk, lång, något vågig",
      colors: "Brun, brun­skimmel, brun-vit",
      registered2024: 84,
      breedingPlans: 6,
      activeStuds: 12,
      activeBitches: 28,
      historik: [
        "Långhårig vorsteh (Deutsch Langhaar) är den äldsta av de tre tyska vorsteh­varianterna och har bevarat mycket av den ursprungliga arbetstypen.",
        "Stamboken öppnades 1879 och rasen kom till Sverige på 1970-talet via dansk avel.",
        "I Sverige är den en numerär liten ras med entusiastisk förvaltning och fokus på bevarad genetisk bredd."
      ],
      anvandning: [
        "Klassisk fältjakt på fågel.",
        "Eftersök på klövvilt.",
        "Vattenarbete och apportering.",
        "Familjehund med stark social förankring."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Lugnt, metodiskt sök med god kontakt." },
        { title: "Stånd", desc: "Klassiskt fast stånd, ibland med något lägre stil." },
        { title: "Apportering", desc: "Mycket stor apporteringsvilja — rasens signum." },
        { title: "Mentalitet", desc: "Vänlig, mjuk i hand­lag, behöver positiv träning." }
      ],
      bra: [
        "Pälsen kräver regelbunden borstning, särskilt på \"benskägg\" och svans.",
        "Lugn karaktär passar familjer som inte lever för pulsjakt.",
        "Liten ras — rådfråga avelsråd om val av kombination.",
        "Mår bra av tvärfacklig sysselsättning: lydnad, spår, jakt."
      ],
      pollStats: [
        { label: "Sök", value: 6.8, max: 10 },
        { label: "Vidd", value: 6.3, max: 10 },
        { label: "Fart", value: 6.5, max: 10 },
        { label: "Stil", value: 7.0, max: 10 },
        { label: "Stånd", value: 7.4, max: 10 },
        { label: "Apportering", value: 8.5, max: 10 }
      ]
    },
    "kleiner-munsterlander": {
      group: "FCI grupp 7",
      origin: "Tyskland",
      height: "50–56 cm",
      weight: "15–25 kg",
      lifespan: "12–14 år",
      coat: "Medellång, slät, vattenavstötande",
      colors: "Brun-vit, brun­skimmel-vit",
      registered2024: 198,
      breedingPlans: 18,
      activeStuds: 22,
      activeBitches: 64,
      historik: [
        "Kleiner münsterländer härstammar från Münsterland i nord­västra Tyskland. Rasen formade­s i sin nuvarande typ på 1870-talet av brödraherrarna Heitmann och Löns.",
        "Som klubbens kompaktaste ras har den blivit populär bland förare som söker mångsidighet i ett mindre format.",
        "I Sverige har rasen vuxit kraftigt sedan 1990-talet och är idag bland klubbens fyra största."
      ],
      anvandning: [
        "Fältjakt och fjälljakt på fågel.",
        "Skogsjakt på småvilt och rådjur.",
        "Vattenarbete och apportering.",
        "Eftersök på klövvilt."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Intensiv, gärna tät — passar fält och kortare avstånd." },
        { title: "Stånd", desc: "Mycket fast stånd, ofta lågt och koncentrerat." },
        { title: "Apportering", desc: "Stark apportgalenskap, smidig kropp ger bra simning." },
        { title: "Mentalitet", desc: "Social, mycket människo­vänlig, behöver närhet." }
      ],
      bra: [
        "Liten storlek — passar både skog, terränglöper och bilen.",
        "Pälsen kräver regelbunden borstning kring \"benskägg\".",
        "Mår dåligt av att lämnas ensam — hör hemma med familjen.",
        "Idealisk för förare som vill ha vorsteh­tempo i kompaktare paket."
      ],
      pollStats: [
        { label: "Sök", value: 7.2, max: 10 },
        { label: "Vidd", value: 6.4, max: 10 },
        { label: "Fart", value: 7.5, max: 10 },
        { label: "Stil", value: 7.3, max: 10 },
        { label: "Stånd", value: 7.7, max: 10 },
        { label: "Apportering", value: 8.0, max: 10 }
      ]
    },
    "grosser-munsterlander": {
      group: "FCI grupp 7",
      origin: "Tyskland",
      height: "60–65 cm",
      weight: "27–32 kg",
      lifespan: "12–13 år",
      coat: "Lång, slät eller lätt vågig",
      colors: "Svart-vit, svart­skimmel-vit",
      registered2024: 56,
      breedingPlans: 4,
      activeStuds: 7,
      activeBitches: 19,
      historik: [
        "Grosser münsterländer är en gammal tysk ras vars ursprung går tillbaka till medel­tidens tyska fågelhundar.",
        "Egen rasstandard etablerades 1919 i Hannover. Rasen är nära släkt med långhårig vorsteh men avskildes som egen ras tack vare sin svart-vita färgsättning.",
        "I Sverige är rasen liten med entusiastisk uppfödning och stark koppling till fullbruksjakt."
      ],
      anvandning: [
        "Fullbruksjakt på fältfågel och fjällripa.",
        "Eftersök på klövvilt.",
        "Vattenjakt och apportering av sjöfågel.",
        "Familjehund med starkt sinne för revir och samhörighet."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Bred och uthållig, passar för långa pass i öppen terräng." },
        { title: "Stånd", desc: "Klassiskt fast stånd med stor uthållighet." },
        { title: "Apportering", desc: "Mycket stark apportlust och sim­förmåga." },
        { title: "Mentalitet", desc: "Lugn, lojal, nära knuten till sin familj." }
      ],
      bra: [
        "Pälsen kräver regelbunden borstning.",
        "Liten ras — kontakta avelsråd för bästa kombinationer.",
        "Behöver mycket utrymme och daglig motion.",
        "Passar erfarna förare som vill ha en lugn fullbrukshund."
      ],
      pollStats: [
        { label: "Sök", value: 6.9, max: 10 },
        { label: "Vidd", value: 6.5, max: 10 },
        { label: "Fart", value: 6.8, max: 10 },
        { label: "Stil", value: 7.2, max: 10 },
        { label: "Stånd", value: 7.5, max: 10 },
        { label: "Apportering", value: 8.3, max: 10 }
      ]
    },
    "vizsla-kortharig": {
      group: "FCI grupp 7",
      origin: "Ungern",
      height: "54–64 cm",
      weight: "20–27 kg",
      lifespan: "12–14 år",
      coat: "Kort, slät, åtliggande",
      colors: "Olika nyanser av semmelgul",
      registered2024: 312,
      breedingPlans: 22,
      activeStuds: 28,
      activeBitches: 92,
      historik: [
        "Ungersk vizsla — \"den ungerska pekande hunden\" — har fornt ursprung i Ungerns puszta. Rasen omnämns redan i 1300-talets gravkonst.",
        "Modern rasstandard formades 1936. Efter andra världskriget var rasen nära utdöende men räddades av entusiaster i Ungern, USA och Skandinavien.",
        "I Sverige har rasen blivit allt populärare sedan 1990-talet och är idag en av klubbens fyra största."
      ],
      anvandning: [
        "Fältjakt och fjälljakt på fågel.",
        "Skogsjakt och eftersök.",
        "Vattenjakt — något mindre vattenpassion än vorsteh.",
        "Familjehund med stark människo­fokus."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Snabb, elegant, hög-stil. Vidd över mark." },
        { title: "Stånd", desc: "Hög, dramatisk stilig pose med rakt rygg." },
        { title: "Apportering", desc: "God apport­vilja, något kortare bär än vorsteh." },
        { title: "Mentalitet", desc: "Mycket människo­fokuserad — behöver närhet, kallas \"velcro dog\"." }
      ],
      bra: [
        "Pälsvård minimal.",
        "Mycket motions­behov — passar aktiva familjer.",
        "Värme­känslig — behöver täcke vid kall jakt.",
        "Kräver mycket människokontakt — aldrig kennel­hund."
      ],
      pollStats: [
        { label: "Sök", value: 7.6, max: 10 },
        { label: "Vidd", value: 7.4, max: 10 },
        { label: "Fart", value: 8.1, max: 10 },
        { label: "Stil", value: 8.0, max: 10 },
        { label: "Stånd", value: 7.4, max: 10 },
        { label: "Apportering", value: 7.2, max: 10 }
      ]
    },
    "vizsla-stravharig": {
      group: "FCI grupp 7",
      origin: "Ungern",
      height: "54–64 cm",
      weight: "20–27 kg",
      lifespan: "12–14 år",
      coat: "Strävhårig, ca 3 cm",
      colors: "Semmelgul i olika nyanser",
      registered2024: 76,
      breedingPlans: 5,
      activeStuds: 9,
      activeBitches: 22,
      historik: [
        "Strävhårig vizsla togs fram i Ungern på 1930-talet genom korsning mellan korthårig vizsla och tysk strävhårig vorsteh.",
        "Avsikten var att skapa en mer härdig variant lämpad för Ungerns kallare berg och vatten­jakt.",
        "Rasen kom till Sverige först på 2000-talet och är vår yngsta och numerärt minsta vorsteh­variant."
      ],
      anvandning: [
        "Fältjakt med ökad köld­tålighet.",
        "Skogsjakt och eftersök.",
        "Vattenjakt på sjöfågel.",
        "Familjehund i hem som tål en \"velcro\"-typ."
      ],
      egenskaper: [
        { title: "Sökstil", desc: "Snabb och elegant som korthåriga, något något lugnare tempo." },
        { title: "Stånd", desc: "Hög stil, klassiskt vizsla-uttryck." },
        { title: "Apportering", desc: "Förbättrad köld- och vattentålighet jämfört med korthårig." },
        { title: "Mentalitet", desc: "Människo­fokuserad, modig, något mer reserverad än korthårig." }
      ],
      bra: [
        "Pälsen kräver lite trimning, mer skydd än korthåriga.",
        "Liten ras i Sverige — använd avelsråd.",
        "Värme­känslig, men mer köld­tålig än korthåriga.",
        "Mår dåligt av att lämnas ensam."
      ],
      pollStats: [
        { label: "Sök", value: 7.3, max: 10 },
        { label: "Vidd", value: 7.0, max: 10 },
        { label: "Fart", value: 7.6, max: 10 },
        { label: "Stil", value: 7.7, max: 10 },
        { label: "Stånd", value: 7.3, max: 10 },
        { label: "Apportering", value: 7.5, max: 10 }
      ]
    }
  };

  // Avelsråd per ras
  const AVELSRAD = {
    "kortharig-vorsteh": [{ name: "Emma Forss", email: "kortharvorsteh@vorsteh.se", phone: "070-597 39 72", initials: "EF", tone: "amber" }],
    "stravharig-vorsteh": [{ name: "Maria Tjärnström", email: "stravharvorsteh@vorsteh.se", phone: "070-281 37 77", initials: "MT", tone: "purple" }],
    "langharig-vorsteh": [{ name: "Susanne Westman", email: "langharvorsteh@vorsteh.se", phone: "070-345 18 79", initials: "SW", tone: "blue" }],
    "kleiner-munsterlander": [{ name: "Emma Forss", email: "kleinermunsterlander@vorsteh.se", phone: "070-597 39 72", initials: "EF", tone: "amber" }],
    "grosser-munsterlander": [{ name: "Anna Berg", email: "grossermunsterlander@vorsteh.se", phone: "070-456 78 90", initials: "AB", tone: "stone" }],
    "vizsla-kortharig": [{ name: "Erik Nordin", email: "vizslakorthar@vorsteh.se", phone: "+46 70 123 45 67", initials: "EN", tone: "green" }],
    "vizsla-stravharig": [{ name: "Erik Nordin", email: "vizslastravhar@vorsteh.se", phone: "+46 70 123 45 67", initials: "EN", tone: "green" }]
  };

  const AVATAR_TONES = {
    stone: "bg-stone-200 text-stone-700",
    green: "bg-svk-green-100 text-svk-green-700",
    amber: "bg-amber-100 text-amber-800",
    blue: "bg-sky-100 text-sky-800",
    purple: "bg-violet-100 text-violet-800"
  };

  // ============= HUB =============
  function BreedHubPage() {
    return (
      <main data-screen-label="Våra raser">
        <div className="bg-svk-surface border-b border-svk-border">
          <div className="container-svk py-14 md:py-16">
            <div className="max-w-2xl">
              <Eyebrow tone="muted" className="mb-3">Sju raser, en klubb</Eyebrow>
              <h1 className="font-serif text-[48px] md:text-[60px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.02] mb-5">Våra raser</h1>
              <p className="text-[18px] text-svk-ink-600 leading-[1.55]">Svenska Vorstehklubben förvaltar sju kontinentala stående fågelhundar — från den anrika korthåriga vorsteh till den nyaste strävhåriga vizslan. Var och en med sin egen historia, byggnad och uppgift i fält.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-4 mt-10 max-w-2xl">
              {[["7","Raser"],["1 425","Reg. 2024"],["117","Avelsplaner"],["455","Aktiva tikar"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-serif text-[28px] font-semibold text-svk-ink-900 tracking-svk-tight leading-none">{n}</div>
                  <div className="text-[12px] text-svk-ink-500 mt-1.5 uppercase tracking-[0.12em] font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="container-svk py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BREEDS.map((b) => {
              const d = BREED_DETAILS[b.slug] || {};
              return (
                <Link key={b.slug} href={"/raser/" + b.slug} className="group card card-hover hover:shadow-svk-md flex flex-col h-full no-underline">
                  <div className="aspect-[4/3] relative shrink-0 overflow-hidden">
                    {b.photoKey
                      ? <Photo photoKey={b.photoKey} className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"/>
                      : <PhotoPlaceholder kind={b.photo} className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"/>}
                    <div className="absolute inset-0 bg-gradient-to-t from-svk-ink-900/55 via-transparent to-transparent"/>
                    <div className="absolute top-3 left-3"><Chip tone="ghost" size="sm">{d.origin || "—"}</Chip></div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-[22px] font-semibold text-svk-ink-900 tracking-svk-tight leading-tight mb-1.5">{b.name}</h3>
                    <p className="text-[13.5px] text-svk-ink-600 leading-snug mb-4">{b.desc}</p>
                    <div className="grid grid-cols-3 gap-x-3 mt-auto pt-4 border-t border-svk-border">
                      {[["Mankhöjd", d.height], ["Vikt", d.weight], ["Reg. 2024", d.registered2024]].map(([k,v]) => (
                        <div key={k}>
                          <div className="text-[10px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold">{k}</div>
                          <div className="text-[12.5px] text-svk-ink-900 mt-0.5">{v || "—"}</div>
                        </div>
                      ))}
                    </div>
                    <span className="link-arrow text-[12.5px] font-semibold text-svk-green-700 mt-4 inline-flex items-center gap-1.5">Läs om rasen <IconArrowRight size={11}/></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-svk-surface-2 border-t border-svk-border py-14">
          <div className="container-svk grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow tone="orange">SVK Insight</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-3 leading-tight">Hitta din valp eller avelshund.</h2>
              <p className="text-[15.5px] text-svk-ink-600 leading-[1.6] mb-5">I Insight hittar du hanhundslistor, tiklistor, planerade parningar, provresultat och hälsodata för samtliga sju raser.</p>
              <div className="flex flex-wrap gap-2">
                <a className="btn btn-primary px-4 py-2.5 text-[13px]"><IconArrowUpRight size={12}/> Öppna SVK Insight</a>
                <a className="btn btn-ghost px-4 py-2.5 text-[13px] border border-svk-border"><IconArrowRight size={12}/> Avelsråden</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Hanhundslistor", icon: "♂" },
                { label: "Tiklistor", icon: "♀" },
                { label: "Planerade parningar", icon: "✦" },
                { label: "Provresultat & meritlistor", icon: "★" }
              ].map((c) => (
                <div key={c.label} className="bg-white border border-svk-border rounded-[10px] p-4">
                  <div className="text-svk-orange-500 font-serif text-[24px] leading-none mb-1.5">{c.icon}</div>
                  <div className="font-semibold text-[13.5px] text-svk-ink-900">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ============= STAT BAR =============
  function StatBar({ label, value, max = 10 }) {
    const pct = Math.min(100, (value / max) * 100);
    return (
      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <div className="text-[13px] text-svk-ink-700">{label}</div>
          <div className="font-mono text-[13px] tabular-nums text-svk-ink-900 font-semibold">{value.toFixed(1)}<span className="text-svk-ink-400 font-normal text-[11px]"> / {max}</span></div>
        </div>
        <div className="h-1.5 bg-svk-surface-2 rounded-full overflow-hidden">
          <div className="h-full bg-svk-green-600 rounded-full" style={{ width: pct + "%" }}/>
        </div>
      </div>
    );
  }

  // ============= DETAIL =============
  function BreedDetailPage({ slug }) {
    const breed = BREEDS.find((b) => b.slug === slug);
    if (!breed) {
      return (
        <main className="container-svk py-20 text-center">
          <h1 className="font-serif text-[40px] font-semibold text-svk-ink-900 mb-4">Rasen hittades inte</h1>
          <Link href="/raser" className="text-svk-green-700 font-semibold">← Tillbaka till alla raser</Link>
        </main>
      );
    }
    const d = BREED_DETAILS[slug] || {};
    const radList = AVELSRAD[slug] || [];
    const otherBreeds = BREEDS.filter((b) => b.slug !== slug).slice(0, 6);

    const sections = [
      { id: "om", label: "Om rasen" },
      { id: "rasstandard", label: "Rasstandard" },
      { id: "historik", label: "Historik" },
      { id: "galleri", label: "Galleri" },
      { id: "anvandning", label: "Användningsområde" },
      { id: "egenskaper", label: "Egenskaper" },
      { id: "statistik", label: "Statistik" },
      { id: "avel", label: "Avel & Insight" }
    ];
    const [active, setActive] = useState("om");

    useEffect(() => {
      const onScroll = () => {
        const cur = sections.findLast?.((s) => {
          const el = document.getElementById(s.id);
          return el && el.getBoundingClientRect().top < 220;
        });
        if (cur) setActive(cur.id);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, [slug]);

    return (
      <main data-screen-label={"Ras · " + breed.name}>
        {/* HERO */}
        <div className="relative">
          <div className="absolute inset-0">
            {breed.photoKey
              ? <Photo photoKey={breed.photoKey} className="absolute inset-0"/>
              : <PhotoPlaceholder kind={breed.photo} className="absolute inset-0"/>}
            <div className="absolute inset-0 bg-gradient-to-r from-svk-ink-900/85 via-svk-ink-900/55 to-svk-ink-900/15"/>
          </div>
          <div className="container-svk relative py-16 md:py-20">
            <Link href="/raser" className="text-[13px] text-white/75 hover:text-white inline-flex items-center gap-1.5 mb-5 no-underline">
              <IconArrowLeft size={13}/> Tillbaka till alla raser
            </Link>
            <Eyebrow tone="white" className="text-svk-orange-200 mb-3">Ras · {d.group || "FCI grupp 7"}</Eyebrow>
            <h1 className="font-serif text-[54px] md:text-[72px] font-semibold tracking-svk-tight leading-[1.02] mb-4 text-white max-w-3xl">{breed.name}</h1>
            <p className="text-[18px] text-white/85 max-w-2xl leading-[1.5]">{breed.tagline} {breed.desc}</p>
          </div>
        </div>

        {/* QUICK FACTS BAR */}
        <div className="bg-white border-b border-svk-border">
          <div className="container-svk py-6 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {[
              ["Ursprung", d.origin],
              ["Mankhöjd", d.height],
              ["Vikt", d.weight],
              ["Livslängd", d.lifespan],
              ["Reg. 2024", d.registered2024]
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-[10px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">{k}</div>
                <div className="text-[15px] text-svk-ink-900 font-[500]">{v || "—"}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STICKY TABS */}
        <div className="bg-svk-surface border-b border-svk-border sticky top-[136px] z-20">
          <div className="container-svk flex gap-1 overflow-x-auto">
            {sections.map((s) => (
              <a
                key={s.id}
                href={"#" + s.id}
                onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                className={"px-4 py-3.5 text-[13px] font-semibold whitespace-nowrap cursor-pointer relative " + (active === s.id ? "text-svk-green-700" : "text-svk-ink-700 hover:text-svk-green-700")}
              >
                {s.label}
                {active === s.id && <span className="absolute left-4 right-4 -bottom-px h-[2px] bg-svk-green-600"/>}
              </a>
            ))}
          </div>
        </div>

        {/* CONTENT GRID */}
        <section className="container-svk py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div className="space-y-16 min-w-0">
            {/* OM */}
            <div id="om" className="scroll-mt-[200px]">
              <Eyebrow>Om rasen</Eyebrow>
              <h2 className="font-serif text-[34px] md:text-[40px] font-semibold text-svk-ink-900 tracking-svk-tight mt-3 mb-4 leading-[1.05]">{breed.name} i korthet.</h2>
              {d.historik?.[0] && (
                <p className="text-[17px] text-svk-ink-700 leading-[1.6] mb-8 max-w-3xl font-[500]">{d.historik[0]}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  ["Päls", d.coat],
                  ["Färger", d.colors],
                  ["Mankhöjd", d.height],
                  ["Vikt", d.weight],
                  ["Ursprung", d.origin],
                  ["Livslängd", d.lifespan]
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-svk-border pb-3">
                    <div className="text-[11px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">{k}</div>
                    <div className="text-[15px] text-svk-ink-900">{v || "—"}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RASSTANDARD */}
            <div id="rasstandard" className="scroll-mt-[200px] bg-svk-surface-2 border border-svk-border rounded-[10px] p-7">
              <Eyebrow>Rasstandard</Eyebrow>
              <h2 className="font-serif text-[28px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-3">{d.group || "FCI grupp 7"} — Stående fågelhundar</h2>
              <p className="text-[15px] text-svk-ink-700 leading-[1.6] mb-5 max-w-2xl">Den fullständiga rasstandarden — med detaljerad beskrivning av huvud, kropp, päls, rörelser och fel — publiceras av SKK i samråd med FCI.</p>
              <div className="flex flex-wrap gap-2">
                <a className="btn btn-primary px-4 py-2.5 text-[13px]"><IconFile size={12}/> Rasstandard {breed.name} (PDF)</a>
                <a className="btn btn-ghost px-4 py-2.5 text-[13px] border border-svk-border"><IconExternal size={12}/> Standarden hos SKK</a>
              </div>
            </div>

            {/* HISTORIK */}
            <div id="historik" className="scroll-mt-[200px]">
              <Eyebrow>Historik</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-5">Från {d.origin || "Tyskland"} till Sverige.</h2>
              <div className="prose-svk max-w-[680px]">
                {(d.historik || []).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {/* GALLERI */}
            <div id="galleri" className="scroll-mt-[200px]">
              <Eyebrow>Galleri</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-3">{breed.name} i arbete.</h2>
              <p className="text-[15.5px] text-svk-ink-600 leading-[1.6] mb-6 max-w-2xl">Bilder från medlemmars provdagar, jakt och vardag — ett urval ur klubbens fotoarkiv.</p>

              {(() => {
                const tiles = [
                  { caption: "Stånd för fågel", photographer: "Jonas Berg", photoKey: breed.photoKey, kind: "field", featured: true },
                  { caption: "I fjället",        photographer: "Anna Lind",   kind: "tundra" },
                  { caption: "Apportering",      photographer: "Erik Nordin", kind: "lake" },
                  { caption: "På blodspår",      photographer: "Petra Holm",  kind: "forest" },
                  { caption: "Vinterjakt",       photographer: "Karl Wahl",   kind: "autumn", photoKey: "vinter-jakt" },
                  { caption: "Familjemedlem",   photographer: "Sofia Ek",     kind: "dog" }
                ];
                return (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                    {tiles.map((t, i) => (
                      <div key={i} className={"relative overflow-hidden rounded-[8px] bg-svk-ink-900 group " + (t.featured ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[420px]" : "aspect-[4/3]")}>
                        {t.photoKey
                          ? <Photo photoKey={t.photoKey} className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"/>
                          : <PhotoPlaceholder kind={t.kind} className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"/>}
                        <div className="absolute inset-0 bg-gradient-to-t from-svk-ink-900/70 via-svk-ink-900/10 to-transparent"/>
                        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end justify-between gap-2">
                          <div className="font-serif text-white text-[15px] md:text-[18px] font-semibold tracking-svk-tight leading-tight drop-shadow-md">{t.caption}</div>
                          <div className="text-[10px] text-white/70 font-mono uppercase tracking-wider whitespace-nowrap hidden md:block">© {t.photographer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}

              <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
                <p className="text-[12.5px] text-svk-ink-500 leading-snug max-w-md">Foton publiceras med fotografens tillstånd. Vill du bidra? Skicka högupplösta bilder till <span className="text-svk-green-700">foto@vorsteh.se</span>.</p>
                <a className="btn btn-ghost px-3 py-1.5 text-[12px] border border-svk-border text-svk-ink-700">Visa hela arkivet <IconExternal size={11}/></a>
              </div>
            </div>

            {/* ANVÄNDNING */}
            <div id="anvandning" className="scroll-mt-[200px]">
              <Eyebrow>Användningsområde</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-5">En allroundjägares hund.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(d.anvandning || []).map((u, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-svk-border rounded-[10px] p-4">
                    <div className="w-7 h-7 rounded-full bg-svk-green-100 text-svk-green-700 inline-flex items-center justify-center font-mono text-[12px] font-bold shrink-0">{i + 1}</div>
                    <div className="text-[14.5px] text-svk-ink-800 leading-snug pt-1">{u}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* EGENSKAPER + BRA ATT VETA */}
            <div id="egenskaper" className="scroll-mt-[200px]">
              <Eyebrow>Särskilda egenskaper</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-5">Vad utmärker {breed.name.toLowerCase()}?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {(d.egenskaper || []).map((e, i) => (
                  <div key={i} className="bg-white border border-svk-border rounded-[10px] p-5">
                    <div className="font-serif text-[18px] font-semibold text-svk-ink-900 tracking-svk-tight mb-1.5">{e.title}</div>
                    <div className="text-[13.5px] text-svk-ink-700 leading-relaxed">{e.desc}</div>
                  </div>
                ))}
              </div>

              <Eyebrow>Bra att veta</Eyebrow>
              <h3 className="font-serif text-[24px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-4">Innan du skaffar.</h3>
              <ul className="space-y-2.5">
                {(d.bra || []).map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14.5px] text-svk-ink-800 leading-snug">
                    <span className="text-svk-orange-500 mt-[7px] shrink-0">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* STATISTIK */}
            <div id="statistik" className="scroll-mt-[200px]">
              <Eyebrow>Statistik</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-2">Genomsnittliga jaktprovsbedömningar.</h2>
              <p className="text-[14px] text-svk-ink-500 mb-6">Medelvärden över de senaste 3 åren · provresultat från SVK Insight.</p>
              <div className="bg-white border border-svk-border rounded-[10px] p-7 shadow-svk-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                  {(d.pollStats || []).map((s, i) => <StatBar key={i} {...s}/>)}
                </div>
                <div className="mt-7 pt-5 border-t border-svk-border grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">Aktiva hanar</div>
                    <div className="font-serif text-[24px] font-semibold text-svk-ink-900 tabular-nums">{d.activeStuds || "—"}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">Aktiva tikar</div>
                    <div className="font-serif text-[24px] font-semibold text-svk-ink-900 tabular-nums">{d.activeBitches || "—"}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-svk-ink-500 font-semibold mb-1">Avelsplaner</div>
                    <div className="font-serif text-[24px] font-semibold text-svk-ink-900 tabular-nums">{d.breedingPlans || "—"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AVEL & INSIGHT */}
            <div id="avel" className="scroll-mt-[200px]">
              <Eyebrow>Avel &amp; Insight</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-5">Avelsdata och kontaktvägar.</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Hanhundslista", desc: "Aktiva avelshanar med meriter och hälsa.", count: d.activeStuds },
                  { label: "Tiklista", desc: "Aktiva tikar registrerade för avel.", count: d.activeBitches },
                  { label: "Planerade parningar", desc: "Aktuella kullar — anmäl intresse.", count: d.breedingPlans }
                ].map((l) => (
                  <a key={l.label} className="bg-white border border-svk-border rounded-[10px] p-5 hover:shadow-svk-md transition-shadow cursor-pointer no-underline group">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-[15px] text-svk-ink-900">{l.label}</div>
                      <IconArrowUpRight size={14} className="text-svk-ink-400 group-hover:text-svk-orange-500 transition-colors"/>
                    </div>
                    <div className="text-[12.5px] text-svk-ink-600 leading-snug mb-3">{l.desc}</div>
                    <div className="flex items-center justify-between pt-3 border-t border-svk-border">
                      <span className="text-[11px] uppercase tracking-[0.12em] text-svk-orange-500 font-semibold">SVK Insight</span>
                      <span className="font-mono text-[12.5px] tabular-nums font-semibold text-svk-ink-900">{l.count || "—"}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-white border border-svk-border rounded-[10px] p-6">
                <Eyebrow tone="muted" className="mb-3">Avelsråd</Eyebrow>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {radList.map((r) => (
                    <div key={r.email} className="flex gap-4">
                      <div className={"w-12 h-12 rounded-full inline-flex items-center justify-center font-semibold text-[14px] shrink-0 " + (AVATAR_TONES[r.tone] || AVATAR_TONES.stone)}>{r.initials}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[15px] text-svk-ink-900">{r.name}</div>
                        <div className="text-[12.5px] text-svk-green-700 font-semibold">Avelsråd · {breed.name}</div>
                        <div className="mt-2 space-y-1 text-[13px]">
                          <a href={"mailto:" + r.email} className="flex items-center gap-2 text-svk-ink-700 hover:text-svk-green-700 no-underline"><IconMail size={12} className="text-svk-ink-400"/> {r.email}</a>
                          <a href={"tel:" + r.phone.replace(/\s/g,"")} className="flex items-center gap-2 text-svk-ink-700 hover:text-svk-green-700 no-underline"><IconPhone size={12} className="text-svk-ink-400"/> {r.phone}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-4 lg:sticky lg:top-[200px]">
            <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
              <Eyebrow tone="muted" className="mb-2">SVK Insight</Eyebrow>
              <div className="text-[13px] text-svk-ink-600 leading-snug mb-4 mt-2">Klubbens databas för provresultat, avel och hälsodata.</div>
              <div className="space-y-1">
                {[
                  ["Hanhundslista", "stud"],
                  ["Tiklista", "bitch"],
                  ["Planerade parningar", "plans"],
                  ["Provresultat", "results"],
                  ["Hälsoindex (HD/AD)", "health"]
                ].map(([label]) => (
                  <a key={label} className="flex items-center justify-between py-2 px-1 text-[13.5px] text-svk-ink-800 hover:text-svk-orange-600 cursor-pointer no-underline border-b border-svk-border last:border-b-0">
                    <span>{label}</span>
                    <IconExternal size={11} className="text-svk-ink-400"/>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
              <Eyebrow tone="muted" className="mb-2">Dokument</Eyebrow>
              <div className="space-y-1 mt-2">
                {[
                  { name: "Rasstandard " + breed.name, type: "PDF", size: "245 KB" },
                  { name: "RAS — rasspecifik avelsstrategi", type: "PDF", size: "1.2 MB" },
                  { name: "Hälsoenkät 2024", type: "PDF", size: "186 KB" },
                  { name: "Mentalbeskrivning MH", type: "PDF", size: "92 KB" }
                ].map((doc, i) => (
                  <a key={i} className="flex items-center justify-between py-2 text-[13px] text-svk-ink-800 hover:text-svk-green-700 cursor-pointer no-underline border-b border-svk-border last:border-b-0">
                    <span className="flex items-center gap-2 min-w-0"><IconFile size={12} className="text-svk-ink-400 shrink-0"/> <span className="truncate">{doc.name}</span></span>
                    <span className="text-[10.5px] text-svk-ink-400 whitespace-nowrap pl-2">{doc.type}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
              <Eyebrow tone="muted" className="mb-2">Relaterade länkar</Eyebrow>
              <div className="space-y-1 mt-2">
                <Link href="/provform/jaktprov" className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border no-underline">Jaktprov <IconArrowRight size={11} className="text-svk-ink-400"/></Link>
                <Link href="/provform/utstallning" className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border no-underline">Utställning <IconArrowRight size={11} className="text-svk-ink-400"/></Link>
                <a className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border no-underline cursor-pointer">Köpa valp — checklista <IconArrowRight size={11} className="text-svk-ink-400"/></a>
                <a className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 no-underline cursor-pointer">Uppfödarlista <IconArrowRight size={11} className="text-svk-ink-400"/></a>
              </div>
            </div>

            <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
              <Eyebrow tone="muted" className="mb-2">Andra raser</Eyebrow>
              <div className="space-y-1 mt-2">
                {otherBreeds.map((b) => (
                  <Link key={b.slug} href={"/raser/" + b.slug} className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border last:border-b-0 no-underline">
                    <span>{b.name}</span>
                    <IconChevronRight size={12} className="text-svk-ink-400"/>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    );
  }

  Object.assign(window, { BreedHubPage, BreedDetailPage, BREED_DETAILS });
})();
