import Foodzone from "../../assets/images/picture.png";
import Forward from "../../assets/images/arrow_forward.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const RecipesPage = ({ searchQuery }) => {
    
  return (
    <div>
      <div className="bg-[#f1f1f1]">
        <Link to="/trending">
          <p className="text-left p-4">Go back</p>
        </Link>

        <div className="max-[390px]:text-left lg:text-center">
          <h1 className="font-bold">Topics</h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 max-[390]:grid-col-1">
          <div className="my-1 px-5  w-full border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 id="chips" className="text-lg text-left">
                  Spaghetti
                </h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>

                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>

          <div className="my-1 px-1 w-full   border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left"></h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>

          <div className="my-1 px-1 w-full   border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left">Chicken Alfredo</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>

          <div className="my-1 px-1 w-full   border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left">Mushroom Risotto</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>

          <div className="my-1 px-1 w-full   border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left"></h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left">Beef Tacos</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left">Beef Tacos</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left">Beef Tacos</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-[390px]:text-left lg:text-center">
        <h1 className="font-bold">Discussion</h1>
      </div>
      <div className="min-h-screen flex items-center pb-40 justify-center m-4">
        <div className="grid grid-cols-2 gap-12">
          <div className="my-1 px-1 w-full   border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left">Vegetable Stir-Fry</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">
                    Join discussion
                  </p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            </div>
          </div>

          <div className="my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={Foodzone}
                alt="image of food"
                className="block h-auto w-full"
              />
              <div className=" p-2 md:p-4 ">
                <h1 className="text-lg text-left" id="campground-name">Chocolate Chip Cookies</h1>
              </div>
              <Link to="/blog">
                <div className=" flex  mb-2 md:p-4">
                  <p className="ml-2 text-md text-[#33CC9F] mr-3">
                    Join discussion
                  </p>
                  <img src={Forward} alt="forward arrow " />
                </div>
              </Link>
            <div
              id="campground-details"
              class="card border p-4 md:p-20 mx-4 md:mx-10 mt-4"
            ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
