var express = require("express");
const router = express.Router();
const Student = require("../models/Students");

router.get("/login", (req, res) => {
  res.render("student/login");
});
router.post("/login", async (req, res) => {

    const Stuname = req.body.roll;
    const individualStudent = await Student.findOne({roll : Stuname});
    if(!individualStudent){
      res.render("student/login", {
        error : "Login with correct user name"
      })
    }
    res.render("student/view", { one : individualStudent})
});

module.exports = router;
