import { createStore } from 'vuex'

export default createStore({
    state: {
        job: {},
      },
    mutations: {
        SET_JOB(state, job) {
            state.job = job
          }
    },
    actions: {
        addJob(context, job) {
            context.commit('SET_JOB', job)
          }
    },
    getters: {
        getJob: state => {
            return state.job;
        }
    }
})
