import { RouterProvider } from "react-router";
import "./App.css";
// import { Button, DangerButton, MagicButton } from "./components/styled/Buttons";
import { router } from "./Router";
import { useEffect, useReducer } from "react";
import { IActionType, ProductReducer } from "./reducers/productReducer";
import { ProductContext } from "./contexts/productContext";
import { getProducts } from "./services/productService";

function App() {
  const [products, dispatch] = useReducer(ProductReducer, []);

  useEffect(() => {
    if (products.length > 0) return;

    const getData = async () => {
      const products = await getProducts();
      dispatch({
        type: IActionType.LOADED,
        payload: JSON.stringify(products),
      });
    };

    getData();
  });

  return (
    // <Button onClick={() => {}}>Hej hej</Button>
    //   <Button onClick={() => {}}>Spara</Button>
    //   <DangerButton>Fara!</DangerButton>
    //   <MagicButton bgColor="green" textColor="whitesmoke" hoverColor="yellow">
    //     It's magic
    //   </MagicButton>

    <ProductContext.Provider value={{ products, dispatch }}>
      <RouterProvider router={router}></RouterProvider>
    </ProductContext.Provider>
  );
}

export default App;
