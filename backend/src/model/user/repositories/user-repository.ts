import { Prisma } from "@prisma/client";
import { IUser } from "./IUser";
import { prisma } from "@/lib/prisma";

export class UserRepository implements IUser {
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data
        })

        return user
    }

}