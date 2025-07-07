
export type Product = {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    ratings?: number;
    created_at: string;
    category?: string;
    brand: string;
  }