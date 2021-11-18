import { Request, Response } from 'express'
import { CalculateCdbUseCase } from './CalculateCdbUseCase'
class CalculateCdbController {
  async handle(request: Request, response: Response) {
    const { investmentDate, cdbRate, currentDate } = request.body

    const service = new CalculateCdbUseCase()

    const trade = await service.execute({
      investmentDate,
      cdbRate,
      currentDate,
    })

    return response.json(trade)
  }
}

export { CalculateCdbController }
