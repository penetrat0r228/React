import React, {FC} from 'react';
import './App.css';
import Products from "./components/products/Products";


const App:FC = () => {
    return (
        <>
            <input type={"range"}/>
            <Products/>
        </>
    );
}
export default App;
