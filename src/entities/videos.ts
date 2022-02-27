import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import {Categorys} from "./categorys";
@Entity("videos")//anotação do typeorm para indicar a tabela
export class Videos{
    @PrimaryColumn() //anotação que indicsa q id é uma chave primária
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Categorys)
    @JoinColumn({name: "category_id"})
    category: Categorys;

    @CreateDateColumn()
    created_at: Date;

    Construuctor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}