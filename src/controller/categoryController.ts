import { Request, Response } from "express";
import { getAllCategories } from "src/model/categoryModel";

export const listCategories = async (req: Request, res: Response) => {
  const categories = await getAllCategories();
  res.json(categories);
};
