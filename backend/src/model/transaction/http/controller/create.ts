import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateTransaction } from "../../use-case/factory/make-create-transaction";
import { formatISO, parseISO } from "date-fns";
import { formarDate } from "@/util/formatDate";

export async function createTransaction(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const CreateTransactionBodySchema = z.object({
        value: z.string(),
        date: z.string().date(),
        local: z.string(),
        type: z.enum(['input', 'output']),
        formPayament: z.enum(['credit', 'debit', 'money', 'pix']),
        parcel: z.string(),
    })

    const { value, date, local, type, formPayament, parcel } = CreateTransactionBodySchema.parse(req.body)
    const userId = req.params.id

    try {
        const create = makeCreateTransaction()
        await create.execute({ value, date: formarDate(date), local, type, formPayament, parcel, userId })

        console.log(req.body)
        return reply.status(200).send({ message: 'success' })
    } catch (err) {
        return reply.status(500).send(err.message)

    }
}