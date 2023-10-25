import Search from "../../assets/images/search.png"
import Addcircle from "../../assets/images/add_circle.png"
import Food from "../../assets/images/food.png"
import Ofada from "../../assets/images/ofada.png"
import Favorite from "../../assets/images/favorite.png"
import Comment from "../../assets/images/comment.png"
import Arrow from "../../assets/images/arrow.png"
import Female from "../../assets/images/female.png"
import User from "../../assets/images/user.png"
import Male from "../../assets/images/male.png"
import Send from "../../assets/images/send.png"
import Chicken from "../../assets/images/chicken.png"
import Chops from "../../assets/images/chops.png"


const BlogPage = () => {
    return (
        <div>
     <div className="min-w-2xl mx-auto">

<form className="flex items-center sm:min-w-40">   
      
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
    
<div className="  m-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
       
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
<div className="comment">
<div className="comment flex relative justify-between">
  <div className="flex">
<p className="font-bold text-black ml-8 mr-2">Comment</p>
 <span className="text-sm text-gray-400 pt-1">1.3k</span>
 </div>
<img src= {Arrow} alt="arrowup" className="w-15"/>
</div>

	<article>
    <div>
  <div className="flex items-center mt-8 space-x-4 ml-8 ">
			<img src={Female} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">User 5664</h3>
				
			</div>
		</div>
		<p className="mt-4 ml-8 dark:text-gray-400 text-left">I can’t wait to try out this  recipe. it will definitely bring a feel of Africa in to my home. But where can I get some of this ingredients?.</p>
		</div>
    <div>
  <div className="flex items-center mt-8 space-x-4 ml-8">
			<img src={User} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">User 3564</h3>
				
			</div>
		</div>
		<p className="mt-4 ml-8 text-left dark:text-gray-400">This bring back beautiful memories of Sunday afternoons back home. Even though, I dont like rice, my mom makes ofada in a way that is irresistible.</p>
		</div>
    <div>
      <div className="flex  bg-gray-50 border border-green-500 m-6 lg:justify-center lg:mb-1 sm:min-w-100">
      <img src={Male} alt="" className="w-10 h-10 rounded-full mt-3 dark:bg-gray-500" />
      <input type="text" className="bg-gray-300 p-6 m-2 border  outline-none text-center"/>
      <img src={Send} alt="" className="w-10 h-10 rounded-full mt-3 dark:bg-gray-500" />
      </div>
    </div>
	</article>

  <article className="sm:min-w[380px}">
    <div>
    <h1 className="font-bold text-[#155062] text-left pt-4 ml-8 lg:text-center">Read Articles</h1>
    <div className="flex  mt-8 space-x-4 ml-8 lg:justify-center">
    <img src= {Chicken} alt="chicken" className="w-10 h-10 rounded dark:bg-gray-500"/>
    <div className="flex ">
      <div className="mr-8 min-w-50">
        <h1 className="font-semibold text-black-300">Taste of Home</h1>
        <p className="text-sm text-gray-300">Regional Recipes and Flavors</p>
      </div>
      <div className="flex min-w-40">
      <p className="text-xs ml-8 text-black mt-8 mr-2">10 mins</p>
      <span className="text-gray-400 mt-7">Read</span>
      </div>
      </div>
    </div>
    </div>
    <div>

    <div className="flex  mt-8 space-x-4 ml-8 lg:justify-center">
    <img src= {Chops} alt="chicken" className="w-10 h-10 rounded dark:bg-gray-500"/>
    <div className="flex ">
      <div className="mr-8 w-48">
        <p className="font-semibold text-black-200">Foodies Diaries</p>
        <p className="text-sm text-gray-300 ">Culinary Tales and <br /> Tasteful Journey</p>
      </div>
      <div className="flex ml-4 w-34">
      <p className="text-xs ml-8 text-black mt-8 mr-2">7mins</p>
      <span className="text-gray-400 mt-7  ">Read</span>
      </div>
      </div>
    </div>
    </div>
  </article>
</div>

</div>


      

    
      );
    }
  
  ;
       
      
      export default BlogPage