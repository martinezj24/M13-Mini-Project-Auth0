import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TaskCreation from './components/TaskCreation';
import TaskDetails from './components/TaskDetails';
import NavbarComponent from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />

        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/create-task" element={<TaskCreation />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
