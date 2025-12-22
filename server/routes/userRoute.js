import express from "express";
import { create, findAll_user, findBy_id, findByEmail, Delete, Update } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/findAll_user",findAll_user);
route.get("/findBy_email/:email",findByEmail);
route.get("/findBy_id/:id", findBy_id);
route.delete("/Delete/:id",Delete);
route.put("/Update/:id", Update);

export default route;
