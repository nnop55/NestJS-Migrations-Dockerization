import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateItems1721648723491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO "item" ("name") VALUES
            ('John Doe'),
            ('Jane Doe');
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "item" WHERE "name" IN ('John Doe', 'Jane Doe');
      `);
  }
}
