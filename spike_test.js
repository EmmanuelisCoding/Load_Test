import http from 'k6/http'
import { sleep, check } from 'k6'

const url = ''; // insert the url of the website

export let options = {
    stages: [
        { duration: '10s', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '10s', target: 1700 },
        { duration: '3m', target: 1700 },
        { duration: '10s', target: 100 },
        { duration: '3m', target: 100 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        'http_req_duration': ['p(95)<500'], 
    },
}

export default () => {
    const response = http.get(url);
    check(response, {
        'is status 200': (r) => r.status === 200,
    })
    sleep(1);
}