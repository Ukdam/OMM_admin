import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Admin_Layout from "./compoents/Admin_Layout";
import Admin_IndexPage from "./pages/Admin_IndexPage";
import Admin_LoginPage from "./pages/Admin_LoginPage";
import { UserContextProvider } from "./contexts/Admin_UserContext";
import { MenuContextProvider } from "./contexts/Admin_MenuContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <MenuContextProvider>
          {/* <Routes>
            <Route path="/user" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Routes> */}
          <Routes>
            <Route path="/admin" element={<Admin_Layout />}>
              <Route index element={<Admin_IndexPage />} />
              <Route path="login" element={<Admin_LoginPage />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
