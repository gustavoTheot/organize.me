import { Prisma } from "@prisma/client";
import { ITransaction } from "./ITransaction";
import { prisma } from "@/lib/prisma";

export class TransactionRepository implements ITransaction {
    async create(data: Prisma.TransactionCreateInput) {
        const transaction = await prisma.transaction.create({
            data
        })

        return transaction
    }

    async getTransactions() {
        return await prisma.transaction.findMany()
    }

}