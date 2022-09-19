/*
  Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
  즉, 백엔드랑 프론트엔드랑 통신을 쉽게하기 위한 라이브러리입니다.

  아래는 가장 기본적인 셋팅(오로지 제 기준..)을 해둔 상태로 보시면 됩니다.
  가장 기본적인 사용법은 통신을 하고 싶은 vue파일에서 import 후 사용하시면 됩니다.
  (예시 - HomeView.vue)
*/
import axios from "axios";

const instance = axios.create();

const defaultHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
};

// 비동기 통신 Object 정의
const httpInstance = {
  get(uri, params = {}, headers = {}) {
    const url = uri;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      params,
    };

    const promise = instance.get(url, config);
    return promise
      .then(({ data }) => data)
      .catch((error) => console.log(error));
  },
  patch(uri, params = {}, headers = {}) {
    const url = uri;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    const promise = instance.patch(url, params, config);
    return promise
      .then(({ data }) => data)
      .catch((error) => console.log(error));
  },
  post(uri, params = {}, headers = {}) {
    const url = uri;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    const promise = instance.post(url, params, config);
    return promise
      .then(({ data }) => data)
      .catch((error) => console.log(error));
  },
  put(uri, params = {}, headers = {}) {
    const url = uri;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    const promise = instance.put(url, params, config);
    return promise
      .then(({ data }) => data)
      .catch((error) => console.log(error));
  },
  delete(uri, params = {}, headers = {}) {
    const url = uri;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    const promise = instance.delete(url, params, config);
    return promise
      .then(({ data }) => data)
      .catch((error) => console.log(error));
  },
};

export const http = httpInstance;
export default http;
