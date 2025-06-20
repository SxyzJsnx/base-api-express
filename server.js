import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import userRoute from "./routes/user.js";

const PORT = 9999

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
app.use(cors());

const swaggerOptions = {
   definition: {
      openapi: "3.0.0",
      info: {
         title: "SxyzJsnx - API",
         version: "1.0.0",
         description: "Restful API Use express dan swagger",
      },
      tags: [
        {
           name: "Tools",
           description: "Daftar endpoint tools"
        }
        //...
      ],
      servers: [{
        url: "http://localhost:"+PORT
      }]
   },
   apis: ["./routes/*.js"]
}

const spec = swaggerJsdoc(swaggerOptions)

const rateLimiter = rateLimit({
   windowMs: 5 * 60 * 1000, // 5 minute
   max: 30, // 30 request for 5 minute
   standardHeaders: "draft-8",
})

app.use(rateLimiter)
/* buat endpoint seperti ini */
app.use(userRoute);

app.get("/", async (req, res) => {
   res.sendFile(path.join(__dirname, "html", "home.html"))
})

app.get("/creator", async (req, res) => {
   res.sendFile(path.join(__dirname, "html", "creator.html"))
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec))

app.listen(PORT, () => {
  console.log(`Port run in ${PORT}`)
})