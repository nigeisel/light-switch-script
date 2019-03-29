#!/usr/bin/env node

const request = require('request-promise-native');

const what = process.argv[2];
const state = process.argv[3];

if (!what || !state) {
  console.warn("Call with arguments: switch <a|b|c|d|music|light> <on|off>");
  process.exit(1);
}

const SECRET = "2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b";
const USER = 0;

const options = {
    method: 'GET',
    url: 'http://192.168.178.20:8080/api/lights',
    qs: {
      what: what,
      state: state,
    },
    headers: {
      'user': USER,
      'password': SECRET,
    },
    json: true,
};

console.log('Switching ' + what + ' ' + state + '...');
send().catch((err) => {
  console.log('Sending failed: ' + err.message);
})

async function send() {
  const res = await request(options);
}
