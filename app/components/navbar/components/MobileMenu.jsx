import links from "../list/links";

const MobileMenu = ({isMenuOpened}) => {
  return (
    <div
        className={`absolute bg-primary w-full top-16 left-0 overflow-hidden transition-all sm:top-20 md:hidden z-0 ${
          isMenuOpened ? "h-52" : "h-0"
        }`}
      >
        <div className="p-5">
          <ul className="text-white text-sm font-semibold space-y-7">
            {links.map((item, index) => (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default MobileMenu