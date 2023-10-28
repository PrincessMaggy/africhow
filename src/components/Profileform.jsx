import React from "react";
import Editbutton from "./Editbutton";

export default function Profileform() {
  return (
    <>
      <div className="grid gap-3 relative">
        <div className="grid items-end">
          <form className="grid gap-3">
            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">First name</label>
              <input
                name="fName"
                type="text"
                placeholder="Michael"
                className="input w-[80px] h-[30px]"
              />
            </div>

            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">Last name</label>
              <input
                name="lName"
                type="text"
                placeholder="Ibrahim"
                className="input w-[80px] h-[30px]"
              />
            </div>

            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">
                business name
              </label>
              <input
                name="bName"
                type="text"
                placeholder="Alex's diner"
                className="input w-[80px] h-[30px]"
              />
            </div>

            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">
                Business Address
              </label>
              <input
                name="Badress"
                type="text"
                placeholder="1234 N.Compass Way"
                className="input w-[80px]  h-[30px]"
              />
            </div>

            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">
                Business email
              </label>
              <input
                type="text"
                placeholder="Dave@alexdiner.com"
                className="input w-[80px] h-[30px]"
              />
            </div>

            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">
                Comfirm business email
              </label>
              <input
                name="bemail"
                type="text"
                placeholder="Dave@alexdiner.com"
                className="input w-[80px] h-[30px]"
              />
            </div>

            <div className="grid gap-2">
              <label className="label text-base font-light  flex gap-2 mt-3">
                Business phone number
              </label>
              <input
                name="bphone"
                type="tel"
                placeholder="+1(916) 555-5555"
                className="input w-[80px] h-[30px]"
              />
            </div>
            <Editbutton />
          </form>
        </div>
      </div>
    </>
  );
}
