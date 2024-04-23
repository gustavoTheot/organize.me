import { Prisma, Transaction } from "@prisma/client";

export interface ITransaction {
    create(data: Prisma.TransactionCreateInput): Promise<Transaction>
    getTransactions(): Promise<Transaction[] | []>
}