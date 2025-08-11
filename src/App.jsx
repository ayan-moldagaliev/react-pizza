import Header from "@components/Header";
import Home from "@components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "@components/Cart";
import NotFound from "@components/NotFound";
import { useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValueChange={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}  />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
