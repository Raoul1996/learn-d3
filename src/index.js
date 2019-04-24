import * as d3 from "d3"
import data from "./assets/sample.csv"
import './style/index.scss'
(async function() {
  // Selecting and appending elements
  d3.select("#root")
  .append("h5")
  .append("text")
  .text(`D3 version: ${d3.version}`)
  // Loading external data
  const dataset = await d3.csv(data)
  dataset.forEach((data) => {
    console.log(data)
  })
})();
