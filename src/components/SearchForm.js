import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchChar, setSearchChar } = useGlobalContext();

  const InputHandler = (e) => {
    setSearchChar(e.target.value);
    console.log(searchChar);
  };

  return (
    <main>
      <section className='section search'>
        <form action='' className='search-form'>
          <div className='form-control'>
            <label htmlFor='search-input' className=''>
              Search Your Favorite Cocktail
            </label>
            <input type='text' id='search-input' onChange={InputHandler} />
          </div>
        </form>
      </section>
    </main>
  );
};

export default SearchForm;
