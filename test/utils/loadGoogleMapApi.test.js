import loadGoogleMapApi from '../../src/utils/loadGoogleMapApi';

describe('loadGoogleMapApi', () => {
  const callback = jest.fn();
  const mockApiKey = 'keykeykey';
  loadGoogleMapApi('mockApiKey', callback);

  test('should add a script tag and add callback to scriptTag.onload', () => {
    const scriptTag = document.getElementById('google-map-script');
    expect(scriptTag).toBeTruthy();
    expect(scriptTag.onload).toBe(callback);
  });

  test('should invoke callback when scriptTag already exist', () => {
    loadGoogleMapApi('mockApiKey', callback);
    expect(callback.mock.calls.length).toBeTruthy();
  });
});
