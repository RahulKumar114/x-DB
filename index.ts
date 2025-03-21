import { Address } from "./src/schema/address.schema";
import { databaseConfig } from "./src/database/database.config";
import { Notification } from "./src/schema/notification.schema";
import { User } from "./src/schema/user.schema";
import { Cart } from "./src/schema/cart.schema";
import { Log } from "./src/schema/logs.schema";
import { Payment } from "./src/schema/payment.schema";
import { Product } from "./src/schema/product.schema";
import { Wallet } from "./src/schema/wallet.schema";

export { User, Notification, databaseConfig };
export const DbEntities = [
  databaseConfig,
  User,
  Notification,
  Address,
  Cart,
  Log,
  Payment,
  Product,
  Wallet,
];
