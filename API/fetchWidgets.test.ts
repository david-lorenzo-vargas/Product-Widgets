import { fetchWidgets } from './fetchWidgets';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('fetchWidgets', () => {
  it('should fetch data', async () => {
    mockFetch.mockImplementation(() => Promise.resolve({ json: () => [] }));

    await fetchWidgets();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(process.env.FETCH_WIDGETS_URL);
  });

  it("should throw an error if promise is rejected", async () => {
    mockFetch.mockImplementationOnce(() => Promise.reject());

    await expect(fetchWidgets()).rejects.toThrow("Ooops! something went wrong");
  });
});