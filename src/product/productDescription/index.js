import '../productDetails.css'

const ProductDescription = (props) =>{
  const {productName, productDescription, productVariantID,productSku,productBrandname, productPrice,productAttributes,handleClick} = props
  return(
    <div className="product-description">
      <h3>{productName}</h3>
      <p>{productDescription}</p>
      <p>Product ID: {productVariantID}</p>
      <p>SKU: {productSku}</p>
      <p>Brand: {productBrandname}</p>
      <p>Price: &#2547; {productPrice}</p>

      {/* size and color */}
      <div className="product-attributes">
      {productAttributes ? 
        (
        productAttributes.map(attribute =>{
          return(
          <div className="product-attribute">
            <label htmlFor={attribute.attribute_data.type}>{attribute.attribute_data.type}</label>
            <select 
            key={attribute.attribute_name}
            name={attribute.attribute_data.type}
            onChange={handleClick}
            className="product-attribute-dropdown"
            >
            {attribute.attribute_data.values ? 
            (
              attribute.attribute_data.values.map(value =>{
              return(
                <option 
                key={value.key}
                value={value.key}
                >
                {value.value}
                </option>
              )
              })
            ):null}
            </select>
          </div>
          )}
        )
        ):null
      }
      </div>
    </div>
  )
}

export default ProductDescription