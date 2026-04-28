// Provform-mall: Jaktprov, Eftersöksprov, Fullbruksprov, Viltspår, Utställning
(function () {
  "use strict";
  const { useState, useEffect, useRef, useMemo } = React;

  // ============= DATA =============
  const PROVFORMER = {
    jaktprov: {
      slug: "jaktprov",
      eyebrow: "Provform",
      title: "Jaktprov",
      headline: "Hjärtat i klubbens verksamhet.",
      tagline: "Bedömning av jaktegenskaper i fält, fjäll och skog — grunden för avel och meritering.",
      photoKey: "fjalljakt",
      accent: "green",
      heroDesc: "Jaktprov är hjärtat i Vorstehklubbens verksamhet. Hundens medfödda jaktegenskaper bedöms i naturlig terräng under en provdag.",
      what: [
        "På jaktprov bedöms hundens förmåga att söka, finna, ta stånd för och resa fågel — egenskaper som bygger på medfödd anlag och samspelet med föraren.",
        "Proven arrangeras i fyra discipliner: fält, fjäll, skog och vatten. Beroende på terräng och årstid varierar både viltarter och bedömningskriterier.",
        "Domarna ger pris (1:a, 2:a, 3:e) eller 0:a och bedömer egenskaper som söksättning, vidd, fart, stil och stånd. Resultaten publiceras i SVK Insight."
      ],
      classes: [
        { name: "Unghundsklass (UKL)", cols: { "Ålder": "9–24 mån", "Antal släpp": "2", "Provtid": "30 min", "Krav": "Anlag" } },
        { name: "Öppenklass (ÖKL)", cols: { "Ålder": "Från 15 mån", "Antal släpp": "2–3", "Provtid": "45 min", "Krav": "1:a UKL eller direkt" } },
        { name: "Elitklass (EKL)", cols: { "Ålder": "Från 15 mån", "Antal släpp": "3", "Provtid": "60 min", "Krav": "1:a ÖKL" } }
      ],
      upcoming: [
        { date: "14 mars", title: "Vårprov Mellansvenska", loc: "Västerås", price: "750 kr" },
        { date: "22 augusti", title: "Skogsprov Bottenviken", loc: "Luleå", price: "750 kr" },
        { date: "12 september", title: "Fältprov Södra", loc: "Skåne", price: "850 kr" }
      ],
      contact: { role: "Jaktprovs­ansvarig", name: "Erik Nordin", email: "jaktprov@vorsteh.se", phone: "+46 70 123 45 67" },
      docs: [
        { name: "Anmälningsformulär jaktprov", size: "245 KB", type: "PDF" },
        { name: "Regelverk 2025", size: "198 KB", type: "PDF" },
        { name: "Domarinstruktion", size: "302 KB", type: "PDF" }
      ],
      faq: [
        { q: "Vilken klass ska min hund börja i?", a: "Unghundsklass, om hunden är mellan 9 och 24 månader. Annars öppenklass." },
        { q: "Kan jag delta utan att vara medlem?", a: "Ja, men medlemmar betalar en lägre anmälningsavgift och får företräde vid lottning." },
        { q: "Vad händer vid 0-pris?", a: "Provet räknas men ger ingen merit. Du får domarens kommentar och kan starta igen." }
      ],
      illustrations: null,
    },

    eftersoksprov: {
      slug: "eftersoksprov",
      eyebrow: "Provform",
      title: "Eftersöksprov",
      headline: "Spårning för viltvård och jägar­ansvar.",
      tagline: "Hundens förmåga att spåra skadeskjutet vilt över längre sträcka.",
      photoKey: "vinter-jakt",
      accent: "green",
      heroDesc: "Eftersöksprov testar hundens förmåga att spåra skadeskjutet vilt över längre sträckor. Detta är en avgörande färdighet för att minimera viltets lidande och säkerställa att inget vilt går förlorat.",
      what: [
        "Eftersöksprov är en provform som utvärderar viktiga jaktfärdigheter där en van spårhund är avgörande att ha. Provet utförs på naturligt blodspår som lagts ut i naturlig terräng för att efterlikna en verklig eftersökssituation.",
        "Spåret läggs med blod av vildsvin eller annat vilt och har ofta vinklar och uppehåll, samt skotttrening för att simulera realistiska scenarier. Hundens uppgift är att fullfölja spåret från start till skadeplats, med eller utan markörer.",
        "I anlagsklass går hund och förare tillsammans. I öppenklass arbetar hunden själv, frikopplad eller på lina."
      ],
      classes: [
        { name: "Anlagsklass", cols: { "Ålder": "9 månader", "Kvalifikationskrav": "—", "Spårlängd": "600 m", "Ligg tid": "3–4 h", "Max poäng": "75 hp" } },
        { name: "Öppenklass", cols: { "Ålder": "9 månader", "Kvalifikationskrav": "Godkänd anlagsklass", "Spårlängd": "600 m", "Ligg tid": "12–24 h", "Max poäng": "20 hp" } }
      ],
      upcoming: [
        { date: "22 februari", title: "Tysnes naturreservat", loc: "Göteborg", price: "N/A" },
        { date: "16 mars", title: "Tyresta nationalpark", loc: "Stockholm", price: "N/A" },
        { date: "5 april", title: "Söderåsens nationalpark", loc: "Eslöv", price: "N/A" }
      ],
      contact: { role: "Eftersöks­ansvarig", name: "Ola Sjöström", email: "eftersok@vorsteh.se", phone: "+46 70 234 56 78" },
      docs: [
        { name: "Anmälningsformulär", size: "245 KB", type: "PDF" },
        { name: "Regelverk 2025", size: "198 KB", type: "PDF" },
        { name: "Tids­hjul norma", size: "98 KB", type: "PDF" }
      ],
      faq: [
        { q: "Hur långt är spåret?", a: "600 meter i båda klasser. Spåret ligger 3–4 timmar i anlagsklass och 12–24 timmar i öppenklass." },
        { q: "Behöver hunden tidigare meriter?", a: "Anlagsklass kräver inga meriter. Öppenklass kräver godkänt resultat i anlagsklass." }
      ],
      illustrations: [
        {
          title: "Förslag till spårläggning, anlagsklass",
          meta: { "Spår": "Längd 600–700 meter", " ": "Ålder 2–5 timmar" },
          shape: "anlag"
        },
        {
          title: "Förslag till spårläggning, öppen klass",
          meta: { "Spår": "Längd 600–700 meter", " ": "Ålder 12–24 timmar och nattgammalt" },
          shape: "oppen"
        }
      ]
    },

    fullbruksprov: {
      slug: "fullbruksprov",
      eyebrow: "Provform",
      title: "Fullbruksprov",
      headline: "Den mest krävande disciplinen.",
      tagline: "Den ultimata mångsidighetsprövningen — fält, vatten, spår och apportering.",
      photoKey: "field",
      accent: "green",
      heroDesc: "Fullbruksprov är jaktprovens mest krävande disciplin — hunden bedöms i fält, på vatten, på blodspår och i apportering över två dagar.",
      what: [
        "Fullbruksprov är ett två­dagars allroundprov där hundens samtliga jaktegenskaper sätts på prov i samma helhet. Det krävs att hunden visar både fältarbete med fågel, vattenarbete med simning och apportering, samt blodspår.",
        "Provet bygger på den tyska VGP-traditionen och är den högsta titeln för bruks­hund inom kontinentala stående fågelhundar. En hund som klarar Fullbruksprov med 1:a pris bedöms ha hela registret av medfödda och dresserade egenskaper.",
        "Lottning sker per säsong och deltagarantalet är begränsat. Föraren ska visa både disciplin och samspel — provet är lika mycket en bedömning av föraren som av hunden."
      ],
      classes: [
        { name: "Anlagsklass", cols: { "Ålder": "Från 15 mån", "Provdagar": "2", "Moment": "10+", "Krav": "1:a ÖKL jaktprov" } },
        { name: "Öppenklass", cols: { "Ålder": "Från 18 mån", "Provdagar": "2", "Moment": "12+", "Krav": "Godkänd anlagsklass" } }
      ],
      upcoming: [
        { date: "15 augusti", title: "Fullbruksprov Mellansvenska", loc: "Örebro", price: "1 450 kr" },
        { date: "12 september", title: "Fullbruksprov Södra", loc: "Hässleholm", price: "1 450 kr" }
      ],
      contact: { role: "Fullbruks­ansvarig", name: "Henrik Lund", email: "fullbruks@vorsteh.se", phone: "+46 70 345 67 89" },
      docs: [
        { name: "Anmälningsformulär", size: "289 KB", type: "PDF" },
        { name: "Regelverk fullbruksprov 2025", size: "412 KB", type: "PDF" },
        { name: "Bedömningsmoment översikt", size: "156 KB", type: "PDF" }
      ],
      faq: [
        { q: "Vilka raser kan delta?", a: "Samtliga sju raser inom SVK. Fullbruksprov är öppet för alla kontinentala stående fågelhundar." },
        { q: "Hur många moment ingår?", a: "Tio till tolv moment fördelade över två provdagar — fältarbete, vattenarbete, blodspår och apportering." }
      ],
      illustrations: null
    },

    viltspar: {
      slug: "viltspar",
      eyebrow: "Provform",
      title: "Viltspår",
      headline: "Spårförmåga som meriterar championat.",
      tagline: "Bedömning av spårförmåga på upplagt blodspår — meriterande för championat.",
      photoKey: "forest",
      accent: "green",
      heroDesc: "Viltspårprov är ett särskilt prov för spårförmåga, oberoende av ras eller jakttillämpning. Resultatet meriterar för viltspårchampionat (SE VCH).",
      what: [
        "På viltspårprov bedöms hundens förmåga att följa ett upplagt blodspår från ut­lägg till markerat fynd. Provet är öppet för alla raser och förekommer i två klasser — anlag och öppen.",
        "Spåret läggs med 2–3 dl klövviltsblod över ett antal hundra meter, med vinklar, uppehåll och en eller två blodpölar. I öppenklass är spåret också nattgammalt och därmed svalare.",
        "Provet är en utmärkt grundskola för eftersöks­hundar — och det är meriterande för championat: tre 1:a-pris i öppenklass kvalificerar för SE VCH."
      ],
      classes: [
        { name: "Anlagsklass", cols: { "Ålder": "9 månader", "Spårlängd": "600 m", "Ålder spår": "2–3 h", "Vinklar": "3", "Uppehåll": "2" } },
        { name: "Öppenklass", cols: { "Ålder": "9 månader", "Spårlängd": "600 m", "Ålder spår": "Nattgammalt", "Vinklar": "4", "Uppehåll": "3" } }
      ],
      upcoming: [
        { date: "1 januari", title: "Viltspårprov i Luleå", loc: "Luleå", price: "650 kr" },
        { date: "12 maj", title: "Viltspårprov Östra", loc: "Uppsala", price: "650 kr" },
        { date: "8 juni", title: "Viltspårprov Västsvenska", loc: "Borås", price: "650 kr" }
      ],
      contact: { role: "Viltspårs­ansvarig", name: "Petra Lindqvist", email: "viltspar@vorsteh.se", phone: "+46 70 456 78 90" },
      docs: [
        { name: "Anmälningsformulär viltspår", size: "212 KB", type: "PDF" },
        { name: "Regelverk SKK", size: "289 KB", type: "PDF" }
      ],
      faq: [
        { q: "Kan alla raser starta?", a: "Ja. Viltspårprov är öppet för alla raser registrerade i SKK." },
        { q: "Vad krävs för championat?", a: "Tre 1:a-pris i öppenklass för minst två olika domare ger SE VCH." }
      ],
      illustrations: [
        {
          title: "Spårläggning anlagsklass",
          meta: { "Spår": "600 m, 3 vinklar", " ": "Ålder 2–3 timmar" },
          shape: "anlag"
        }
      ]
    },

    utstallning: {
      slug: "utstallning",
      eyebrow: "Provform",
      title: "Utställning",
      headline: "Exteriör enligt rasstandard.",
      tagline: "Exteriörbedömning av rasens typ, byggnad och rörelse — grunden för avel.",
      photoKey: "pointer-fjall",
      accent: "green",
      heroDesc: "På utställning bedömer auktoriserade exteriördomare hundens överens­stämmelse med rasstandarden. Resultaten är meriterande för championat och en viktig pusselbit i avelsarbetet.",
      what: [
        "Hundutställning är en bedömning av exteriör — rastyp, kropp, päls, rörelser och mentalitet. Domaren går igenom hunden enligt rasstandard och delar ut kvalitets­pris (Excellent, Very Good, Good, Sufficient).",
        "Bästa hundar i varje klass möts i bästa hane- och tikgrupp. Den bästa konkurrerar om CK (certifikat­kvalitet) och cert. Tre cert under tre olika domare ger SE UCH.",
        "Vorstehklubbens egen Riksutställning hålls varje försommar och samlar samtliga sju raser. Däremellan arrangeras både avdelnings- och officiella SKK-utställningar runt om i landet."
      ],
      classes: [
        { name: "Valpklass", cols: { "Ålder": "4–6 / 6–9 mån", "Pris": "Hederspris", "Cert": "—" } },
        { name: "Junior", cols: { "Ålder": "9–18 mån", "Pris": "Excellent etc.", "Cert": "Ja" } },
        { name: "Unghund", cols: { "Ålder": "15–24 mån", "Pris": "Excellent etc.", "Cert": "Ja" } },
        { name: "Öppen", cols: { "Ålder": "Från 15 mån", "Pris": "Excellent etc.", "Cert": "Ja" } },
        { name: "Champion", cols: { "Ålder": "—", "Pris": "Excellent etc.", "Cert": "Ja" } },
        { name: "Veteran", cols: { "Ålder": "Från 8 år", "Pris": "Hederspris", "Cert": "—" } }
      ],
      upcoming: [
        { date: "27 maj", title: "Riksutställning Södra", loc: "Borås", price: "550 kr" },
        { date: "14 juni", title: "Sommar­utställning Östra", loc: "Uppsala", price: "450 kr" },
        { date: "29 augusti", title: "Höst­utställning Mellansvenska", loc: "Karlstad", price: "450 kr" }
      ],
      contact: { role: "Utställnings­ansvarig", name: "Karin Sjöberg", email: "utstallning@vorsteh.se", phone: "+46 70 234 56 78" },
      docs: [
        { name: "Anmälan utställning", size: "187 KB", type: "PDF" },
        { name: "Rasstandarder (samtliga)", size: "1.4 MB", type: "PDF" },
        { name: "Domararvoden 2025", size: "92 KB", type: "PDF" }
      ],
      faq: [
        { q: "Behöver hunden vara registrerad?", a: "Ja, i SKK eller motsvarande utlandsregister. ID-märkning är obligatorisk." },
        { q: "Får jag ta med flera hundar?", a: "Ja, men anmäl varje hund separat och räkna med tid mellan ringarna." },
        { q: "Vad krävs för svenskt championat?", a: "Tre cert under tre olika domare, varav minst ett efter två års ålder." }
      ],
      illustrations: null
    }
  };

  const PROVFORM_LIST = ["jaktprov", "eftersoksprov", "fullbruksprov", "viltspar", "utstallning"];
  const PROVFORM_LABEL = {
    jaktprov: "Jaktprov",
    eftersoksprov: "Eftersöksprov",
    fullbruksprov: "Fullbruksprov",
    viltspar: "Viltspår",
    utstallning: "Utställning"
  };

  // ============= ILLUSTRATIONS =============
  function SparIllustration({ shape }) {
    if (shape === "anlag") {
      return (
        <svg viewBox="0 0 360 200" className="w-full h-auto">
          <rect x="0" y="0" width="360" height="200" fill="#f5eed4"/>
          <path d="M 60 50 L 60 130 L 200 130 L 200 80 L 290 80" fill="none" stroke="#a48527" strokeWidth="2" strokeLinejoin="miter" strokeLinecap="square" strokeDasharray="0"/>
          <g fontFamily="ui-sans-serif, system-ui" fontSize="10" fill="#5d4d1c">
            <text x="50" y="42">✕ Spårstart markerad</text>
            <text x="80" y="148">Blodupphäll ca 20 m</text>
            <text x="262" y="98">✕ Spårslut</text>
          </g>
          <circle cx="60" cy="50" r="3" fill="#a48527"/>
          <circle cx="290" cy="80" r="3" fill="#a48527"/>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 360 240" className="w-full h-auto">
        <rect x="0" y="0" width="360" height="240" fill="#f5eed4"/>
        <path d="M 50 60 L 50 130 L 130 130 L 130 90 L 230 90 L 230 160 L 290 160 L 290 200" fill="none" stroke="#a48527" strokeWidth="2" strokeLinecap="square"/>
        <rect x="20" y="55" width="50" height="30" fill="none" stroke="#a48527" strokeWidth="1" strokeDasharray="3 3"/>
        <g fontFamily="ui-sans-serif, system-ui" fontSize="9.5" fill="#5d4d1c">
          <text x="20" y="42">Inkommande oblödat spår</text>
          <text x="22" y="106">Sårruta 25x25</text>
          <text x="148" y="84">Blodupphäll ca 20 m</text>
          <text x="148" y="116">Återgång ca 15 m</text>
          <text x="240" y="120">Blodupphäll ca 20 m</text>
          <text x="240" y="180">Skotttrening 50–100 m från spårslut</text>
          <text x="280" y="220">✕ Spårslut</text>
          <text x="80" y="160">Blodupphäll ca 20 m</text>
        </g>
        <circle cx="290" cy="200" r="3" fill="#a48527"/>
      </svg>
    );
  }

  // ============= SUB-SECTIONS =============
  function HeroSection({ pf }) {
    return (
      <div className="relative">
        <div className="absolute inset-0">
          <Photo photoKey={pf.photoKey} className="absolute inset-0"/>
          <div className="absolute inset-0 bg-gradient-to-r from-svk-ink-900/85 via-svk-ink-900/65 to-svk-ink-900/30"/>
        </div>
        <div className="container-svk relative py-16 md:py-20">
          <Link href="/aktiviteter" className="text-[13px] text-white/75 hover:text-white inline-flex items-center gap-1.5 mb-5 no-underline">
            <IconArrowLeft size={13}/> Tillbaka till Jakt &amp; utställning
          </Link>
          <Eyebrow tone="white" className="text-svk-orange-200 mb-3">{pf.eyebrow}</Eyebrow>
          <h1 className="font-serif text-[54px] md:text-[68px] font-semibold tracking-svk-tight leading-[1.02] mb-4 text-white">{pf.title}</h1>
          <p className="text-[18px] text-white/85 max-w-2xl leading-[1.5]">{pf.tagline}</p>
        </div>
      </div>
    );
  }

  function StickyTabs({ sections, active, onPick }) {
    return (
      <div className="bg-svk-surface border-b border-svk-border sticky top-[136px] z-20">
        <div className="container-svk flex gap-1 overflow-x-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={"#" + s.id}
              onClick={(e) => { e.preventDefault(); onPick(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className={"px-4 py-3.5 text-[13px] font-semibold whitespace-nowrap cursor-pointer relative " + (active === s.id ? "text-svk-green-700" : "text-svk-ink-700 hover:text-svk-green-700")}
            >
              {s.label}
              {active === s.id && <span className="absolute left-4 right-4 -bottom-px h-[2px] bg-svk-green-600"/>}
            </a>
          ))}
        </div>
      </div>
    );
  }

  function Sidebar({ pf, otherProvformer }) {
    return (
      <aside className="space-y-4 lg:sticky lg:top-[200px]">
        <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
          <Eyebrow tone="muted" className="mb-2">Andra provformer</Eyebrow>
          <div className="space-y-1 mt-3">
            {otherProvformer.map((s) => (
              <Link key={s} href={"/provform/" + s} className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border last:border-b-0 no-underline">
                <span>{PROVFORM_LABEL[s]}</span>
                <IconChevronRight size={12} className="opacity-50"/>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
          <Eyebrow tone="muted" className="mb-2">Kommande {pf.title.toLowerCase()}</Eyebrow>
          <div className="space-y-3 mt-3">
            {pf.upcoming.map((u, i) => (
              <div key={i} className="flex items-start gap-3 py-1">
                <div className="bg-svk-surface-2 border border-svk-border rounded-md px-2 py-1.5 text-center min-w-[52px]">
                  <div className="text-[11px] font-semibold text-svk-ink-700 leading-none">{u.date.split(" ")[0]}</div>
                  <div className="text-[10px] text-svk-ink-500 mt-0.5 uppercase tracking-wider">{u.date.split(" ")[1]}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[13px] text-svk-ink-900 leading-tight truncate">{u.title}</div>
                  <div className="text-[11.5px] text-svk-ink-500 mt-0.5">{u.loc}</div>
                </div>
                <div className="text-[11.5px] font-semibold text-svk-green-700 whitespace-nowrap pt-1.5">{u.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
          <Eyebrow tone="muted" className="mb-2">{pf.contact.role}</Eyebrow>
          <div className="font-semibold text-[14.5px] text-svk-ink-900 mt-2">{pf.contact.name}</div>
          <div className="space-y-1.5 mt-2 text-[13px]">
            <a href={"mailto:" + pf.contact.email} className="flex items-center gap-2 text-svk-ink-700 hover:text-svk-green-700 no-underline">
              <IconMail size={12} className="text-svk-ink-400"/> {pf.contact.email}
            </a>
            <a href={"tel:" + pf.contact.phone.replace(/\s/g,"")} className="flex items-center gap-2 text-svk-ink-700 hover:text-svk-green-700 no-underline">
              <IconPhone size={12} className="text-svk-ink-400"/> {pf.contact.phone}
            </a>
          </div>
        </div>

        <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
          <Eyebrow tone="muted" className="mb-2">Användbara länkar</Eyebrow>
          <div className="space-y-1 mt-3">
            <a className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border cursor-pointer no-underline">Provregler SKK <IconExternal size={11} className="opacity-50"/></a>
            <a className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 border-b border-svk-border cursor-pointer no-underline">Tävlings­logiken <IconExternal size={11} className="opacity-50"/></a>
            <a className="flex items-center justify-between py-2 text-[13.5px] text-svk-ink-800 hover:text-svk-green-700 cursor-pointer no-underline">Våra hundraser <IconArrowRight size={11} className="opacity-50"/></a>
          </div>
        </div>

        <div className="bg-white border border-svk-border rounded-[10px] p-5 shadow-svk-xs">
          <Eyebrow tone="muted" className="mb-2">Dokument</Eyebrow>
          <div className="space-y-1 mt-3">
            {pf.docs.map((d, i) => (
              <a key={i} className="flex items-center justify-between py-2 text-[13px] text-svk-ink-800 hover:text-svk-green-700 cursor-pointer no-underline border-b border-svk-border last:border-b-0">
                <span className="flex items-center gap-2 min-w-0"><IconFile size={12} className="text-svk-ink-400 shrink-0"/> <span className="truncate">{d.name}</span></span>
                <span className="text-[11px] text-svk-ink-400 whitespace-nowrap pl-2">{d.type} · {d.size}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  function ClassesTable({ classes }) {
    return (
      <div className="space-y-5">
        {classes.map((c, i) => {
          const cols = Object.entries(c.cols);
          return (
            <div key={i} className="bg-white border border-svk-border rounded-[10px] overflow-hidden shadow-svk-xs">
              <div className="bg-svk-surface-2 border-b border-svk-border px-5 py-3">
                <div className="font-serif text-[18px] font-semibold text-svk-ink-900 tracking-svk-tight">{c.name}</div>
              </div>
              <div className="grid" style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` }}>
                {cols.map(([k, v], j) => (
                  <div key={j} className={"px-5 py-3.5 " + (j > 0 ? "border-l border-svk-border" : "")}>
                    <div className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-svk-ink-500 mb-1">{k.trim() || "—"}</div>
                    <div className="text-[14px] text-svk-ink-900">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function FaqList({ faq }) {
    const [open, setOpen] = useState(0);
    return (
      <div className="bg-white border border-svk-border rounded-[10px] divide-y divide-svk-border shadow-svk-xs">
        {faq.map((f, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-svk-surface-2 transition-colors">
              <span className="font-semibold text-[15px] text-svk-ink-900">{f.q}</span>
              <IconChevronDown size={14} className={"text-svk-ink-500 shrink-0 transition-transform " + (open === i ? "rotate-180" : "")}/>
            </button>
            {open === i && <div className="px-5 pb-4 text-[14.5px] text-svk-ink-700 leading-relaxed">{f.a}</div>}
          </div>
        ))}
      </div>
    );
  }

  // ============= MAIN PAGE =============
  function ProvformPage({ slug }) {
    const pf = PROVFORMER[slug] || PROVFORMER.jaktprov;
    const sections = [
      { id: "om", label: "Om provet" },
      { id: "klasser", label: "Klasser & krav" },
      ...(pf.illustrations ? [{ id: "sparlaggning", label: "Spårläggning" }] : []),
      { id: "kommande", label: "Kommande prov" },
      { id: "faq", label: "Vanliga frågor" }
    ];
    const [active, setActive] = useState("om");
    const otherProvformer = PROVFORM_LIST.filter((s) => s !== pf.slug);

    useEffect(() => {
      const onScroll = () => {
        const cur = sections.findLast?.((s) => {
          const el = document.getElementById(s.id);
          return el && el.getBoundingClientRect().top < 220;
        }) || sections.find((s) => {
          const el = document.getElementById(s.id);
          return el && el.getBoundingClientRect().top < 220;
        });
        if (cur) setActive(cur.id);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, [pf.slug]);

    return (
      <main data-screen-label={"Provform · " + pf.title}>
        <HeroSection pf={pf}/>
        <StickyTabs sections={sections} active={active} onPick={setActive}/>

        <section className="container-svk py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div className="space-y-16">
            {/* Vad är provet? */}
            <div id="om" className="scroll-mt-[200px]">
              <Eyebrow>Om {pf.title.toLowerCase()}</Eyebrow>
              <h2 className="font-serif text-[36px] md:text-[42px] font-semibold text-svk-ink-900 tracking-svk-tight leading-[1.05] mt-3 mb-4">{pf.headline || pf.title}</h2>
              <p className="text-[17px] text-svk-ink-700 leading-[1.6] mb-6 max-w-3xl font-[500]">{pf.heroDesc}</p>
              <div className="prose-svk max-w-[680px]">
                {pf.what.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {/* Klasser */}
            <div id="klasser" className="scroll-mt-[200px]">
              <Eyebrow>Klasser &amp; krav</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-6">Provet är indelat i {pf.classes.length === 2 ? "två" : pf.classes.length === 3 ? "tre" : pf.classes.length === 6 ? "sex" : pf.classes.length} klasser.</h2>
              <ClassesTable classes={pf.classes}/>
            </div>

            {/* Spårläggning (eftersök/viltspår) */}
            {pf.illustrations && (
              <div id="sparlaggning" className="scroll-mt-[200px] space-y-6">
                <Eyebrow>Spårläggning</Eyebrow>
                <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-2">Så ser ett godkänt spår ut.</h2>
                {pf.illustrations.map((il, i) => (
                  <div key={i} className="border border-svk-border rounded-[10px] overflow-hidden shadow-svk-xs">
                    <div className="bg-amber-100 border-b border-amber-200 px-5 py-2.5 font-semibold text-[14px] text-amber-900">{il.title}</div>
                    <div className="bg-amber-50 px-5 py-3 border-b border-amber-200 grid grid-cols-[80px_1fr] gap-x-3 text-[12.5px] text-amber-900">
                      {Object.entries(il.meta).map(([k, v], j) => (
                        <React.Fragment key={j}>
                          <div className="font-semibold">{k.trim()}</div>
                          <div>{v}</div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="bg-amber-50 p-5">
                      <SparIllustration shape={il.shape}/>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Kommande */}
            <div id="kommande" className="scroll-mt-[200px]">
              <Eyebrow>Kommande prov</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-6">Anmäl dig till {pf.title.toLowerCase()}.</h2>
              <div className="bg-white border border-svk-border rounded-[10px] divide-y divide-svk-border shadow-svk-xs">
                {pf.upcoming.map((u, i) => (
                  <div key={i} className="px-5 py-4 grid grid-cols-[60px_1fr_auto_auto] items-center gap-5">
                    <div className="bg-svk-green-50 text-svk-green-700 rounded-md px-2 py-2 text-center">
                      <div className="text-[12.5px] font-bold leading-none">{u.date.split(" ")[0]}</div>
                      <div className="text-[10px] uppercase mt-0.5 tracking-wider">{u.date.split(" ")[1]}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[15px] text-svk-ink-900">{u.title}</div>
                      <div className="text-[12.5px] text-svk-ink-500 mt-0.5 flex items-center gap-1.5"><IconPin size={11} className="text-svk-ink-400"/> {u.loc}</div>
                    </div>
                    <div className="text-[13px] text-svk-ink-600">{u.price}</div>
                    <a className="text-[13px] font-semibold text-svk-green-700 hover:text-svk-green-800 no-underline cursor-pointer flex items-center gap-1">Anmäl <IconArrowRight size={11}/></a>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="scroll-mt-[200px]">
              <Eyebrow>Frågor &amp; svar</Eyebrow>
              <h2 className="font-serif text-[32px] font-semibold text-svk-ink-900 tracking-svk-tight mt-2 mb-6">Vanliga frågor.</h2>
              <FaqList faq={pf.faq}/>
            </div>
          </div>

          <Sidebar pf={pf} otherProvformer={otherProvformer}/>
        </section>
      </main>
    );
  }

  Object.assign(window, { ProvformPage, PROVFORMER, PROVFORM_LIST, PROVFORM_LABEL });
})();
