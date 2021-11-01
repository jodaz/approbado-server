import { Router } from "express"
import { destroy, index, store, update, show } from '../controllers/SubthemeController'
import { createCategorySchema } from '../validations'
import { checkSchema } from 'express-validator';

const subthemesRoutes = Router()

subthemesRoutes.get('/', index)
subthemesRoutes.get('/:id', show)
subthemesRoutes.post('/', store)
subthemesRoutes.put('/:id', update)
subthemesRoutes.delete('/:id', destroy)

export default subthemesRoutes;
