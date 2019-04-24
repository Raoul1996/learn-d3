# D3 webpack boilerplate

> D3 webpack 4 boilerplate

### Install dependencies
```
$ npm install
```
Or using yarn
```
$ yarn install
```

### 2. Run server
```
$ npm start
```
Or using yarn
```
$ yarn start
```

Now you can open you browser and go to `http://localhost:8080/`. You should see the D3 version this project uses, which is provided by the snippet shown below (also available in `index.js`).

```js
import * as d3 from 'd3'

d3.select('#root')
  .append('h5')
  .append('text')
  .text(`D3 version: ${d3.version}`)
```
## Build

If you wanna generate the minified files for the project you can simply run the command below.

```
$ npm run build
```
Or using yarn
```
$ yarn run build
```

```js
// Loading external data, use webpack file-loader
d3.csv('/assets/sample.csv', (error, dataset) => {
  dataset.forEach((data) => {
    console.log(data)
  })
})
```