function Month() {
  return (
    <div className="flex pl-[10px] pr-[10px]  p-2.5 items-center justify-between bg-red-50  md:pl-8 md:pr-9">
      <div className="bg-cyan-900 p-1">
        <p className="text-white text-sm">This week</p>
      </div>
      <div>
        <p className="text-gray-400 text-sm">1-3 month</p>
      </div>
      <div>
        <p className="text-gray-400 text-sm">Last 6 months</p>
      </div>
    </div>
  );
}
export default Month;
