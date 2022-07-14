import Home from './pages/home/Home';
import Lists from './pages/lists/Lists';
import Login from './pages/login/Login';
import NewPage from './pages/newPage/NewPage';
import SinglePage from './pages/singlePage/SinglePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />

          <Route path='users'>
            <Route index element={<Lists />} />
            <Route path=':userID' element={<SinglePage />} />
            <Route path='new-user' element={<NewPage />} />
          </Route>

          <Route path='products'>
            <Route index element={<Lists />} />
            <Route path=':productID' element={<SinglePage />} />
            <Route path='new-product' element={<NewPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
