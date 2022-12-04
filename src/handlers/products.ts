import prisma from "../db";

export const getAllProducts = async (req, res) => {
    // @ts-ignore
    const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        include: {
            Product: true,
        }
    });
    return res.json({data:user.Product});
}

export const getOneProduct = async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        },
    });
    return res.json({data:product});
}

export const createProduct = async (req, res) => {
    const { name } = req.body;
    const product = await prisma.product.create({
        data: {
            name,
            belongsToId: req.user.id
        },
    });
    return res.json({data:product});
}

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // @ts-ignore
    const product = prisma.product.update({
        where: {
            id,
            belongsToId: req.user.id
        },
        data: {
            name,
        },
    });
    return res.json({data:product});
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    // @ts-ignore
    const product = prisma.product.delete({
        where: {
            id,
            belongsToId: req.user.id
        },
    });
    return res.json({data:product});
}
