import '../productDetails.css'

const Shops = (props) =>{
  const {shops} = props
  console.log(shops)
  return(
    <>
      <h2 className="shop-heading">Shops</h2>
      <div className="shops">
          {shops.data ? 
            (
              shops.data.map(shop=>{
                return(
                  <div className="single-shop">
                    <div 
                      className="shop-content"
                      key={shop.shop_item_id}
                    >
                      <img 
                        src={shop.logo_image}
                        alt="shopImage" 
                        className="shop-image"
                      />
                      <p>{shop.shop_name}</p>
                      <p>Price:  &#2547;
                        <span style={{textDecoration: "line-through"}}>
                          {shop.price}
                        </span> 
                        &nbsp;&nbsp;&#2547;{shop.discounted_price}
                      </p>
                      <p>Stock: {shop.in_stock} </p>
                    </div>
                  </div>
                )
              })
            ):null
          }
      </div>
    </>
  )
}

export default Shops