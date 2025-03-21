import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.schema';
 
@Table({ tableName: 'notifications', timestamps: true })
export class Notification extends Model<Notification> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string; // User who received the notification

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare message: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare isRead: boolean;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare createdAt: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW, onUpdate: 'SET DEFAULT' })
  declare updatedAt: Date;

  @BelongsTo(() => User)
  user!: User; // Establishes relationship with the User model
}
