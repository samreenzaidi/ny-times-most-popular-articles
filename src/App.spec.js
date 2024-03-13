describe('App', () => {
  describe('getArticles', () => { 
    const unmockedFetch = global.fetch;
    beforeAll(() => {
      global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve([])
        });
    });
    afterAll(() => {
      global.fetch = unmockedFetch;
    });
    it('should get the articles', async() => {
        const res = await global.fetch();
        const json = await res.json();
        expect(Array.isArray(json)).toEqual(true);
		    expect(json.length).toEqual(0);
    });
  })
});
