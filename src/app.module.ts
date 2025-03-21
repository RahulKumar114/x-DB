import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";  
import { databaseConfig } from "./database/database.config";
import { User } from "./schema/user.schema";
import { Notification } from "./schema/notification.schema";
import { Address } from "./schema/address.schema";
import { Cart } from "./schema/cart.schema";
import { Log } from "./schema/logs.schema";
import { Payment } from "./schema/payment.schema";
import { Product } from "./schema/product.schema";
import { Wallet } from "./schema/wallet.schema";

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    SequelizeModule.forFeature([
      User,
      Notification,
      Address,
      Cart,
      Log,
      Payment,
      Product,
      Wallet,
    ]), // Register models
  ],
})
export class AppModule {}
