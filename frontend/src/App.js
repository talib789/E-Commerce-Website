import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        {/* py-3 padding y axis 3 */}
        <Container className='py-3'>
          <Routes>
            <Route path='/login' element={<LoginScreen/>}  />
            <Route path='/shipping' element={<ShippingScreen/>}  />
            <Route path='/payment' element={<PaymentScreen/>}  />
            <Route path='/placeorder' element={<PlaceOrderScreen/>}  />
            <Route path='/register' element={<RegisterScreen/>}  />
            <Route path='/profile' element={<ProfileScreen/>}  />
            <Route path='/product/:id' element={<ProductScreen/>}  />
            <Route path='/cart/:id?' element={<CartScreen/>}  />
            <Route path='/' element={<HomeScreen/>}  />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
