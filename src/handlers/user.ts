import prisma from "../db";
import { createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
    const hash = await hashPassword(req.body.password);

    // @ts-ignore
    const user = await prisma.user.create({
        data:{
            username: req.body.username,
            password: hash,
            email: req.body.email
        },
    });

    const token = createJWT(user);
    res.json({ token });
};