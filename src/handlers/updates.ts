import prisma from "../db";

export const getOneUpdate = async (req,res) => {
    const { id } = req.params;
    const update = await prisma.update.findFirst({
        where: {
            id,
        },
    });
    return res.json({data:update});
}

export const getAllUpdates = async (req,res) => {
    // @ts-ignore
    const products = await prisma.products.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    });

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates];
    }
    , []);

    return res.json({data:updates});

}