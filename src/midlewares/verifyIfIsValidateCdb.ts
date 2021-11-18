import { Response, Request, NextFunction } from 'express'
import moment, { invalid } from 'moment'

function verifyIfIsValidateCdb(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { investmentDate, cdbRate, currentDate } = request.body

  const isTypeDateInvestmentDate = moment(investmentDate, 'YYYY-MM-DD', true)
  const isTypeDateCurrentDate = moment(currentDate, 'YYYY-MM-DD', true)

  if (!isTypeDateInvestmentDate.isValid()) {
    return response
      .status(400)
      .json({ error: 'Argument investment date invalid' })
  }

  if (!isTypeDateCurrentDate.isValid()) {
    return response.status(400).json({ error: 'Argument current date invalid' })
  }

  if (typeof cdbRate !== 'number') {
    return response.status(400).json({ error: 'Argument cdbRate invalid' })
  }

  if (+new Date(currentDate) < +new Date(investmentDate)) {
    return response.status(400).json({
      error:
        'invalid date error currentDate must be greater than invesmentDate',
    })
  }

  return next()
}

export { verifyIfIsValidateCdb }
