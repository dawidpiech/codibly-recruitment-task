import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./common/Error/Error";
import ColorsPage from "./features/colors/ColorsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorsPage />}></Route>
        <Route path="/id/:id" element={<ColorsPage />}></Route>
        <Route path="/page/:page" element={<ColorsPage />}></Route>
        <Route
          path="*"
          element={<Error errorMessage={"This page doesn't exist."} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
