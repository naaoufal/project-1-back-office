import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  } from 'react-router-dom';
import LoginScreen from './Component/Screens/Login'
import DashboardScreen from './Component/Screens/DashboardScreen'
import PlaceDetailsScreen from './Component/Screens/PlaceDetails'
import PlacesScreen from './Component/Screens/Places';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for back office */}
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/places" element={<PlacesScreen />}></Route>
        <Route path="/placeDetails" element={<PlaceDetailsScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
