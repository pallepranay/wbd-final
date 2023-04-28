const { createClient } = require('redis');

const client = createClient({
    password: 'mdvXEXgzTEjoc68ZJi0L4V75blPpXn06',
    socket: {
        host: 'redis-14669.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 14669
    }
});
client.connect();
client.on('connect', () => {
    console.log('Redis client connected');
});