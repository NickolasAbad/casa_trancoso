import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Exterior from './pages/Exterior';
import Home from './pages';

import './App.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="exterior" element={<Exterior />} />
            </Routes>
        </Router>
    );
}

export default App;
