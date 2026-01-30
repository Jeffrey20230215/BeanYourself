import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  
  return (
    <div className="App bg-primary">
      <Navbar/>
        <div className="container mt-3">          
          <Outlet />
        </div>
    </div>    
  );
}

export default App;
