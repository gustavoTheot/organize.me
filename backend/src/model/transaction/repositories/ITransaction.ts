import { Prisma, Transaction } from "@prisma/client";

export interface ITransaction {
    create(data: Prisma.TransactionCreateInput): Promise<Transaction>
    getTransactionsPerMonth(month: number): Promise<Transaction[] | []>
}