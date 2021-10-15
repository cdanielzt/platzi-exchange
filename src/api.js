const url = 'https://api.coincap.io/v2';

function getAssets() {
  return getRequest('assets?limit=20');
}

function getRequest(method) {
  return fetch(`${url}/${method}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('request failed', error);
    }); // Syntax error: unexpected end of input
}

function getAsset(coin) {
  return getRequest(`assets/${coin}`);
}

export default {
  getAssets,
  getAsset,
};
