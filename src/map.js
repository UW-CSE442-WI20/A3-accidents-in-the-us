/*
CSE 442: Data Visualization
Assignment 3: Interactive Visualization
Names:  Anika Padwekar
        Kwing Li
        McKinnon Williams
        Nicole Garakanidze

Sources: https://www.youtube.com/watch?v=G-VggTK-Wlg
*/

var d3 = require('d3');

var width = 1000;
var height = 500;
var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g');

var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale(500);

var path = d3.geoPath()
    .projection(projection);

d3.json('us.json').then(function (data) {
    console.log(data);

    var states = topojson.feature(data, data.objects.state).feature;
    console.log(states);

    svg.selectAll('.state')
        .data(states)
        .enter().append('path')
        .attr('class', 'state')
        .attr('d', path);
});




