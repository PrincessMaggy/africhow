const ordreList=[
    {
        id:1,
        orderId: "WQ459034",
        customerName: 'John Smith',
        restaurant: 'Pizza Palace',
        orderDay:"Monday",
        orderedItems: [
            {
                item: 'Pepperoni Pizza',
                quantity: 2,
            },
        ],
        orderDate: '2023-10-16T09:30:00',
        status: 'delivered',
    },
    {
        id:2,
        orderId: "WQ459084",
        customerName: 'Alice Johnson',
        restaurant: 'Burger Barn',
        orderDay:"Tuesday",
        orderedItems: [
            {
                item: 'Cheeseburger',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-16T12:15:00',
        status: 'pending',
    },
    {
        id:3,
        orderId: "WQ459085",
        customerName: 'Emily Davis',
        restaurant: 'Sushi Express',
        orderDay:"Monday",
        orderedItems: [
            {
                item: 'Sashimi Combo',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-16T19:45:00',
        status: 'delivered',
    },
    {   id:4,
        orderId: "WQ459086",
        customerName: 'Michael Brown',
        restaurant: 'Taco Time',
        orderDay:"Wednesday",
        orderedItems: [
            {
                item: 'Beef Tacos',
                quantity: 3,
            },
        ],
        orderDate: '2023-10-17T10:30:00',
        status: 'cancelled',
    },
    {   
        id:5,
        orderId: "WQ459087",
        customerName: 'Olivia Wilson',
        restaurant: 'Pasta House',
        orderDay:"Tuesday",
        orderedItems: [
            {
                item: 'Spaghetti Carbonara',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-17T14:20:00',
        status: 'pending',
    },
    {
        id:6,
        orderId: "WQ459088",
        customerName: 'William Lee',
        restaurant: 'Sushi Express',
        orderDay:"Thursday",
        orderedItems: [
            {
                item: 'Dragon Roll',
                quantity: 2,
            },
        ],
        orderDate: '2023-10-18T17:45:00',
        status: 'delivered',
    },
    {
        id:7,
        orderId: "WQ459089",
        customerName: 'Sophia Davis',
        restaurant: 'Burger Barn',
        orderDay:"Wednesday",
        orderedItems: [
            {
                item: 'Chicken Burger',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-18T12:45:00',
        status: 'delivered',
    },
    {
        id:8,
        orderId: "WQ459090",
        customerName: 'Liam Miller',
        restaurant: 'Pizza Palace',
        orderDay:"Friday",
        orderedItems: [
            {
                item: 'Margherita Pizza',
                quantity: 2,
            },
        ],
        orderDate: '2023-10-19T19:10:00',
        status: 'delivered',
    },
    {
        id:9,
        orderId: "WQ459091",
        customerName: 'Isabella Harris',
        restaurant: 'Taco Time',
        orderDay:"Friday",
        orderedItems: [
            {
                item: 'Fish Tacos',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-19T11:55:00',
        status: 'pending',
    },
    {
        id:10,
        orderId: "WQ459092",
        customerName: 'James Clark',
        restaurant: 'Pasta House',
        orderDay:"Saturday",
        orderedItems: [
            {
                item: 'Linguine Alfredo',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-20T13:30:00',
        status: 'cancelled',
    },
    {
        id:11,
        orderId: "WQ459093",
        customerName: 'Ava Lewis',
        restaurant: 'Burger Barn',
        orderDay:"Sunday",
        orderedItems: [
            {
                item: 'Double Cheeseburger',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-20T16:05:00',
        status: 'pending',
    },
    {
        id:12,
        orderId: "WQ459094",
        customerName: 'Noah White',
        restaurant: 'Sushi Express',
        orderDay:"Saturday",
        orderedItems: [
            {
                item: 'California Roll',
                quantity: 2,
            },
        ],
        orderDate: '2023-10-21T20:15:00',
        status: 'pending',
    },
    {
        id:13,
        orderId: "WQ459095",
        customerName: 'Mia Martinez',
        restaurant: 'Pizza Palace',
        orderDay:"Friday",
        orderedItems: [
            {
                item: 'Vegetarian Pizza',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-21T14:45:00',
        status: 'cancelled',
    },
    {
        id:14,
        orderId: "WQ459096",
        customerName: 'Elijah Young',
        restaurant: 'Taco Time',
        orderDay:"Sunday",
        orderedItems: [
            {
                item: 'Chicken Tacos',
                quantity: 3,
            },
        ],
        orderDate: '2023-10-22T11:20:00',
        status: 'delivered',
    },
    {
        id:15,
        orderId: "WQ459097",
        customerName: 'Charlotte Turner',
        restaurant: 'Pasta House',
        orderDay:"Wednesday",
        orderedItems: [
            {
                item: 'Penne Vodka',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-22T16:55:00',
        status: 'pending',
    },
    {
        id:16,
        orderId: "WQ459098",
        customerName: 'William Adams',
        restaurant: 'Burger Barn',
        orderDay:"Thursday",
        orderedItems: [
            {
                item: 'Veggie Burger',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-23T12:30:00',
        status: 'cancelled',
    },
    {
        id:17,
        orderId: "WQ459099",
        customerName: 'Amelia Harris',
        restaurant: 'Pizza Palace',
        orderDay:"Friday",
        orderedItems: [
            {
                item: 'Hawaiian Pizza',
                quantity: 2,
            },
        ],
        orderDate: '2023-10-23T19:50:00',
        status: 'delivered',
    },
    {
        id:18,
        orderId: "WQ4590100",
        customerName: 'Liam Baker',
        restaurant: 'Sushi Express',
        orderDay:"Monday",
        orderedItems: [
            {
                item: 'Rainbow Roll',
                quantity: 1,
            },
        ],
        orderDate: '2023-10-24T20:10:00',
        status: 'pending',
    },
    {
        id:19,
        orderId: "WQ4590101",
        customerName: 'Harper Wilson',
        restaurant: 'Taco Time',
        orderDay:"Friday",
        orderedItems: [
            {
                item: 'Beef Tacos',
                quantity: 2,
            },
        ],
        orderDate: '2023-10-24T11:40:00',
        status: 'delivered',
    },
];
export default ordreList;