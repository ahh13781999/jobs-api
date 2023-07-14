const { Router } = require("express");
const {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} = require("../controllers/jobs");
const router = Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").delete(deleteJob).get(getJob).patch(updateJob);


module.exports = router;
