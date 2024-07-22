import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateItemTable1721655029928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const itemExists = await queryRunner.hasTable('item');
    if (!itemExists) {
      await queryRunner.createTable(
        new Table({
          name: 'item',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',
              length: '255',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              onUpdate: 'CURRENT_TIMESTAMP',
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const itemExists = await queryRunner.hasTable('item');
    if (itemExists) {
      await queryRunner.dropTable('item');
    }
  }
}
