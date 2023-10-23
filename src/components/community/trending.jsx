import Menu from "../../assets/icons/menu.png"
import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Foodzone from "../../assets/images/picture.png"
import Heart from "../../assets/images/favorite1.png"
import Ofada from "../../assets/images/ofada.png"



const TrendingPage= () => {
    return (
<div className="py-20 h-screen bg-gray-300 px-2">
  <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
  <div className="md:flex">
      <div className="w-full p-3 sm:flex sm:items-center">
        <div className="mr-3">
        <div className="relative ">
        <img src={Search} className='w-[24px] h-[24px] absolute text-gray-400 top-5 left-4'/>
          <input type="text" placeholder="Search for topics" className="bg-white h-14 w-full px-12  mr-2 rounded-lg border border-gray-400  hover:cursor-pointer" name=""/>
         
        </div>
        </div>
        
        <button className=" inline-flex items-center pt-4 pb-4 bg-[#33CC9F] text-gray-800 text-sm font-medium rounded">
        <img src={Addcircle} alt="Addcircle image" className=' relative w-[24px]  mr-4 left-2'/>
        <span class="mr-2">Add point</span>
        </button>


        
      </div>
   
  </div>
</div>
  
</div>
       
        )
    }
    
    export default TrendingPage