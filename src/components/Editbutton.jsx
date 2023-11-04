import {Link} from 'react-router-dom';

export default function Editbutton() {
    return (
        <div>
            <Link
                className='bg-[#145062]  text-[rgb(0,15,8)]  text-[12px] w-[1000px] rounded-[3px] py-[8px] px-[10px]'
                to='/vendorprofilechange'
            >
                Edit
            </Link>
        </div>
    );
}
