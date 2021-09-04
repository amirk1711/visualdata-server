const express = require("express");
const router = express.Router();

const metricsApi = require("../controllers/metrics_api");

router.get("/api/metrics", metricsApi.getMetrics);
router.get("/api/metrics/:metricId", metricsApi.getTimeSeries);

module.exports = router;
