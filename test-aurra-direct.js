#!/usr/bin/env node

const https = require('https');

const API_KEY = 'a838623e-f3bf-4b1b-81f0-4fe38d05ccf3';

async function testAurraDirect() {
  console.log('🔍 Testing AurraCloud API directly...\n');
  
  const postData = JSON.stringify({
    model: 'aurra-gpt-4o',
    messages: [{ role: 'user', content: 'Hello, world!' }],
    tools: [
      {type: 'native', slug: 'chainlink-toolkit'}
    ]
  });

  const options = {
    hostname: 'api-v1.aurracloud.com',
    port: 443,
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log(`📊 Status: ${res.statusCode}`);
      console.log(`📋 Headers:`, res.headers);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`📄 Response:`, data);
        resolve({ status: res.statusCode, data });
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Error:`, error);
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function main() {
  try {
    await testAurraDirect();
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

main(); 