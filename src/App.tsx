import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

import './App.css';
import Login from './pages/Login';
import RegisterProvider from './context/registerProvider';

function App() {
	return (
		<RegisterProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='*' element={<NotFound/>}/>
					<Route path='/register' element= {<Register/>}/>
					<Route path='/login' element= {<Login/>}/>
				</Routes>
			</BrowserRouter>
		</RegisterProvider>
	);
}

export default App;
