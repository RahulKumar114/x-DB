import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './user.schema';
 
@Table({ tableName: 'carts', timestamps: true })
export class Cart extends Model<Cart> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string; // Reference to the user who owns the cart

  @Column({
    type: DataType.JSONB,
    allowNull: false,
    defaultValue: [],
  })
  declare products: {
    productId: string;
    quantity: number;
    price: number;
  }[]; // Array of products with quantity and price

  @Column({ type: DataType.FLOAT, allowNull: false, defaultValue: 0 })
  declare totalPrice: number; // Total cost of the cart items

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  declare totalItems: number; // Total number of unique products in the cart

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare isCheckedOut: boolean; // Status to check if the cart is checked out

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare createdAt: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW, onUpdate: 'SET DEFAULT' })
  declare updatedAt: Date;
}
