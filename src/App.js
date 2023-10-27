import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Admin_Layout from "./compoents/Admin_Layout";
import Admin_IndexPage from "./pages/Admin_IndexPage";
import Admin_LoginPage from "./pages/Admin_LoginPage";
import Admin_OrderPage from "./pages/Admin_OrderPage";
import Admin_UserPage from "./pages/Admin_UserPage";
import Admin_ReviewPage from "./pages/Admin_ReviewPage";
import { UserContextProvider } from "./contexts/Admin_UserContext";
import { MenuContextProvider } from "./contexts/Admin_MenuContext";
import Admin_ProductPage from "./pages/Admin_ProductPage";
import Admin_ProductAddPage from "./pages/Admin_ProductAddPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <MenuContextProvider>
          <Routes>
            <Route path="/" element={<Admin_Layout />}>
              <Route index element={<Admin_IndexPage />} />
              <Route path="login" element={<Admin_LoginPage />} />
              <Route path="order" element={<Admin_OrderPage />} />
              <Route path="user" element={<Admin_UserPage />} />
              <Route path="review" element={<Admin_ReviewPage />} />
              <Route path="product" element={<Admin_ProductPage />} />
              <Route path="product_add" element={<Admin_ProductAddPage />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
