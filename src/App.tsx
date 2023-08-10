import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Header from './components/Header/Header';
import {GlobalStyle} from './styles/Global';
import './App.css';
import Login from './pages/Login';
import RegisterProvider from './context/registerProvider';
import ModalProvider from './context/ModalProvider';
import MostListenedEpisodesTest from './pages/MostListenedEpisodesTest';
import About from './pages/About';
import ListenOnPlatforms from './pages/ListenOnPlatforms';
import AudioMessage from './pages/AudioMessage';

function App() {
	return (
		<>
			<GlobalStyle/>
			<RegisterProvider>
				<ModalProvider>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/home' element={<HomePage />} />
							<Route path='*' element={<NotFound/>}/>
							<Route path='/register' element= {<Register/>}/>
							<Route path='/login' element= {<Login/>}/>
							<Route path='/mostListenedTest' element= {<MostListenedEpisodesTest/>}/>
							<Route path='/about' element={<About/>}/>
							<Route path='/listenOnPlatforms' element={<ListenOnPlatforms/>}/>
							<Route path='/audiomessage' element={<AudioMessage/>} />
						</Routes>
					</BrowserRouter>
				</ModalProvider>
			</RegisterProvider>
		</>
	);
}

export default App;
