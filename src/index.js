import express from "express";
import "dotenv/config";
import categoriesRouter from "./routes/categories.route.js";
import productsRouter from "./routes/products.route.js";
import userRouter from "./routes/user.route.js";
const app = express();

app.use(express.json());
app.use(categoriesRouter);
app.use(productsRouter);
app.use(userRouter);

const main = () => {
  app.listen(process.env.PORTPC, () => {
    console.log(`Escuchando en el puerto ${process.env.PORTPC}`);
  });
};

main();
