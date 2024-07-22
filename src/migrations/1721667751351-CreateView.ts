import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateView1721667647227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE VIEW "item_view" AS
            SELECT "id", "name"
            FROM "item";
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP VIEW "item_view";
        `);
  }
}
