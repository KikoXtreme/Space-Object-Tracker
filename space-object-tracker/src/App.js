import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { ObjectContext } from './context/ObjectContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { getAll } from './services/objectService';
import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Main/Home/Home';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Logout } from './components/Auth/Logout/Logout';
import { NotFound } from './components/Main/NotFound/NotFound';
import { Objects } from './components/Main/Objects/Objects';
import { About } from './components/Main/About/About';
import { Create } from './components/Main/Create/Create';
import { Edit } from './components/Main/Edit/Edit';

function App() {
    const [objects, setObjects] = useState([]);
    const [user, setUser] = useLocalStorage('user', {});
    const navigate = useNavigate();

    const userLogin = (userData) => {
        setUser(userData);
    }

    const userLogout = () => {
        setUser({});
    }

    const addObject = (objectData) => {
        setObjects(state => [
            //Error if empty array
            ...state,
            objectData
        ]);
        console.log(objects + ' 1')
        console.log(objectData + ' 2')
        navigate('/objects');
    }

    const editObject = (objectId, objectData) => {
        setObjects(state => [
            ...state,
            objectData
        ]);
    }

    useEffect(() => {
        getAll()
            .then(result => {
                setObjects(result);
            })
    }, []);

    return (
        <UserContext.Provider value={{ user, userLogin, userLogout }}>
            <div className="App">
                <Header />
                <ObjectContext.Provider value={{ objects, addObject, editObject }}>
                    <main id="main">
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/users/login' element={<Login />}></Route>
                            <Route path='/users/register' element={<Register />}></Route>
                            <Route path='/users/logout' element={<Logout />}></Route>
                            <Route path='/objects' element={<Objects />}></Route>
                            <Route path='/objects/create' element={<Create />}></Route>
                            <Route path='/objects/:objectId/edit' element={<Edit />}></Route>
                            <Route path='/*' element={<NotFound />}></Route>
                        </Routes>
                    </main>
                </ObjectContext.Provider>
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
