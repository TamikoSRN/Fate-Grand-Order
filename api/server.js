const express = require("express");
const cors = require("cors")
const { getServantsInfo } = require("./controllers/servants");
const router = express();
const port = 3000;

router.use(cors())

router.get("/servants", async (req, res) => {
  let totalServants = await getServantsInfo();

  const { name } = req.query;
  if (name) {
    let servantName = await totalServants.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    servantName.length
      ? res.status(200).send(servantName)
      : res.status(404).send("Senpai! 404 Servant Not Found!");
  } else {
    res.status(200).send(totalServants);
  }
});

router.get("/servants/:id", async (req, res) => {
  const totalServants = await getServantsInfo()

  const { id } = req.params
  if (id) {
    let servantId = await totalServants.filter((el) => el.id == id)
    servantId.length
    ? res.status(200).send(servantId)
    : res.status(404).send("Senpai! Your servant wasn't summoned yet!")
  }
})

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = router