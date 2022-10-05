function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
      var firstSample = sampleNames[0] 
      buildMetaData(firstSample);
      buildCharts(firstSample);

  });
}
  
  init();


function optionChanged(newSample) {

  buildMetaData(newSample);
  buildCharts(newSample);

}

function buildMetaData(sample) {

  d3.json("samples.json").then((data) => {

    var metadata = data.metadata;

    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);

    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    console.log(result)
    //PANEL.append("h6").text(result.location);

    for (const [key, value] of Object.entries(result)) {
      PANEL.append("h6").text(`${key}: ${value}`);
    }

  });

}

//console.log(newSample);
