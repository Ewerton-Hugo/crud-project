import { getRepository } from "typeorm";
import { Categorys } from "../entities/categorys";

type categoryRequest = {
    name: string;
    description:string;

}

export class CreateCategoryService {
//CRIA U MMÉTODO ASSINCROMNO PARA ADICIONAR INFORMAÇÕES AS COLUNAS 
    async execute({
        name,
         description
        }: categoryRequest): Promise<Categorys | Error>{
        const repo  = getRepository(Categorys);

        //SELECT * FROM CATEGORYS WHERE  NAME = "NAME" LIMIT 1
        //checa se os parametros hjá estão cadastrados
        if(await repo.findOne({name})){
            return new Error("Category already exist")
        }

        const category = repo.create({
            name,
            description,
        })
        await repo.save(category);

        return category;
    }
}