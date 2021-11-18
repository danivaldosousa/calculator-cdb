import { prismaClient } from "../../prisma";
import { ICreateTradeTDO } from "./CreateTradeTDO";

class CreateTradeUsecase{
    async execute({ ssecurityname, dtdate, dlasttradeprice }: ICreateTradeTDO){
        try {
            const trade = await prismaClient.trade.create({
                data: {
                    ssecurityname,
                    dtdate,
                    dlasttradeprice,
                }
            });
            return trade;
        } catch (e) {
            throw new Error(e);    
        }   
    }
}
export { CreateTradeUsecase };