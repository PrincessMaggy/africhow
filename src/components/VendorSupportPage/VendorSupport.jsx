import {Link} from 'react-router-dom';
import BackArrow from '../../assets/icons/arrow_back.png';
import NextArrow from '../../assets/arrow_back_ios.png';
import Layout from '../Layout';

export default function VendorSupport() {
    return (
        //This is the landing page for the vendor support
        <div>
            <Layout>
                <hr className='h-0.5'></hr>
                <Link to='/vendors-dashboard'>
                    <img src={BackArrow} className='mx-5 mt-4 p-1 '></img>
                </Link>
                <div className='mx-4 mt-4 font-body text-left md:text-center'>
                    <h1 className='font-bold text-3xl mb-2 md:text-4xl md:mt-16 '>
                        Help desk
                    </h1>
                    <p className='text-[13px] font-normal sm:text-base md:text-lg'>
                        We are here to help! Reach out to our dedicated support
                        team for personalized assistance.
                    </p>
                    <div>
                        <Link
                            to='/supportform'
                            className='flex m-auto items-center md:justify-center'
                        >
                            <p className='py-7 font-medium text-base text-secondary md:font-bold md:text-xl'>
                                Send us an email
                            </p>
                            <img src={NextArrow} className='w-6 h-6 ml-4' />
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
