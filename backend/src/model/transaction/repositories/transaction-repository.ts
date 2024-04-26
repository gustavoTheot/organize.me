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

    async getTransactionsPerMonth(month: number) {
        const year = new Date().getFullYear()
        const startDate = new Date(year, month - 1, 1)
        const endDate = new Date(year, month, 1)


        return await prisma.transaction.findMany({
            where:{
                date:{
                    gte: startDate,
                    lt: endDate
                }
            }
        })
    }

}