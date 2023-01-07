import express from 'express';
const routes = express.Router();
import userRoutes from './userRoute/user.route.js';
import productRoutes from './productRoute/product.route.js';
import orderRoutes from './orderRoute/order.route.js';

routes.use('/api/users', userRoutes);
routes.use('/api/products', productRoutes);
routes.use('/api/orders', orderRoutes);

export default  routes;