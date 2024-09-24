import { useState } from 'react'; 
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import InfoIcon from '@mui/icons-material/Info'; 
import PaymentIcon from '@mui/icons-material/Payment';
import { useNavigate } from 'react-router-dom'; // React Router for navigation


  export default function BottomNav() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    
      <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="Products"
          value="products"
          icon={<ShoppingCartIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="Product Details"
          value="product details"
          icon={<InfoIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction label="Checkout" value="checkout" icon={<PaymentIcon />} onClick={() => navigate('/')} />
      </BottomNavigation>
    );
  }
