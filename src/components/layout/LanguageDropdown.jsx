import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

const LANGUAGES = [
  { name: "English", region: "Global", active: true },
  { name: "Espanol", region: "United States" },
  { name: "English", region: "United States" },
  { name: "Deutsch", region: "Germany" },
  { name: "Francais", region: "France" },
  { name: "Italiano", region: "Italy" },
  { name: "Portugues", region: "Brazil" },
  { name: "Turkce", region: "Turkey" },
  { name: "Nihongo", region: "Japan" },
  { name: "Hangugeo", region: "Korea" },
  { name: "JianTi ZhongWen", region: "China" },
  { name: "Russkiy", region: "Russia" },
  { name: "Nederlands", region: "Netherlands" },
  { name: "Polski", region: "Poland" },
]

export default function LanguageDropdown({ onClose }) {
  const [query, setQuery] = useState("")
  const ref = useRef(null)

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [onClose])

  const filtered = LANGUAGES.filter(
    (language) =>
      !query ||
      language.name.toLowerCase().includes(query.toLowerCase()) ||
      language.region.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute top-[calc(100%+8px)] right-0 w-[320px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-50 overflow-hidden border border-gray-100"
    >
      <div className="px-5 pt-5 pb-3">
        <p className="text-[0.8125rem] font-semibold text-gray-600 mb-3">Language and region</p>

        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="bg-transparent text-[0.875rem] text-gray-900 placeholder:text-gray-500 outline-none w-full"
          />
        </div>
      </div>

      <div className="max-h-[320px] overflow-y-auto pb-3">
        {filtered.map((language, index) => (
          <button
            key={`${language.name}-${language.region}-${index}`}
            onClick={onClose}
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors text-left"
          >
            <div>
              <p className="text-[0.875rem] font-semibold text-gray-900">{language.name}</p>
              <p className="text-[0.8125rem] text-gray-600">{language.region}</p>
            </div>
            {language.active && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
