import NavHeader from '../lib/navHeaderData';

const NavHeaderTitle = () => {
    return (
        <div className='w-full bg-opacity-25'>
            <nav className='w-full flex flex-col'>
                <NavHeader />
            </nav>
        </div>
    );
};

export default NavHeaderTitle;
