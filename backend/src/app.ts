import fastify from "fastify";
import cors from '@fastify/cors'
import { routerUser } from "./model/user/http/controller/router";
import { routerTransaction } from "./model/transaction/http/controller/router";
import { env } from "process";
import { ZodError } from "zod";

export const app = fastify()

app.register(routerUser, { prefix: '/user' })
app.register(routerTransaction, { prefix: '/transaction' })

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Validation error.', issues: error.format() })
    }

    if (env.NODE_ENV !== 'production') {
        console.error(error)
    }

    return reply.status(500).send({ message: 'Internal server error.' })
})

app.register(cors)

