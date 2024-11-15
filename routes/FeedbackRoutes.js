import { createAdmin} from "../controllers/userController.js";
import { createStudent} from "../controllers/userController.js";
import { createAlumni} from "../controllers/userController.js";
import { getAllUsers} from "../controllers/userController.js";
import { createCompany, getCompanies} from "../controllers/companyController.js";
import { createReview } from "../controllers/reviewsController.js";
import { getAllReviews } from "../controllers/reviewsController.js";
import { likeReviews } from "../controllers/likeController.js";
import { isAdmin } from "../middleware/Middleware.js"


import express from "express";
const router=express.Router()

router.get("/users/get",getAllUsers);
router.post("/admin/create",createAdmin);
router.post("/student/create",createStudent);
router.post("/alumni/create",createAlumni);
router.get("/company/get",getCompanies );
router.post("/company/create",isAdmin,createCompany );
router.post("/review/create",createReview );
router.get("/review/get",getAllReviews );
router.post("/likereview/create",likeReviews );
export default router;