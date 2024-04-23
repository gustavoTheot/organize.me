import { UserRepository } from "../../repositories/user-repository";
import { CreateUserUseCase } from "../create-user-use-case";

export function makeCreateUser() {
    const userRepository = new UserRepository()
    const createUserRepository = new CreateUserUseCase(userRepository)

    return createUserRepository
}