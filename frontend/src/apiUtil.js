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

  api(url, params, method = 'GET', isJson = true) {
    return new Promise((resolve, reject) => {
      fetch(this.apiUrl + url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
        body: JSON.stringify(params),
      })
      .then(checkStatus)
      .then(response => (isJson ? response.json() : response))
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  apiImage(url, file, method = 'GET') {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', file);

      fetch(this.apiUrl + url, {
        method: method,
        headers: {
          Authorization: this.token,
        },
        body: formData,
      })
      .then(checkStatus)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
}
export default PMApiClient;
