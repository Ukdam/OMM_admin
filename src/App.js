import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Admin_Layout from "./compoents/Admin_Layout";
import Admin_IndexPage from "./pages/Admin_IndexPage";
import Admin_LoginPage from "./pages/Admin_LoginPage";
import Admin_OrderPage from "./pages/OrderPages/Admin_OrderPage";
import Admin_UserPage from "./pages/Admin_UserPage";
import Admin_ReviewPage from "./pages/Admin_ReviewPage";
import { UserContextProvider } from "./contexts/Admin_UserContext";
import { MenuContextProvider } from "./contexts/Admin_MenuContext";
import Admin_ProductPage from "./pages/Admin_ProductPage";
import Admin_ProductAddPage from "./pages/Admin_ProductAddPage";
import Admin_UserDetailPage from "./pages/Admin_UserDetailPage";
import Admin_BeforeOrderPage from "./pages/OrderPages/Admin_BeforeOrderPage";
import Admin_AllOrderPage from "./pages/OrderPages/Admin_AllOrderPage";
import Admin_OnDeliveryPage from "./pages/OrderPages/Admin_OnDeliveryPage";
import Admin_DeliveryCompletedPage from "./pages/OrderPages/Admin_DeliveryCompletedPage";
import Admin_AcceptOrderPage from "./pages/OrderPages/Admin_AcceptOrderPage";
import Admin_CancelOrderPage from "./pages/OrderPages/Admin_CancelOrderPage";
import Admin_ProductAddUpdate from "./pages/Admin_ProductAddUpdate";

function App() {
  return (
    <>
      <UserContextProvider>
        <MenuContextProvider>
          <Routes>
            <Route path="/" element={<Admin_Layout />}>
              <Route index element={<Admin_IndexPage />} />
              <Route path="login" element={<Admin_LoginPage />} />
              <Route path="order" element={<Admin_OrderPage />}>
                <Route path="allOrder" element={<Admin_AllOrderPage />} />
                <Route path="beforeOrder" element={<Admin_BeforeOrderPage />} />
                <Route path="acceptOrder" element={<Admin_AcceptOrderPage />} />
                <Route path="onDelivery" element={<Admin_OnDeliveryPage />} />
                <Route
                  path="deliveryCompleted"
                  element={<Admin_DeliveryCompletedPage />}
                />
                <Route path="cancelOrder" element={<Admin_CancelOrderPage />} />
              </Route>

              <Route path="user" element={<Admin_UserPage />} />
              <Route path="user_detail/:id" element={<Admin_UserDetailPage />} />
              <Route path="review" element={<Admin_ReviewPage />} />
              <Route path="product" element={<Admin_ProductPage />} />
              <Route path="product_add" element={<Admin_ProductAddPage />} />
              <Route path="product_addUpdate/:id" element={<Admin_ProductAddUpdate />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
