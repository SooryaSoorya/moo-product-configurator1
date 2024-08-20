export interface ProductOption {
  id: string;
  name: string;
  description: string;
  pages: number;
  price: number;
  colors: Array<{ name: string; hex: string }>;
  layouts: Array<{ name: string; description: string }>;
}
