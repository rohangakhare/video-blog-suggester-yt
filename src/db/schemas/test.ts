import { integer, snakeCase, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = snakeCase.table("tests", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull()
});
