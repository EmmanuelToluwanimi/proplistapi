import { Router } from "express";
import {
  GetPropertyListingById,
  GetPropertyListings,
  HomeFn,
} from "../controller";
const router = Router();

router.get("/", HomeFn);
router.get("/api/properties", GetPropertyListings);
router.get("/api/properties/:id", GetPropertyListingById);

export default router;