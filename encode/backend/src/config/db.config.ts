 
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Noodle@123",
    database: "encode",
    synchronize: false,
    logging: true,
    entities: ["./src/models/*.ts"],
    subscribers: [],
    migrations: [],
})


export const entityManager = AppDataSource.manager;


const Connections = () => {
	AppDataSource.initialize().then(() => {
		console.log("DB connnected")
	}).catch((e:any) => {
		console.log("Error"+e)
		
		
	})
}


export default Connections;