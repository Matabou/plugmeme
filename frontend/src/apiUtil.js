/**
 * Classe utilitaire de connection l'api PlugMeme
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

class PMApiClient {
  constructor(token, apiUrl) {
    this.token = token;
    this.apiUrl = apiUrl || 'http://localhost:4242';
  }

  api(method, params) {
    const that = this;
    return new Promise((resolve, reject) => {
      fetch(that.apiUrl + method, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: that.token,
        },
        body: JSON.stringify(params),
      })
      .then(checkStatus)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
}
export default PMApiClient;
