import Menu from "../assets/icons/menu.png"
import Search from "../assets/images/search.png"
import Addcircle from "../assets/images/add_circle.png"
import Foodzone from "../assets/images/picture.png"
import Heart from "../assets/images/favotite1.png"
import Eclipse from "../assets/images/Eclipse 20.png"
import Ofada from "../assets/images/ofada.png"

const Trending= () => {
    return (
        <div className="flex space-x-1 items-center mb-2">
            <div className='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search for topics, tips, etc.." /> 
    </div>
</div>
<div className="flex space-x-1 items-center mb-2">
<img src="Addcircle" alt="" />
<p className="font-semibold">Add post </p>
    </div>
    
        </div>
        )
    }
    
    export default Trending