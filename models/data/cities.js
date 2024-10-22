import "dotenv/config.js"
import '../../config/database.js'
import City from "../City.js";

const cities = [
  {
    _id: "1",
    country: "Japan",
    city: "Tokyo",
    photo: "https://images.ecestaticos.com/TIh3Ip8m6fwlFW4YiF37lAfjvus=/0x184:2271x1531/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffbc%2F44e%2F899%2Ffbc44e8997b2a025a8776c0439ac0449.jpg",
    attractions: ["Tokyo Tower", "Shinjuku Gyoen"],
    description: "A bustling metropolis blending tradition and modernity.",
    localCurrency: "Yen",
    continent: "Asia"
  },
  {
    _id: "2",
    country: "Brazil",
    city: "Rio de Janeiro",
    photo: "https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2014/03/cristo-redentor-corcovado-rio-de-janeiro.jpg",
    attractions: ["Christ the Redeemer", "Copacabana Beach"],
    description: "Carnival spirit and natural beauty.",
    localCurrency: "Real",
    continent: "South America"
  },
  {
    _id: "3",
    country: "France",
    city: "Paris",
    photo: "https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg",
    attractions: ["Eiffel Tower", "Louvre Museum"],
    description: "The city of light and love, full of iconic landmarks.",
    localCurrency: "Euro",
    continent: "Europe"
  },
  {
    _id: "4",
    country: "Australia",
    city: "Sydney",
    photo: "https://www.civitatis.com/blog/wp-content/uploads/2018/01/vista-opera-house-sidney.jpg",
    attractions: ["Sydney Opera House", "Bondi Beach"],
    description: "A vibrant cultural hub with stunning beaches.",
    localCurrency: "Dollar",
    continent: "Oceania"
  },
  {
    _id: "5",
    country: "South Africa",
    city: "Cape Town",
    photo: "https://dynamic-media.tacdn.com/media/attractions-content--1x-1/10/46/0d/b9.jpg?f=webp&w=1000&h=700",
    attractions: ["Table Mountain", "Robben Island"],
    description: "Natural beauty and rich culture.",
    localCurrency: "Rand",
    continent: "Africa"
  },
  {
    _id: "6",
    country: "Mexico",
    city: "Mexico City",
    photo: "https://blog.estrellaroja.com.mx/wp-content/uploads/2023/11/Mirador-monumento-revolucion.jpg",
    attractions: ["Zócalo", "Chapultepec Park"],
    description: "A vibrant city with a rich historical heritage.",
    localCurrency: "Peso",
    continent: "North America"
  },
  {
    _id: "7",
    country: "USA",
    city: "New York",
    photo: "https://img.freepik.com/fotos-premium/estatua-libertad-noche-ciudad-nueva-york-ee-uu-estatua-libertad-sobre-escena-ciudad-nueva-york-lado-rio-que-ubicacion-es-manhattan-ai-generado_538213-9317.jpg",
    attractions: ["Statue of Liberty", "Central Park"],
    description: "The vibrant, ever-awake Big Apple.",
    localCurrency: "Dollar",
    continent: "North America"
  },
  {
    _id: "8",
    country: "Italy",
    city: "Rome",
    photo: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/05/15/5fa3c5d7ef234.jpeg",
    attractions: ["Colosseum", "Vatican City"],
    description: "Ancient wonders and Renaissance art.",
    localCurrency: "Euro",
    continent: "Europe"
  },
  {
    _id: "9",
    country: "UK",
    city: "London",
    photo: "https://www.shutterstock.com/image-photo/beautiful-sunset-view-big-ben-600nw-2397823585.jpg",
    attractions: ["Big Ben", "London Eye"],
    description: "A blend of historic charm and modern excitement.",
    localCurrency: "Pound",
    continent: "Europe"
  },
  {
    _id: "10",
    country: "Spain",
    city: "Barcelona",
    photo: "https://www.berlinsbi.com/uploads/sites/2/2023/06/web-banner-barcelona.jpg?w=1854&h=1043&crop=1",
    attractions: ["Sagrada Familia", "Park Güell"],
    description: "A city of incredible architectural marvels.",
    localCurrency: "Euro",
    continent: "Europe"
  },
  {
    _id: "11",
    country: "China",
    city: "Beijing",
    photo: "https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg",
    attractions: ["Great Wall of China", "Forbidden City"],
    description: "Ancient heritage and modern progress in harmony.",
    localCurrency: "Yuan",
    continent: "Asia"
  },
  {
    _id: "12",
    country: "Russia",
    city: "Moscow",
    photo: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg",
    attractions: ["Red Square", "Kremlin"],
    description: "The historic heart of Russia.",
    localCurrency: "Ruble",
    continent: "Europe"
  },
  {
    _id: "13",
    country: "Argentina",
    city: "Buenos Aires",
    photo: "https://www.getsready.com/wp-content/uploads/2016/10/Buenos-Aires-in-morning.jpg",
    attractions: ["Obelisco", "La Boca"],
    description: "A city filled with passion and tango rhythms.",
    localCurrency: "Peso",
    continent: "South America"
  },
  {
    _id: "14",
    country: "Germany",
    city: "Berlin",
    photo: "https://www.getsready.com/wp-content/uploads/2016/10/berlin-beautiful-road.jpg",
    attractions: ["Brandenburg Gate", "Berlin Wall"],
    description: "A city marked by history and transformation.",
    localCurrency: "Euro",
    continent: "Europe"
  },
  {
    _id: "15",
    country: "India",
    city: "Mumbai",
    photo: "https://www.reviewsxp.com/blog/wp-content/uploads/2018/06/mumbai-1370023_1280-850x491.jpg",
    attractions: ["Gateway of India", "Marine Drive"],
    description: "The city of dreams and Bollywood glamour.",
    localCurrency: "Rupee",
    continent: "Asia"
  }
];

  City.insertMany(cities)