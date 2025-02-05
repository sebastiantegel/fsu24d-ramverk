import { useReducer, useState } from "react";
import "./App.css";
import { TextReducer } from "./reducers/TextReducer";
import { TodoApp } from "./components/TodoApp";
import { CartReducer, ICartActionType } from "./reducers/CartReducer";
import { Product } from "./models/Product";
import { CartItem } from "./models/CartItem";

function App() {
  // const [text, setText] = useState("Lorem");
  const [text, dispatch] = useReducer(TextReducer, "Lorem");
  const [cart, cartDispatch] = useReducer(CartReducer, []);
  const [products, setProducts] = useState<Product[]>([
    new Product("Golfball", 50, "....."),
    new Product("Football", 350, "...."),
    new Product("Basketball", 150, "...."),
  ]);

  const handleClick = () => {
    // setText("ipsum");
    dispatch({
      type: "CHANGED",
      payload: "ipsum",
    });
  };

  const addToCart = (p: Product) => {
    cartDispatch({
      type: ICartActionType.ADDED,
      payload: JSON.stringify(p),
    });
  };

  const handleDecrease = (cartItem: CartItem) => {
    cartDispatch({
      type: ICartActionType.DECREASED,
      payload: JSON.stringify(cartItem),
    });
  };

  const handleIncrease = (p: Product) => {
    cartDispatch({
      type: ICartActionType.INCREASED,
      payload: JSON.stringify(p),
    });
  };

  const handleRemove = (ci: CartItem) => {
    cartDispatch({
      type: ICartActionType.REMOVED,
      payload: JSON.stringify(ci),
    });
  };

  return (
    <>
      <div>
        {cart.map((ci) => {
          return (
            <p>
              <button onClick={() => handleDecrease(ci)}>-</button>
              {ci.product.name} - {ci.amount}
              <button onClick={() => handleIncrease(ci.product)}>+</button>
              <button onClick={() => handleRemove(ci)}>Ta bort</button>
            </p>
          );
        })}
      </div>

      <div>
        {products.map((p) => {
          return (
            <div key={p.name}>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
              <button onClick={() => addToCart(p)}>Lägg till</button>
            </div>
          );
        })}
      </div>

      <h2>{text}</h2>
      <button onClick={handleClick}>Ändra</button>
      <TodoApp />
    </>
  );
}

export default App;
