import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import arrow_back from '../../assets/icons/arrow_back.png';

function NotificationPage() {
    const navigate = useNavigate();
    const [checkedItems, setCheckItems] = useState([]);

    // Function to display a notification
    const showNotification = (notificationOption) => {
        if (!('Notification' in window)) {
            console.log('This browser does not support desktop notification');
        } else if (Notification.permission === 'granted') {
            new Notification(notificationOption);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(notificationOption);
                }
            });
        }
    };

    const onToggleCheck = (evt, label) => {
        if (evt.currentTarget.checked) {
            setCheckItems((prevItem) => [...prevItem, label]);
            showNotification(`Notification ${label} Enabled`);
        } else {
            setCheckItems(
                (prevItem) => prevItem?.filter((i) => i !== label) ?? [],
            );
        }
    };

    const submitForm = () => {
        localStorage.setItem('notifications', JSON.stringify(checkedItems));
        navigate('/updatedsuccesfully', {replace: true});
    };

    useEffect(() => {
        setCheckItems(
            typeof localStorage.getItem('notifications') === String
                ? JSON.parse(
                      JSON.parse(localStorage.getItem('notifications')),
                  ) ?? []
                : JSON.parse(localStorage.getItem('notifications')) ?? [],
        );
    }, []);

    return (
        <div className='p-4'>
            <span>
                <img src={arrow_back} alt='arrow_back' className='arrow' />
            </span>
            <h1 className='text-2xl text-start font-bold mt-4'>
                Enable notification
            </h1>
            <p className='text-base md:text-xl text-start mt-4'>
                Enabling notification helps you keep track incoming orders,
                daily store performance and updates.
            </p>
            <h1 className='text-2xl text-start font-semibold mt-4 mb-6'>
                Select as many options as you like.
            </h1>
            {[
                'Incoming Orders',
                'Store performance',
                'Reviews and ratings',
                'Payment',
                'Delivery updates',
                "Customer's enquiry",
            ]?.map((item, index) => (
                <CustomCheckBox
                    label={item}
                    key={item}
                    onChangeFunc={onToggleCheck}
                    checked={checkedItems?.includes(item)}
                />
            ))}

            <div
                role='button'
                onClick={submitForm}
                className='flex items-start md:items-center md:justify-center'
            >
                <div className='inline-block text-black lg:text-2xl text-xl mt-10 mb-4 border bg-primary lg:px-12 px-12 py-2'>
                    Continue
                </div>
            </div>
            <p className='text-start text-base md:text-2xl '>
                You can update this whenever you like.
            </p>
        </div>
    );
}

export default NotificationPage;

const CustomCheckBox = ({label, checked, onChangeFunc}) => {
    return (
        <div className='flex flex-start mb-2'>
            <label className='inline-flex items-center'>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={(evt) => onChangeFunc(evt, label)}
                    className='w-5 h-5 text-white bg-[#33CC9F] border-0 rounded checked:bg-[#33CC9F] checked:border-transparent form-checkbox'
                />
                <span className='ml-2'>{label}</span>
            </label>
        </div>
    );
};
