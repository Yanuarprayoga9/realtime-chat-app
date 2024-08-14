import express from "express";
const router = express.Router();

router.post("/signup", (req,res)=>{
    res.json("signup routes")
});

router.post("/login", (req,res)=>{
    res.json("signup login")

})
router.post("/logout", (req,res)=>{
    res.json("signup logout")

})

export default router;