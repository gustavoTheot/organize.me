import { Transaction } from "@prisma/client";
import { ITransaction } from "../repositories/ITransaction";

interface GetTransactionPerMonthRequest{
    month: number
}

interface GetTransactionPerMonthResponse{
    transactions: Transaction[]
}

export class GetTransactionPerMonth{
    constructor(private transactionRepository: ITransaction){}

    async execute({month}: GetTransactionPerMonthRequest): Promise<GetTransactionPerMonthResponse>{
        const transactions = await this.transactionRepository.getTransactionsPerMonth(month)
    
        return {transactions}
    }
}