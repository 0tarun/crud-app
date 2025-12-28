import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <h1>This is home page!</h1>
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
