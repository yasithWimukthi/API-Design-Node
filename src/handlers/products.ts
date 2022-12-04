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