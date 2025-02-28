import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";



const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  );
}

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
