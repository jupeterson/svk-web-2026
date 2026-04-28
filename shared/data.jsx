// Data — direct port of svk-web-3/data/index.js
(function () {
  const LOCAL_CLUBS = [
    { slug: "sodra", name: "SVK Södra", region: "Skåne, Blekinge, Halland", x: 45, y: 91, short: "Södra" },
    { slug: "vastsvenska", name: "SVK Västsvenska", region: "Västra Götaland", x: 30, y: 78, short: "Västsv." },
    { slug: "sodermanland", name: "SVK Södermanland", region: "Södermanland, Stockholm", x: 56, y: 72, short: "Södermanl." },
    { slug: "ostra", name: "SVK Östra", region: "Östergötland", x: 53, y: 77, short: "Östra" },
    { slug: "mellansvenska", name: "SVK Mellansvenska", region: "Uppland, Västmanland", x: 55, y: 66, short: "Mellansv." },
    { slug: "varmland", name: "SVK Värmland", region: "Värmland, Dalarna", x: 38, y: 62, short: "Värmland" },
    { slug: "gavleborg", name: "SVK Gävleborg", region: "Gävleborg, Hälsingland", x: 60, y: 56, short: "Gävleborg" },
    { slug: "jamtland", name: "SVK Jämtland", region: "Jämtland, Västernorrland", x: 50, y: 44, short: "Jämtland" },
    { slug: "bottenviken", name: "SVK Bottenviken", region: "Norrbotten, Västerbotten", x: 68, y: 28, short: "Bottenv." },
    { slug: "malmfalten", name: "SVK Malmfälten", region: "Kiruna, Gällivare", x: 62, y: 12, short: "Malmfält." },
  ];

  const BREEDS = [
    { slug: "kortharig-vorsteh", name: "Korthårig vorsteh", photoKey: "pointer-fjall", photo: null, tagline: "Mångsidig stående fågelhund.", desc: "Medelhavs­ursprung. Prima jakthund och familjemedlem." },
    { slug: "stravharig-vorsteh", name: "Strävhårig vorsteh", photoKey: null, photo: "autumn", tagline: "Arbetsam, härdig, förlåtande.", desc: "Robust tysk avel från sent 1800-tal." },
    { slug: "langharig-vorsteh", name: "Långhårig vorsteh", photoKey: null, photo: "forest", tagline: "Stor apporteringsvilja.", desc: "Härstammar från fågel- och vatten­hundar." },
    { slug: "kleiner-munsterlander", name: "Kleiner münsterländer", photoKey: null, photo: "dog", tagline: "Kompakt, intensiv, social.", desc: "Från nord­västra Tyskland." },
    { slug: "grosser-munsterlander", name: "Grosser münsterländer", photoKey: null, photo: "forest", tagline: "Långhårig släkting med jaktglädje.", desc: "Stark familje­koppling." },
    { slug: "vizsla-kortharig", name: "Ungersk vizsla, korthårig", photoKey: null, photo: "autumn", tagline: "Elegant, snabb, nära knuten.", desc: "Ungerns ädla jakthund." },
    { slug: "vizsla-stravharig", name: "Ungersk vizsla, strävhårig", photoKey: null, photo: "field", tagline: "Strävhårig variant, lite tåligare.", desc: "Samma jaktskicklighet." },
  ];

  const NEWS = [
    { id: "nya-regler-jaktprov-2025", chip: "Avel & prov", local: "SVK Malmfälten", photoKey: "vinter-jakt", title: "Nya regler för jaktprov 2025", date: "4 september 2025", dateShort: "2025-09-04", lede: "De nya reglerna innebär förändringar i bedömningskriterierna för flera moment. Särskilt viktigt är de uppdaterade kraven för apportering och stadga." },
    { id: "framgangar-nordisk-utstallning", chip: "Utställning", local: "SVK Södra", photo: "autumn", title: "Framgångar på nordisk utställning", date: "4 september 2025", dateShort: "2025-09-04", lede: "Totalt deltog 45 svenska hundar i tävlingen. Flera BIR-titlar och utmärkelser tilldelades våra representanter." },
    { id: "vistelse-fiske-jakt-renbetesland", chip: "Politik", local: "SVK Bottenviken", photoKey: "pointer-fjall", title: "Vistelse, fiske och jakt i renbetesland", date: "1 september 2025", dateShort: "2025-09-01", lede: "Inbjudan till information om arbetsläget runt fjälljakten, samt efterspelet till Renmarksutredningen." },
    { id: "langharig-avel", chip: "Avel & prov", local: "SVK Östra", photo: "field", title: "Har du långhårig vorsteh och är intresserad av avel?", date: "27 augusti 2025", dateShort: "2025-08-27", lede: "Vi söker nya avelsråd och avelsfunktionärer för rasen. Utbildning och stöd ingår." },
    { id: "inkorsning-genetisk-variation", chip: "Avel & prov", local: "SVK Östra", photo: "forest", title: "Föreläsning: inkorsning för bättre genetisk variation", date: "18 augusti 2025", dateShort: "2025-08-18", lede: "Digitalt möte om hur strategisk inkorsning kan bredda genpoolen utan att kompromissa med jakt­egenskaperna." },
    { id: "swedish-game-fair-2026", chip: "Evenemang", local: "SVK Södra", photo: "lake", title: "Swedish Game Fair 2026 — vi är där", date: "12 augusti 2025", dateShort: "2025-08-12", lede: "Kom och träffa oss i tältet. Demonstrationer av apportering, spårning och stående arbete genom hela helgen." },
  ];

  const ACTIVITIES = [
    { id: "riksprovet-2026", type: "Riksprovet", local: "SVK Malmfälten", photoKey: "fjalljakt", title: "Riksprovet 2026", date: "28 augusti 2026", dateShort: "2026-08-28", loc: "Camp Ripan, Kiruna", lede: "Passa på att anmäla dig till årets höjdpunkt för fågelhundar i fjällen." },
    { id: "orebro-jaktprov", type: "Jaktprov", local: "SVK Mellansvenska", photo: "forest", title: "Örebro jaktprov", date: "26 december 2026", dateShort: "2026-12-26", loc: "Örebro", lede: "Klassiskt höstprov på rapphöna och rådjur — anmälan öppen." },
    { id: "viltsparprov-lulea", type: "Viltspårprov", local: "SVK Bottenviken", photo: null, title: "Viltspårprov i Luleå", date: "1 januari 2026", dateShort: "2026-01-01", loc: "Luleå", lede: "Årets första viltspårprov. Begränsat antal platser." },
    { id: "jaktprov-tidaholm", type: "Jaktprov", local: "SVK Västsvenska", photo: null, title: "Jaktprov vår Tidaholm", date: "21 januari 2026", dateShort: "2026-01-21", loc: "Tidaholm", lede: "Vårprov med fokus på stående fågelhundar." },
    { id: "vastsvenska-specialen", type: "Utställning", local: "SVK Västsvenska", photo: null, title: "Västsvenska specialen i Bohus", date: "21 februari 2026", dateShort: "2026-02-21", loc: "Sätila", lede: "Klubbutställning — alla sju raser kvalificerade." },
    { id: "arsmote-vastsvenska", type: "Årsmöte", local: "SVK Västsvenska", photo: "lake", title: "Årsmöte i Västsvenska", date: "27 februari 2026", dateShort: "2026-02-27", loc: "Borås", lede: "Dags för årsmöte — alla medlemmar hjärtligt välkomna." },
    { id: "jaktprov-vasteras", type: "Jaktprov", local: "SVK Mellansvenska", photo: null, title: "Jaktprov i Västerås", date: "14 mars 2026", dateShort: "2026-03-14", loc: "Västerås", lede: "Vårprov i mellansvenska marker." },
    { id: "riksutstallning-sodra", type: "Riksutställning", local: "SVK Södra", photoKey: "pointer-fjall", title: "Riksutställning i Södra", date: "27 maj 2026", dateShort: "2026-05-27", loc: "Borås", lede: "Avelskommittén arrangerar även digitala föreläsningar som del av konferensen." },
  ];

  const ACTIVITY_TYPES = ["Riksprovet", "Jaktprov", "Utställning", "Viltspårprov", "Riksutställning", "Årsmöte", "Träff"];

  const DOCUMENTS = [
    { title: "Stadgar Svenska Vorstehklubben", meta: "PDF · 340 kB · reviderad 2024-03-18" },
    { title: "Avelspolicy 2024", meta: "PDF · 1.2 MB · reviderad 2024-11-02" },
    { title: "Jaktprovsbestämmelser 2025", meta: "PDF · 2.4 MB · giltig från 2025-01-01" },
    { title: "Utställningsregler SKK 2025", meta: "PDF · 980 kB · reviderad 2025-01-12" },
    { title: "Årsredovisning 2024", meta: "PDF · 4.1 MB · publicerad 2025-04-20" },
    { title: "Protokoll fullmäktige 2024", meta: "PDF · 720 kB · publicerat 2024-06-01" },
  ];

  const RIKSPROVET = {
    year: 2026,
    edition: "72:a upplagan",
    quickLinks: [
      { icon: "nav", title: "Resa & logi", sub: "Karta, transport och boende", anchor: "resa", tone: "blue" },
      { icon: "calendar", title: "Program & Domare", sub: "Schema, klasser, domarkår", anchor: "program", tone: "green" },
      { icon: "target", title: "Provmark", sub: "Nuolajärvi — kartor och släpp", anchor: "provmark", tone: "orange" },
      { icon: "trophy", title: "Klasser", sub: "UKL, ÖKL, EKL och fullbruk", anchor: "klasser", tone: "purple" },
      { icon: "file", title: "Regler & PM", sub: "Krav, utrustning och dokument", anchor: "anmalan", tone: "amber" },
      { icon: "users", title: "Partners", sub: "Sponsorer och samarbeten", anchor: "partners", tone: "red" },
    ],
    dateStart: "2026-08-27", dateEnd: "2026-08-30",
    dateLabel: "27–30 augusti 2026",
    countdownTo: "2026-08-27T07:00:00+02:00",
    venue: "Camp Ripan", town: "Kiruna", region: "Lappland", host: "SVK Malmfälten",
    starters: 128, judges: 14,
    terrain: "Fjällripe- och dalripeterräng, 650–1 100 m.ö.h.",
    classes: [
      { code: "UKL", name: "Ungdomsklass", starters: 32, spots: 8, qual: "Hundar 9–24 mån. Ej tidigare 1:a pris i UKL." },
      { code: "ÖKL", name: "Öppen klass", starters: 48, spots: 12, qual: "Meriterad i UKL eller uppflyttad från EKL." },
      { code: "EKL", name: "Elitklass", starters: 32, spots: 0, qual: "Kvalificerad via 1:a pris ÖKL senaste 24 mån." },
      { code: "FBKL", name: "Fullbruksklass", starters: 16, spots: 4, qual: "Godkänt fullbruksprov inkl. vattenapport." },
    ],
    price: { full: 1450, member: 1160 },
    deadline: "2026-08-14",
    program: [
      { day: "Tor 27 aug", items: [["15:00", "Incheckning Camp Ripan"], ["17:30", "Domarmöte (domarrum)"], ["19:00", "Välkomstmiddag — fjällbuffé"]] },
      { day: "Fre 28 aug", items: [["06:30", "Frukost"], ["07:15", "Upprop & terränglottning"], ["08:00", "UKL & ÖKL — dag 1"], ["18:00", "Aftonjakt­samtal med domarkåren"]] },
      { day: "Lör 29 aug", items: [["07:15", "Upprop dag 2"], ["08:00", "EKL & FBKL — dag 2"], ["17:00", "Finalheat (topp 8 EKL)"], ["19:30", "Klubbmiddag — Sami Duodji-salen"]] },
      { day: "Sön 30 aug", items: [["09:00", "Årsmöte (öppet för alla)"], ["11:00", "Prisutdelning & vandringspris"], ["13:00", "Utcheckning"]] },
    ],
    judges_list: [
      { name: "Erik Nordin", role: "Överdomare", club: "SVK Malmfälten", years: 28, breeds: ["Korthårig vorsteh", "Strävhårig vorsteh"], bio: "Erik leder domarkåren för 14:e året i rad. Med rötter i Tornedalen och 28 års erfarenhet av högfjällsmark känner han varje hed kring Nuolajärvi och hur ripan rör sig under olika väderlägen.", merits: ["Auktoriserad jaktprovs­domare 1998", "Överdomare Riksprovet sedan 2012", "Tidigare landslags­tränare fågelhund", "Arrangör av domarutbildning SKK"] },
      { name: "Ingrid Söderberg", role: "Domare EKL", club: "SVK Jämtland", years: 22, breeds: ["Långhårig vorsteh", "Kleiner münsterländer"], bio: "Ingrid har dömt elitklass på Riksprovet sedan 2014 och är känd för sitt skarpa öga för samarbete mellan hund och förare. Driver kennel Fjällvind utanför Östersund.", merits: ["Auktoriserad EKL-domare 2008", "Dömt nordiska mästerskap 2018, 2022", "SKK:s utbildnings­råd för stående fågelhundar", "Uppfödare med 30+ championat"] },
      { name: "Lars Hoff", role: "Domare ÖKL", club: "SVK Bottenviken", years: 19, breeds: ["Korthårig vorsteh", "Strävhårig vorsteh"], bio: "Lars dömer öppen klass och har en bakgrund som yrkesjägare i Norrbotten. Hans kommentarer i kritikboken är ökända för sin precision och korthet.", merits: ["Auktoriserad ÖKL-domare 2007", "Tidigare provledare SVK Bottenviken", "Specialist på vinterprov och fjällterräng", "Domare även i Norge och Finland"] },
      { name: "Maja Lindén", role: "Domare UKL", club: "SVK Mellansvenska", years: 12, breeds: ["Ungersk vizsla", "Långhårig vorsteh"], bio: "Maja är en av kårens yngsta överdomare och har de senaste fem åren fokuserat på unghundsklass. Engagerad i utbildning av nya domarkandidater.", merits: ["Auktoriserad UKL-domare 2014", "Vinnare Riksprovet UKL 2011 (förare)", "Mentor i SKK:s domarprogram", "Föreläsare på unghunds­konferenser"] },
      { name: "Henrik Tjäder", role: "Domare FBKL", club: "SVK Västsvenska", years: 24, breeds: ["Grosser münsterländer", "Korthårig vorsteh"], bio: "Henrik dömer fullbruks­klass och är kårens auktoritet på apport och vatten­arbete. Har själv tävlat i fullbruk under 90-talet med flera championat.", merits: ["Auktoriserad FBKL-domare 2002", "Författare till \"Fullbruk i praktiken\" (2019)", "Domare på SM Fullbruk 2020, 2023, 2025", "Domarutbildare för apportarbete"] },
      { name: "Sofia Ek", role: "Biträdande", club: "SVK Södra", years: 9, breeds: ["Korthårig vorsteh"], bio: "Sofia gör sitt fjärde Riksprov som biträdande och avslutar i år sin auktorisations­utbildning för ÖKL. Bakgrund som veterinär ger henne extra trygghet i fältet.", merits: ["Domarkandidat ÖKL — slutbedömning 2026", "Veterinär med specialitet sportmedicin", "Provledare SVK Södra 2021–2024", "Biträdande Riksprovet 2023, 2024, 2025"] },
    ],
    winners: [
      { year: 2025, dog: "Fjällvind\u2019s Nova", breed: "Korthårig vorsteh", handler: "Karin Sjöberg", club: "SVK Jämtland" },
      { year: 2024, dog: "Tordivel av Ripen", breed: "Strävhårig vorsteh", handler: "Johan Bengtsson", club: "SVK Bottenviken" },
      { year: 2023, dog: "Högfjällets Ylva", breed: "Kleiner münsterländer", handler: "Martin Öhr", club: "SVK Mellansvenska" },
      { year: 2022, dog: "Ripakullens Birk", breed: "Korthårig vorsteh", handler: "Cecilia Forsberg", club: "SVK Värmland" },
      { year: 2021, dog: "Norrskensbergets Freja", breed: "Ungersk vizsla kh.", handler: "Peder Lindahl", club: "SVK Östra" },
      { year: 2020, dog: "Vittanjoki\u2019s Runo", breed: "Strävhårig vorsteh", handler: "Erik Kallio", club: "SVK Malmfälten" },
      { year: 2019, dog: "Slättmarkens Saga", breed: "Långhårig vorsteh", handler: "Ulla Ek", club: "SVK Södra" },
      { year: 2018, dog: "Kebnats Thor", breed: "Korthårig vorsteh", handler: "Jonas Peterson", club: "SVK Bottenviken" },
      { year: 2017, dog: "Brösarps Hedda", breed: "Grosser münsterländer", handler: "Astrid Nilsson", club: "SVK Södra" },
      { year: 2016, dog: "Röjåns Akka", breed: "Korthårig vorsteh", handler: "Gunnar Widén", club: "SVK Värmland" },
    ],
    partners: [
      { name: "Jaktia", kind: "Huvudpartner", tag: "Utrustning" },
      { name: "Härkila", kind: "Huvudpartner", tag: "Klädsel" },
      { name: "Camp Ripan", kind: "Logi­partner", tag: "Boende" },
      { name: "Fjällräven", kind: "Partner", tag: "Utrustning" },
      { name: "Eukanuba", kind: "Partner", tag: "Foder" },
      { name: "Kiruna kommun", kind: "Samarbete", tag: "Mark" },
      { name: "Svenska Jägare­förbundet", kind: "Samarbete", tag: "Organisation" },
      { name: "SKK", kind: "Samarbete", tag: "Organisation" },
    ],
    packing: [
      { group: "Hunden", items: ["Hundfoder för 4 dygn", "Vattenskål & termos", "Apporteringsdummies", "Första hjälpen-kit hund", "GPS-halsband (rekommenderas)", "Reflex­väst"] },
      { group: "Föraren", items: ["Vindtät fjälljacka", "Lager­kläder (ull)", "Kängor inkörda", "Regnställ", "Termoskopp", "Visselpipa"] },
      { group: "Dokument", items: ["Vaccinations­intyg", "Registrerings­bevis", "Medlemskort SVK", "Jaktkort (giltigt)", "PM — senast utskickat"] },
    ],
    logistics: [
      { title: "Camp Ripan", sub: "Huvudlogi — boende, frukost, middagar", meta: "5 min till provmark", price: "Från 1 190 kr/natt", note: "Förhandsbokning via rabattkod RIKS26." },
      { title: "Ripan Camping", sub: "Stug- och tältplatser", meta: "5 min till provmark", price: "Från 390 kr/natt", note: "Hundvänligt — alla raser välkomna." },
      { title: "Scandic Kiruna", sub: "Hotell centralt Kiruna", meta: "15 min till provmark", price: "Från 1 450 kr/natt", note: "Begränsat antal hund­rum." },
    ],
    travel: [
      { mode: "Flyg", icon: "plane", desc: "Kiruna Airport — direktflyg från Stockholm, Umeå, Luleå." },
      { mode: "Tåg", icon: "nav", desc: "Nattåget från Stockholm, avgång 18:11, ankomst Kiruna 09:30." },
      { mode: "Bil", icon: "target", desc: "E10 norrut. Räkna 15 h från Stockholm — planera övernattning." },
    ],
    media: [
      { kind: "Reportage", title: "Dagar på fjället — reportage från Riksprovet 2025", src: "vinter-jakt", date: "Sep 2025" },
      { kind: "Galleri", title: "Bilder från finalheatet 2025", src: "fjalljakt", date: "Aug 2025" },
      { kind: "Podd", title: "Samtal med överdomaren Erik Nordin", src: "pointer-fjall", date: "Jul 2025" },
      { kind: "Film", title: "Riksprovet — en dag i fjällen (6 min)", src: "fjalljakt", date: "Sep 2024" },
    ],
  };

  const RIKSUTSTALLNING = {
    year: 2026,
    title: "Riksutställning i Södra",
    dateLabel: "27 maj 2026",
    dateIso: "2026-05-27",
    countdownTo: "2026-05-27T08:00:00+02:00",
    venue: "Strömma Naturbrukscentrum",
    town: "Sätila",
    host: "Västsvenska Vorstehklubben",
    regDeadline: "15 maj 2026",
    regOpen: false,
    coords: [57.539, 12.454],
    fees: [
      { label: "Valp- och veteranklass", price: "200 kr" },
      { label: "Övriga klasser", price: "350 kr" },
      { label: "Barn med hund", price: "Gratis" },
    ],
    payment: { plusgiro: "123456-7", swish: "1234567890" },
    contacts: [
      { role: "Boende och mat", name: "Kristina Svenberg", email: "kristina@akuthhs.se", phone: "070 881 82 33" },
      { role: "Utställning", name: "Inga-Lill Bohlin", email: "bohlin.inga-lill@hotmail.com", phone: "070 712 54 03" },
    ],
    moreLinks: [
      { label: "Lotteri", icon: "gift" },
      { label: "Sponsorer & Kennlar", icon: "users" },
      { label: "Resultat", icon: "award" },
    ],
    quickLinks: [
      { icon: "nav", title: "Hitta hit", sub: "Karta och vägbeskrivning", anchor: "hitta-hit", tone: "blue" },
      { icon: "calendar", title: "Program & Domare", sub: "Schema, domare och bedömning", anchor: "program", tone: "green" },
      { icon: "home", title: "Boende & Mat", sub: "Rum, camping och måltider", anchor: "boende", tone: "blue2" },
      { icon: "gift", title: "Lotteri", sub: "Vinstbord och lottförsäljning", anchor: "lotteri", tone: "red" },
      { icon: "heart", title: "Sponsorer", sub: "Våra generösa sponsorer", anchor: "sponsorer", tone: "amber" },
      { icon: "trophy", title: "Resultat", sub: "Resultat från utställningen", anchor: "resultat", tone: "purple" },
    ],
    welcome: {
      title: "Välkommen till Riksutställningen",
      intro: "Svenska Vorstehklubben och Västsvenska Vorstehklubben inbjuder till årets största evenemang för vorstehägare. En helg fylld med utställning, föreläsningar, gemenskap och festmiddag med prisutdelning.",
      body: [
        "Under årets första månader kommer Avels­kommittén också att genomföra en serie digitala föreläsningar som en del av avelskonferensen.",
        "Inom kort lanseras hemsida och facebook­grupp där all information kommer att finnas, så håll utkik.",
        "Häng med på en helg fylld av aktiviteter, diskussioner och trevlig samvaro!",
        "Välkomna!",
      ],
    },
    directions: {
      address: { line1: "Strömma Naturbrukscentrum", line2: "Sätila" },
      googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Str%C3%B6mma+Naturbrukscentrum+S%C3%A4tila",
      routes: [
        { from: "Från Göteborg (ca 40 min)", steps: ["Kör E20 mot Borås", "Ta avfart 75 mot Sätila", "Följ väg 156 till Sätila", "Sväng mot Strömma Naturbrukscentrum"] },
        { from: "Från Borås (ca 30 min)", steps: ["Kör E20 mot Göteborg", "Ta avfart 75 mot Sätila", "Följ väg 156 till Sätila", "Sväng mot Strömma Naturbrukscentrum"] },
      ],
      tip: "Det finns gott om gratis parkering vid anläggningen. Skyltar visar vägen från infarten till utställningsområdet och boendet.",
    },
    program: [
      { time: "08:00", title: "Registrering öppnar", loc: "Huvudentrén" },
      { time: "09:00", title: "Utställningen börjar", loc: "Utställningsringen" },
      { time: "12:00", title: "Lunch", loc: "Matsalen" },
      { time: "13:00", title: "Föreläsning", loc: "Aulan" },
      { time: "15:00", title: "Best in Show", loc: "Utställningsringen" },
      { time: "18:00", title: "Festmiddag med prisutdelning", loc: "Festsalen", price: "450 kr" },
    ],
    judges: [
      { name: "Anne-Chaterine Edoff", initials: "AE", breeds: ["Korthårig Vorsteh", "Långhårig Vorsteh", "Korthårig Ungersk Vizsla", "Strävhårig Ungersk Vizsla"],
        bio: "Anne-Chaterine är en erfaren och uppskattad domare med gedigen kunskap om kontinentala stående fågelhundar. Hon har dömt på utställningar i hela Norden och är känd för sin noggranna och rättvisa bedömning.",
        merits: ["Auktoriserad domare sedan 2010", "Dömt på nordiska mästerskap", "Specialiserad på kontinentala stående fågelhundar", "Utbildare för nya domare"] },
    ],
    lodging: [
      { title: "Dubbelrum", desc: "Rum med dubbelsäng", price: "800 kr/natt", features: ["Sänglinne ingår", "Eget badrum"] },
      { title: "Enkelrum", desc: "Rum med enkelsäng", price: "600 kr/natt", features: ["Sänglinne ingår", "Delat badrum"] },
      { title: "Camping", desc: "Uppställningsplats för husvagn/husbil", price: "150 kr/natt", features: ["El ingår", "Vatten tillgängligt"] },
    ],
    meals: [
      { label: "Frukost", time: "07:00–09:00", price: "80 kr" },
      { label: "Lunch", time: "12:00–13:00", price: "120 kr" },
      { label: "Fika", time: "15:00", price: "40 kr" },
      { label: "Middag", time: "18:00", price: "150 kr" },
      { label: "Festmiddag", time: "19:00", price: "450 kr" },
    ],
  };

  Object.assign(window, { LOCAL_CLUBS, BREEDS, NEWS, ACTIVITIES, ACTIVITY_TYPES, DOCUMENTS, RIKSPROVET, RIKSUTSTALLNING });
})();
