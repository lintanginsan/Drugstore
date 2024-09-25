import Express  from "express";
import MedicineRoute from "./router/medicineRouter"
import { hasOnlyExpressionInitializer } from "typescript";
import adminRouter from "./router/adminRouter"

const app = Express()
/** allow to read a body request with JSON Format  */
app.use(Express.json())

/** prefix for medicine route  */
app.use(`/medicine`, MedicineRoute)
/** prefix for admin route  */
app.use(`/admin`,adminRouter)

const PORT = 1992
app.listen(PORT, () => { 
    console.log(`Server Drugstore run on port ${PORT}`)
})