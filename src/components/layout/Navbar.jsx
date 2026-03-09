import { NavLink } from "react-router-dom"
import { FaSearch, FaGlobe } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence } from "motion/react"
import coinbaseLogo from "../../assets/coinbase-logo.png"
import LanguageDropdown from "./LanguageDropdown"
import MegaNavDropdown from "./MegaNavDropdown"

const desktopNavLinks = [
  { label: "Cryptocurrencies", to: "/explore" },
  { label: "Individuals", to: "/individuals", menuKey: "Individuals" },
  { label: "Businesses", to: "/businesses", menuKey: "Businesses" },
  { label: "Institutions", to: "/institutions", menuKey: "Institutions" },
  { label: "Developers", to: "/developers", menuKey: "Developers" },
  { label: "Company", to: "/company", menuKey: "Company" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)
  const closeTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const openMegaMenu = (menuKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    setActiveMegaMenu(menuKey)
  }

  const scheduleCloseMegaMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 120)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          
          {/* Logo */}
          <NavLink to="/" className="navbar-logo">
                <img src={coinbaseLogo} alt="Coinbase Logo" className="w-10 h-10" />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center space-x-2 text-black-500 font-semibold">
            {desktopNavLinks.map((link) => (
              <div
                key={link.label}
                onMouseEnter={link.menuKey ? () => openMegaMenu(link.menuKey) : scheduleCloseMegaMenu}
                onMouseLeave={link.menuKey ? scheduleCloseMegaMenu : undefined}
              >
                <NavLink to={link.to} className="px-3 py-2 rounded-full transition-colors duration-200 hover:bg-gray-100">
                  {link.label}
                </NavLink>
              </div>
            ))}

          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          
          <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <FaSearch />
          </button>
          {/* Search dropdown */}


          <div className="relative">
            <button
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Select language and region"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
            >
              <FaGlobe />
            </button>

            <AnimatePresence>
              {isLanguageOpen && <LanguageDropdown onClose={() => setIsLanguageOpen(false)} />}
            </AnimatePresence>
          </div>

          <NavLink
            to="/signin"
            className="px-4 py-2 rounded-full bg-gray-100 text-black-500 font-semibold hover:bg-gray-200"
          >
            Sign in
          </NavLink>

          <NavLink
            to="/signup"
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Sign up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenu />
        </button>
      </div>

      <AnimatePresence>
        {activeMegaMenu && (
          <MegaNavDropdown
            menuKey={activeMegaMenu}
            onMouseEnter={() => openMegaMenu(activeMegaMenu)}
            onMouseLeave={scheduleCloseMegaMenu}
            onLinkClick={() => setActiveMegaMenu(null)}
            onBackdropClick={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 text-gray-700 font-medium">
          <NavLink to="/explore" className="block">
            Cryptocurrencies
          </NavLink>
          <NavLink to="/individuals" className="block">
            Individuals
          </NavLink>
          <NavLink to="/businesses" className="block">
            Businesses
          </NavLink>
          <NavLink to="/institutions" className="block">
            Institutions
          </NavLink>
          <NavLink to="/developers" className="block">
            Developers
          </NavLink>
          <NavLink to="/company" className="block">
            Company
          </NavLink>

          <NavLink
            to="/signin"
            className="block px-4 py-2 rounded-full bg-gray-100 text-center"
          >
            Sign in
          </NavLink>

          <NavLink
            to="/signup"
            className="block px-5 py-2 rounded-full bg-blue-600 text-white text-center"
          >
            Sign up
          </NavLink>
        </div>
      )}
    </nav>
  )
}