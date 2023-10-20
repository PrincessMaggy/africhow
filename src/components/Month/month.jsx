function Month() {
  return (
    <div className="flex pl-[10px] pr-[10px]  p-2.5 items-center justify-between bg-red-50">
      <div className="bg-cyan-900 p-1">
        <p className="text-white ">This week</p>
      </div>
      <div>
        <p className="text-gray-400">1-3 month</p>
      </div>
      <div>
        <p className="text-gray-400">Last 6 months</p>
      </div>
    </div>
  );
}
export default Month;
