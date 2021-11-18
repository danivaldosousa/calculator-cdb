import { Request, Response } from 'express'
import { ImportTradeUseCase } from './ImportTradeUseCase'

class ImportTradeController {
  handle(request: Request, response: Response) {
    const { file } = request
    const service = new ImportTradeUseCase()

    const upload = service.execute(file)

    return response.status(201).send()
  }
}

export { ImportTradeController }
