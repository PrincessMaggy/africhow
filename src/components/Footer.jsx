import NavList from '../lib/navLists';
import {Link} from 'react-router-dom';
import {UserAuth} from '../components/auth/AuthContext';

const Footer = () => {
    const {user} = UserAuth() || {};
    console.log(user?.email, 'user');
    const specificFooterIDs = [1, 2, 3];
    const filteredFooter = NavList.filter((item) =>
        specificFooterIDs.includes(item.id),
    );

    const specificSocialIDs = [4, 5, 6];
    const filteredSocial = NavList.filter((item) =>
        specificSocialIDs.includes(item.id),
    );

    const specificFooterNavIDs = [12, 1, 14];
    const filteredFooterNav = NavList.filter((item) =>
        specificFooterNavIDs.includes(item.id),
    );

    // Define your footer content
    const loggedInFooter = (
        <section className='loggedIn bg-black pb-8'>
            <ul className='flex justify-between gap-5 items-center'>
                {filteredFooterNav.map((item) => (
                    <li key={item.id} className='text-white cursor-pointer'>
                        <Link to={item.route}>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-2xl sm:text-4xl'>
                                    {item.icon}
                                </div>
                                <div className='text-sm'>{item.title}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );

    const loggedOutFooter = (
        <>
            <section className='loggedOut flex justify-between'>
                <div className='flex flex-col md:text-lg text-white'>
                    <h3 className='text-base md:text-lg lg:text-lg pb-2 text-left font-bold text-[#33CC9F]'>
                        AfriChow
                    </h3>
                    <p className='text-xs md:text-base md:pr-64 lg:text-base text-left pr-16'>
                        Experience a more efficient way to serve customers
                    </p>
                </div>
                <div className='flex justify-between gap-4 lg:px-16 md:px-16 text-base'>
                    <div className='lg:px-10 flex flex-col text-left text-sm'>
                        <h3 className='pb-2 underline text-[#33CC9F]'>
                            Links{' '}
                        </h3>
                        <ul>
                            {filteredFooter.map((item) => (
                                <li
                                    key={item.id}
                                    className='text-white cursor-pointer'
                                >
                                    <Link to={item.route}>
                                        {item.sub_title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col text-left text-sm'>
                        <h3 className='pb-2 underline text-[#33CC9F]'>
                            Socials
                        </h3>
                        <ul>
                            {filteredSocial.map((item) => (
                                <li
                                    key={item.id}
                                    className='text-white cursor-pointer'
                                >
                                    <Link to={item.route}>
                                        {item.sub_title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <hr className='mt-12 white' />
            <div className='flex justify-between mt-3 text-xs gap-2'>
                <h3 className='text-white text-left'>
                    All rights reserved <span>&copy;</span> AfriChow2023
                </h3>
            </div>
        </>
    );

    return (
        <div className='w-full flex flex-col pt-10 pb-4 px-10 bg-black'>
            {user?.email ? loggedInFooter : loggedOutFooter}
        </div>
    );
};

export default Footer;
