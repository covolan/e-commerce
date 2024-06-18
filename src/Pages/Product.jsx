import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

function Product() {
  const {productData} = useContext(ShopContext);
  const {productId} = useParams();
  const product = productData.find((item) => item.id == Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
