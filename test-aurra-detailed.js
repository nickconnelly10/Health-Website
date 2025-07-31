#!/usr/bin/env node

const https = require('https');

const API_KEY = 'a838623e-f3bf-4b1b-81f0-4fe38d05ccf3';

async function testAurraDetailed() {
  console.log('🔍 Testing AurraCloud API with detailed debugging...\n');
  
  const postData = JSON.stringify({
    model: 'aurra-gpt-4o',
    messages: [{ role: 'user', content: 'Hello, world!' }],
    tools: [
      {type: 'native', slug: 'chainlink-toolkit'}
    ]
  });

  console.log('📤 Request Data:', postData);
  console.log('🔑 API Key:', API_KEY.substring(0, 8) + '...');

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

  console.log('🌐 Request Options:', JSON.stringify(options, null, 2));

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log(`📊 Status: ${res.statusCode}`);
      console.log(`📋 Headers:`, JSON.stringify(res.headers, null, 2));
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`📄 Response Length: ${data.length} characters`);
        console.log(`📄 Response Preview: ${data.substring(0, 500)}...`);
        if (data.length > 500) {
          console.log(`📄 Full Response: ${data}`);
        }
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
    await testAurraDetailed();
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

main(); 