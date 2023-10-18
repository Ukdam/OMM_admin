import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./compoents/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./contexts/UserContext";
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <MenuContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
