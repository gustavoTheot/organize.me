import { TransactionRepository } from "../../repositories/transaction-repository";
import { CreateTransactionUseCase } from "../create-tranction-use-case";

export function makeCreateTransaction() {
    const transactionRepository = new TransactionRepository()
    const createTransactionRepository = new CreateTransactionUseCase(transactionRepository)

    return createTransactionRepository
}