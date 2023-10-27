
import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Food from "../../assets/images/food.png"
import Foodzone from "../../assets/images/picture.png"
import Family from "../../assets/images/family.png"
import Favorite from "../../assets/images/favorite.png"
import Comment from "../../assets/images/comment.png"
import Ofada from "../../assets/images/ofada.png"
import Forward from "../../assets/images/arrow_forward.png"
import { Link } from "react-router-dom"
import React, {useState} from "react"


const TrendingPage= () => {
 
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const handleFavoriteClick = () => {
    setFavoriteCount(favoriteCount + 1);
  };

  const handleCommentClick = () => {
    setCommentCount(commentCount + 1);
  };
  const [favoriteCount1, setFavoriteCount1] = useState(0);
  const [commentCount1, setCommentCount1] = useState(0);

  const handleFavoriteClick1 = () => {
    setFavoriteCount1(favoriteCount1 + 1);
  };

  const handleCommentClick1 = () => {
    setCommentCount1(commentCount1 + 1);
  };
    return (
      <div>
        <div className="bg-[#f1f1f1]">
      <div className="min-w-2xl mx-auto">
      <form className="flex items-center sm:min-w-40">   
      
      <div className=" flex relative w-full ml-2">
          <div className="inline-flex absolute inset-y-0 left-0 items-center pointer-events-none">
          <img src={Search} alt="search image" className='relative w-[24px]  mr-2 left-2'/>
          </div>
          <input type="text"className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-black  dark:focus:border-green-500" placeholder="Search for topics, tips, etc" required/>
          
      </div>
      <button className=" inline-flex items-center p-4  m-2 bg-[#33CC9F] text-gray-800 text-sm font-medium rounded">
        <img src={Addcircle} alt="Addcircle image" className=' relative w-[24px]  mr-2 left-2'/>
        <p className="pr-2 mr-2">Addpoint</p>
        </button>
  </form>
        <div className="flex justify-between">   
    
            <div> <p className="ml-2">Trending </p></div>
            
            <Link to="/recipes">
            <div> <p className="mr-3">See All </p></div>
            </Link>
  
      </div>
      
        
        </div>
        <div className="min-h-screen flex items-center pb-40 justify-center m-4">
        <div className="grid grid-cols-2 gap-12">
        <div className="my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]">

<div className="overflow-hidden rounded-lg shadow-lg">
        <img src={Foodzone} alt="image of food" className="block h-auto w-full"/>
    <div className=" p-2 md:p-4 ">
        <h1 className="text-lg text-left">
                African Food Recipe
        </h1>
    </div>
    <Link to ="/blog">
  
    <div className=" flex  mb-2 md:p-4 lg:mb-8">
            <p className="ml-2 text-md text-[#33CC9F] mr-3">
                See more
            </p> 
            <img src={Forward} alt="forward arrow "/>
    </div>
    </Link>


</div>
</div>
<div className="my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]">
<div className="overflow-hidden rounded-lg shadow-lg">
        <img src={Foodzone} alt="image of food" className="block h-auto w-full"/>
    <div className=" p-2 md:p-4 ">
        <h1 className="text-lg text-left">
                Foodie Zone
        </h1>
    </div>
    <Link to ="/blog">
  
    <div className=" flex mb-8  md:p-4 lg:mb-8">
            <p className="ml-2 text-md text-[#33CC9F] mr-1">
                Join discussion
            </p> 
            <img src={Forward} alt="forward arrow "/>
    </div>
    </Link>


</div>
</div>
</div>
</div>
<div>
    <div className="flex relative m-6 lg:justify-center lg:mb-1">
    <img src={Food} alt="food image" className="w-[50]"/>
    <p className="font-bold mt-2 ">African Food Recipe</p>
    </div>
    
<div className="  m-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
       
        <img src= {Ofada} alt="ofada rice" className="mx-auto  h-36"/>
  
    <div className="flex relative ml-3 gap-6 pt-2 lg:justify-center">
    <div className="flex flex-row relative">
    <img src= {Favorite} alt="like button" className="mr-2 w-6" onClick={handleFavoriteClick}/>
    <p className="text-sm text-gray-400 pt-1">{favoriteCount}</p>
      </div>
      <div className="flex flex-row relative">
    <img src= {Comment} alt="comment button" className="mr-4 w-6 bg-gray-100" onClick={handleCommentClick}/>
    <p className="text-sm text-gray-400 pt-1">{commentCount}</p>
      </div>
    </div>
</div>

<div className="flex relative justify-between">
<h1 className="font-bold text-gray-600 ml-8">Nigerian Ofada Recipe</h1>
<Link to ="/blog#ofada">
<p className="text-sm pr-8">Read now</p>
</Link>
</div>
<div className="flex relative m-6 lg:justify-center lg:mb-1">
    <img src={Food} alt="food image" className="w-[50]"/>
    <p className="font-bold mt-2 ">African Food Recipe</p>
    </div>
    
<div className="  m-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
       
        <img src= {Family} alt="family picture" className="mx-auto  h-36"/>
  
    <div className="flex relative ml-3 gap-6 pt-2 lg:justify-center">
    <div className="flex flex-row relative">
    <img src= {Favorite} alt="like button" className="mr-2 w-6" onClick={handleFavoriteClick1}/>
    <p className="text-sm text-gray-400 pt-1">{favoriteCount1}</p>
      </div>
      <div className="flex flex-row relative">
    <img src= {Comment} alt="comment button" className="mr-4 w-6 bg-gray-100" onClick={handleCommentClick1}/>
    <p className="text-sm text-gray-400 pt-1">{commentCount1}</p>
      </div>
    </div>
</div>

<div className="flex relative justify-between">
<h1 className="font-bold text-gray-600 ml-8">Children Food Memories</h1>
<Link to="/blog">
<p className="text-sm pr-8">Read now</p>
</Link>
</div>
        </div>
        </div>
        </div>
        )
    }
    
    export default TrendingPage