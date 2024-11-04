import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from "../Itinerary.js";


const itineraries = [
    {
        photo: 'https://postimg.cc/Dm068Yfm',
        accountName: 'ambarelacuarela',
        price: 4,
        tripDuration: '8',
        likes: 0,
        hashtags: ['#culture', '#food', '#history']
    },
    {
        photo: 'https://postimg.cc/R663zf9C',
        accountName: 'feliperr0',
        price: 3,
        tripDuration: '6',
        likes: 0,
        hashtags: ['#tango', '#meat', '#architecture']
    },
    {
        photo: 'https://postimg.cc/bdRDb1gM',
        accountName: 'motorolo420',
        price: 5,
        tripDuration: '10',
        likes: 0,
        hashtags: ['#carnival', '#beach', '#christ_the_redeemer']
    },
    {
        photo: 'https://postimg.cc/0bMvxszf',
        accountName: 'pikachusaurio',
        price: 2,
        tripDuration: '4',
        likes: 0,
        hashtags: ['#history', '#berlin_wall', '#culture']
    },
    {
        photo: 'https://postimg.cc/rKCJDdRF',
        accountName: 'element_sucre',
        price: 5,
        tripDuration: '8',
        likes: 0,
        hashtags: ['#technology', '#sushi', '#anime']
    },
    {
        photo: 'https://postimg.cc/NKFpZsLs',
        accountName: 'benja_sublyme',
        price: 3,
        tripDuration: '6',
        likes: 0,
        hashtags: ['#fashion', '#wine', '#romance']
    },
    {
        photo: 'https://postimg.cc/xNjKH5zf',
        accountName: 'vdogoberto',
        price: 4,
        tripDuration: '7',
        likes: 0,
        hashtags: ['#surf', '#opera_house', '#wildlife']
    },
    {
        photo: 'https://postimg.cc/fkHdpxdd',
        accountName: 'picassoart13',
        price: 5,
        tripDuration: '9',
        likes: 0,
        hashtags: ['#history', '#pizza', '#art']
    },
    {
        photo: 'https://postimg.cc/yD1wxCdt',
        accountName: 'donovan_3',
        price: 3,
        tripDuration: '5',
        likes: 0,
        hashtags: ['#mountain', '#beach', '#wine']
    },
    {
        photo: 'https://postimg.cc/YvFbtXNZ',
        accountName: 'demenxia94',
        price: 4,
        tripDuration: '7',
        likes: 0,
        hashtags: ['#history', '#museums', '#theatre']
    },

    {
        photo: 'https://postimg.cc/rKCJDdRF',
        accountName: 'element_sucre',
        price: 5,
        tripDuration: '9',
        likes: 0,
        hashtags: ['#technology', '#food', '#culture']
    },
    {
        photo: 'https://postimg.cc/NKFpZsLs',
        accountName: 'benja_sublyme',
        price: 4,
        tripDuration: '7',
        likes: 0,
        hashtags: ['#art', '#cuisine', '#history']
    },
    {
        photo: 'https://postimg.cc/xNjKH5zf',
        accountName: 'vdogoberto',
        price: 4,
        tripDuration: '7',
        likes: 0,
        hashtags: ['#harbor', '#wildlife', '#surf']
    },
    {
        photo: 'https://postimg.cc/fkHdpxdd',
        accountName: 'picassoart13',
        price: 5,
        tripDuration: '8',
        likes: 0,
        hashtags: ['#history', '#pasta', '#art']
    },
    {
        photo: 'https://postimg.cc/yD1wxCdt',
        accountName: 'donovan_3',
        price: 3,
        tripDuration: '6',
        likes: 0,
        hashtags: ['#mountain', '#adventure', '#wildlife']
    },
    {
        photo: 'https://postimg.cc/YvFbtXNZ',
        accountName: 'demenxia94',
        price: 5,
        tripDuration: '8',
        likes: 0,
        hashtags: ['#history', '#shopping', '#theatre']
    },
    {
        photo: 'https://postimg.cc/Dm068Yfm',
        accountName: 'ambarelacuarela',
        price: 2,
        tripDuration: '5',
        likes: 0,
        hashtags: ['#culture', '#street_food', '#markets']
    },
    {
        photo: 'https://postimg.cc/R663zf9C',
        accountName: 'feliperr0',
        price: 4,
        tripDuration: '8',
        likes: 0,
        hashtags: ['#dance', '#steak', '#soccer']
    },
    {
        photo: 'https://postimg.cc/bdRDb1gM',
        accountName: 'motorolo420',
        price: 5,
        tripDuration: '10',
        likes: 0,
        hashtags: ['#beach', '#samba', '#football']
    },
    {
        photo: 'https://postimg.cc/0bMvxszf',
        accountName: 'pikachusaurio',
        price: 3,
        tripDuration: '6',
        likes: 0,
        hashtags: ['#architecture', '#history', '#culture']
    },
    {
        photo: 'https://postimg.cc/fkHdpxdd',
        accountName: 'picassoart13',
        price: 2,
        tripDuration: '4',
        likes: 0,
        hashtags: ['#culture', '#history', '#nature']
    },
    {
        photo: 'https://postimg.cc/R663zf9C',
        accountName: 'feliperr0',
        price: 4,
        tripDuration: '6',
        likes: 0,
        hashtags: ['#tango', '#music', '#art']
    },
    {
        photo: 'https://postimg.cc/bdRDb1gM',
        accountName: 'motorolo420',
        price: 3,
        tripDuration: '5',
        likes: 0,
        hashtags: ['#beach', '#party', '#adventure']
    },
    {
        photo: 'https://postimg.cc/YvFbtXNZ',
        accountName: 'demenxia94',
        price: 5,
        tripDuration: '9',
        likes: 0,
        hashtags: ['#history', '#theatre', '#shopping']
    },
    {
        photo: 'https://postimg.cc/rKCJDdRF',
        accountName: 'element_sucre',
        price: 4,
        tripDuration: '7',
        likes: 0,
        hashtags: ['#technology', '#culture', '#food']
    }
];



Itinerary.insertMany(itineraries)