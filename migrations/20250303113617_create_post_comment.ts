import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary(); // Otomatik artan ID
    table
      .integer("post_id")
      .unsigned()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE"); // Gönderiye bağlı (silindiğinde yorumlar da silinir)
    table.text("content").notNullable(); // Yorum içeriği
    table.string("commenter_name").notNullable(); // Yorum yapanın adı
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Oluşturulma tarihi
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("comments");
}
