import { Router } from "express"
import { upload } from '../config'
import {
    destroy,
    index,
    show,
    storeGrupal,
    showGrupal,
    indexByPlan,
    finishTrivia,
    store,
    update,
    generateLink
} from '../controllers/TriviaController'
import { createTriviaSchema, createTriviaGrupalSchema, finishTriviaSchema } from '../validations'
import { checkSchema } from 'express-validator';

const triviasRouter = Router()

triviasRouter.get('/', index)
triviasRouter.get('/plans', indexByPlan)
triviasRouter.get('/:id', show)
triviasRouter.get('/grupal/link', generateLink)
triviasRouter.get('/grupal/:token', showGrupal)
triviasRouter.post('/grupal', checkSchema(createTriviaGrupalSchema), storeGrupal )
triviasRouter.post('/finish', checkSchema(finishTriviaSchema), finishTrivia)
triviasRouter.post('/', checkSchema(createTriviaSchema), store)
triviasRouter.put('/:id', upload.single('file'), checkSchema(createTriviaSchema), update)
triviasRouter.delete('/:id', destroy)

export default triviasRouter;
