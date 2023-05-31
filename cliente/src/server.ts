import express  from "express";
import { router } from "./infra/routes";

const app = express();
const PORT = process.env.PORT ?? 3001;
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log(`Server client is listening on ${PORT}`));