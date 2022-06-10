import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const ProductDetail = () => {
   const [product, setProduct] = useState(null);

   const { productId } = useParams();

   useEffect(() => {
      Axios.get(`https://dummyjson.com/products/${productId}`)
         .then(res => setProduct(res.data))
   }, [productId]);

   return (
      <>
         {!product && <em>Loading...</em>}
         {product && (
            <>
               <h4>Product Detail Page: {product.title}</h4>
               <img src={product.thumbnail} alt={product.title} width="200" />
               <p>Category: {product.category}</p>
               <p>Description: {product.description}</p>
               <Link to="/products">Back to products page</Link>
            </>
         )}
      </>
   );
}

export default ProductDetail;
