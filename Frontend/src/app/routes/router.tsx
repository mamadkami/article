import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { Dashboard } from '../../pages/Dashboard/Dashboard'; // مسیر صحیح به کامپوننت

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
