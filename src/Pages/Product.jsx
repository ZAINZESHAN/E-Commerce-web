import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DiscriptionBox from '../components/DiscriptionBox/DiscriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  // console.log(product)
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DiscriptionBox product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
