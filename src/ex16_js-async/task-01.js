'use strict'

function customFetch(url, params={}) {
  let {method = 'GET', body} = params;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => resolve(new Response(xhr.response));
    xhr.onerror = () => reject(new Error('The request failed'));
    xhr.send(body);
  });
}

module.exports = customFetch;