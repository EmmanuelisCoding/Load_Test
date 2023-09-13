import http from 'k6/http';
import { check, sleep } from 'k6';

const url = ''; // insert the url of the website

export let options = {
    stages: [
        { duration: '2m', target: 50 },   
        { duration: '3m', target: 50 },   
        { duration: '2m', target: 100 },  
        { duration: '3m', target: 100 },  
        { duration: '2m', target: 250 },  
        { duration: '3m', target: 250 },  
        { duration: '2m', target: 500 },  
        { duration: '10m', target: 500 }, 
    ],
    thresholds: {
        'http_req_duration': ['p(95)<500'],
        'http_req_failed': ['rate<0.1'],
    },
};

export default function () {
    let response = http.get(url); 
    check(response, {
        'is status 200': (r) => r.status === 200, 
    });
    sleep(1); 
}
