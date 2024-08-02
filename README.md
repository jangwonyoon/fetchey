## fetchey

fetch를 조금 더 편하게 사용할 수 있는 래퍼: post, get 등으로 명시. get(url).json<T>(), post(url).json<T>() 등과 같이 타입을 지원하는 json 메서드.

## Features

- Wrapping Fetch API
- Transform request and response data
- Intercept request and response
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

**Fetch GET Method use**

- Javascript

```js
import { fetchey } from 'fetchey';

const getData = async () => {
  const data = await fetchey.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
  return data;
};

getData();
```

- Typescript

```js
import { fetchey } from 'fetchey';

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getData = async () => {
  const data = await fetchey.get<TodoType>('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
  return data;
};

getData();
```
