import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { client } from '../lib/db';

interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  price: number;
  image: string;
  brand?: string;
  category?: string;
  created_at?: Date;
}

const productsCollection = client.db('airbnbDB').collection<Product>('products');

export const getAllProducts = async (_: Request, res: Response): Promise<void> => {
  try {
    const products = await productsCollection.find().toArray();
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch products' });
  }
};

export const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });
    if (!product) {
      res.status(404).send({ error: 'Product not found' });
      return;
    }
    res.send(product);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch product' });
  }
};

export const getCartItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const productIds: string[] = req.body;
    const objectIds: ObjectId[] = productIds.map(id => new ObjectId(id));
    const products = await productsCollection.find({ _id: { $in: objectIds } }).toArray();
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch cart items' });
  }
};
