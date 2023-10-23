import { useEffect} from "react"

function Month({handleChange, handleFilter, period}) {
  useEffect(() => {
    handleFilter()
  },[period])

  return (
    <div className="flex pl-[10px] pr-[10px]  p-2.5 items-center justify-between bg-red-50  md:pl-5 md:pr-8">
      <div className="bg-cyan-900 p-1">
        <button className="text-white" onClick={() => handleChange("")}>All</button>
      </div>
      <div className="bg-cyan-900 p-1">
        <button className="text-white" onClick={() => handleChange("thisWeek")}>A week</button>
      </div>
      <div>
        <button className="text-gray-400" onClick={() => handleChange("lastThreeMonths")}>1-3 month</button>
      </div>
      <div>
        <button className="text-gray-400" onClick={() => handleChange("lastSixMonths")}>Last 6 months</button>
      </div>
    </div>
  );
}

export default Month;
