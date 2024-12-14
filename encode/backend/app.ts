import express from "express";
import { router } from "./src/routes";
import DB from "./src/config/db.config"; 
import bodyParser from "body-parser";
const app = express();
const PORT = 5000;



DB();

app.use('/' , router);
app.get("/test" , (req , res) => {
	res.json({
		data:"test done"
	})
})
app.use(bodyParser.json());

app.listen(PORT , () => {
	console.log("Server is running on " + PORT)
})