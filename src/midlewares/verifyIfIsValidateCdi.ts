import { Response, Request, NextFunction } from 'express'
import moment, { invalid } from 'moment'

function verifyIfIsValidateCdi(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { ssecurityname, dtdate, dlasttradeprice } = request.body

  const isTypeDate = moment(dtdate, 'YYYY-MM-DD', true)

  if (!isTypeDate.isValid()) {
    return response.status(400).json({ error: 'Argument date invalid' })
  }

  if (typeof dlasttradeprice !== 'number') {
    return response
      .status(400)
      .json({ error: 'Argument dlasttradeprice invalid' })
  }

  if (ssecurityname == '') {
    return response
      .status(400)
      .json({ error: 'Argument invalid ssecurityname is empty' })
  }

  return next()
}

export { verifyIfIsValidateCdi }
