import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Main/Home/Home';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Logout } from './components/Auth/Logout/Logout';
import { NotFound } from './components/Main/NotFound/NotFound';

function App() {
    return (
        <UserContext.Provider>
            <div className="App">
                <Header />
                <main id="main">
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/users/login' element={<Login />}></Route>
                        <Route path='/users/register' element={<Register />}></Route>
                        <Route path='/users/logout' element={<Logout />}></Route>
                        <Route path='/*' element={<NotFound />}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
