import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState({
    drinks: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchChar, setSearchChar] = useState('');

  const getCocktails = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const fetchedCocktails = await response.json();
    setCocktails(fetchedCocktails);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getCocktails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{ cocktails, isLoading, setIsLoading, searchChar, setSearchChar }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
