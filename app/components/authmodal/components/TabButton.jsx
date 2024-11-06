
const TabButton = ({ children, isSelected, onClick }) => {

  const borderCondition = isSelected ? "border-primary" : "border-transparent";

  return (
    <button onClick={onClick} className={`border-b-4 text-xl py-4 px-5 ${borderCondition}`}>{children}</button>
  )
}

export default TabButton