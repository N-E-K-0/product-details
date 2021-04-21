import React, { useState, useEffect} from 'react'
//Components
import ProductImage from '../productImage'
import ProductDescription from '../productDescription'
import Shops from '../shops'

const productSlug = "bangladesh-cricket-jersey-from-evaly-6bad62271"

const ProductDeatils = () =>{
  const [productData, setProductData] = useState([])
  const [productAttributes, setProductAttributes] = useState([])
  const [productVariants, setProductVariants] = useState([])
  const [productImage, setProductImage] = useState("")
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productSku, setProductSku] = useState("")
  const [productBrandname, setProductBrandname] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productVariantID, setProductVariantID] = useState(526810)
  const [shops, setShops] = useState("")

  function fetchProductData(){
    fetch(`https://api-dev.evaly.com.bd/go-catalog/api/v1/public/products/${productSlug}`)
    .then(response => response.json())
    .then(product => {
      if(Object.keys(product).length > 0){
        setProductData(product)
        setProductAttributes(product.data.attributes)
        setProductVariants(product.data.product_variants)
        setProductImage(product.data.product_variants[0].product_images[0])
        setProductName(product.data.product_variants[0].product_name)
        setProductDescription(product.data.product_variants[0].product_description)
        setProductSku(product.data.product_variants[0].sku)
        setProductBrandname(product.data.product_variants[0].brand_name)
        setProductBrandname(product.data.product_variants[0].brand_name)
        setProductPrice(product.data.product_variants[0].min_price)
        setProductVariantID(product.data.product_variants[0].variant_id)
      }
    })
    .catch(err => console.log(err))
  }

  function fetchShopData(){
    fetch(`https://api-dev.evaly.com.bd/go-catalog/api/v1/public/shop-items/shops/${productVariantID}`)
    .then(response => response.json())
    .then(shop => {
      setShops(shop)
    })
    .catch(err => console.log(err))
  }

  useEffect(() =>{
    fetchProductData()
    if(productData){
      fetchShopData()
    }
  },[])

  function handleClick(e){
    const clickedValue = parseInt(e.target.value)

    if(productVariants.length >= 0){ 
      productVariants.map(product=>{
        return(
          product.attribute_values.map(value=>{
            if( value === clickedValue ){
              setProductImage(product.product_images[0])
              setProductName(product.product_name)
              setProductDescription(product.product_description)
              setProductSku(product.sku)
              setProductBrandname(product.brand_name)
              setProductBrandname(product.brand_name)
              setProductPrice(product.min_price)
              setProductVariantID(product.variant_id)
              setShops(shops)
            }
          })
        )
      })
    }
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="product">
        <ProductImage 
          productImage={productImage}
          productVariants={productVariants}
          productVariantID={productVariantID}
        />
        <ProductDescription 
          productName={productName}
          productDescription={productDescription}
          productVariantID={productVariantID}
          productSku={productSku}
          productBrandname={productBrandname}
          productPrice={productPrice}
          productAttributes={productAttributes}
          handleClick={handleClick}
        />
      </div><br /><br />
      <Shops shops={shops}/>
    </div>
  )
}

export default ProductDeatils;