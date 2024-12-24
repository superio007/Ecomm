import React from "react";

function Try() {
  // Retrieve and parse the JSON string from localStorage
  const data = JSON.parse(localStorage.getItem("wishlist") || "[]");

  return (
    <>
      <div className="container">
        <div className="row">
          {data.length > 0 ? (
            data[0].cartItems.map((item, index) => (
              <div className="col-3 mb-4" key={index}>
                <div className="card">
                  <img
                    src={item.product.image}
                    className="card-img-top"
                    alt={item.product.name}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.product.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Subtotal: ${item.subtotal}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the wishlist.</p>
          )}
        </div>
        <div className="row mb-3" style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.15)" , padding: "1rem"}}>
          <div className="col-3">Product</div>
          <div className="col-3">Price</div>
          <div className="col-3">Quantity</div>
          <div className="col-3">Subtotal</div>
        </div>
        {data.length > 0 ? (
          data[0].cartItems.map((item, index) => (
            <div className="row mb-3" style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.15)" , padding: "1rem"}} key={index}>
              <div className="col-3">{item.product.name}</div>
              <div className="col-3">${item.price}</div>
              <div className="col-3"><input type="number" name="" id="" min={0} value={item.quantity} max={10}/></div>
              <div className="col-3">${item.subtotal}</div>
            </div>
          ))
        ) : (
          <p>No items in the wishlist.</p>
        )}
      </div>
    </>
  );
}

export default Try;
