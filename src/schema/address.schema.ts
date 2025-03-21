import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.schema';
 
@Table({ tableName: 'addresses', timestamps: true })
export class Address extends Model<Address> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare street: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare state: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare country: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare postalCode: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare isActive: boolean; // Only one address should be active

  @BelongsTo(() => User)
  user!: User;
}
