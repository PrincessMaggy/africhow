import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import arrow_back from '../../assets/icons/arrow_back.png';
function NotificationPage() {
  const [notify1, setNotify1] = useState(true); // set notify1 to true as default
  const [notify2, setNotify2] = useState(false);
  const [notify3, setNotify3] = useState(false);
  const [notify4, setNotify4] = useState(false);
  const [notify5, setNotify5] = useState(false);
  const [notify6, setNotify6] = useState(false);

  // Function to display a notification
  const showNotification = (notificationOption) => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      new Notification(notificationOption);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(notificationOption);
        }
      });
    }
  }

  useEffect(() => {
    if (notify1) {
      console.log('Notify 1 is enabled');
      // Add the logic to enable notifications for option 1
      showNotification('Notification 1 Enabled');
    }

    if (notify2) {
      console.log('Notify 2 is enabled');
      // Add the logic to enable notifications for option 2
      showNotification('Notification 2 Enabled');
    }

    if (notify3) {
      console.log('Notify 3 is enabled');
      // Add the logic to enable notifications for option 3
      showNotification('Notification 3 Enabled');
    }
    if (notify4) {
      console.log('Notify 3 is enabled');
      // Add the logic to enable notifications for option 3
      showNotification('Notification 4 Enabled');
    }
    if (notify5) {
      console.log('Notify 5 is enabled');
      // Add the logic to enable notifications for option 5
      showNotification('Notification 5 Enabled');
    }
    if (notify6) {
      console.log('Notify 6 is enabled');
      // Add the logic to enable notifications for option 6
      showNotification('Notification 6 Enabled');
    }
  }, [notify1, notify2, notify3, notify4, notify5, notify6]);

  return (
    <div className="space-y-4">
      <span><img src={arrow_back} alt="arrow_back" className="arrow" /></span>
      <h1 className="text-2xl text-start font-bold mt-4">Enable notification</h1>
      <p className='text-2xl text-start mt-4'>Enabling notification helps you keep track incoming orders, daily store performance and updates.</p>
      <h1 className='text-2xl text-start font-semibold mt-4 mb-6'>Select as many options as you like.</h1>
      <div className='flex flex-start'>
        <label className="inline-flex items-center">
          <input type="checkbox" checked={notify1} onChange={() => setNotify1(!notify1)} className="w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox" />
          <span className="ml-2">Incoming Orders</span>
        </label>
      </div>
      <div className='flex flex-start'>
        <label className="inline-flex items-center">
          <input type="checkbox" checked={notify2} onChange={() => setNotify2(!notify2)} className="w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox" />
          <span className="ml-2">Store performance</span>
        </label>
      </div>
      <div className='flex flex-start'>
        <label className="inline-flex items-center">
          <input type="checkbox" checked={notify3} onChange={() => setNotify3(!notify3)} className="w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox" />
          <span className="ml-2">Reviews and ratings</span>
        </label>
      </div>
      <div className='flex flex-start'>
        <label className="inline-flex items-center">
          <input type="checkbox" checked={notify4} onChange={() => setNotify4(!notify4)} className="w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox" />
          <span className="ml-2">Payment</span>
        </label>
      </div>
      <div className='flex flex-start'>
        <label className="inline-flex items-center">
          <input type="checkbox" checked={notify5} onChange={() => setNotify5(!notify5)} className="w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox" />
          <span className="ml-2">Delivery updates</span>
        </label>
      </div>
      <div className='flex flex-start'>
        <label className="inline-flex items-center">
          <input type="checkbox" checked={notify6} onChange={() => setNotify6(!notify6)} className="w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox" />
          <span className="ml-2">Customer's enquiry</span>
        </label>
      </div>
      <Link
          to="/updatedsuccesfully"
          className="place-content-start text-black lg:text-2xl text-xl mt-10 mb-4 border bg-primary lg:px-12 px-12 py-2"
        >
          Continue
        </Link>
        <p className='text-start text-2xl '>You can update this whenever you like.</p>
    </div>
  );
}

export default NotificationPage
