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