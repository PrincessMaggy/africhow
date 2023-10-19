import { useState } from "react";
import DayofWeek from "../DayofWeek/dayofweek";
function Calender() {
  const [Open, setOpen] = useState("false");
  return (
    <div className="pl-[10px] pr-[10px] ">
      <h1
        onClick={() => setOpen(!Open)}
        className="font-bold text-xl cursor-pointer flex items-center gap-[8px] "
      >
        Monday
        {!Open ? (
          <span className="flex self-center">
            <svg
              class="w-2.5 h-6 text-gray-500 dark:text-black mt-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </span>
        ) : (
          <span className="">
            <svg
             class="w-1.5 h-6 text-gray-500 dark:text-black  mt-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </span>
        )}
      </h1>
      {Open && <DayofWeek />}
    </div>
  );
}
export default Calender;
