import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Dashboard, Home, Projects, SignIn, SignUp } from './pages';
import { Header } from './components';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Header />
      {/* The Header component will be displayed on all pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
