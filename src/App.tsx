import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import SignIn from './views/SignIn/SignIn';
import NotFound from './views/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
