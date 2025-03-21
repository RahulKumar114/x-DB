import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.schema';
 
@Table({ tableName: 'wallets', timestamps: true })
export class Wallet extends Model<Wallet> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false, unique: true })
  declare userId: string;

  @Column({ type: DataType.FLOAT, defaultValue: 0, allowNull: false })
  declare totalCoins: number; // Total coins the user has

  @Column({ type: DataType.INTEGER, defaultValue: 0, allowNull: false })
  declare totalNFTs: number; // Total NFTs owned by the user

  @Column({ type: DataType.FLOAT, defaultValue: 0, allowNull: false })
  declare tokens: number; // Total tokens available

  @Column({ type: DataType.FLOAT, defaultValue: 0, allowNull: false })
  declare totalRewards: number; // Total rewards earned by the user

  @BelongsTo(() => User)
  user!: User;
}
