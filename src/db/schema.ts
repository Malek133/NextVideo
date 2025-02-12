

import { integer, pgTable,uniqueIndex,
     varchar,text,timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId:text("clerk_id").unique().notNull(),
  name: varchar({ length: 255 }).notNull(),
  imageUrl:text("image_url").unique().notNull(),
  createdAt:timestamp("created_at").defaultNow().notNull(),
  updatedAt:timestamp("updated_at").defaultNow().notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
},(t)=>[uniqueIndex('clerk_id_idx').on(t.clerkId)]);
