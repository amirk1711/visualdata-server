const Metrics = require("../models/metrics");
const TimeSeries = require("../models/time_series");

module.exports.getMetrics = async function (req, res) {
	try {
		let metrics = await Metrics.find({});
		console.log("metrics: ", metrics);
		return res.status(200).json({
			data: {
				metrics,
			},
			message: "Metrics fetched successfully!",
			success: true,
		});
	} catch (error) {
		console.log("error1", error);
		return res.status(500).json({
			message: "Internal server error1",
			error,
		});
	}
};

module.exports.getTimeSeries = async function (req, res) {
	try {
		// all the metrics which has measeure as req.params.metricId
		let idsWithMeasure = await Metrics.find({ measure: req.params.metricId });

		let timeseries = await TimeSeries.find({ _id: { $in: idsWithMeasure } });
		console.log("timeseries: ", timeseries);
		return res.status(200).json({
			data: {
				timeseries,
			},
			message: "Time-Series data fetched successfully!",
			success: true,
		});
	} catch (error) {
		console.log("error2", error);
		return res.status(500).json({
			message: "Internal server error2",
			error,
		});
	}
};
