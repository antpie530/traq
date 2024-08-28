import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod"
import { z } from "zod";

export const exercise = sqliteTable("exercise", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    schema: text("schema", { enum: ["Weight Reps", "Reps Only", "Weight Throws", "Time Only"]}).notNull(),
    description: text("description"),
    hidden: integer("hidden", { mode: "boolean"}).default(false)
});

export const exerciseSelectSchema = createSelectSchema(exercise);
export type Exercise = z.infer<typeof exerciseSelectSchema>;