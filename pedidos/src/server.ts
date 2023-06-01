import express  from "express";
import './infra/providers/kafka/consumers'
const app = express();
const PORT = process.env.PORT ?? 3003;
app.use(express.json());

app.listen(PORT, () => console.log(`Server pedidos is listening on ${PORT}`));