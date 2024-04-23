import { User } from "@prisma/client"
import { IUser } from "../repositories/IUser"

interface CreateUserUseCaseRequest {
    name: string
}

interface CreateUserUseCaseResponse {
    user: User
}

export class CreateUserUseCase {
    constructor(private userRepository: IUser) { }


    async execute({ name }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        const user = await this.userRepository.create({
            name
        })

        return { user }
    }
}