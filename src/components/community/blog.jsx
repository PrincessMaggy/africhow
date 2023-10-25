import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Food from "../../assets/images/food.png"
import Ofada from "../../assets/images/ofada.png"
import Favorite from "../../assets/images/favorite.png"
import Comment from "../../assets/images/comment.png"

const BlogPage = () => {
    return (
        <div>
     <div className="max-w-2xl mx-auto">

<form className="flex items-center">   
      
      <div className="relative w-full mr-3">
          <div className="inline-flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <img src={Search} alt="search image" className='relative w-[24px]  mr-2 left-2'/>
          </div>
          <input type="text"className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-black  dark:focus:border-green-500" placeholder="Search for topics, tips, etc" required/>
          
      </div>
      <button className=" inline-flex items-center p-4  m-2 bg-[#33CC9F] text-gray-800 text-sm font-medium rounded">
        <img src={Addcircle} alt="Addcircle image" className=' relative w-[24px]  mr-2 left-2'/>
        <p className="pr-2 mr-2">Addpoint</p>
        </button>
  </form>


  
  </div>
  <div>
    <div className="flex relative m-6 lg:justify-center lg:mb-1">
    <img src={Food} alt="food image" className="w-[50]"/>
    <p className="font-bold mt-2 ">African Food Recipe</p>
    </div>
    
<div className=" max-w-full m-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
       
        <img src= {Ofada} alt="ofada rice" className="mx-auto  h-36"/>
  
    <div className="flex relative ml-3 gap-6 pt-2 lg:justify-center">
    <div className="flex flex-row relative">
    <img src= {Favorite} alt="like button" className="mr-2 w-6"/>
    <p className="text-sm text-gray-400 pt-1">1.3k</p>
      </div>
      <div className="flex flex-row relative">
    <img src= {Comment} alt="comment button" className="mr-4 w-6 bg-gray-100"/>
    <p className="text-sm text-gray-400 pt-1">1.3k</p>
      </div>
    </div>
</div>

<div className="flex relative justify-between">
<h1 className="font-bold text-gray-600 ml-8">Nigerian Ofada Recipe</h1>
<p className="text-sm pr-8">Go back</p>
</div>

 </div>
 <div className="text-left m-8">
  <p className="font-semibold  ">Ingredients:</p>
  <ul className="list-image-none w-50">
    <li>Rice 1/2 cup</li>
    <li>Locust beans 2 table spoon</li>
    <li>Onion 1 big piece</li>
    <li>Cow skin 3 pieces</li>
    <li>Dried fish 3 big pieces</li>
     <li>Palm oil 2 table spoon</li>
     <li>Pepper mix 3 table spoon</li>
  </ul>
</div>
<div className="text-left m-8">
  <p className="font-semibold  ">Preparations:</p>
  <p className="text-sm">
Add palm oil into a sauce pan and heat up for a while, then add onions 
and locust beans. Simmer for about 5 minutes. then add Dried fish and 
chopped cow skin. Add your pepper mix and salt and fry the mixture till
 the oil separates on the surface of the sauce and that is all. in a separate
  pot, boil your rice till it is soft but not over cooked and your ofada is ready. 
  </p>
</div>
<div className="comment flex relative justify-between">
<p className="font-bold text-black ml-8">Comment</p> <span className="text-sm text-gray-400 pt-1">1.3k</span>
<p className="text-sm pr-8">Go back</p>
</div>
 </div>

      

    
      );
    }
  
  ;
       
      
      export default BlogPage