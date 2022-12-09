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
export const createUpdate = async (req,res) => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId,
        }
    });
    if(!product) {
        return res.status(404).json({error:"Product not found"});
    }

    const update = await prisma.update.create({
        data: req.body
    })

    return res.json({data:update});
}

const editUpdate = async (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    const update = await prisma.update.update({
        where: {
            id
        },
        data: req.body
    });
    return res.json({data:update});
}

const deleteUpdate = async (req,res) => {
    const { id } = req.params;
    const update = await prisma.update.delete({
        where: {
            id
        }
    });
    return res.json({data:update});
}