
import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Foodzone from "../../assets/images/picture.png"
import Heart from "../../assets/images/favorite.png"
import Ofada from "../../assets/images/ofada.png"



const TrendingPage= () => {
    return (
      <div>
      <div className="max-w-2xl mx-auto">

      <form className="flex items-center">   
            
            <div className="relative w-full mr-3">
                <div className="inline-flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={Search} alt="search image" className=' relative w-[24px]  mr-2 left-2'/>
                </div>
                <input type="text"className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg block w-full pl-10 p-3  dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-black  dark:focus:border-green-500" placeholder="Search Mockups, Logos, Design Templates..." required/>
                <button type="button" className="inline-flex flex absolute inset-y-0 right-0 items-center pr-3">
                   
                </button>
            </div>
            <button className=" inline-flex items-center p-4  m-2 bg-[#33CC9F] text-gray-800 text-sm font-medium rounded">
              <img src={Addcircle} alt="Addcircle image" className=' relative w-[24px]  mr-2 left-2'/>
              <p className="pr-2 mr-2">Addpoint</p>
              </button>
        </form>
      
      
        
        </div>
        </div>
        )
    }
    
    export default TrendingPage