import Meal from '../assets/meals/Onay.jpg';

const HomeSectionOne = () => {
    return (
        <div className='w-full min-h-full bg-opacity-25'>
            <div className='relative flex flex-col justify-center px-8'>
                <section className=' section-header w-full flex flex-col'>
                    <div className='text-center'>
                        <h3 className='text-4xl font-black mt-2'>
                            TOP FEATURES
                        </h3>
                        <hr className='border-b-2 border-black w-12 mx-auto mt-4' />
                        <p className='text-xs py-4'>
                            Simplify and track accepted orders, access bills and
                            customer contacts with ease for an efficient
                            delivery workflow
                        </p>
                    </div>
                </section>
                <section className=' section-header w-full flex flex-col justify-between gap-6 mt-8 mb-24 '>
                    <div className='text-center border-2 border-gray-200 rounded-md px-4 shadow-lg bg-[#D5F8EE] bg-opacity-63'>
                        <h3 className='text-base font-bold mt-4'>
                            Elevate your restaurant
                        </h3>
                        <p className='text-xs py-4'>
                            From enabling a hassle free preorder process, to
                            intuitive sales management, we provide the tools you
                            need for your restaurant to thrive
                        </p>

                        <div className='flex w-full gap-3'>
                            <div className='flex justify-between items-center border border-black mb-8 w-1/2 shadow-lg rounded-md pr-3 bg-white '>
                                <div className='flex items-center gap-2 px-4'>
                                    <img
                                        src={Meal}
                                        alt=''
                                        className='w-4 h-4 rounded-full'
                                    />
                                    <div className='flex flex-col text-left justify-start my-3'>
                                        <p className='meal_name font-semibold'>
                                            Shrimp rice
                                        </p>
                                        <p className='meal_price font-bold text-gray-500'>
                                            N1,500
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='add_meal px-1 border border-green-800 bg-lime-300'>
                                        +
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center border mb-8 w-1/2 shadow-lg rounded-md pr-3 bg-black'>
                                <div className='flex items-center gap-2 px-4'>
                                    <img
                                        src={Meal}
                                        alt=''
                                        className='w-4 h-4 rounded-full'
                                    />
                                    <div className='flex flex-col text-left justify-start my-3'>
                                        <p className='meal_name font-semibold text-white'>
                                            Reo noodles
                                        </p>
                                        <p className='meal_price font-bold text-gray-400'>
                                            N3,200
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='add_meal px-1 border border-green-800 bg-lime-300'>
                                        +
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 w-full'>
                        <div className='flex flex-col w-1/2 gap-2'>
                            <div className='text-center border-2 border-gray-200 rounded-md px-4 '>
                                <h3 className='text-base font-bold mt-4'>
                                    View Payouts
                                </h3>
                                <p className='text-xs py-4'>
                                    Captivate new customers drawn to African
                                    cuisine with your location.{' '}
                                </p>
                                <div className='flex justify-between items-center border p-2 banner-btn bg-green-200 font-bold mb-2'>
                                    <h3> June 2023 </h3>
                                    <h3> $1,007.20 </h3>
                                </div>
                            </div>
                            <div className='text-center border-2 border-gray-200 rounded-md px-4 shadow-lg'>
                                <h3 className='text-base font-bold mt-4'>
                                    Track Orders
                                </h3>
                                <p className='text-xs py-4'>
                                    Maximize your returns through effective
                                    sales monitoring.
                                </p>
                                <div className='flex justify-between items-center border p-2 banner-btn bg-green-200 font-bold mb-3'>
                                    <h3> Ego Sadiq </h3>
                                    <h3> x1 Rice bowl </h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 h-full gap-2'>
                            <div className='text-center border-2 border-gray-200 rounded-md h-1/2 px-4 pb-2'>
                                <h3 className='text-base font-bold mt-4'>
                                    Unlock Efficiency
                                </h3>
                                <p className='text-xs py-4'>
                                    Optimize operations and make informed
                                    decisions and profitability.
                                </p>
                                <div className='flex justify-between items-center border p-2 banner-btn bg-green-200 font-bold'>
                                    <h3> June 2023 </h3>
                                    <h3> $1,007.20 </h3>
                                </div>
                                <div className='flex justify-between items-center border p-2 banner-btn bg-green-200 font-bold mt-1'>
                                    <h3> June 2023 </h3>
                                    <h3> $1,007.20 </h3>
                                </div>
                                <div className='flex justify-between items-center border p-2 banner-btn bg-green-200 font-bold mt-1'>
                                    <h3> June 2023 </h3>
                                    <h3> $1,007.20 </h3>
                                </div>
                            </div>
                            <div className='feature-btn text-start border-2 border-gray-200 rounded-md text-white px-4 pb-5 shadow-lg bg-[#073a49] bg-opacity-80'>
                                <h3 className='text-sm font-bold mt-3'>
                                    See other features here
                                </h3>
                                <a
                                    href='http://'
                                    className='border-b pb-1 border-white font-semibold'
                                >
                                    See more <span> &rarr; </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeSectionOne;
