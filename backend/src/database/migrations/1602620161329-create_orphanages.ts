import {MigrationInterface, QueryRunner, Table} from "typeorm";

// não alterar o nome da classe gerado automaticamente
export class createOrphanages1602620161329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza as alterações na database
        await queryRunner.createTable(new Table({
          name: 'orphanages',
          columns: [
            {
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment'
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'latitude',
              type: 'decimal',
              scale: 10,
              precision: 2
            },
            {
              name: 'longitude',
              type: 'decimal',
              scale: 10,
              precision: 2
            },
            {
              name: 'about',
              type: 'text',
            },
            {
              name: 'instructions',
              type: 'text',
            },
            {
              name: 'open_on_weekends',
              type: 'boolean',
              default: false
            }
          ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverter o que foi feito no método up (o oposto)
        await queryRunner.dropTable('orphanages')
    }

}
