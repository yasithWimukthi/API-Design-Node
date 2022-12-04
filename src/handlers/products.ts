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