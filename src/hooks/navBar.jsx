import HamBurger from '../assets/hamburger/white.svg';
import Close from '../assets/hamburger/Close.svg';
import {MdChevronRight} from 'react-icons/md';
import {useLocation} from 'react-router-dom';
import headerList from '../lib/headerList';
import NavHeader from '../lib/navHeaderData';
import {Link} from 'react-router-dom';
import NavList from '../lib/navLists';
import {UserAuth} from '../components/auth/AuthContext';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = ({toggleMenu, menuOpen}) => {
    const {user} = UserAuth() || {};
    const menuItems = NavList(user); // Pass the user to navList
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const closeMenu = () => {
        if (menuOpen) {
            toggleMenu();
        }
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Sign out successful');
                window.location.href = '/';
            })
            .catch((err) => {
                alert(err);
            });
    };
    //headerlist display
    const targetId = location.pathname;
    const currentPathname = location.pathname;

    //homeNav display
    const specificNavIDs = [1, 2, 3];
    const filteredNav = menuItems.filter((item) =>
        specificNavIDs.includes(item.id),
    );

    //sideNav display
    const specificSideNavIDs = [7, 8, 9, 10, 11, 3, 13];
    const filteredSideNav = menuItems.filter((item) =>
        specificSideNavIDs.includes(item.id),
    );

    return (
        <div className='px-10 py-16 bg-green-200 text-white flex justify-between items-center top-0 right-0 left-0 z-10 bg-transparent'>
            <div className='flex gap-3 justify-center items-center z-10 px-1 '>
                <img
                    src={HamBurger}
                    alt=''
                    srcSet=''
                    className='w-8 cursor-pointer rotate-180 border-2 border-black p-2 bg-black'
                    onClick={toggleMenu}
                />
                <NavHeader data={headerList} targetId={targetId} />
            </div>
            <div className='flex md:justify-center z-10'>
                {user?.email ? (
                    <div>
                        <button
                            className='text-sm bg-[#33CC9F] rounded-sm bg-opacity-80 text-black py-1 px-5 font-black pointer'
                            onClick={handleLogout} // You can add an onClick handler for logout
                        >
                            Logout
                        </button>
                        {/* <div>{user.email}</div> */}
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className='text-sm bg-[#33CC9F] rounded-sm bg-opacity-80 text-black py-1 px-5 font-black pointer'>
                            Login
                        </button>
                    </Link>
                )}
            </div>

            {/* Close button */}
            {menuOpen && (
                <div className='absolute top-8 mt-4 left-12 cursor-pointer flex items-center justify-center pl-12'>
                    <div className='fixed flex justify-between items-center gap-3 z-20 pt-20 p-12'>
                        <img
                            src={Close}
                            alt=''
                            srcSet=''
                            className='z-30 relative stroke-current bg-black p-2 border-2 w-7'
                            onClick={toggleMenu}
                        />
                        <h1 className='z-30 text-black font-bold '>AfriChow</h1>
                    </div>
                </div>
            )}

            {/* Full-screen menu */}
            {menuOpen &&
                (isHomePage ? (
                    <div className='fixed top-0 left-0 right-24 bottom-0 pt-32 bg-green-100 text-black flex flex-col items-center ease-out delay-500s duration-300 z-10'>
                        <ul className='text-xl lg:text-6xl md:text-4xl font-semibold mb-5 lg:text-center md:text-center text-left'>
                            {filteredNav.map((item) => (
                                <li
                                    key={item.id}
                                    className='mb-5 cursor-pointer '
                                >
                                    <Link to={item.route}>
                                        {item.sub_title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className='fixed top-0 left-0 right-24 bottom-0 pt-32 bg-white text-black flex flex-col items-center ease-out delay-100s duration-300 z-10'>
                        <ul className='text-sm md:text-2xl font-semibold mb-5 lg:text-center md:text-center text-left'>
                            {filteredSideNav.map((item) => (
                                <li
                                    key={item.id}
                                    className='mb-5 cursor-pointer'
                                >
                                    <div
                                        className={`flex justify-between pl-2 items-center ${
                                            currentPathname === item.route
                                                ? 'activeLink'
                                                : ''
                                        }`}
                                    >
                                        <Link to={item.route}>
                                            <div className='flex items-center gap-5'>
                                                <span>{item.icon}</span>
                                                <span className='font-medium'>
                                                    {item.title}
                                                </span>
                                            </div>
                                        </Link>
                                        <div>
                                            <MdChevronRight />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
        </div>
    );
};

export default NavBar;
