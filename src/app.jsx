import { useEffect } from "react";
import Header from "~/components/Header";
import { getTheme, setTheme } from "~/utils/theme";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  useEffect(() => {
    setTheme(getTheme());
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<div>Home Component here</div>} />
        <Route path="/page" exact element={<div>Another page here</div>} />

        <Route element={<PrivateRoute />}>
          {/* =======================================Protected Routes================================== */}
        </Route>
        <Route path="*" element={<div>404 Component here</div>} />
      </Routes>
    </div>
  );
}

export default App;
