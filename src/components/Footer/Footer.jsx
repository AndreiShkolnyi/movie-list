import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

export const Footer = () => { 
    return (

<footer className="p-4 mt-[50px] bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {dateFormat((new Date()), "yyyy")} <Link to='/' className="hover:underline">React Movie.</Link> All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to='/' className="hover:underline mr-5">Home</Link>
        </li>
        <li>
           <Link to='/about' className="hover:underline">About</Link>
        </li>
        
    </ul>
</footer>

    )
 }