import { prismaClient } from '../../prisma'
import { ICalculateCdbDTO } from './CalculateCdbDTO'

class CalculateCdbUseCase {
  async execute({ investmentDate, cdbRate, currentDate }: ICalculateCdbDTO) {
    let CDITaxaHistory = []
    let accumulated = 1
    let price = 0
    try {
      const trade = await prismaClient.trade.findMany({
        where: {
          dtdate: {
            gte: investmentDate,
            lt: currentDate,
          },
        },
        orderBy: {
          dtdate: 'desc',
        },
      })

      CDITaxaHistory.push(trade)

      const listPriceCDB = trade.map((item, indice) => {
        const tcdi = (
          Math.pow(item.dlasttradeprice / 100 + 1, 1 / 252) - 1
        ).toFixed(8)

        const accumulated =
          Math.pow(1, indice) * (1 + (tcdi * cdbRate) / 100).toFixed(16)

        const priceUnitCDB = (1000 * accumulated).toFixed(2)

        return {
          date: item.dtdate,
          priceUnit: priceUnitCDB,
        }
      })

      return listPriceCDB
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { CalculateCdbUseCase }
