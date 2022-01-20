<template>
  <div>
    <h1>Job Ad: {{ $store.getters.getJob.ad_number }}</h1>
    <p>contents: {{ $store.getters.getJob.contents }}</p>
    <p>applicants: {{ $store.getters.getJob.applicants }}</p>
    <p>biases:</p>
    <div v-for="(biases, index) in $store.state.job.biases" :key="biases">
      <p>
        bias {{ index + 1 }} {{ biases.name }}: bias {{ index + 1 }} score is
        {{ biases.score }}
      </p>
    </div>
    Find Job Ad: <input v-model="jobId" placeholder="search job" />
    <button @click="getJobById($store, jobId)" class="w-6 h-6">Find!</button>
  </div>
</template>

<script>
import sendHttpRequest from "../util/http-util";
import API_CONSTANTS from "../constants/api-requests";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    async getJobById(store, id) {
    let url = API_CONSTANTS.BASE_URL + id;
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const res = await sendHttpRequest(
          url,
          API_CONSTANTS.METHODS.GET,
          headers
        );
        if (res.data && res.data.job) {
          store.dispatch("addJob", res.data.job);
        }
      } catch (err) {
        if (err.status === 401) {
          console.log(`${url} returned auth fail (401).`);
          return null;
        }

        if (err.status === 403) {
          console.log(`${url} returned rate limit error (403).`);
          return null;
        }

        if (err.status === 404) {
          console.log(`${url} returned not found (404) for job id ${id}`);
          return null;
        }

        if (err.status >= 500) {
          console.log(`${url} returned server error (500).`);
          return null;
        }
        console.log(`${url} returned generic error, rethrowing.`);
        // throw other unhandled errors
        throw err;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
