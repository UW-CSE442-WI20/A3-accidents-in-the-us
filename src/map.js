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
    var state = states.filter(function(d) { return d.id === 53; });
 
    projection.scale(1).translate([0, 0]);

    // Book: Learning D3.js 4 Mapping Second Edition
    //  By: Thomas Newton, Oscar Villarreal, Lars Verspohl
    var b = path.bounds(state[0]);
    var s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
 
    projection.scale(s).translate(t);

    g.append('g')
        .selectAll('class','state')
        .data(state)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'state');
    
    var counties = topojson.feature(data[0], data[0].objects.counties).features;
    var filtered = counties.filter(function(d){
        return Math.floor(d.id/1000) == 53;
    });
    g.append('g')
        .selectAll('class', 'counties')
        .data(filtered)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', 'black');
}
