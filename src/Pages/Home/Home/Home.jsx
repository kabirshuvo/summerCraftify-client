import { useState } from 'react';
import Category from '../../Category/Category';
import PopularClasses from '../../Populars/PopularClasses';
import PopularInstructors from '../../Populars/PopularInstractors';
import Reviews from '../../Reviews/Reviews';
import HeroSec from '../HeroSec/HeroSec';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
  useTitle('Home || summerCraftify');
  
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={`py-16 ${theme === 'dark' ? 'bg-slate-900 text-slate-300' : 'bg-slate-300 text-slate-700'}`}>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-500 text-white hover:bg-gray-600 z-50"
      >
        {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
      </button>
      <section>
        <HeroSec></HeroSec>
      </section>
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <section>
        <Category></Category>
      </section>
      <section>
        <Reviews></Reviews>
      </section>
    </div>
  );
};

export default Home;
