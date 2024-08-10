## fetchey

fetch를 조금 더 편하게 사용할 수 있는 래퍼: post, get 등으로 명시. get(url).json<T>(), post(url).json<T>() 등과 같이 타입을 지원하는 json 메서드.

## Features

- Wrapping Fetch API
- Transform request and response data
- Supports Timeout
- Supports Abort
- Supports the Typescript
- Supports the Promise API

## Installing

Package manager

Using npm:

```bash
$ npm install fetchey
```

Using yarn:

```bash
$ yarn add fetchey
```

Using pnpm:

```bash
$ pnpm add fetchey
```

## Usage

**fetchey GET Method use**

- Javascript

```js
import { fetchey } from "fetchey";

const get = async () => {
  const data = await fetchey.get(url, options);
  console.log(data);
  return data;
};
```

**fetchey POST Method use**

```js
import { fetchey } from "fetchey";

const post = async () => {
  const user = {
    id: 1,
  };

  const data = await fetchey.post(url, {
    body: user,
  });

  console.log(data);
  return data;
};
```

**fetchey PUT Method use**

```js
import { fetchey } from "fetchey";

const put = async () => {
  const user = {
    id: 1,
  };

  const data = await fetchey.put(url, {
    body: user,
  });
  console.log(data);
  return data;
};
```

**fetchey DELETE Method use**

```js
import { fetchey } from "fetchey";

const delete = async () => {
  const data = await fetchey.delete(url, options);
  console.log(data);
  return data;
};
```

- **Typescript**

```js
import { fetchey } from "fetchey";

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getData = async () => {
  const data = (await fetchey.get) < TodoType > (url, options);
  console.log(data);
  return data;
};

getData();
```

**fetchey responseText use**

```js
import { fetchey } from "fetchey";

const text = await fetchey.get(url, {
  responseType: "text",
});

const json = await fetchey.get(url, {
  responseType: "json",
});

const arraybuffer = await fetchey.get(url, {
  responseType: "arraybuffer",
});

const blob = await fetchey.get(url, {
  responseType: "blob",
});
```

**Timeout**

```js
import { fetchey } from "fetchey";

const timeout = async () => {
  const data = await fetchey.get(url, { timeout: 5000 });
  console.log(data);
  return data;
};
```

**params**

```js
const data = await fetchey.get<User[]>(url, {
  params: {
    id: "jangwon",
  },
});
```
