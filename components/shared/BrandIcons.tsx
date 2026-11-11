type P = { className?: string };

export function InstagramIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.3 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8c-1.5 0-3-.4-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.1 0-.3 0-.4l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5 1.5.6 2 .7 2.8.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.3-.2Z" />
    </svg>
  );
}

/** Пояс таэквондо — у Lucide нет подходящей иконки. */
export function BeltIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 9.5h7M14.5 9.5h7" />
      <path d="M2.5 13h6.5M15 13h6.5" />
      <rect x="9.5" y="8" width="5" height="6.5" rx="1.6" />
      <path d="m10.5 14.5-2.5 7M13.5 14.5l2.5 7" />
    </svg>
  );
}

/** «ABC» для английского языка. */
export function AbcIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 17 3-9 3 9M3 14.2h4" />
      <path d="M10 8v9h2.6a2.2 2.2 0 0 0 0-4.5H10M10 12.5h2.2a2.2 2.2 0 0 0 0-4.5H10" />
      <path d="M22 9.3A3.6 3.6 0 0 0 19.3 8c-2 0-3.3 2-3.3 4.5S17.3 17 19.3 17c1.1 0 2-.5 2.7-1.3" />
    </svg>
  );
}

export function LogoMark({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="31" fill="#FFF9EF" />
      {[
        ["#B8E5D0", 0],
        ["#DCCDF7", 72],
        ["#FFD6B8", 144],
        ["#B8E5D0", 216],
        ["#DCCDF7", 288],
      ].map(([c, r]) => (
        <ellipse key={r as number} cx="32" cy="17.5" rx="10" ry="12.5" fill={c as string} transform={`rotate(${r} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="10" fill="#FFE08A" />
      <circle cx="28.6" cy="31" r="1.5" fill="#284C43" />
      <circle cx="35.4" cy="31" r="1.5" fill="#284C43" />
      <path d="M28.5 35.2c2 1.8 5 1.8 7 0" stroke="#284C43" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
