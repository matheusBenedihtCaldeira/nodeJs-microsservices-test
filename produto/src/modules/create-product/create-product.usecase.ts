import { prismaClient } from "../../infra/database/prismaClient"

type CraeteProductRequest = {

    name: string
    code: string
    quantity: number
    price: number
}

export class CraeteProductUseCase {
    constructor(){}
   
    async execute(data: CraeteProductRequest){
        const product = await prismaClient.product.findFirst({
            where:{
                code: data.code
            }
        })
        if(product) throw new Error("Product already exists!")
        const productCreated = await prismaClient.product.create({
            data: {
                ...data
            }
        })
        return productCreated
    }
}
