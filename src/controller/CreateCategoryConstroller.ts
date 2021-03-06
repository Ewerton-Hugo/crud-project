import { Request, Response } from "express";
import { CreateCategoryService } from "../services/createCategoryService";

export class CreateCategoryController{
    async hendle( request:Request, response:Response){
        const { name, description } = request.body;

        const service = new CreateCategoryService();

        const result = await service.execute({name,description});

        if(result instanceof Error){
           return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}