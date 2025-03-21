import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.schema';

@Table({ tableName: 'payments', timestamps: true })
export class Payment extends Model<Payment> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string;

  @Column({
    type: DataType.ENUM('stripe', 'nft', 'crypto', 'app_token'),
    allowNull: false,
  })
  declare paymentMethod: 'stripe' | 'nft' | 'crypto' | 'app_token'; // Added "app_token" as a payment method

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare amount: number; // Payment amount

  @Column({ type: DataType.STRING, allowNull: true })
  declare transactionId: string; // Unique transaction ID

  @Column({ type: DataType.STRING, allowNull: true })
  declare nftId: string; // NFT ID (if applicable)

  @Column({ type: DataType.STRING, allowNull: true })
  declare cryptoWalletAddress: string; // Crypto wallet address (if applicable)

  @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
  declare appTokensUsed: number; // Number of app tokens used for purchase

  @Column({
    type: DataType.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending',
    allowNull: false,
  })
  declare status: 'pending' | 'completed' | 'failed'; // Payment status

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare createdAt: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW, onUpdate: 'SET DEFAULT' })
  declare updatedAt: Date;

  @BelongsTo(() => User)
  user!: User;
}
