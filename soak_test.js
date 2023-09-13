import http from 'k6/http'
import { check, sleep } from 'k6'

const url = ''; // insert the url of the website

export let options = {
    stages: [
        { duration: '2m', target: 200 }, 
        { duration: '1h', target: 300 },
        { duration: '2m', target: 0 },   
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