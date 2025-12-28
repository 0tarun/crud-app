import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './components/getUser/User';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path: "/add",
      element: <h1>This is add page!</h1>
    },
    {
      path: "/user",
      element: <h1>This is user page!</h1>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
