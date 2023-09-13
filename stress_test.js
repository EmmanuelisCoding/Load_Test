import http from 'k6/http'
import { check, sleep } from 'k6'

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
        { duration: '5m', target: 500 }, 
        { duration: '2m', target: 750 },  
        { duration: '5m', target: 750 }, 
        { duration: '2m', target: 1000 },  
        { duration: '5m', target: 1000 }, 
        { duration: '2m', target: 1250 },  
        { duration: '5m', target: 1250 }, 
        { duration: '2m', target: 1500 },  
        { duration: '5m', target: 1500 }, 
        { duration: '2m', target: 1750 },  
        { duration: '5m', target: 1750 }, 
        { duration: '2m', target: 2000 },  
        { duration: '5m', target: 2000 }, 
        { duration: '10m', target: 0 }, 
    ]
}

export default () => {
    const response = http.get(url);
    check(response, {
        'is status 200': (r) => r.status === 200,
    })
    sleep(1);
}

