import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from '../components/Card';
import { SkeletonComponent } from '../components/Skeleton/Skeleton';


export const Home = ({setSelectedCard}) => {
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    

   useEffect(() => {
    setLoading(true)
    axios.get('https://61db06d64593510017aff7a8.mockapi.io/movies').then(({ data }) => {
      setMovies(data);
      setLoading(false)
    });
  }, []);

  const onSelectCard = (id) => {
    setSelectedCard(id)
  }

  return (
    <>
      <form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="search"
         id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required=""/>
         </div>
      </form>
      <br />
      <br />
      <div className="movies">
       {isLoading? (<div className='movies'>
        <SkeletonComponent/>
        <SkeletonComponent/>
         <SkeletonComponent/>
        </div>) : (
         movies
          .filter((obj) => obj.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
          .map((obj) => (
            <MovieCard
              selectCard={onSelectCard}
              key={obj.id}
              id={obj.id}
              title={obj.title}
              imageUrl={obj.imageUrl}
              description={obj.description}
            />
          ))
       )}
      </div>
    </>
        
       
  );
};
