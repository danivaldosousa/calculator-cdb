/*
  Warnings:

  - You are about to alter the column `dlasttradeprice` on the `trades` table. The data in that column could be lost. The data in that column will be cast from `String` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_trades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ssecurityname" TEXT NOT NULL,
    "dtdate" TEXT NOT NULL,
    "dlasttradeprice" DECIMAL NOT NULL
);
INSERT INTO "new_trades" ("dlasttradeprice", "dtdate", "id", "ssecurityname") SELECT "dlasttradeprice", "dtdate", "id", "ssecurityname" FROM "trades";
DROP TABLE "trades";
ALTER TABLE "new_trades" RENAME TO "trades";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
