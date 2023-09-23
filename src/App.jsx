//React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
//Components
import PageContainer from "./containers/PageContainer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
