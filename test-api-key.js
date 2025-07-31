#!/usr/bin/env node

// Test script to verify AurraCloud API key configuration
const https = require('https');

const VERCEL_URL = 'https://healthmuscadine-j15mocak6-nicks-projects-000b3e21.vercel.app';

async function testHealthEndpoint() {
  console.log('🔍 Testing Vercel Health Endpoint...');
  
  return new Promise((resolve, reject) => {
    const req = https.get(`${VERCEL_URL}/api/health`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`📊 Status: ${res.statusCode}`);
        
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(data);
            console.log('✅ Health endpoint working!');
            console.log('📋 Response:', JSON.stringify(json, null, 2));
            resolve(true);
          } catch (e) {
            console.log('❌ Invalid JSON response:', data);
            resolve(false);
          }
        } else {
          console.log('❌ Health endpoint failed:', data);
          resolve(false);
        }
      });
    });
    
    req.on('error', (err) => {
      console.log('❌ Request failed:', err.message);
      resolve(false);
    });
    
    req.setTimeout(10000, () => {
      console.log('❌ Request timeout');
      req.destroy();
      resolve(false);
    });
  });
}

async function testChatEndpoint() {
  console.log('\n💬 Testing Vercel Chat Endpoint...');
  
  const postData = JSON.stringify({
    input: 'hello'
  });
  
  const options = {
    hostname: 'healthmuscadine-j15mocak6-nicks-projects-000b3e21.vercel.app',
    port: 443,
    path: '/api/chat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`📊 Status: ${res.statusCode}`);
        
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(data);
            console.log('✅ Chat endpoint working!');
            console.log('🤖 AI Response:', json.response?.substring(0, 100) + '...');
            resolve(true);
          } catch (e) {
            console.log('❌ Invalid JSON response:', data);
            resolve(false);
          }
        } else {
          console.log('❌ Chat endpoint failed:', data);
          resolve(false);
        }
      });
    });
    
    req.on('error', (err) => {
      console.log('❌ Request failed:', err.message);
      resolve(false);
    });
    
    req.setTimeout(10000, () => {
      console.log('❌ Request timeout');
      req.destroy();
      resolve(false);
    });
    
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('🚀 Testing Muscadine Health AI API Configuration\n');
  
  const healthOk = await testHealthEndpoint();
  const chatOk = await testChatEndpoint();
  
  console.log('\n📋 Summary:');
  console.log(`Health Endpoint: ${healthOk ? '✅ Working' : '❌ Failed'}`);
  console.log(`Chat Endpoint: ${chatOk ? '✅ Working' : '❌ Failed'}`);
  
  if (!healthOk || !chatOk) {
    console.log('\n🔧 Next Steps:');
    console.log('1. Go to https://vercel.com/dashboard');
    console.log('2. Select project: health.muscadine.box');
    console.log('3. Go to Settings → Environment Variables');
    console.log('4. Add: AURRA_API_KEY = your_aurracloud_api_key');
    console.log('5. Redeploy: npx vercel --prod');
  } else {
    console.log('\n🎉 Everything is working perfectly!');
  }
}

main().catch(console.error); 