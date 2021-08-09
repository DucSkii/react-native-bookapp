import Sam from './images/Sam.jpg'
import TinyDragon from './images/TinyDragon.jpg'
import Wickedly from './images/Wickedly.jpg'

const books = [
  {
    id: 1,
    title: 'The Tiny Dragon',
    author: 'Rupert Carter',
    image: TinyDragon,
    rating: 4.5,
    pages: 160,
    language: 'Eng',
    time: '2d 4h',
    genre: ['Drama', 'Romance', 'Adventure'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 2,
    title: 'Sam and Pam',
    author: 'Iris Grade',
    image: Sam,
    rating: 4.2,
    pages: 230,
    language: 'Eng',
    time: '5d 2h',
    genre: ['Adventure', 'Drama', 'Romance'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 3,
    title: 'Something Wickedly Weird',
    author: 'Chris Mould',
    image: Wickedly,
    rating: 4.8,
    pages: 120,
    language: 'Eng',
    time: '3d 5h',
    genre: ['Romance', 'Adventure', 'Drama'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]

export default books