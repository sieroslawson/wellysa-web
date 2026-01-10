'use client';

// SVG Icons w stylu line-art (teal-green na białym tle z zielonym obramowaniem)

export function ProfileIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Głowa i ramiona */}
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function KnowledgeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Otwarta książka z liniami tekstu */}
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      {/* Linie tekstu na lewej stronie */}
      <line x1="8" y1="7" x2="12" y2="7" />
      <line x1="8" y1="10" x2="12" y2="10" />
      <line x1="8" y1="13" x2="11" y2="13" />
      {/* Linie tekstu na prawej stronie */}
      <line x1="14" y1="7" x2="18" y2="7" />
      <line x1="14" y1="10" x2="18" y2="10" />
      <line x1="14" y1="13" x2="17" y2="13" />
    </svg>
  );
}

export function AssistantIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Robot head - kwadratowa głowa */}
      <rect x="8" y="6" width="8" height="8" rx="1" />
      {/* Antennae na górze */}
      <line x1="10" y1="6" x2="10" y2="4" />
      <line x1="14" y1="6" x2="14" y2="4" />
      <line x1="9" y1="4" x2="15" y2="4" />
      {/* Oczy - poziome kreski */}
      <line x1="10" y1="9" x2="11" y2="9" />
      <line x1="13" y1="9" x2="14" y2="9" />
      {/* Boki głowy */}
      <line x1="6" y1="8" x2="8" y2="8" />
      <line x1="6" y1="12" x2="8" y2="12" />
      <line x1="16" y1="8" x2="18" y2="8" />
      <line x1="16" y1="12" x2="18" y2="12" />
    </svg>
  );
}

export function ResultsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Serce */}
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      {/* Linia EKG przez środek serca */}
      <path 
        d="M6 12h2l1-1 2 3 2-3 1 1h2" 
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CollaborationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Clipboard */}
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      {/* Linie na dokumencie */}
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <line x1="9" y1="20" x2="13" y2="20" />
      {/* Linia EKG na dokumencie */}
      <path 
        d="M11 9h1l1 1 1-1h1" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
