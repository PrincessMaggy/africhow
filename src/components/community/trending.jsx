import Search from '../../assets/images/search.png';
import Addcircle from '../../assets/images/add_circle.png';
import Food from '../../assets/images/food.png';
import Foodzone from '../../assets/images/picture.png';
import Family from '../../assets/images/family.png';
import Favorite from '../../assets/images/favorite.png';
import Comment from '../../assets/images/comment.png';
import Ofada from '../../assets/images/ofada.png';
import Forward from '../../assets/images/arrow_forward.png';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Nav from '../homeNav';

const TrendingPage = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const recipes = [
        {
            id: 1,
            name: 'Spaghetti ',
            description:
                'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
            ingredients: [
                '200g spaghetti',
                '2 large eggs',
                '100g Pecorino Romano cheese',
                '100g pancetta',
                'Freshly ground black pepper',
            ],
            instructions:
                'Cook the spaghetti. In a separate pan, cook the pancetta. In a bowl, whisk eggs and cheese. Combine all ingredients.',
        },
        {
            id: 2,
            name: 'Chicken Alfredo',
            description:
                'Creamy pasta with tender chicken, Parmesan cheese, and garlic.',
            ingredients: [
                '8 oz fettuccine',
                '2 boneless, skinless chicken breasts',
                '2 cups heavy cream',
                '1 cup grated Parmesan cheese',
                '2 cloves garlic',
            ],
            instructions:
                'Cook fettuccine. Cook chicken. In a saucepan, combine cream, cheese, and garlic. Add cooked chicken and cooked pasta.',
        },
        {
            id: 3,
            name: 'Mushroom Risotto',
            description:
                'A rich and creamy Italian rice dish with mushrooms, onions, and white wine.',
            ingredients: [
                '1 cup Arborio rice',
                '8 oz mushrooms',
                '1 onion',
                '1/2 cup white wine',
                '4 cups chicken or vegetable broth',
            ],
            instructions:
                'Sauté onions and mushrooms. Add rice and wine. Gradually add broth and stir until creamy and cooked.',
        },
        {
            id: 4,
            name: 'Caprese Salad',
            description:
                'A simple Italian salad with fresh tomatoes, mozzarella, basil, olive oil, and balsamic glaze.',
            ingredients: [
                '4 ripe tomatoes',
                '8 oz fresh mozzarella',
                'Fresh basil leaves',
                'Extra-virgin olive oil',
                'Balsamic glaze',
            ],
            instructions:
                'Slice tomatoes and mozzarella. Arrange on a plate with basil leaves. Drizzle with olive oil and balsamic glaze.',
        },
        {
            id: 5,
            name: 'Beef Tacos',
            description:
                'Delicious beef tacos with seasoned ground beef, lettuce, cheese, and salsa.',
            ingredients: [
                '1 lb ground beef',
                '1 packet taco seasoning',
                '8 taco shells',
                'Lettuce, cheese, salsa, sour cream (toppings)',
            ],
            instructions:
                'Cook and season ground beef. Warm taco shells. Assemble tacos with your favorite toppings.',
        },
        {
            id: 6,
            name: 'Vegetable Stir-Fry',
            description:
                'A quick and healthy stir-fry with a variety of colorful vegetables and tofu.',
            ingredients: [
                'Assorted vegetables (e.g., broccoli, bell peppers, carrots)',
                '8 oz tofu',
                'Soy sauce',
                'Ginger',
                'Sesame oil',
            ],
            instructions:
                'Stir-fry tofu and vegetables in a pan with soy sauce, ginger, and sesame oil until tender.',
        },
        {
            id: 7,
            name: 'Chocolate Chip ',
            description:
                'Classic homemade chocolate chip cookies with a chewy center and crispy edges.',
            ingredients: [
                '2 1/4 cups all-purpose flour',
                '1/2 tsp baking soda',
                '1 cup unsalted butter',
                '1/2 cup granulated sugar',
                '1 cup brown sugar',
                '2 large eggs',
                '2 cups chocolate chips',
            ],
            instructions:
                'Mix dry ingredients. Cream butter and sugars. Add eggs and vanilla. Mix in dry ingredients and chocolate chips. Bake until golden brown.',
        },
        {
            id: 8,
            name: 'Vegetable Soup',
            description:
                'A hearty and comforting vegetable soup with a mix of fresh vegetables and broth.',
            ingredients: [
                'Carrots',
                'Potatoes',
                'Onions',
                'Celery',
                'Vegetable or chicken broth',
                'Seasonings (salt, pepper, herbs)',
            ],
            instructions:
                'Chop vegetables and simmer in broth until tender. Season to taste with salt, pepper, and herbs.',
        },
    ];

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            let url = `/recipes/${event.target.value}`;
            return navigate(url);
        }
    };
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };
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
            <Nav />
            <div className='bg-[#f1f1f1]'>
                <div className='min-w-2xl mx-auto'>
                    <div className='flex items-center sm:min-w-40'>
                        <div className=' flex relative w-full ml-2'>
                            <div className='inline-flex absolute inset-y-0 left-0 items-center pointer-events-none'>
                                <img
                                    src={Search}
                                    alt='search image'
                                    className='relative w-[24px]  mr-2 left-2'
                                />
                            </div>
                            <input
                                type='text'
                                className='bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-black  dark:focus:border-green-500'
                                placeholder='Search for topics, tips, etc'
                                required
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                onKeyUp={handleKeyUp}
                            />
                        </div>
                        <button className=' inline-flex items-center p-4  m-2 bg-[#33CC9F] text-gray-800 text-sm font-medium rounded'>
                            <img
                                src={Addcircle}
                                alt='Addcircle image'
                                className=' relative w-[24px]  mr-2 left-2'
                            />
                            <p className='pr-2 mr-2'>Addpoint</p>
                        </button>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='ml-2'>Trending </p>
                        </div>

                        <Link to='/recipes'>
                            <div>
                                <p className='mr-3'>See All </p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='min-h-screen flex items-center pb-40 justify-center m-4'>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className='my-1 px-1 w-full  border border-gray-400  bg-[#f1f1f1]'>
                            <div className='overflow-hidden rounded-lg shadow-lg'>
                                <img
                                    src={Foodzone}
                                    alt='image of food'
                                    className='block h-auto w-full'
                                />
                                <div className=' p-2 md:p-4 '>
                                    <h1 className='text-lg text-left'>
                                        Foodie Zone
                                    </h1>
                                </div>
                                <Link to='/blog'>
                                    <div className=' flex mb-8  md:p-4 lg:mb-8'>
                                        <p className='ml-2 text-md text-[#33CC9F] mr-1'>
                                            Join discussion
                                        </p>
                                        <img
                                            src={Forward}
                                            alt='forward arrow '
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='my-1 px-5  w-full border border-gray-400 bg-[#f1f1f1]'>
                            <div className='overflow-hidden rounded-lg shadow-lg'>
                                <img
                                    src={Foodzone}
                                    alt='image of food'
                                    className='block h-auto w-full'
                                />
                                <div className='p-2 md:p-4'>
                                    <h1
                                        id='chips'
                                        className='text-lg text-left'
                                    >
                                        {recipes.name}
                                    </h1>
                                </div>
                                <Link to='/blog'>
                                    <div className='flex  mb-2 md:p-4'>
                                        <p className='ml-2 text-md text-[#33CC9F] mr-3'>
                                            See more
                                        </p>
                                        <img
                                            src={Forward}
                                            alt='forward arrow'
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex relative m-6 lg:justify-center lg:mb-1'>
                    <img src={Food} alt='food image' className='w-[50]' />
                    <p className='font-bold mt-2 '>African Food Recipe</p>
                </div>

                <div className='  m-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                    <img
                        src={Ofada}
                        alt='ofada rice'
                        className='mx-auto  h-36'
                    />

                    <div className='flex relative ml-3 gap-6 pt-2 lg:justify-center'>
                        <div className='flex flex-row relative'>
                            <img
                                src={Favorite}
                                alt='like button'
                                className='mr-2 w-6'
                                onClick={handleFavoriteClick}
                            />
                            <p className='text-sm text-gray-400 pt-1'>
                                {favoriteCount}
                            </p>
                        </div>
                        <div className='flex flex-row relative'>
                            <img
                                src={Comment}
                                alt='comment button'
                                className='mr-4 w-6 bg-gray-100'
                                onClick={handleCommentClick}
                            />
                            <p className='text-sm text-gray-400 pt-1'>
                                {commentCount}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex relative justify-between'>
                    <h1 className='font-bold text-gray-600 ml-8'>
                        Nigerian Ofada Recipe
                    </h1>
                    <Link to='/blog#ofada'>
                        <p className='text-sm pr-8'>Read now</p>
                    </Link>
                </div>

                <div className='flex relative m-6 lg:justify-center lg:mb-1'>
                    <img src={Food} alt='food image' className='w-[50]' />
                    <p className='font-bold mt-2 '>African Food Recipe</p>
                </div>

                <div className='  m-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                    <img
                        src={Family}
                        alt='family picture'
                        className='mx-auto  h-36'
                    />

                    <div className='flex relative ml-3 gap-6 pt-2 lg:justify-center'>
                        <div className='flex flex-row relative'>
                            <img
                                src={Favorite}
                                alt='like button'
                                className='mr-2 w-6'
                                onClick={handleFavoriteClick1}
                            />
                            <p className='text-sm text-gray-400 pt-1'>
                                {favoriteCount1}
                            </p>
                        </div>
                        <div className='flex flex-row relative'>
                            <img
                                src={Comment}
                                alt='comment button'
                                className='mr-4 w-6 bg-gray-100'
                                onClick={handleCommentClick1}
                            />
                            <p className='text-sm text-gray-400 pt-1'>
                                {commentCount1}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex relative justify-between'>
                    <h1 className='font-bold text-gray-600 ml-8'>
                        Children Food Memories
                    </h1>
                    <Link to='/blog'>
                        <p className='text-sm pr-8'>Read now</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingPage;
