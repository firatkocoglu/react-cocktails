import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({
  idDrink,
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
}) => {
  return (
    <div className='cocktail'>
      <img src={strDrinkThumb} alt={strDrink} />
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className='btn btn-primary'>
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
