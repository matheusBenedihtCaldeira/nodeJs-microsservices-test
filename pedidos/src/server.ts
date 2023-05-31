import express  from "express";

const app = express();
const PORT = process.env.PORT ?? 3003;
app.use(express.json());

app.listen(PORT, () => console.log(`Server pedidos is listening on ${PORT}`));