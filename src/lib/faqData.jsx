import {useState} from 'react';

const FaqData = (props) => {
    const [item, setItem] = useState(props.data);

    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});
    };

    return (
        <div
            className={`bg-white p-2 text-black border-b-2 border-gray-200 w-{280px} group ${
                item.active === 1 ? 'is-active' : ''
            } `}
        >
            <div className='flex items-center '>
                <div className='w-full text-xs pr-4 md:text-base group-[.is-active]:font-bold'>
                    {item.action}
                </div>
                <div className='text-xl group-[.is-active]:rotate-[270deg]' onClick={handletoggleActive} >
                    <span> &rarr; </span>
                </div>
            </div>
            <div className=' text-sm overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]'>
                {item.process}
            </div>
        </div>
    );
};

export default FaqData;
