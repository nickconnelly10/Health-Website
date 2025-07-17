/*
  Warnings:

  - You are about to drop the column `message` on the `UserChat` table. All the data in the column will be lost.
  - Added the required column `answer` to the `UserChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `UserChat` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserChat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "summary" TEXT,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserChat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserChat" ("id", "time", "userId") SELECT "id", "time", "userId" FROM "UserChat";
DROP TABLE "UserChat";
ALTER TABLE "new_UserChat" RENAME TO "UserChat";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
