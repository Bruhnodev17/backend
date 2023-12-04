import { Interface } from "readline"
import prismaClient from "../prisma"

interface createdCustomerProps {
    name: string,
    email: string,
}

class CreateCustomerService {

    async execute({ name, email, }: createdCustomerProps) {
        if (!name || !email) {
            throw new Error("Preencha todos os campos!")
        }
        const customer = await prismaClient.customer.create({
            data: {

                name,
                email,
                status: true

            }
        })

        return customer
    }
}

export { CreateCustomerService }