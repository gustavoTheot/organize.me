import { TransactionRepository } from "../../repositories/transaction-repository";
import { GetTransactionPerMonth } from "../get-transaction-per-month";

export function makeGetTransactionPerMonth() {
    const transactionRepository = new TransactionRepository()
    const getTransactionPerMonthRepository = new GetTransactionPerMonth(transactionRepository)

    return getTransactionPerMonthRepository
}