import { IProduct } from "../models/IProduct";
import { get } from "./servieBase";

const BASE_URL =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

export const getProducts = async () => {
  const products = await get<IProduct[]>(BASE_URL);
  return products;
};

export const getProductById = async (id: number) => {
  return await get<IProduct>(`${BASE_URL}/${id}`);
};
