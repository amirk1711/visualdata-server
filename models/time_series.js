const mongoose = require("mongoose");

const timeSeriesSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
		},
		data: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const TimeSeries = mongoose.model("TimeSeries", timeSeriesSchema);
module.exports = TimeSeries;
