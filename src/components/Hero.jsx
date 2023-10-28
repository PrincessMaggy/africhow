import {Link} from 'react-router-dom';


const Hero = () => {
    return (
        <div className=' hero-image bkground h-screen relative bg-black -top-44'>
            <section className='h-screen items-center relative md:flex md:flex-col md:justify-center'>
                <div className='absolute bottom-16 pl-12 flex flex-col'>
                    <h1 className='hero-text font-black mt-10 text-white md:text-center md:text-6xl lg:text-center lg:text-7xl text-left text-4xl'>
                        Connect <br />
                        with <span className='italic'>hungry</span> <br />
                        Customers
                    </h1>
                    <div className='flex md:justify-center'>
                        <Link to='./signup'>
                            <button className='text-base bg-[#33CC9F] bg-opacity-80 rounded-md text-white py-3 px-5 font-bold mt-4 cursor-pointer mb-12'>
                                Get Started Today <span> &rarr; </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
