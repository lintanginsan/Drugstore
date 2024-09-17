import { Router } from "express";
import { createMedicine, deleteMedicine, readMedicine, updateMedicine } from "../controller/medicineController";
import { createValidation, updateValidation } from "../middleware/medicineValidation";
const router = Router()

/** route for add new medicine  */
router.post(`/`,[createMedicine], createMedicine)

/** route for show all medicine */
router.get(`/`, readMedicine)

/** route for update medicine */
router.put(`/:id`,[updateValidation], updateMedicine)

router.delete(`/:id`,deleteMedicine)

export default router