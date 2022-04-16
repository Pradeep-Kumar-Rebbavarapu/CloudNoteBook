import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import NotesPage from './Pages/Notespage'
import { ContextProvider } from './Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import Alert from './components/Alert';
import QueryPage from './Pages/Querypage'
function App() {
  return (
    
    <Router>
      <ContextProvider>
       <MainNavbar/>
       
       <Alert/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/signup" element={<SignupPage/>}/>
            
            <Route exact path="/note" element={<NotesPage/>}/>
            <Route exact path="/query" element={<QueryPage/>}/>
        </Routes>
        {/* <Footer/> */}
        </ContextProvider>
    </Router>
   
  );
}

export default App;
