import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();

  const { isLoading, setIsLoading } = useGlobalContext();

  const [drink, setDrink] = useState({
    strDrink: '',
    strCategory: '',
    strAlcoholic: '',
    strGlass: '',
    strInstruction: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strDrinkThumb: '',
  });

  const getCocktail = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const fetchedDrink = await response.json();
    setDrink(fetchedDrink.drinks[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getCocktail();
  }, []);

  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strDrinkThumb,
  } = drink;

  return (
    <section className='section cocktail-section'>
      {isLoading && <Loading />}
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>{strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name :</span>
            {strDrink}
          </p>
          <p>
            <span className='drink-data'>Category :</span>
            {strCategory}
          </p>
          <p>
            <span className='drink-data'>Info :</span>
            {strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>Glass :</span>
            {strGlass}
          </p>
          <p>
            <span className='drink-data'>Instructions :</span>
            {strInstructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients :</span>
            {strIngredient2 ? strIngredient1 + ', ' : strIngredient1}
            {strIngredient3 ? strIngredient2 + ', ' : strIngredient2}
            {strIngredient4 ? strIngredient3 + ', ' : strIngredient3}
            {strIngredient5 ? strIngredient4 + ', ' : strIngredient4}
            {strIngredient5 && strIngredient5}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
