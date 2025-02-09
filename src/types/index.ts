export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  rating: number;
  stock: number;
  is_liked: boolean;
  images: string[];
}

export interface ICustomer {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
}