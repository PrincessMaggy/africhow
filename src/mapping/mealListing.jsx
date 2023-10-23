import FetchMealItem from '../components/fetchMealItem';
import HomeNav from "../components/homeNav";
import SearchIcon from "../assets/icons/Search Icon.svg";

function Listings() {

    return (
        <>
            <div>
                <HomeNav />
                <hr className='border-gray-400 -mt-6' />
                <div className='flex flex-col'>
                    <form action="/search" method="GET" className="search-box relative flex justify-between items-center mx-8 mt-4 gap-4 ">
                        <img src={SearchIcon} alt="search-box" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-9 h-9 pl-4" />
                        <input type="text" name="query" placeholder="Search" className=" w-full pl-14 pr-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200 " />
                    </form>
                    <button className=' w-40 ml-8 mt-4 px-5 py-1 bg-[#33cc9f] flex items-center gap-3 mb-12'>
                        <p className='text-[1.5rem]'>+</p>
                        <h3>Add meal</h3>
                    </button>
                </div>
            </div>
            <FetchMealItem />
        </>
    );
}

export default Listings;
