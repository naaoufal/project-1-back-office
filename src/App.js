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
import PlacesScreen from './Component/Screens/Places'
import ErrorScreen404 from './Component/Screens/errorPage/404'
import ErrorScreen500 from './Component/Screens/errorPage/500'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for back office */}
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/places" element={<PlacesScreen />}></Route>
        <Route path="/placeDetails" element={<PlaceDetailsScreen />}></Route>
        {/* Error routes page */}
        <Route path="/404" element={<ErrorScreen404 />}></Route>
        <Route path="/500" element={<ErrorScreen500 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
