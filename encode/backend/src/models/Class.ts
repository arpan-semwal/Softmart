import { resolve } from "path";
import { Entity  , PrimaryGeneratedColumn , Column} from "typeorm";
import { entityManager } from "../config/db.config";

@Entity()
export class Class {
	@PrimaryGeneratedColumn()
	id:number
	
	@Column()
	class:number
}

export default Class;


export const getClassList = async (): Promise<Class[]> => {
    try {
        const classes = await entityManager.find(Class, {
            order: { class: "ASC" }, // Order classes from 1 to 12
        });
        return classes;
    } catch (error) {
        throw new Error("Error fetching class data: ");
    }
};
