import { Transaction, User } from "@prisma/client"
import { ITransaction } from "../repositories/ITransaction"

interface CreateTransactionUseCaseRequest {
    userId: string
    value: string
    date?: Date | string
    local: string
    type: string
    formPayament: string
    parcel: string
}

interface CreateTransactionUseCaseResponse {
    transaction: Transaction
}

export class CreateTransactionUseCase {
    constructor(private transcationRepository: ITransaction) { }


    async execute({ value, date, local, type, formPayament, parcel, userId }: CreateTransactionUseCaseRequest): Promise<CreateTransactionUseCaseResponse> {
        const transaction = await this.transcationRepository.create({
            value,
            date,
            local,
            type,
            formPayament,
            parcel,
            User: {
                connect: { id: userId }
            }
        })

        return { transaction }
    }
}