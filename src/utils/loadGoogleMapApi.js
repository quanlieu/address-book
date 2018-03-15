const loadGoogleMapApi = (apiKey, cb) => {
  if (document.getElementById('google-map-script')) {
    cb();
    return;
  }
  const goolgeMapApi = 'https://maps.googleapis.com/maps/api/js';
  let scriptTag = document.createElement('script');
  let body = document.getElementsByTagName('body')[0];

  scriptTag.id = 'google-map-script';
  body.appendChild(scriptTag);
  scriptTag.onload = cb;
  scriptTag.src = `${goolgeMapApi}?key=${apiKey}`;
};

export default loadGoogleMapApi;
