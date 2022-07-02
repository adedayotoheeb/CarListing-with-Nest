import {AfterInsert,AfterRemove, Entity, Column, PrimaryGeneratedColumn, AfterUpdate } from 'typeorm'; 

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string;

    @Column()
    password:string;

    @AfterUpdate()
    logUpdate(){
        console.log(this.email), this.id;
    }

}