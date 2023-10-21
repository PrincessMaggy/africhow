import Canada from '../assets/meals/Onay.jpg';


const homeSectionThree = () => {
  return (
    <div className='w-full min-h-full bg-opacity-25'>
        <div className='relative flex flex-col justify-center px-8 lg:mx-12 md:mx-12'>
            <section className=' section-header w-full flex flex-col'>
                <div className='text-center'>
                    <h3 className='text-4xl font-black mt-2 uppercase'>Our Locations</h3>
                    <hr className='border-b-2 border-black w-12 mx-auto mt-4' />
                    <p className='text-xs pt-4 pb-10'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
                </div>
            </section>
            <section className='flex flex-col justify-center'>
                <div className='flex flex-col lg:flex-row md:flex-row grow gap-6 mb-12 basis-8 mr-4 md:mr-8'>
                    <div className=' location-canada flex flex-col justify-center font-bold'>
                        <img src= {Canada} alt="" srcset="" />
                        <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>Canada</h3>
                    </div>
                    <section className=' location-canada flex flex-col justify-center font-bold'>
                        <img src= {Canada} alt="" srcset="" />
                        <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>Canada</h3>
                    </section>
                    <section className=' location-canada flex flex-col justify-center font-bold'>
                        <img src= {Canada} alt="" srcset="" />
                        <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl '>Canada</h3>
                    </section>
                </div>
                    <div className='flex justify-center'>
                        <button className='text-base bg-[#33CC9F] rounded-md bg-opacity-80 py-4 px-8 font-black pointer mb-16'>
                        Get started today
                        </button>
                    </div>
            </section>
            </div>
        </div>
    );
};

export default HomeSectionThree;
