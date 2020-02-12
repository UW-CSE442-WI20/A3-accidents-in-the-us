/*
CSE 442: Data Visualization
Assignment 3: Interactive Visualization
Names:  Anika Padwekar
        Kwing Li
        McKinnon Williams
        Nicole Garakanidze

Sources:    https://www.youtube.com/watch?v=G-VggTK-Wlg
            https://bl.ocks.org/adamjanes/6cf85a4fd79e122695ebde7d41fe327f
*/

var d3 = require('d3');

var width = 1000;
var height = 500;
var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var g = svg.append('g');

var projection = d3.geoAlbersUsa()
    .scale(1000);

var path = d3.geoPath()
    .projection(projection);


var promises = [
    //  d3.json('https://d3js.org/us-10m.v1.json'),
    d3.json('https://raw.githubusercontent.com/UW-CSE442-WI20/A3-accidents-in-the-us/master/src/us.json'),
    d3.csv('https://raw.githubusercontent.com/UW-CSE442-WI20/A3-accidents-in-the-us/master/data/general_cords.csv')
];

Promise.all(promises).then(ready);

function ready(data) {
    // console.log(data);

    var states = topojson.feature(data[0], data[0].objects.states).features;
    // console.log(states);

    g.append('g')
        .selectAll('class','states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path);
}
