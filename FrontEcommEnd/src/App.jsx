import { Route,createBrowserRouter,createRoutesFromElements ,RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import Homepage from './pages/homepage';
import notFound from './pages/404'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path='/' element={<Homepage />} />
        <Route path="*" element={<notFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
};
export default App;
