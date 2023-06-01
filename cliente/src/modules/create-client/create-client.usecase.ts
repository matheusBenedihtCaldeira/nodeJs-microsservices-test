import { prismaClient } from "../../infra/database/prismaClient"
import { kafka } from "../../infra/provider/kafka"
import { KafkaSendMessage } from "../../infra/provider/kafka/producer"

type CreateClientRequest = {
    name: string,
    password: string,
    email: string,
    phone: string,
}

export class CreateClientUseCase {
    constructor(){}
    async execute(data: CreateClientRequest){

        const customer = await prismaClient.cliente.findFirst({
            where: {
                email: data.email
            }
        })

        if(customer) throw new Error('Customer already exists!')

        const customerCreated = await prismaClient.cliente.create({
            data: {
                ...data
            },
        })

        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute("CUSTOMER_CREATED", customerCreated)

        return customerCreated
    }
}