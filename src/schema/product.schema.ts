import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.schema';
 
@Table({ tableName: 'products', timestamps: true })
export class Product extends Model<Product> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string; // User who added the product

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare price: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  declare quantity: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  declare isAvailable: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  declare imageUrl: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare videoUrl: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  declare description: string;

  @Column({ type: DataType.FLOAT, allowNull: false, defaultValue: 0 })
  declare ratings: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare category: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare subCategory: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare sku: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare brand: string;

  @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
  declare discount: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare isAdultProduct: boolean;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare createdAt: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW, onUpdate: 'SET DEFAULT' })
  declare updatedAt: Date;

  @BelongsTo(() => User)
  user!: User; // Establishes relationship with the User model
}
