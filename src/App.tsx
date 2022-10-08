import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SignIn from './views/SignIn/SignIn';
import Personal from './views/Personal/Personal';
import NotFound from './views/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />} />

        <Route path="/personal" element={<Personal />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
