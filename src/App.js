import Home from './pages/Home';
import Login from './pages/Login';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;