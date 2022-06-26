import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/marvel">
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
