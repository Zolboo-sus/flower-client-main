import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardPage from "./pages/Cart/Cart";
import Order from "./components/order/Order";
import Product from "./pages/Product/Product";
import Payment from "./pages/Payment/Payment";
import Completed from "./pages/Completed/Completed";
import Header from "./components/layout/Header/Header";
import DesktopHeader from "./components/layout/Header/DesktopHeader";
import Footer from "./components/layout/Footer/Footer";
import { useState, useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/Home/HomePage.jsx";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App overflow-hidden">
      {/* Render Header conditionally based on window width */}
      {windowWidth < 720 ? (
        <div className="mb-[23vw]">
          <Header />
        </div>
      ) : (
        <div className="2xl:mb-[12vh] xl:mb-[6vw] lg:mb-[2vh] md:mb-[2vh]">
          <DesktopHeader />
        </div>
      )}
      <CartProvider>
        {/* Wrap everything inside Router */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id/:catid" element={<Product />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/complete/:id" element={<Completed />} />
            <Route path="/cart" element={<CardPage />} />
            <Route
              path="/payment/:invoiceId/:qr/:orderId"
              element={<Payment />}
            />
          </Routes>
        </Router>
        <div className="md:mt-[2%] mt-[5%] md: bottom-0 md:w-full"></div>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
