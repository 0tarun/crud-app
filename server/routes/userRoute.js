import express from "express";
import { create, findAll_user, findBy_id, findByEmail, Delete, Update } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", findAll_user);
route.get("/getemail/:email", findByEmail);
route.get("/getone/:id", findBy_id);
route.delete("/delete/:id", Delete);
route.put("/update/:id", Update);

export default route;
