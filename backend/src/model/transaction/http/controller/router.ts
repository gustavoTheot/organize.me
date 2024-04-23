import { FastifyInstance } from "fastify";
import { createTransaction } from "./create";

export async function routerTransaction(app: FastifyInstance) {
    app.post('/create/:id', createTransaction)
}