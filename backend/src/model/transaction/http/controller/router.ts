import { FastifyInstance } from "fastify";
import { createTransaction } from "./create";
import { getPerMonth } from "./getPerMonth";

export async function routerTransaction(app: FastifyInstance) {
    app.post('/create/:id', createTransaction)
    app.post('/transactionPerMonth', getPerMonth)

}