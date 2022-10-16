import { BASE_URL } from "config";

const setHeader = (isFile?: boolean) => {
  const token = localStorage.getItem('token');

  if (token) return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': isFile ? 'multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM' : 'application/json',
  }

  return {
    'Content-Type': 'application/json',
    'Authorization': '',
  }
}

const sendGet = async (url: string, params?: any) => {

  const realUrl = params ? (BASE_URL + url + '?' + new URLSearchParams(params)) : (BASE_URL + url);
  const result = await fetch(realUrl, {
    method: 'GET',
    headers: setHeader(),
  }).then((res) => res.json()).then(real => real)
    .catch(error => {
      return Promise.reject(error);
    });

  return result;
};


const sendPost = async (url: string, body: any) => {
  const result = await fetch(BASE_URL + url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: setHeader(),
  }).then((res) => res.json()).then(real => {
    if ((real?.statusCode !== 200 || real?.statusCode !== 201) && !real?.success) return Promise.reject(real);

    return real;

  })
    .catch(error => {
      return Promise.reject(error);
    });

  return result;
}

const sendPostFile = async (url: string, body: any) => {
  const token = localStorage.getItem('token');
  const result = await fetch(BASE_URL + url, {
    method: 'POST',
    body,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }).then((res) => res.json()).then(real => real)
    .catch(error => {
      return Promise.reject(error);
    });

  return result;
}

export {
  sendGet, sendPost,
  sendPostFile
}