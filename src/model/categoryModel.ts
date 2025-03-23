import db from "src/config/db";

export const getAllCategories = () => {
  return db("categories").select("*");
};

export const getCategoryById = (id: number) => {
  return db("categories").where({ id }).first();
};

export const createCategory = (data: object) => {
  return db("categories").insert(data).returning("*");
  //   knexe özel yapılan değişikliği döndürür returning ile
};

export const updateCategory = (id: number, data: object) => {
  return db("categories").where({ id }).update(data);
};

export const deleteCategory = (id: number) => {
  return db("categories").where({ id }).update({ deleted_at: new Date() });
};
