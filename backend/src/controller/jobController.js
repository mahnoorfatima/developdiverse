const JobService = require('../service/jobService');
const Logger = require('../util/logger');

const getJobs = async (req, res) => {
  const jobService = new JobService(req.params);
  const response = await jobService.process();
  if (!response) {
   return res.status(404).send('Not found')
  }
  return res.status(200).json({ job: response, status: 'OK' });
};

module.exports = {
    getJobs,
};
