import Navbar from './component/Home/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Home/Login'
import Signup from './component/Home/Signup'

function App() {
  return (
    <Router>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
