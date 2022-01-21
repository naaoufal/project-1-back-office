import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  } from 'react-router-dom';
import LoginScreen from './Component/Screens/Login'
import DashboardScreen from './Component/Screens/DashboardScreen';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for back office */}
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/Dashboard" element={<DashboardScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
