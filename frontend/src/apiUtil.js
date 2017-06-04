/**
 * Classe utilitaire de connection l'api PlugMeme
 */
class PMApiClient {
    constructor(token, apiUrl) {
        this.token = token;
        if(!apiUrl) {
            this.apiUrl = "http://localhost:4242";
        }
        else {
            this.apiUrl = apiUrl;
        }
    }
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
         } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
 
    parseJSON(response) {
    return response.json()
}

  api(method, params) {
    let that = this;
    return new Promise(function(resolve, reject) {
        fetch(that.apiUrl + method, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': that.token
                },
                body: JSON.stringify(params),
            }).then(that.checkStatus).then(that.parseJSON)
        .then(function(data) {
            resolve(data);
        }).catch(function(error) {
            reject(error);
        })
    });
  }
}
export default PMApiClient;
