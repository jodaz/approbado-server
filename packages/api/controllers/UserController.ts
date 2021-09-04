import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { ReqListQuery } from '../types'
import { validateRequest, getRandomPass } from '../utils'

export const index = async (req: Request<any, any, ReqListQuery, any>, res: Response) => {
    const { page, perPage } = req.query

    const users = await User.query()
        .page(page, perPage)

    const { results: data, total } = users;
    
    return res.json({
        data,
        total
    })
}

export const store = async (req: Request, res: Response) => {
    const reqErrors = await validateRequest(req, res);
    
    if (!reqErrors) {
        const { email, random_pass, password, name, access } = req.body;
    
        let realPassword = random_pass ? getRandomPass() : password;
        const encryptedPassword = await bcrypt.hash(realPassword, 10)
    
        const model = await User.query().insert({
            names: name,
            email: email,
            password: encryptedPassword,
            rol: access
        })
    
        return res.status(201).json(model)
    }
}

export const destroy = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id)
    const user = await User.query().findById(id).delete();
    
    return res.json(user);
}
