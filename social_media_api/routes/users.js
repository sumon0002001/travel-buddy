const router = require("express").Router();

router.get("/",(req, res) => {
  res.send("Hey its from router")
})


module.exports = router