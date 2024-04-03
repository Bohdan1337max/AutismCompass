import React from 'react';
import './App.scss';
import {Header, Footer } from './components';
import {Routes, Route} from 'react-router-dom';
import {Events, Home, Support, Test} from './pages/index';
import {NAVIGATIONS} from './consts/consts';
import {Login} from "@mui/icons-material";
import Register from "./components/Register/Register.tsx";


const App: React.FC = () => {
    return (
        <>
            <Header navigations={NAVIGATIONS}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>

            </main>
            <Footer navigations={NAVIGATIONS}/>
        </>
    );
};

export default App;
