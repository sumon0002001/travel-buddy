const router = require("express").Router();

router.get("/",(req, res) => {
  res.send("Hey its from auth router")
})


module.exports = router