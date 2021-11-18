import { Request, Response } from 'express'
import { CreateTradeUsecase } from './CreateTradeUsecase'

class CreateTradeController {
  async handle(request: Request, response: Response) {
    const { ssecurityname, dtdate, dlasttradeprice } = request.body

    const service = new CreateTradeUsecase()
    const trade = await service.execute({
      ssecurityname,
      dtdate,
      dlasttradeprice,
    })
    return response.status(201).json('Created')
  }
}

export { CreateTradeController }
