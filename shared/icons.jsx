// Icons — ported from svk-web-3/components/icons.jsx (JSX fragments rewritten)
(function () {
  const Icon = ({ d, size = 18, stroke = 1.5, className = "", style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={"shrink-0 " + className} style={style}>{d}</svg>
  );
  const IconCalendar = (p) => <Icon {...p} d={<><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>}/>;
  const IconPin = (p) => <Icon {...p} d={<><path d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z"/><circle cx="12" cy="9" r="2.5"/></>}/>;
  const IconSearch = (p) => <Icon {...p} d={<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>}/>;
  const IconArrowRight = (p) => <Icon {...p} d={<path d="M5 12h14M13 6l6 6-6 6"/>}/>;
  const IconArrowLeft = (p) => <Icon {...p} d={<path d="M19 12H5M11 6l-6 6 6 6"/>}/>;
  const IconArrowUpRight = (p) => <Icon {...p} d={<path d="M7 17 17 7M8 7h9v9"/>}/>;
  const IconExternal = (p) => <Icon {...p} d={<path d="M7 17 17 7M9 7h8v8"/>}/>;
  const IconChevronDown = (p) => <Icon {...p} d={<path d="m6 9 6 6 6-6"/>}/>;
  const IconChevronRight = (p) => <Icon {...p} d={<path d="m9 6 6 6-6 6"/>}/>;
  const IconPhone = (p) => <Icon {...p} d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>}/>;
  const IconMail = (p) => <Icon {...p} d={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></>}/>;
  const IconFacebook = (p) => <Icon {...p} d={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}/>;
  const IconInstagram = (p) => <Icon {...p} d={<><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></>}/>;
  const IconCheck = (p) => <Icon {...p} d={<path d="m5 13 4 4L19 7"/>}/>;
  const IconAlert = (p) => <Icon {...p} d={<><path d="M12 2 1 21h22L12 2z"/><path d="M12 9v4M12 17h.01"/></>}/>;
  const IconInfo = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>}/>;
  const IconUsers = (p) => <Icon {...p} d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}/>;
  const IconFile = (p) => <Icon {...p} d={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></>}/>;
  const IconDownload = (p) => <Icon {...p} d={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></>}/>;
  const IconClock = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}/>;
  const IconTrophy = (p) => <Icon {...p} d={<path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4M8 22h8M12 17v5M6 2h12v9a6 6 0 0 1-12 0z"/>}/>;
  const IconHome = (p) => <Icon {...p} d={<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/>}/>;
  const IconGift = (p) => <Icon {...p} d={<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>}/>;
  const IconHeart = (p) => <Icon {...p} d={<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>}/>;
  const IconTarget = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>}/>;
  const IconNav = (p) => <Icon {...p} d={<path d="M3 11l19-9-9 19-2-8-8-2z"/>}/>;
  const IconPlane = (p) => <Icon {...p} d={<path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2 3 8l6 3-2 2-3-0.5-1 1L7 15l2 3 1-1-0.5-3 2-2 3 6z"/>}/>;
  const IconUtensils = (p) => <Icon {...p} d={<><path d="M3 2v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2M7 14v8M17 2c-1.5 1-3 2.5-3 5v8h3z"/></>}/>;
  const IconAward = (p) => <Icon {...p} d={<><circle cx="12" cy="8" r="6"/><path d="M15.5 12.5 17 22l-5-3-5 3 1.5-9.5"/></>}/>;

  Object.assign(window, { Icon, IconCalendar, IconPin, IconSearch, IconArrowRight, IconArrowLeft, IconArrowUpRight, IconExternal, IconChevronDown, IconChevronRight, IconPhone, IconMail, IconFacebook, IconInstagram, IconCheck, IconAlert, IconInfo, IconUsers, IconFile, IconDownload, IconClock, IconTrophy, IconHome, IconGift, IconHeart, IconTarget, IconNav, IconPlane, IconUtensils, IconAward });
})();
