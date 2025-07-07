import { Router } from 'express';
import { getAllProducts, getSingleProduct, getCartItems } from '../controllers/product.controller';

const router: Router = Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/cart-items', getCartItems);

export default router;
