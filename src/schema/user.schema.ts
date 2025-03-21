import { Table, Column, Model, DataType, HasMany, HasOne } from 'sequelize-typescript';
import { Address } from './address.schema';
import { Wallet } from './wallet.schema';
import { Payment } from './payment.schema';
import { Log } from './logs.schema';
import { Product } from './product.schema';
import { Notification } from './notification.schema';


@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare lastName: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare userName: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare phoneNumber: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare profilePicture: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'user' })
  declare role: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare age: number;

  @Column({
    type: DataType.ENUM('pending', 'verified', 'rejected'),
    defaultValue: 'pending',
    allowNull: false,
  })
  declare kycStatus: 'pending' | 'verified' | 'rejected';

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare isAdult: boolean;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare createdAt: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW, onUpdate: 'SET DEFAULT' })
  declare updatedAt: Date;

  @HasMany(() => Address)
  addresses!: Address[];

  @HasOne(() => Wallet)
  wallet!: Wallet;

  @HasMany(() => Payment)
  payments!: Payment[];


  @HasMany(() => Log)
  logs!: Log[];


  @HasMany(() => Product)
  products!: Product[]; // One user can add multiple products

  @HasMany(() => Notification)
  notifications!: Notification[]; // One user can have multiple notifications
}
