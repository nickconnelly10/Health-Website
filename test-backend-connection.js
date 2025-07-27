// Test script to verify backend connection
const testBackendConnection = async () => {
  const endpoints = [
    'https://health.muscadine.box/chat',
    'http://health.muscadine.box/chat',
    'http://localhost:5000/chat'
  ];

  console.log('🔍 Testing backend connections...\n');

  for (const endpoint of endpoints) {
    try {
      console.log(`Testing: ${endpoint}`);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: 'test connection' }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ SUCCESS: ${endpoint}`);
        console.log(`   Response: ${data.response ? 'Valid response' : 'Invalid response format'}`);
        console.log(`   Status: ${response.status}`);
        console.log('');
        return endpoint; // Return the working endpoint
      } else {
        console.log(`❌ FAILED: ${endpoint} - Status: ${response.status}`);
        console.log('');
      }
    } catch (error) {
      console.log(`❌ ERROR: ${endpoint} - ${error.message}`);
      console.log('');
    }
  }

  console.log('❌ No working backend endpoints found');
  return null;
};

// Run the test
testBackendConnection()
  .then((workingEndpoint) => {
    if (workingEndpoint) {
      console.log(`🎉 Backend connection successful: ${workingEndpoint}`);
    } else {
      console.log('💡 Backend connection failed. Please ensure the Flask backend is running.');
      console.log('📋 To start the backend:');
      console.log('   1. Clone https://github.com/nickconnelly10/health-backend');
      console.log('   2. Follow the setup instructions in the README');
      console.log('   3. Run the automated setup: ./start_service.sh');
    }
  })
  .catch(console.error); 