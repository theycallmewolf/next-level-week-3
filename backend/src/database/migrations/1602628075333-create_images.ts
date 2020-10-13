import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602628075333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'images',
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
            name: 'path',
            type: 'varchar'
          },
          {
            name: 'orphanage_id',
            type: 'integer'
          }
        ],
        foreignKeys: [
          {
            name : 'ImageOrphanage',
            columnNames : ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE', //if an orphanage id is changed the related images are updated on orphanage_id columns
            onDelete: 'CASCADE', //if an orphanage is deleted all the images related are also deleted
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
