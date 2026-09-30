/**
 * icons.js
 *
 * نظام أيقونات SVG لمشروع "مساري".
 *
 * - 61 أيقونة SVG بأسلوب Lucide Icons
 * - Outline style: stroke=2
 * - ViewBox موحّد: 0 0 24 24
 * - الألوان عبر currentColor
 * - لا توجد مكتبات أو imports خارجية
 *
 * الاستخدام:
 *   import { getIcon, renderIcons } from './icons.js';
 *   const html = getIcon('brain', 24, 'icon-primary');
 *   renderIcons();
 *
 * في HTML:
 *   <span data-icon="brain" data-icon-size="24"></span>
 */

export const ICONS = {
  // ============ الأبعاد السبعة ============
  brain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M9 3.5A3.5 3.5 0 0 0 5.5 7v.5A3.5 3.5 0 0 0 3 11a3.5 3.5 0 0 0 2.5 3.36V16a3.5 3.5 0 0 0 5 3.16A3.5 3.5 0 0 0 15.5 16v-.5A3.5 3.5 0 0 0 18 12a3.5 3.5 0 0 0-2.5-3.36V7a3.5 3.5 0 0 0-5-3.16A3.5 3.5 0 0 0 9 3.5Z"/><path d="M9 4v16M5.5 8.5A3 3 0 0 1 9 11M15.5 8.5A3 3 0 0 0 12 11M5.5 14A3 3 0 0 1 9 12M15.5 14A3 3 0 0 0 12 12"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m12 3-1.2 3.8L7 8l3.8 1.2L12 13l1.2-3.8L17 8l-3.8-1.2L12 3Z"/><path d="m19 13-.8 2.2L16 16l2.2.8L19 19l.8-2.2L22 16l-2.2-.8L19 13ZM5 14l-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14Z"/></svg>`,
  messagesSquare: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M21 11.5a7.5 7.5 0 0 1-8.2 7.45L8 21l1.4-3.5A7.5 7.5 0 1 1 21 11.5Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
  clipboardList: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 9h6M9 13h6M9 17h4"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M14 4c2.8-2.8 6-2.5 6-2.5s.3 3.2-2.5 6L13 12l-1 4-4-4 4-1 2-7Z"/><path d="M9 15 5 19M5 15l4 4M7 7l-3 3 5 2"/></svg>`,
  heartHandshake: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m12 20-8-7.2A5.2 5.2 0 0 1 11.4 5L12 5.6 12.6 5A5.2 5.2 0 0 1 20 12.8L12 20Z"/><path d="m8 11 2 2 2-2 2 2 2-2"/></svg>`,

  // ============ الاتجاهات الخمسة ============
  stethoscope: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M6 3v6a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 19a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="14" r="3"/></svg>`,
  hardHat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M4 18h16"/><path d="M6 18v-4a6 6 0 0 1 12 0v4"/><path d="M3 14h18"/><path d="M12 8v6"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>`,
  usersRound: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  drama: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M12 3 9 7l3 4 3-4-3-4Z"/><path d="M5 8 2 12l3 4 3-4-3-4ZM19 8l-3 4 3 4 3-4-3-4Z"/><path d="M7 20h10M9 16l3 4 3-4"/></svg>`,

  // ============ التخصصات الـ 31 ============
  heartPulse: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M20.8 8.5A5.4 5.4 0 0 0 12 5.1 5.4 5.4 0 0 0 3.2 8.5C1.2 14 7.2 18 12 21c4.8-3 10.8-7 8.8-12.5Z"/><path d="M3 12h4l2-3 3 6 2-3h7"/></svg>`,
  tooth: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M6.5 3.5C8.8 2.5 10.4 4 12 4s3.2-1.5 5.5-.5c2.2 1 2.2 4.2 1.2 7.2-.8 2.4-1.7 6.8-3.5 9.3-.7 1-2.2.6-2.5-.6L12 15l-.7 4.4c-.3 1.2-1.8 1.6-2.5.6-1.8-2.5-2.7-6.9-3.5-9.3-1-3-1-6.2 1.2-7.2Z"/></svg>`,
  pill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m8 8 8 8"/><path d="M7 3h0a4 4 0 0 1 4 4v2H3V7a4 4 0 0 1 4-4ZM17 13h0a4 4 0 0 1 4 4v2h-8v-2a4 4 0 0 1 4-4Z" transform="rotate(45 12 12)"/></svg>`,
  syringe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m18 2 4 4M17 7l-4-4M3 21l5-5M6 18l-3-3"/><path d="m7 17 10-10 4 4L11 21H7v-4Z"/><path d="m14 10 2 2M10 14l2 2"/></svg>`,
  pawPrint: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M8 11c-2 0-4 2-4 4 0 2 1.5 3 3 3 1.3 0 2.1-.7 3-.7s1.7.7 3 .7c1.5 0 3-1 3-3 0-2-2-4-4-4-1 0-1.5.5-2 .5S9 11 8 11Z"/><circle cx="5.5" cy="7" r="2"/><circle cx="9.5" cy="4.5" r="2"/><circle cx="14.5" cy="4.5" r="2"/><circle cx="18.5" cy="7" r="2"/></svg>`,
  binary: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6h4M14 18h-4M6 10v4M18 10v4M10 18h4M6 18v-4M18 6V3h-4"/></svg>`,
  codeXml: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>`,
  construction: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m14 6 4 4M3 21l8-8M13 5l6 6M4 20l3 1 10-10-4-4L3 17l1 3Z"/><path d="M14 4 16 2l6 6-2 2"/></svg>`,
  ruler: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M3 3h18v18H3z"/><path d="M7 3v4M11 3v2M15 3v4M19 3v2M3 7h4M3 11h2M3 15h4M3 19h2"/></svg>`,
  settings2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.4 1.4-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-2v-.5a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.4-1.4.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.03H7v-2h.84A1.7 1.7 0 0 0 9.4 10.9a1.7 1.7 0 0 0-.34-1.88L9 8.96l1.4-1.4.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.37 6.4V6h2v.4a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.4 1.4-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03h.5v2h-.5A1.7 1.7 0 0 0 19.4 15Z"/></svg>`,
  wheat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M12 22V5"/><path d="M12 9c-4 0-6-2-6-5 4 0 6 2 6 5ZM12 14c4 0 6-2 6-5-4 0-6 2-6 5ZM12 18c-4 0-6-2-6-5 4 0 6 2 6 5ZM12 6c4 0 6-2 6-5-4 0-6 2-6 5Z"/></svg>`,
  flaskConical: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M9 3h6M10 3v5l-5.5 9.2A2.5 2.5 0 0 0 6.6 21h10.8a2.5 2.5 0 0 0 2.1-3.8L14 8V3"/><path d="M8 14h8"/></svg>`,
  laptop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20M7 20l1-2h8l1 2"/></svg>`,
  trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M3 17 9 11l4 4 8-9"/><path d="M15 6h6v6"/></svg>`,
  clipboardCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 12l2 2 5-5M9 17h6"/></svg>`,
  calculator: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2"/></svg>`,
  landmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m3 10 9-6 9 6H3Z"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/></svg>`,
  banknote: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10h.01M18 14h.01"/></svg>`,
  megaphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3Z"/><path d="M6 15v4a2 2 0 0 0 2 2h1l1-6M21 10v4"/></svg>`,
  newspaper: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`,
  graduationCap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/></svg>`,
  handHeart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M11 12 8.5 9.5a2.1 2.1 0 0 0-3 3L10 17a4 4 0 0 0 5.7 0l4.8-4.8a2.1 2.1 0 0 0-3-3L15 11.7"/><path d="M12 7 10.7 5.7a2.4 2.4 0 0 0-3.4 3.4L12 13l4.7-4.7a2.4 2.4 0 0 0-3.4-3.4L12 6.2"/><path d="M2 14l3 3M22 14l-3 3"/></svg>`,
  scale: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M12 3v18M5 7h14M5 7l-3 7h6L5 7ZM19 7l-3 7h6l-3-7ZM8 21h8"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
  bookOpen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M3 5a3 3 0 0 1 3-2h5v17H6a3 3 0 0 0-3 2V5ZM21 5a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2V5Z"/></svg>`,
  plane: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m2 12 20-9-5 18-4-7-11-2Z"/><path d="m13 14 4-7-7 4"/></svg>`,
  feather: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M20.5 3.5C14 2 8 5 6 10l-3 8 8-3c5-2 8-8 9.5-11.5Z"/><path d="M3 21c3-5 7-8 12-11"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M12 3C6.5 3 2 6.8 2 11.5S5.5 20 10 20h1.5c1.4 0 2.3-1.5 1.5-2.7-.7-1.2.2-2.7 1.6-2.7H16c3.3 0 6-2.7 6-6C22 5.8 17.5 3 12 3Z"/><circle cx="7.5" cy="11" r=".8"/><circle cx="10" cy="7.5" r=".8"/><circle cx="14" cy="7" r=".8"/><circle cx="17" cy="10" r=".8"/></svg>`,
  paintbrush: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m14 4 6 6-8 8-6-6 8-8Z"/><path d="m6 12-3 3a3 3 0 0 0 4 4l3-3"/><path d="M17 7 20 4"/></svg>`,
  scroll: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M6 3h13v18H6a3 3 0 0 1 0-6h13"/><path d="M6 15a3 3 0 0 1 0-6h13M10 7h5M10 11h5"/></svg>`,
  library: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M4 19V5M9 19V5M15 19V5M20 19V5M2 21h20M3 3h18l-9-2-9 2Z"/></svg>`,

  // ============ أيقونات الواجهة ============
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  loader2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.7-8.7"/><path d="M21 3v6h-6"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  messageSquareText: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H6l-3 2 1.2-4.2A8 8 0 1 1 21 12Z"/><path d="M8 10h8M8 14h5"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>`,
  share2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`,
  rotateCcw: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>`,
  printer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/><path d="M18 12h.01"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>`,
  xCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="{SIZE}" height="{SIZE}" class="{CLASS}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,

};

export function getIcon(key, size = 24, className = '') {
  const svg = ICONS[key];

  if (!svg) {
    console.warn(`Icon not found: ${key}`);
    return '';
  }

  return svg
    .replace(/\{SIZE\}/g, String(size))
    .replace(/\{CLASS\}/g, String(className));
}

export function renderIcons(root = document) {
  if (!root || typeof root.querySelectorAll !== 'function') return;

  root.querySelectorAll('[data-icon]').forEach((el) => {
    const key = el.dataset.icon;
    const size = el.dataset.iconSize || 24;
    const className = el.dataset.iconClass || '';

    if (!el.querySelector('svg')) {
      el.innerHTML = getIcon(key, size, className);
    }
  });
}

/**
 * تفعيل العرض تلقائياً عند تحميل DOM.
 * يمكن تعطيله بعد الاستيراد إذا كان المشروع يدير العرض يدوياً.
 */
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderIcons());
  } else {
    renderIcons();
  }
}

/* ============ نظام CSS للأيقونات ============ */

export const ICON_CSS = `
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

.icon-sm  { width: 0.875em; height: 0.875em; }
.icon-md  { width: 1em;     height: 1em; }
.icon-lg  { width: 1.25em;  height: 1.25em; }
.icon-xl  { width: 1.5em;   height: 1.5em; }
.icon-2xl { width: 2em;     height: 2em; }
.icon-3xl { width: 3em;     height: 3em; }

.icon-primary   { stroke: var(--primary); }
.icon-secondary { stroke: var(--secondary); }
.icon-muted     { stroke: var(--muted); }
.icon-danger    { stroke: var(--danger); }

[data-icon] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

[data-icon] > svg {
  flex-shrink: 0;
}
`;

/* ============ دليل التحديثات ============ */

export const ICONS_UPDATE_GUIDE = `
1. إضافة أيقونة:
   أضف مفتاحاً جديداً داخل ICONS بنفس بنية SVG الحالية.

2. القواعد:
   - ViewBox يجب أن يبقى 0 0 24 24.
   - stroke يجب أن يكون currentColor.
   - stroke-width يساوي 2.
   - stroke-linecap و stroke-linejoin يساويان round.
   - لا تضف مكتبات أو imports خارجية.

3. استخدام مباشر:
   getIcon('brain', 32, 'icon-primary')

4. استخدام عبر DOM:
   <span data-icon="brain" data-icon-size="24"
         data-icon-class="icon-primary"></span>
   ثم:
   renderIcons();

5. تغيير الحجم:
   الحجم يمرر إلى width و height في SVG.
   ويمكن استخدام أصناف icon-sm إلى icon-3xl.

6. تغيير اللون:
   الأيقونات تستخدم currentColor، لذلك يمكن التحكم باللون
   عبر color أو أصناف stroke المخصصة.

7. تحديث DOM:
   renderIcons(root) يقبل عنصراً محدداً بدلاً من document،
   مثلاً:
   renderIcons(document.querySelector('.results'));

8. لا تُغيّر أسماء المفاتيح الحالية، لأن صفحات المشروع قد
   تعتمد عليها.
`;

export default ICONS;
