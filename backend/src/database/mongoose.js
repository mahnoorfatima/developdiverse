const jobSchema = require("./schema/job");

// find job response from Database
module.exports.fetchJobById = function(jobId) {
    return jobSchema.findOne({ ad_number: jobId });
};
