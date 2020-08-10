const Goldylocks = require('../lib/goldylocks');
const gl = new Goldylocks();
gl.setup("empresademonstrativa","57b16c9ff6a18241f5aea066d3955c972e27ed48");
gl.request('clientes', {p:"alves"},{},data => console.table(data.length));