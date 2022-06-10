import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';

import ProductsList from "../components/ProductsList";

const SearchResults = () => {
   const [searchParams] = useSearchParams();

   const [products, setProducts] = useState([]);

   useEffect(() => {
      console.log(searchParams.get("keyword"))
      Axios.get(`https://dummyjson.com/products/search?q=${searchParams.get("keyword")}`)
         .then(res => setProducts(res.data.products))
   }, [searchParams])

   return (
      <div>
         <h4>Search Results</h4>
         {products.length === 0 && <em>No products found</em>}
         {products.length && <ProductsList products={products} />}
      </div>
   );
}

export default SearchResults;
