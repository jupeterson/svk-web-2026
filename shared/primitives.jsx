// Primitives — Photo, PhotoPlaceholder, Chip, Eyebrow, Button
(function () {
  const REAL_PHOTOS = {
    "fjalljakt": "assets/photo-fjalljakt-hunter.jpg",
    "pointer-fjall": "assets/photo-pointer-fjallen.jpg",
    "vinter-jakt": "assets/photo-vinter-jakt.jpg",
  };
  const PLACEHOLDER_RECIPES = {
    field:  "bg-gradient-to-b from-[#8ba05c] via-[#5d7338] to-[#3d4d22]",
    forest: "bg-gradient-to-b from-[#5c8a66] to-[#2e4a30]",
    autumn: "bg-gradient-to-b from-[#b08140] via-[#6a4a22] to-[#3d2912]",
    tundra: "bg-gradient-to-b from-[#b7c1c6] via-[#6a7a78] to-[#3e4a45]",
    lake:   "bg-gradient-to-b from-[#7ea4b5] via-[#4b6b7a] to-[#2a3d47]",
    dog:    "bg-gradient-to-b from-[#a89074] to-[#6b523a]",
  };

  function PhotoPlaceholder({ kind = "field", className = "" }) {
    return (
      <div className={"w-full h-full relative " + (PLACEHOLDER_RECIPES[kind] || PLACEHOLDER_RECIPES.field) + " " + className}>
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_100%,rgba(22,52,32,0.45),transparent_60%)]"/>
      </div>
    );
  }

  function Photo({ src, photoKey, kind, alt = "", className = "", position = "50% 50%", children }) {
    const resolved = src || (photoKey && REAL_PHOTOS[photoKey]);
    if (resolved) {
      return (
        <div className={"w-full h-full overflow-hidden " + className}>
          <img src={resolved} alt={alt} style={{ objectPosition: position }} className="w-full h-full object-cover block"/>
          {children}
        </div>
      );
    }
    return (
      <div className={"w-full h-full overflow-hidden " + className}>
        <PhotoPlaceholder kind={kind}/>
        {children}
      </div>
    );
  }

  function Chip({ tone = "outline", size = "md", children, icon }) {
    const cls = {
      orange:  "bg-svk-orange-100 text-svk-orange-700",
      green:   "bg-svk-green-100 text-svk-green-700",
      dark:    "bg-svk-ink-900 text-white",
      outline: "bg-transparent text-svk-ink-600 border border-svk-border-s",
      ghost:   "bg-white/90 text-svk-green-700 backdrop-blur border border-white/40",
      accent:  "bg-svk-orange-500 text-white",
    }[tone];
    const sz = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]";
    return (
      <span className={"inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide whitespace-nowrap " + cls + " " + sz}>
        {icon}{children}
      </span>
    );
  }

  function Eyebrow({ children, tone = "brand", className = "" }) {
    const colors = { brand: "text-svk-green-600", muted: "text-svk-ink-500", white: "text-white/70", orange: "text-svk-orange-500" };
    return <div className={"text-[11px] font-semibold tracking-[0.14em] uppercase " + colors[tone] + " " + className}>{children}</div>;
  }

  function Button({ variant = "primary", size = "md", children, onClick, href, className = "", ...rest }) {
    const variantCls = {
      primary:   "btn-primary",
      secondary: "btn-secondary",
      ghost:     "btn-ghost",
      accent:    "btn-accent",
      dark:      "btn-dark",
      onbrand:   "btn bg-white text-svk-green-700 hover:bg-white/90 px-5 py-2.5 text-sm",
    }[variant];
    const sizeCls = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
    const merged = variantCls + " " + sizeCls + " " + className;
    if (href) {
      return <Link href={href} onClick={onClick} className={merged} {...rest}>{children}</Link>;
    }
    return <button type="button" onClick={onClick} className={merged} {...rest}>{children}</button>;
  }

  Object.assign(window, { Photo, PhotoPlaceholder, Chip, Eyebrow, Button });
})();
