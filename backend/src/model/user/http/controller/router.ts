import { FastifyInstance } from "fastify";
import { createUser } from "./create";

export async function routerUser(app: FastifyInstance) {
    app.post('/create', createUser)
}