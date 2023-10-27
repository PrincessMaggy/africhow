import Foodzone from "../../assets/images/picture.png";
import Forward from "../../assets/images/arrow_forward.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const RecipesPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const recipes = [
    {
      id: 1,
      name: "Spaghetti ",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      ingredients: ["200g spaghetti", "2 large eggs", "100g Pecorino Romano cheese", "100g pancetta", "Freshly ground black pepper"],
      instructions: "Cook the spaghetti. In a separate pan, cook the pancetta. In a bowl, whisk eggs and cheese. Combine all ingredients.",
    },
    {
    id: 2,
    name: "Chicken Alfredo",
    description: "Creamy pasta with tender chicken, Parmesan cheese, and garlic.",
    ingredients: ["8 oz fettuccine", "2 boneless, skinless chicken breasts", "2 cups heavy cream", "1 cup grated Parmesan cheese", "2 cloves garlic"],
    instructions: "Cook fettuccine. Cook chicken. In a saucepan, combine cream, cheese, and garlic. Add cooked chicken and cooked pasta.",
  },
  {
    id: 3,
    name: "Mushroom Risotto",
    description: "A rich and creamy Italian rice dish with mushrooms, onions, and white wine.",
    ingredients: ["1 cup Arborio rice", "8 oz mushrooms", "1 onion", "1/2 cup white wine", "4 cups chicken or vegetable broth"],
    instructions: "Sauté onions and mushrooms. Add rice and wine. Gradually add broth and stir until creamy and cooked.",
  },
  {
    id: 4,
    name: "Caprese Salad",
    description: "A simple Italian salad with fresh tomatoes, mozzarella, basil, olive oil, and balsamic glaze.",
    ingredients: ["4 ripe tomatoes", "8 oz fresh mozzarella", "Fresh basil leaves", "Extra-virgin olive oil", "Balsamic glaze"],
    instructions: "Slice tomatoes and mozzarella. Arrange on a plate with basil leaves. Drizzle with olive oil and balsamic glaze.",
  },
  {
    id: 5,
    name: "Beef Tacos",
    description: "Delicious beef tacos with seasoned ground beef, lettuce, cheese, and salsa.",
    ingredients: ["1 lb ground beef", "1 packet taco seasoning", "8 taco shells", "Lettuce, cheese, salsa, sour cream (toppings)"],
    instructions: "Cook and season ground beef. Warm taco shells. Assemble tacos with your favorite toppings.",
  },
  {
    id: 6,
    name: "Vegetable Stir-Fry",
    description: "A quick and healthy stir-fry with a variety of colorful vegetables and tofu.",
    ingredients: ["Assorted vegetables (e.g., broccoli, bell peppers, carrots)", "8 oz tofu", "Soy sauce", "Ginger", "Sesame oil"],
    instructions: "Stir-fry tofu and vegetables in a pan with soy sauce, ginger, and sesame oil until tender.",
  },
  {
    id: 7,
    name: "Chocolate Chip ",
    description: "Classic homemade chocolate chip cookies with a chewy center and crispy edges.",
    ingredients: ["2 1/4 cups all-purpose flour", "1/2 tsp baking soda", "1 cup unsalted butter", "1/2 cup granulated sugar", "1 cup brown sugar", "2 large eggs", "2 cups chocolate chips"],
    instructions: "Mix dry ingredients. Cream butter and sugars. Add eggs and vanilla. Mix in dry ingredients and chocolate chips. Bake until golden brown.",
  },
  {
    id: 8,
    name: "Vegetable Soup",
    description: "A hearty and comforting vegetable soup with a mix of fresh vegetables and broth.",
    ingredients: ["Carrots", "Potatoes", "Onions", "Celery", "Vegetable or chicken broth", "Seasonings (salt, pepper, herbs)"],
    instructions: "Chop vegetables and simmer in broth until tender. Season to taste with salt, pepper, and herbs.",
  },
]

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
    
  return (
    <div>
      <div className="bg-[#f1f1f1]">
        <Link to="/trending">
          <p className="text-left p-4">Go back</p>
        </Link>

        <div className="max-[390px]:text-left lg:text-center">
          <h1 className="font-bold">Topics</h1>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchInput}
            onChange={handleSearchInputChange}
            className="w-full p-2 my-2 rounded border border-gray-400"
          />
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 max-[390]:grid-col-1">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id}>
                <div className="my-1 px-5  w-full border border-gray-400 bg-[#f1f1f1]">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src={Foodzone} alt="image of food" className="block h-auto w-full" />
                    <div className="p-2 md:p-4">
                      <h1 id="chips" className="text-lg text-left">
                        {recipe.name}
                      </h1>
                    </div>
                    <Link to="/blog">
                      <div className="flex  mb-2 md:p-4">
                        <p className="ml-2 text-md text-[#33CC9F] mr-3">See more</p>
                        <img src={Forward} alt="forward arrow" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                <h1 className="text-lg text-left" >Chocolate Chip Cookies</h1>
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
