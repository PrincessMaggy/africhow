import Frame from "../../assets/images/frame.png"
import Send from "../../assets/images/send.png"
import Cancel from "../../assets/images/cancel.png"

const PostPage = () => {
    return (
      <div>
        <div className ="flex justify-between px-4 bg-[#E5F4FF]">
            <div className="left-2">
         <img src={Cancel} className='w-[36px] h-[36px] absolute text-gray-400 top-6 '/>
         </div>
        <h1 className="text-center pt-6 pl-6  ml-8 font-bold ">Create post </h1>

        <button className="bg-transparent hover:bg-green-500 ml-4 text-gray-800 font-semibold hover:text-white py-6 px-8 mt-3 border border-blue-500  hover:border-transparent rounded">
  post
</button>
</div>
<form>
        <div className="w-full mb-4 border border-gray-200 pt-6 mt-8 rounded-lg bg-green-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <p htmlFor="comment" className="sr-only">Your comment</p>
            <textarea id="comment" rows={3} className="w-full px-0 text-sm h-96 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="What do you want to talk about..." required defaultValue={""} />
          </div>
          <div className="flex flex-row items-center justify-between mb-10 relative px-3 py-2 border-t dark:border-gray-600">
          <img src={Frame} className='w-[47px] h-[36px] absolute text-gray-400 top-6  mx-6  left-2 '/>
            <div className="flex pl-0 space-x-1 sm:pl-2">
             
              <img src={Send} className='w-[36px] h-[36px] absolute text-gray-400 top-6  mx-6  right-2 '/>
              
            </div>
          </div>
        </div>
      </form>
      </div>
    );
  }
;

     
    
    export default PostPage