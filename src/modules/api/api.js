  export const sendRequest = (method, url, ) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open(method, url, true);

    request.onload = function () {
      if (this.status >= 400) {
        reject(request);
      } else {
        resolve(request.response);
      }
    }

    request.addEventListener('error', (e) => {
      reject({status: 404, message: 'Not found!'});
    })

    request.send()
  })

}