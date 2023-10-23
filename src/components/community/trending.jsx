import Menu from "../../assets/icons/menu.png"
import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Foodzone from "../../assets/images/picture.png"
import Heart from "../../assets/images/favorite1.png"
import Ofada from "../../assets/images/ofada.png"

const TrendingPage= () => {
    return (
        <div className="flex space-x-1 items-center mb-2">
            <div className='max-w-md mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
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
    
    export default TrendingPage