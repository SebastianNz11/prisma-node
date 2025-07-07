import {prisma} from '../db/db.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error al traer las categorías' });
    }
};
export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await prisma.category.findFirst({
            where: { id: parseInt(id) }
        });
        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error al traer la categoría' });
    }
};
export const createCategory = async (req, res) => {
    try {
        const newCategory = await prisma.category.create({
            data: req.body
        });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
};
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedCategory = await prisma.category.update({
            where: { id: parseInt(id) },
            data: req.body
        });
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
};
export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCategory = await prisma.category.delete({
            where: { id: parseInt(id) }
        });
        res.json(deletedCategory);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
};
