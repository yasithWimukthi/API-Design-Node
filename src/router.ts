import { Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();
/**
 * Product
 */
router.post("/product", body("name").isString(), (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
});

router.get("/product/:id", (req, res) => {});

router.post("/product", (req, res) => {});

router.put("/product/:id", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update", (req, res) => {});

router.put("/update/:id", (req, res) => {});

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