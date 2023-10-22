import { Router } from "express";
import viaCepController from "../controller/viacepController.js";

const router = Router();

router.get('/:cep', viaCepController.getcep);

export default router;