import {Request, Response, response} from 'express';
import { CraeteProductUseCase } from './create-product.usecase';

export class CreateProductController {
    constructor(){}
    
    async handle(req: Request, res: Response){
        const useCase = new CraeteProductUseCase();
       
        try{
            const result = await useCase.execute(req.body)
            return res.json(result)
        }catch(err){
            console.log(err)
            return res.status(400).json(err)
        }
    }
}