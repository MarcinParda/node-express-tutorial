const express = require("express");
const router = express.Router();

const {
  getPeople,
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);
router.route("/postman").post(createPersonPostman);

module.exports = router;
