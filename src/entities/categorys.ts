import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("categories")//anotação do typeorm para indicar a tabela
export class Categorys{
    @PrimaryColumn() //anotação que indicsa q id é uma chave primária
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    Construuctor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}