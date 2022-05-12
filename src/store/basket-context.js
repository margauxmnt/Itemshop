import { useState, createContext } from "react";

const BasketContext = createContext({
    basketList: [],
    updateBasket: (product, quantity) => {},
    removeFromBasket: (productId) => {},
    isInBasket : (productId) => {},
    savedQuantity : (productId) => {},
});

export const BasketContextProvider = ({children}) => {
  
  const [basket, setBasket] = useState([])

  // add product on basket - or change quantity of product if already in basket
  
  const updateBasketHandler = (product, quantity) => {
    if (quantity !== "0" || 0) {
      setBasket((prevBasket) => {
        let find = prevBasket.find((e) => e.product.id === product.id);
        !find
          ? prevBasket.push({ product, quantity })
          : find.quantity = quantity
        return [...prevBasket]
      });
    }
  };

  // remove product from basket
  
  const removeFromBasketHandler = (productId) => {
    setBasket((prevBasket)=>{
      return prevBasket.filter(product => product.product.id !== productId)
    })
  }

  // looking for a product - or quantity of product - in the basket
  
  const alreadyInBasketHandler = (productId) => {
    return basket.some(product => product.product.id === productId)
  }

  const findQuantityOfProduct = (productId) => {
    let find = basket.find((e) => e.product.id === productId)
    return find.quantity
  }

  const context = {
      basketList: basket,
      updateBasket: updateBasketHandler,
      isInBasket : alreadyInBasketHandler,
      savedQuantity : findQuantityOfProduct,
      removeFromBasket: removeFromBasketHandler,
  }

  return (
    <BasketContext.Provider value={context}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
