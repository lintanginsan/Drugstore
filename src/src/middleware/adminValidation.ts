import { NextFunction, Request, Response } from "express";
import Joi from "joi"

const createAdminSchema = Joi.object({
    nama_admin: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
})

const createValidation = (req: Request, res: Response, next: NextFunction) => {
    const validation = createAdminSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()

}
const updateSchema = Joi.object({
    nama_admin: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(10).optional()
})

const updateValidation = (req: Request, res: Response, next: NextFunction) => {
    const validation = updateSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()
}

const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const authValidation = (req: Request, res: Response, next: NextFunction) => {
    const validation = authSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()
}

export { createValidation, updateValidation, authValidation }