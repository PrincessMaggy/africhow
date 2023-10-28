
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import line from '../assets/ProfileImg/Line.png';

export default function Workhours() {
  // State to manage the checkboxes and dropdown values
  const [isChecked, setIsChecked] = useState({
    MON: false,
    TUE: false,
    WED: false,
    THU: false,
    FRI: false,
    SAT: false,
    SUN: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    MON: '',
    TUE: '',
    WED: '',
    THU: '',
    FRI: '',
    SAT: '',
    SUN: '',
  });

  // Event handler for the checkbox
  const handleCheckboxChange = (day) => {
    setIsChecked((prevState) => ({ ...prevState, [day]: !prevState[day] }));
  };

  // Event handler for the dropdown
  const handleDropdownChange = (day, event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [day]: event.target.value,
    }));
  };

  return (
    <div className="flex flex-col align-center justify-center mt-5 gap-3">
      {Object.keys(isChecked).map((day) => (
        <div className="flex flex-row align-center justify-center m-auto gap-3" key={day}>
          <label>
            <input
              type="checkbox"
              checked={isChecked[day]}
              onChange={() => handleCheckboxChange(day)}
              className="m-2"
            />
            {day}
          </label>

          {/* Dropdown */}
          <select value={selectedOptions[day]} onChange={(event) => handleDropdownChange(day, event)}>
            <option value="">9:00am</option>
            <option value="option1">10:00am</option>
            <option value="option2">11:00am</option>
            <option value="option3">12:00pm</option>
            <option value="option4">1:00pm</option>
            <option value="option5">2:00pm</option>
            <option value="option6">3:00pm</option>
            <option value="option7">4:00pm</option>
            <option value="option8">5:00pm</option>
            <option value="option9">6:00pm</option>
            <option value="option10">7:00pm</option>
          </select>

          <img src={line} className="h-[3px] w-[20px] mt-3" />

          <select value={selectedOptions[day]} onChange={(event) => handleDropdownChange(day, event)}>
            <option value="option1">10:00pm</option>
            <option value="option2">9:00pm</option>
            <option value="option3">8:00pm</option>
            <option value="option4">7:00pm</option>
            <option value="option5">6:00pm</option>
            <option value="option6">5:00pm</option>
            <option value="option7">4:00pm</option>
            <option value="option8">3:00pm</option>
            <option value="option9">2:00pm</option>
            <option value="option10">1:00pm</option>
          </select>
        </div>
    ))}
      <Link  className="bg-[#145062] text-[rgb(0,15,8)]  text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px] mt-3" to="http://localhost:5173/vendorprofilechange">Save</Link>
    </div>
  );
}

  