
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes/Routes';

function App() {
  return (
    <div className='w-full'>
      <RouterProvider router={Routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
