
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

import  {Box } from '@mui/material'

function App() {
  return (
            <div className="App">
                      <Header />
                      <Box style={{marginTop:55}}>
                        <Home />
                      </Box>
            </div>

  );
}

export default App;
