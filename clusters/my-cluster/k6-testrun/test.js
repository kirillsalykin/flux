import http from 'k6/http';
import { check } from 'k6';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 500,
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '900s',
      preAllocatedVUs: 50, // how large the initial pool of VUs would be
      maxVUs: 100, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },

  //stages: [
  //  { target: 200, duration: '30s' },
  //  { target: 0, duration: '30s' },
  //],
};

export default function() {
  const url = 'http://backend.backend.svc.cluster.local:8800/hello';
  const result = http.get(url);
  check(result, {
    'http response status code is 200': result.status === 200,
  });
}
