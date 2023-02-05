import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { useState ,useContext} from 'react';
import { DataContext } from '../../Context/dataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px ',
      textDecoration: 'none',
      //color: '#FFFFFF',
      fontSize: 16,
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'block',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)`
color:#2874f0;
background:#ffffff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`




const CustomButtons = () => {
const [open, setOpen] = useState(false);
const {account,setAccount} =useContext(DataContext);



const openDialog=()=>{
  setOpen(true);
}

  return (
    <Wrapper>
      {
        account?<Profile  account={account} setAccount={setAccount}/>:
        <LoginButton variant="contained "  onClick={() =>openDialog()}> Login</LoginButton >
      }
      
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
              <ShoppingCart />
              <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} /> 


    </Wrapper >
  )
}
export default CustomButtons;