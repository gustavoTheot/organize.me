import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetTransactionPerMonth } from "../../use-case/factory/make-get-transcation-per-month";
import { z } from "zod";

export async function getPerMonth(req: FastifyRequest, reply: FastifyReply) {    
    const getTransactionSchema = z.object({
        month: z.number()
    })

    try{
        const {month} = getTransactionSchema.parse(req.body)

        const getTransaction = makeGetTransactionPerMonth();
        const transactions = await getTransaction.execute({month})

        return reply.status(201).send(transactions)
    }catch(err){
        if(err instanceof Error) {
            return reply.status(500).send({ message: err.message });
        }
    }
}