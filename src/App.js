import './App.css';
import {getProductById, getProducts} from "./services/product";

function App() {
    return (
        <div className="App">
            <button onClick={() => {getProducts().then((res) => (console.log(res)))}}>
                getProducts
            </button>
            <button onClick={() => {getProductById(1).then((res) => {console.log(res);})}}>
                getProductById 1
            </button>

            <button
                onClick={() => {
                    getProductById(3).catch((error) => {console.log(error);})
                }}>
                getProductById 3
            </button>
        </div>
    );
}

export default App;
