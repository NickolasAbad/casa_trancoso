import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Arraial from './pages/Arraial';
import Caraiva from './pages/Caraiva';
import Churrasqueira from './pages/Churrasqueira';
import Corumbau from './pages/Corumbau';
import Exterior from './pages/Exterior';
import Fachada from './pages/Fachada';
import Interior from './pages/Interior';
import Ofuro from './pages/Ofuro';
import PortoSeguro from './pages/PortoSeguro';
import PraiaDoEspelho from './pages/PraiaDoEspelho';
import Privacidade from './pages/Privacidade';
import RegrasPage from './pages/Regras';
import TermosCondicoes from './pages/Termos';
import Trancoso from './pages/Trancoso';
import Home from './pages';

import './App.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/exterior" element={<Exterior />} />
                <Route path="/interior" element={<Interior />} />
                <Route path="/fachada" element={<Fachada />} />
                <Route path="/ofuro" element={<Ofuro />} />
                <Route path="/churrasqueira" element={<Churrasqueira />} />
                <Route path="/caraiva" element={<Caraiva />} />
                <Route path="/arraial" element={<Arraial />} />
                <Route path="/trancoso" element={<Trancoso />} />
                <Route path="/praia-do-espelho" element={<PraiaDoEspelho />} />
                <Route path="/porto-seguro" element={<PortoSeguro />} />
                <Route path="/corumbau" element={<Corumbau />} />
                <Route path="/regras" element={<RegrasPage />} />
                <Route
                    path="/termos-e-condicoes"
                    element={<TermosCondicoes />}
                />
                <Route
                    path="/politica-de-privacidade"
                    element={<Privacidade />}
                />
            </Routes>
        </Router>
    );
}

export default App;
