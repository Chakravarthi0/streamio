import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const categoryContext = createContext([]);

const useCategory = () => useContext(categoryContext);

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");

        if (response.status === 200) {
          setCategories(response.data.categories);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <categoryContext.Provider value={{ categories }}>
      {children}
    </categoryContext.Provider>
  );
}

export { CategoryProvider, useCategory };
