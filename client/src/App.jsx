import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="full-height">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index        element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='*'     element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}
			// <Tabs />
			// <Navbar />

export default App;
