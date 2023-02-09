import './App.css';
import {
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from './pokemon/pages/home/views/home';
import Details from './pokemon/pages/details/views/details';
function App() {
  return (
    <div className="h-auto bg-white">
      <Routes>
        <Route path="/" element={<Home className="bg-[#ede9e6]"></Home>} />
        <Route path="/pokemon/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
