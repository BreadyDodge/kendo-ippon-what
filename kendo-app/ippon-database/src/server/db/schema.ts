// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { boolean } from "drizzle-orm/mysql-core";
import { int, sqliteTableCreator, text, check } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
  (name) => `ippon-database_${name}`,
);

export const tournamentTable = createTable("tournaments", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  year: int("year").notNull(),
  rounds: int("rounds").notNull(),
});

export const matchesTable = createTable("matches", {
  id: text("id").primaryKey(),
  tournament: text("tournament").notNull(),
  year: int("year").notNull(),
  round: int("round").notNull(),
  redTeam: text("red_team"),
  redPlayer: text("red_player").notNull(),
  whiteTeam: text("white_team"),
  whitePlayer: text("white_player").notNull(),
  pointAwardedTo: text("point_awarded_to").notNull(),
  order: int("order").notNull(),
  target: text("target").notNull(),
  waza: text("waza"),
  encho: text("encho").default("N"),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});
