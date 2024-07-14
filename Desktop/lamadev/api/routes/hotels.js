import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  countByCity,
} from "../controllers/hotel.js";
// import Hotel from "../models/Hotel.js";
import { createError } from "./utils/error.js";
const router = express.Router();

//CREATE

router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);
//Delete

router.delete("/:id", deleteHotel);

//Get

router.get("/find/:id", getHotel);

//GetALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
// router.get("/countByType", getHotels);
export default router;
