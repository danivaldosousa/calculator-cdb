import { Router } from 'express'
import multer from 'multer'
import { ImportTradeController } from './useCase/ImportTrade/ImportTradeController'
import { CalculateCdbController } from './useCase/CalculateCDB/CalculateCdbController'
import { verifyIfIsValidateCdb } from './midlewares/verifyIfIsValidateCdb'
import { CreateTradeController } from './useCase/CreateTrade/CreateTradeController'
import { verifyIfIsValidateCdi } from './midlewares/verifyIfIsValidateCdi'

const router = Router()
const upload = multer({
  dest: './tmp',
})

router.post(
  '/import',
  upload.single('file'),
  new ImportTradeController().handle,
)
router.post('/cdi', verifyIfIsValidateCdi, new CreateTradeController().handle)

router.get(
  '/calculator',
  verifyIfIsValidateCdb,
  new CalculateCdbController().handle,
)

export { router }
