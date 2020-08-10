# nodejs-goldylocks-api
Node.js module to interact with [Goldylocks](https://www.goldylocks.pt) invoicing software API.

[![NPM](https://nodei.co/npm/goldylocks.png)](https://nodei.co/npm/goldylocks/)

```js
const Goldylocks = require('goldylocks');
const gl = new Goldylocks();

gl.setup("empresademonstrativa","57b16c9ff6a18241f5aea066d3955c972e27ed48");

gl.request('artigos', {p:"teste"},{},(data, response) => {console.log(data)});
```


Install
-------

```
$ npm install goldylocks
```

Usage
-----
Setup using only [Goldylocks](https://www.goldylocks.pt) *alias* and API key.
```js
gl.setup("empresademonstrativa","57b16c9ff6a18241f5aaa066d3955c972e27ed48");
```

Make API request using **GET** data.
```js
gl.request("artigos",{p:"blue"},{},data => {console.log(data)});
```

Make API request using **GET** and **POST** data.
```js
gl.request("gerircliente",{p:"14"},{nome:"Cliente Teste"},data => {console.log(data)});
```