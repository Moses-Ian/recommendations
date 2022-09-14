import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="full-height">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index        element={<Home />} />
						<Route path='login' element={<LoginPage />} />
						<Route path='*'     element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
