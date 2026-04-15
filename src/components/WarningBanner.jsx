/* Warning banner component indicating this is a student project */
export default function WarningBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-yellow-900 border-b border-yellow-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-yellow-300 flex-shrink-0"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <p className="text-yellow-100 text-sm font-medium">
          ⚠️ <strong>Student Project</strong> — This is an educational demo and is not affiliated with Coinbase. Do not use your real password or credentials.
        </p>
      </div>
    </div>
  );
}
