import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, isLoading, searchChar } = useGlobalContext();
  let filteredCocktails;

  if (searchChar) {
    filteredCocktails = cocktails.drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchChar.toLowerCase())
    );
  } else {
    filteredCocktails = cocktails.drinks;
  }

  console.log(filteredCocktails);

  return (
    <section className='section'>
      {isLoading && <Loading />}
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {filteredCocktails.map((drink) => {
          const { idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic } =
            drink;
          return (
            <Cocktail
              key={idDrink}
              idDrink={idDrink}
              strDrinkThumb={strDrinkThumb}
              strDrink={strDrink}
              strGlass={strGlass}
              strAlcoholic={strAlcoholic}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
