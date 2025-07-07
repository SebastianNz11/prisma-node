import { prisma } from "../db/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al traer los productos" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findFirst({
      where: { id: parseInt(id) },
      include: {
        category: true,
      },
    });
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al traer el producto" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await prisma.product.create({
      data: req.body,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
