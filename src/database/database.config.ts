import { SequelizeModuleOptions } from "@nestjs/sequelize";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
  NODE_ENV,
} from "../config/enivronment/index";
import { Notification } from "../schema/notification.schema";
import { User } from "../schema/user.schema";
import { Address } from "../schema/address.schema";
import { Cart } from "../schema/cart.schema";
import { Log } from "../schema/logs.schema";
import { Payment } from "../schema/payment.schema";
import { Product } from "../schema/product.schema";
import { Wallet } from "../schema/wallet.schema";

export const databaseConfig: SequelizeModuleOptions = {
  dialect: "postgres",
  host: DATABASE_HOST,
  port: DATABASE_PORT ? Number(DATABASE_PORT) : 5432,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  models: [User, Notification, Address, Cart, Log, Payment, Product, Wallet], // Ensure models are included
  autoLoadModels: true, // Automatically load models
  synchronize: true, // Disable in production
  logging: false, // Enable logging only in development
};
