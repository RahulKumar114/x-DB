import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.schema';
 
@Table({ tableName: 'logs', timestamps: true })
export class Log extends Model<Log> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string;

  @Column({
    type: DataType.ENUM(
      'add_product',
      'buy_product',
      'edit_product',
      'add_to_cart',
      'remove_from_cart',
      'buy_from_cart',
      'game_played',
      'earn_reward',
      'login',
      'logout',
      'change_password',
      'update_password'
    ),
    allowNull: false,
  })
  declare action:
    | 'add_product'
    | 'buy_product'
    | 'edit_product'
    | 'add_to_cart'
    | 'remove_from_cart'
    | 'buy_from_cart'
    | 'game_played'
    | 'earn_reward'
    | 'login'
    | 'logout'
    | 'change_password'
    | 'update_password';

  @Column({ type: DataType.STRING, allowNull: true })
  declare details: string; // Additional details like product ID, game name, etc.

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare createdAt: Date;

  @BelongsTo(() => User)
  user!: User;
}
