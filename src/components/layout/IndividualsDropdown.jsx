import { NavLink } from "react-router-dom"
import { FaArrowTrendUp, FaChartLine, FaGem, FaPercent, FaRegCircleDot, FaRegSquare } from "react-icons/fa6"
import baseAppImage from "../../assets/base-app.avif"

const menuItems = [
  {
    title: "Buy and sell",
    description: "Buy, sell, and use crypto",
    to: "/signup",
    icon: FaRegCircleDot,
  },
  {
    title: "Advanced",
    description: "Professional-grade trading tools",
    to: "/signup",
    icon: FaChartLine,
  },
  {
    title: "Base App",
    description: "Post, earn, trade, and chat, all in one place",
    to: "/signup",
    icon: FaRegSquare,
    featured: true,
  },
  {
    title: "Earn",
    description: "Stake your crypto and earn rewards",
    to: "/signup",
    icon: FaPercent,
  },
  {
    title: "Coinbase One",
    description: "Get zero trading fees and more",
    to: "/signup",
    icon: FaArrowTrendUp,
  },
  {
    title: "Coinbase Wealth",
    description: "Institutional-grade services for UHNW",
    to: "/signup",
    icon: FaGem,
  },
]

export default function IndividualsDropdown({ onMouseEnter, onMouseLeave, onLinkClick }) {
  return (
    <div
      className="absolute top-full left-0 right-0 border-t border-gray-200 bg-[#f5f7fb] shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-[1600px] px-10 py-10 grid grid-cols-1 xl:grid-cols-[1fr_1fr_420px] gap-8">
        <div className="space-y-3">
          {menuItems.slice(0, 3).map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.title}
                to={item.to}
                onClick={onLinkClick}
                className={`flex items-start gap-5 rounded-3xl p-4 transition-colors ${item.featured ? "bg-gray-100" : "hover:bg-gray-100"}`}
              >
                <span className="mt-1 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-200 text-xl text-gray-900">
                  <Icon />
                </span>
                <span>
                  <p className="text-4xl font-semibold text-gray-900 leading-tight">{item.title}</p>
                  <p className="mt-1 text-4xl text-gray-600 leading-tight">{item.description}</p>
                </span>
              </NavLink>
            )
          })}
        </div>

        <div className="space-y-3">
          {menuItems.slice(3).map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.title}
                to={item.to}
                onClick={onLinkClick}
                className="flex items-start gap-5 rounded-3xl p-4 transition-colors hover:bg-gray-100"
              >
                <span className="mt-1 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-200 text-xl text-gray-900">
                  <Icon />
                </span>
                <span>
                  <p className="text-4xl font-semibold text-gray-900 leading-tight">{item.title}</p>
                  <p className="mt-1 text-4xl text-gray-600 leading-tight">{item.description}</p>
                </span>
              </NavLink>
            )
          })}
        </div>

        <NavLink
          to="/company/system-update"
          onClick={onLinkClick}
          className="rounded-3xl p-4 transition-colors hover:bg-gray-100"
        >
          <img src={baseAppImage} alt="System update" className="w-full rounded-3xl object-cover" />
          <p className="mt-4 text-5xl font-semibold leading-tight text-gray-900">System Update 2025</p>
          <p className="mt-2 text-5xl leading-tight text-gray-600">The next chapter of Coinbase. Live on X 12/17.</p>
          <p className="mt-4 text-4xl font-semibold text-gray-900 underline underline-offset-4">Learn more</p>
        </NavLink>
      </div>
    </div>
  )
}
