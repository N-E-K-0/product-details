import '../productDetails.css'
import ReactImageMagnify from 'react-image-magnify';

const ProductImage = (props) =>{
  const {productImage,productVariants,productVariantID } = props
  return(
    <>
      <div className="product-image">
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Jersey',
            src: productImage ,
            width: 550,
            height: 650,
          },
          largeImage: {
            src: productImage ,
            width: 1000,
            height: 1500,
          },
        }} 
        />
        <div className="product-sub-images">
          {productVariants ? 
            <img 
              src={productImage} 
              alt="productImage" 
              className="product-sub-image"
              key={productVariantID}
            />
          :null}
        </div>
      </div>
    </>
  )
}

export default ProductImage