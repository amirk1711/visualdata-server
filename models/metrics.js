const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
		},
		measure: {
			type: String,
			required: true,
			unique: true,
		},
		dimensions: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Metrics = mongoose.model("Metrics", metricsSchema);
module.exports = Metrics;
