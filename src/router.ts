import { Router } from "express";
import {body, oneOf, validationResult} from "express-validator";
import {handleInputError} from "./handlers/middleware";

const router = Router();
/**
 * Product
 */
router.post("/product", body("name").isString(), handleInputError, (req, res) => {});

router.get("/product/:id", (req, res) => {});

router.post("/product", (req, res) => {});

router.put("/product/:id", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update",
    body("title").exists().isString(),
    body("body").exists().isString(),
    (req, res) => {});

router.put("/update/:id",
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),(req, res) => {});

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;