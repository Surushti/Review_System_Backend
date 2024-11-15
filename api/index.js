import express from "express";

import dotenv from "dotenv";
import dbConnect from "../config/database.js";
// import User from "./models/user.js";
// import { createAdmin } from "./controllers/usercontroller.js";
// import{ createAlumni} from "./controllers/usercontroller.js"
// import { createStudent,getAllUsers } from "./controllers/usercontroller.js";
// import { createCompany, getCompanies } from "./controllers/companyController.js";
// import { createReview, getAllReviews } from "./controllers/reviewsController.js";
// import { likeReviews } from "./controllers/likeController.js";
import router from "../routes/FeedbackRoutes.js";

const app = express();

const PORT = 3000;

app.use(express.json());
//mounting
app.use("/api/v1",router);
dotenv.config();

dbConnect();



app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});