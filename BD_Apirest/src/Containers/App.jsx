import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>   
    );
}

export default App;