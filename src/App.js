import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Shop from "./Components/Shop";

import { ContextProvider } from "./Context/context";

function App() {
    return (
        <>
            <ContextProvider>
                <Header />
                <Shop />
                <Footer />
            </ContextProvider>
        </>
    );
}

export default App;
