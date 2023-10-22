import NavList from '../lib/navBarData';
import NavBarList from '../lib/navLists';

const navBar = () => {
    const specificIDs = [1, 2, 3];
    const filteredData = NavList.filter((item) =>
        specificIDs.includes(item.id),
    );

    return (
        <div className='w-full bg-opacity-25'>
            <div className='flex flex-col justify-center px-8'>
                <section className='mt-8 w-full flex flex-col'></section>
            </div>
        </div>
    );
};

export default navBar;
