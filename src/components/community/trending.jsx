import Menu from "../../assets/icons/menu.png"
import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Foodzone from "../../assets/images/picture.png"
import Heart from "../../assets/images/favorite1.png"
import Ofada from "../../assets/images/ofada.png"



const TrendingPage= () => {
    return (
      
<div className="py-15 max-h-screen  bg-gray-300 m-2 px-2">
  <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl max-w">
  <div className="md:flex">
      <div className="w-full p-3 sm:flex sm:items-center ">
        <div className="mr-3">
        <div className="relative ">
        <img src={Search} className='w-[24px] h-[24px] absolute text-gray-400 top-5 left-4'/>
          <input type="text" placeholder="Search for topics" className="bg-white h-14 w-full px-12  mr-2 rounded-lg border border-gray-400  hover:cursor-pointer" name=""/>
         
        </div>
        </div>
        
        <button className=" inline-flex items-center pt-4 pb-4 bg-[#33CC9F] text-gray-800 text-sm font-medium rounded">
        <img src={Addcircle} alt="Addcircle image" className=' relative w-[24px]  mr-4 left-2'/>
        <span className="mr-2">Add point</span>
        </button>


        
      </div>
   
  </div>
</div>
        <div >
        <div className=" w-full p-3 sm:flex flex-row justify-between items-center px-4">
        
        <div>
          <p className="font-bold text-lg">Trending</p>
         </div>
         <div>
          <p className="font-semibold text-lg">See All </p>
         </div>
        </div>
       </div>
       {/* IMAGES AFTER SEARCH BAR*/}
<div className=" md:flex flex-row justify-between items-center px-4 gap-4 max-h-96">
<div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl ">
  <img  src={Foodzone} className="w-96 rounded-t-2xl object-cover object-center"/>
  <div className="p-4">
  <h1 className="text-lg font-bold pt-2"> African Food Recipe </h1>
  <p className="text-xs pt-2 text-[#33CC9F]"> See more</p>
  </div>
  
  </div>
  <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl ">
  <img  src={Foodzone} className="w-96 rounded-t-2xl object-cover object-center"/>
  <div className="p-4">
  <h1 className="text-lg font-bold pt-2"> African Food Recipe </h1>
  <p className="text-xs pt-2 text-[#33CC9F]"> See more</p>
  </div>
  
  </div>
      </div>
</div>
       
        )
    }
    
    export default TrendingPage