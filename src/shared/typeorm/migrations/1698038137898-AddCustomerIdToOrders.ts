import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCustomerIdToOrders1698038137898 implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.addColumn("orders", new TableColumn(
    {
      name: "customer_id",
      type: "uuid",
      isNullable: true,
    }));

    await queryRunner.createForeignKey("orders", new TableForeignKey(
    {
      name: "OrderCostumer",
      columnNames: ["customer_id"],
      referencedTableName: "customers",
      referencedColumnNames: ["id"],
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.dropForeignKey("orders", "OrderCostumer");
    await queryRunner.dropColumn("orders", "customer_id");
  }
}
