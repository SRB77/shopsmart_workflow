// A simple integration test verifying the backend API responds correctly

describe('Integration Test: Products API', () => {
  it('should fetch products from the server', async () => {
    // Note: The server must be running on port 5001 for this test to pass.
    try {
      const response = await fetch('http://localhost:5001/api/products');
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(Array.isArray(data)).toBe(true);
      // Optional: check if data contains at least one product
      if (data.length > 0) {
        expect(data[0]).toHaveProperty('id');
        expect(data[0]).toHaveProperty('title');
        expect(data[0]).toHaveProperty('price');
      }
    } catch (error) {
      // If server is not running, test will fail cleanly
      throw new Error('Could not connect to the server. Make sure it is running on port 5001. Error: ' + error.message);
    }
  });
});
