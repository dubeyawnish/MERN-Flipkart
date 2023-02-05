
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import DataProvider from './Context/dataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material'
import DetailsView from './Components/details/DetailsView';
import Cart from './Components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailsView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
