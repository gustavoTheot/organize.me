import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateUser } from "../../use-case/factory/make-create-user";
import { z } from "zod";

export async function createUser(req: FastifyRequest, reply: FastifyReply) {
    const CreateUserBodySchema = z.object({
        name: z.string()
    })

    const { name } = CreateUserBodySchema.parse(req.body)

    try {
        const create = makeCreateUser()
        await create.execute({ name })

        return reply.status(200).send({ message: 'success' })
    } catch (err) {
        return reply.status(500).send(err.message)
    }
}