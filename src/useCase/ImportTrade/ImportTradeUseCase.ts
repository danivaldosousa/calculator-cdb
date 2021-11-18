import csvParse from 'csv-parse'
import fs from 'fs'
import { prismaClient } from '../../prisma'
import moment, { invalid } from 'moment'
import { CreateTradeUsecase } from '../CreateTrade/CreateTradeUsecase'
import { IImportTradeDTO } from './ImportTradeDTO'

class ImportTradeUseCase {
  loadImportTrade(file: Express.Multer.File): Promise<IImportTradeDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const listHystoryCDI: IImportTradeDTO[] = []

      const parseFile = csvParse()

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [ssecurityname, dtdate, dlasttradeprice] = line
          const dtDate = dtdate.split('/')

          const isTypeDate = moment(dtdate, 'YYYY-MM-DD', true)
          const tradePrice = parseFloat(dlasttradeprice)
          if (dtDate != 'dtDate') {
            const dtDateFormated = dtDate[2] + '-' + dtDate[1] + '-' + dtDate[0]
            listHystoryCDI.push({
              ssecurityname,
              dtdate: dtDateFormated,
              dlasttradeprice: tradePrice,
            })
          }
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(listHystoryCDI)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const listHystoryCDI = await this.loadImportTrade(file)
    listHystoryCDI.map(async (cdi) => {
      const { ssecurityname, dtdate, dlasttradeprice } = cdi

      const dateAlreadyExist = await prismaClient.trade.findFirst({
        where: {
          dtdate: dtdate,
        },
      })
      if (!dateAlreadyExist) {
        const service = new CreateTradeUsecase()
        await service.execute({ ssecurityname, dtdate, dlasttradeprice })
      }
    })
  }
}

export { ImportTradeUseCase }
