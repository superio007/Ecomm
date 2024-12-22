import { Route,createBrowserRouter,createRoutesFromElements ,RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import Homepage from './pages/homepage';
import NotFound from './pages/404'
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/login';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path='/' element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
};
export default App;
