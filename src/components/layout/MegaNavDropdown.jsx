import { NavLink } from "react-router-dom"
import { motion } from "motion/react"

const Icon = ({ children }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-600"
  >
    {children}
  </svg>
)

const BuySellIcon = () => <Icon><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8l4 4-4 4" /></Icon>
const AppIcon = () => <Icon><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></Icon>
const OneIcon = () => <Icon><circle cx="12" cy="12" r="9" /><path d="M12 8v8" /></Icon>
const DiamondIcon = () => <Icon><path d="M12 2L2 8l10 14L22 8z" /></Icon>
const ChainIcon = () => <Icon><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></Icon>
const LearnIcon = () => <Icon><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></Icon>
const AdvancedIcon = () => <Icon><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></Icon>
const EarnIcon = () => <Icon><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></Icon>
const WealthIcon = () => <Icon><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></Icon>
const CreditCardIcon = () => <Icon><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></Icon>
const BusinessIcon = () => <Icon><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></Icon>
const ListingsIcon = () => <Icon><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></Icon>
const PaymentsIcon = () => <Icon><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M7 15h.01M11 15h4" /></Icon>
const TokenIcon = () => <Icon><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-5" /></Icon>
const ClockIcon = () => <Icon><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>
const ShieldIcon = () => <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>
const PercentIcon = () => <Icon><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></Icon>
const WalletIcon = () => <Icon><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M16 10h.01" /><path d="M18 8v4" /></Icon>
const ExchangeIcon = () => <Icon><path d="M18 8L22 12L18 16" /><path d="M2 12h20" /><path d="M6 16L2 12L6 8" /></Icon>
const GlobeIcon = () => <Icon><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></Icon>
const DerivativesIcon = () => <Icon><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></Icon>
const PoolsIcon = () => <Icon><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></Icon>
const EyeIcon = () => <Icon><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></Icon>
const ChartBarIcon = () => <Icon><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></Icon>
const StackIcon = () => <Icon><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></Icon>
const BankIcon = () => <Icon><line x1="3" y1="22" x2="21" y2="22" /><rect x="3" y="10" width="18" height="9" /><polygon points="12 2 2 10 22 10" /></Icon>
const InfoIcon = () => <Icon><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></Icon>
const PeopleIcon = () => <Icon><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>
const NewsIcon = () => <Icon><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6z" /></Icon>
const CareersIcon = () => <Icon><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></Icon>
const SupportIcon = () => <Icon><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>
const SecurityIcon = () => <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></Icon>

const MENUS = {
  Individuals: {
    cols: [
      [
        { icon: BuySellIcon, title: "Buy and sell", desc: "Buy, sell, and use crypto", to: "/signUp" },
        { icon: AppIcon, title: "Base App", desc: "Post, earn, trade, and chat, all in one place", to: "/signUp", featured: true },
        { icon: OneIcon, title: "Coinbase One", desc: "Get zero trading fees and more", to: "/learn" },
        { icon: DiamondIcon, title: "Private Client", desc: "For trusts, family offices, UHNWIs", to: "/learn" },
        { icon: ChainIcon, title: "Onchain", desc: "Dive into the world of onchain apps", to: "/learn" },
        { icon: LearnIcon, title: "Learn", desc: "Crypto education and resources", to: "/learn" },
      ],
      [
        { icon: AdvancedIcon, title: "Advanced", desc: "Professional-grade trading tools", to: "https://www.coinbase.com/advanced-trade" },
        { icon: EarnIcon, title: "Earn", desc: "Stake your crypto and earn rewards", to: "https://www.coinbase.com/earn" },
        { icon: WealthIcon, title: "Coinbase Wealth", desc: "Institutional-grade services for UHNW", to: "https://www.coinbase.com/wealth" },
        { icon: CreditCardIcon, title: "Credit Card", desc: "Earn up to 4% bitcoin back", to: "https://www.coinbase.com/credit-card" },
        { icon: WalletIcon, title: "Debit Card", desc: "Spend crypto, get crypto back", to: "https://www.coinbase.com/card" },
      ],
    ],
    featured: {
      image: "https://static-assets.coinbase.com/marketing/2025-q4-event/navigation-upsell.png",
      title: "System Update 2025",
      description: "The next chapter of Coinbase. Live on X 12/17.",
      linkText: "Learn more",
      to: "/",
    },
  },
  Businesses: {
    cols: [
      [
        { icon: BusinessIcon, title: "Business", desc: "Crypto trading and payments for startups and SMBs", to: "https://www.coinbase.com/business" },
        { icon: ListingsIcon, title: "Asset Listings", desc: "List your asset on Coinbase", to: "https://www.coinbase.com/listings" },
      ],
      [
        { icon: PaymentsIcon, title: "Payments", desc: "Stablecoin payments stack for commerce", to: "https://www.coinbase.com/payments" },
        { icon: TokenIcon, title: "Token Manager", desc: "Token distributions, vesting, and lockups", to: "https://www.coinbase.com/tokenmanager" },
      ],
    ],
    featured: {
      image: "https://static-assets.coinbase.com/growth/acquisition/global-nav/onchain_payment_protocol.png",
      title: "Commerce Payments Protocol",
      description: "A new standard for onchain payments.",
      linkText: "Go to Payments",
      to: "/businesses/payments",
    },
  },
  Institutions: {
    cols: [
      {
        header: { label: "Prime", to: "/institutions/prime" },
        items: [
          { icon: ClockIcon, title: "Trading and Financing", desc: "Professional prime brokerage services", to: "https://www.coinbase.com/developer-platform/products/financing" },
          { icon: ShieldIcon, title: "Custody", desc: "Securely store all your digital assets", to: "https://www.coinbase.com/developer-platform/products/custody" },
          { icon: PercentIcon, title: "Staking", desc: "Explore staking across our products", to: "https://www.coinbase.com/developer-platform/products/staking" },
          { icon: AppIcon, title: "Onchain Wallet", desc: "Institutional-grade wallet to get onchain", to: "https://www.coinbase.com/developer-platform/products/onchain-wallet" },
        ],
      },
      {
        header: { label: "Markets", to: "/institutions/markets" },
        items: [
          { icon: ExchangeIcon, title: "Exchange", desc: "Spot markets for high-frequency trading", to: "https://www.coinbase.com/developer-platform/products/exchange" },
          { icon: GlobeIcon, title: "International Exchange", desc: "Access perpetual futures markets", to: "https://www.coinbase.com/developer-platform/products/international-exchange" },
          { icon: DerivativesIcon, title: "Derivatives Exchange", desc: "Trade an accessible futures market", to: "https://www.coinbase.com/developer-platform/products/derivatives" },
          { icon: PoolsIcon, title: "Verified Pools", desc: "Transparent, verified liquidity pools", to: "https://www.coinbase.com/developer-platform/products/verified-pools" },
        ],
      },
    ],
    featured: {
      image: "https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/institutions_upsell.png",
      title: "Our clients",
      description: "Trusted by institutions and government.",
      linkText: "Learn more",
      to: "/institutions/clients",
    },
  },
  Developers: {
    cols: [
      {
        header: { label: "Coinbase Developer Platform", to: "/" },
        items: [
          { icon: EyeIcon, title: "Payments", desc: "Fast and global stablecoin payments in one integration", to: "https://www.coinbase.com/developer-platform/payments" },
          { icon: ChartBarIcon, title: "Trading", desc: "Launch crypto trading and custody for your users", to: "https://www.coinbase.com/developer-platform/trading" },
          { icon: WalletIcon, title: "Wallets", desc: "Deploy customizable and scalable wallets", to: "https://www.coinbase.com/developer-platform/wallets" },
          { icon: StackIcon, title: "Stablecoins", desc: "Access USDC and custom stablecoin infrastructure", to: "https://www.coinbase.com/developer-platform/products/stablecoin-as-a-service" },
        ],
      },
      {
        header: { label: "Solutions for any company", to: "/" },
        items: [
          { icon: BankIcon, title: "Banks and Brokerages", desc: "Secure, regulated offerings for institutions", to: "https://www.coinbase.com/developer-platform/banks" },
          { icon: PaymentsIcon, title: "Payment Firms", desc: "Near-instant global payment rails", to: "https://www.coinbase.com/developer-platform/paymentfirms" },
          { icon: AppIcon, title: "Startups", desc: "Launch with Coinbase crypto infrastructure", to: "https://www.coinbase.com/developer-platform/startups" },
        ],
      },
    ],
    featured: {
      image: "https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/developers_upsell_cdxv2_2.jpg",
      title: "World class crypto infrastructure.",
      description: "Discover Coinbase's complete crypto-as-a-service platform.",
      linkText: "Learn more",
      to: "/developers/platform",
    },
  },
  Company: {
    cols: [
      [
        { icon: InfoIcon, title: "About", desc: "Powering the crypto economy", to: "https://www.coinbase.com/about" },
        { icon: PeopleIcon, title: "Affiliates", desc: "Help introduce the world to crypto", to: "https://www.coinbase.com/affiliates" },
        { icon: NewsIcon, title: "Blog", desc: "Read the latest from Coinbase", to: "https://www.coinbase.com/blog" },
      ],
      [
        { icon: CareersIcon, title: "Careers", desc: "Work with us", to: "https://www.coinbase.com/careers" },
        { icon: SupportIcon, title: "Support", desc: "Find answers to your questions", to: "https://help.coinbase.com" },
        { icon: SecurityIcon, title: "Security", desc: "The most trusted and secure", to: "https://www.coinbase.com/company/security" },
      ],
    ],
    featured: {
      image: "https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/company_upsell.png",
      title: "Learn all about Coinbase",
      description: "We're building the open financial system.",
      linkText: "Create your account",
      to: "/signup",
    },
  },
}

function NavMenuItem({ icon: IconComponent, title, desc, to, featured, onLinkClick }) {
  return (
    <NavLink
      to={to}
      onClick={onLinkClick}
      className={`flex gap-4 rounded-2xl px-4 py-3 transition-colors ${featured ? "bg-gray-100" : "hover:bg-gray-100"}`}
    >
      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
        <IconComponent />
      </span>
      <span>
        <p className="text-[1.15rem] leading-snug font-semibold text-gray-900">{title}</p>
        <p className="mt-1 text-[0.98rem] leading-snug text-gray-600">{desc}</p>
      </span>
    </NavLink>
  )
}

function NavSectionHeader({ label, to, onLinkClick }) {
  return (
    <NavLink
      to={to}
      onClick={onLinkClick}
      className="mb-2 inline-flex text-[0.9rem] font-semibold text-gray-900 underline underline-offset-4"
    >
      {label}
    </NavLink>
  )
}

function NavFeatured({ featured, onLinkClick }) {
  return (
    <NavLink to={featured.to} onClick={onLinkClick} className="block rounded-2xl p-3 hover:bg-gray-100 transition-colors">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
      </div>
      <p className="mt-4 text-[1.35rem] leading-tight font-semibold text-gray-900">{featured.title}</p>
      <p className="mt-2 text-[1rem] leading-snug text-gray-600">{featured.description}</p>
      <p className="mt-3 text-[1rem] font-semibold text-gray-900 underline underline-offset-4">{featured.linkText}</p>
    </NavLink>
  )
}

export default function MegaNavDropdown({ menuKey, onMouseEnter, onMouseLeave, onLinkClick, onBackdropClick }) {
  const menu = MENUS[menuKey]

  if (!menu) {
    return null
  }

  const hasSectionHeaders = menu.cols.length > 0 && menu.cols[0]?.header !== undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="fixed left-0 right-0 top-[73px] z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-[calc(100vh-73px)]">
        <div className="h-[52vh] overflow-y-auto border-t border-gray-200 bg-[#f5f7fb] shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
          <div className="mx-auto max-w-[1320px] px-8 py-6">
            <div className="grid gap-6 xl:grid-cols-[1fr_1fr_320px]">
              <div className="space-y-2">
                {hasSectionHeaders
                  ? (
                    <>
                      <NavSectionHeader label={menu.cols[0].header.label} to={menu.cols[0].header.to} onLinkClick={onLinkClick} />
                      {menu.cols[0].items.map((item) => (
                        <NavMenuItem key={item.title} {...item} onLinkClick={onLinkClick} />
                      ))}
                    </>
                    )
                  : (
                      menu.cols[0].map((item) => <NavMenuItem key={item.title} {...item} onLinkClick={onLinkClick} />)
                    )}
              </div>

              <div className="space-y-2">
                {hasSectionHeaders
                  ? (
                    <>
                      <NavSectionHeader label={menu.cols[1].header.label} to={menu.cols[1].header.to} onLinkClick={onLinkClick} />
                      {menu.cols[1].items.map((item) => (
                        <NavMenuItem key={item.title} {...item} onLinkClick={onLinkClick} />
                      ))}
                    </>
                    )
                  : (
                      menu.cols[1].map((item) => <NavMenuItem key={item.title} {...item} onLinkClick={onLinkClick} />)
                    )}
              </div>

              <div className="border-l border-gray-200 pl-5">
                <NavFeatured featured={menu.featured} onLinkClick={onLinkClick} />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Close menu"
          onClick={onBackdropClick}
          className="h-[48vh] w-full bg-white/20 backdrop-blur-[5px]"
        />
      </div>
    </motion.div>
  )
}
