import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ObjectProvider } from './context/ObjectContext';
import './App.css';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Logout } from './components/Auth/Logout/Logout';
import { Profile } from './components/Auth/Profile/Profile';
import { Home } from './components/Main/Home/Home';
import { NotFound } from './components/Main/NotFound/NotFound';
import { Objects } from './components/Main/Objects/Objects';
import { About } from './components/Main/About/About';
import { Create } from './components/Main/Create/Create';
import { Edit } from './components/Main/Edit/Edit';
import { Details } from './components/Main/Details/Details';

function App() {
    return (
        <UserProvider>
            <div className="App">
                <Header />
                <ObjectProvider>
                    <main id="main">
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/users/login' element={<Login />}></Route>
                            <Route path='/users/register' element={<Register />}></Route>
                            <Route path='/users/logout' element={<Logout />}></Route>
                            <Route path='/objects' element={<Objects />}></Route>

                            <Route element={<PrivateRoute />}>
                                <Route path='/users/profile' element={<Profile />}></Route>
                                <Route path='/objects/create' element={<Create />}></Route>
                                <Route path='/objects/:objectId/edit' element={<Edit />}></Route>
                                <Route path='/objects/:objectId' element={<Details />}></Route>
                            </Route>

                            <Route path='/*' element={<NotFound />}></Route>
                        </Routes>
                    </main>
                </ObjectProvider>
                <Footer />
            </div>
        </UserProvider>
    );
}

export default App;
