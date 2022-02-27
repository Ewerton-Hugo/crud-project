import { Router } from "express";
import { CreateCategoryController } from "./controller/CreateCategoryConstroller";

const routes = Router();

routes.post("/Categories", new CreateCategoryController().hendle);

export {routes};