export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  productCategory: ICategory[];

  selected: boolean;
}

interface ICategory {
  categoryId: number;
  category: string | null;
}
