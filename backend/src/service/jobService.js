const 
    DiverseError = require('../util/diverse-error'),
    db = require('../database/mongoose');

module.exports = class JobService {
    constructor(params) {
        if (!params.id ) throw new DiverseError(400, 'Parameters are mandatory');
        this.jobId = params.id;
    }

    async process() {
        try {
            let result = await db.fetchJobById(this.jobId);
            return result;
        } catch (error) {
            throw new DiverseError(500, error);
        }
    }
}
