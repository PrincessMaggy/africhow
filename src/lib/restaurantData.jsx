const restaurantData = async () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const menuData = data.categories.map((menuItem) => ({
            ...menuItem,
            cost: getRandomCost(),
            location: getRandomLocation(),
            status: getRandomStatus(),
        }));

        return menuData;
    } catch (error) {
        console.error('Error:', error);
    }
};

const getRandomCost = () => {
    const minCost = 5;
    const maxCost = 20;
    return (Math.random() * (maxCost - minCost) + minCost).toFixed(2);
};

const getRandomLocation = () => {
    const locations = [
        'Downtown',
        'Suburb',
        'Countryside',
        'Beachfront',
        'Mountainside',
    ];
    return locations[Math.floor(Math.random() * locations.length)];
};

const getRandomStatus = () => {
    const statuses = ['Available', 'Not Available'];
    return statuses[Math.floor(Math.random() * statuses.length)];
};

export default restaurantData;
