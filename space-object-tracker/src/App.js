import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Logout } from './components/Auth/Logout/Logout';

function App() {
    return (
        <div className="App">
            <Header />

            <main id="main">
                <Routes>
                    <Route path='/user/login' element={<Login />}></Route>
                    <Route path='/user/register' element={<Register />}></Route>
                    <Route path='/user/logout' element={<Logout />}></Route>
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
