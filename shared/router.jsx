// Router + Next.js shim — exposes globals: navigate, useRoute, Link, usePathname, useRouter
(function () {
  "use strict";
  const { createContext, useContext, useEffect, useState, useMemo, useRef } = React;

  function currentPath() {
    const h = window.location.hash || "#/";
    return h.replace(/^#/, "") || "/";
  }

  const RouteCtx = createContext({ path: "/" });

  function RouterProvider({ children }) {
    const [path, setPath] = useState(currentPath());
    useEffect(() => {
      const onHash = () => {
        setPath(currentPath());
        window.scrollTo(0, 0);
      };
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);
    return React.createElement(RouteCtx.Provider, { value: { path } }, children);
  }

  function navigate(href) {
    if (!href) return;
    if (/^https?:/.test(href)) { window.location.href = href; return; }
    window.location.hash = href.startsWith("/") ? "#" + href : "#/" + href;
  }

  function useRoute() { return useContext(RouteCtx); }
  function usePathname() { return useContext(RouteCtx).path; }
  function useRouter() {
    return { push: navigate, replace: navigate, back: () => window.history.back() };
  }

  function Link({ href, onClick, children, className, style, ...rest }) {
    const hashHref = !href ? "#" : /^https?:|^mailto:|^tel:|^#/.test(href) ? href : "#" + href;
    const handle = (e) => {
      if (onClick) onClick(e);
    };
    return React.createElement("a", { href: hashHref, onClick: handle, className, style, ...rest }, children);
  }

  // Route matcher: supports /lokal/:slug
  function matchRoute(pattern, path) {
    const pp = pattern.split("/").filter(Boolean);
    const sp = path.split("/").filter(Boolean);
    if (pp.length !== sp.length) return null;
    const params = {};
    for (let i = 0; i < pp.length; i++) {
      if (pp[i].startsWith(":")) params[pp[i].slice(1)] = decodeURIComponent(sp[i]);
      else if (pp[i] !== sp[i]) return null;
    }
    return params;
  }

  Object.assign(window, { RouterProvider, navigate, useRoute, usePathname, useRouter, Link, matchRoute });
})();
