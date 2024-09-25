import { Router } from "express";
import { createAdmin, deleteAdmin, updateAdmin, readAdmin, authentication } from "../controller/adminController";
import { authValidation, createValidation, updateValidation } from "../middleware/adminValidation";


const router = Router();

// Gunakan router untuk menentukan rute-rute Anda di sini
router.get(`/`, readAdmin);
router.post(`/`, [createValidation], createAdmin);
router.delete(`/:id`, deleteAdmin);
router.put(`/:id`, [updateValidation], updateAdmin);
router.post(`/auth`,[authValidation], authentication)
export default router

