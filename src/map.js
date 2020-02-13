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

var projection = d3.geoConicConformal()
    .parallels([47 + 30 / 60, 48 + 44 / 60])
    .rotate([120 + 50 / 60, 0])
    .scale(1000);

var path = d3.geoPath()
    .projection(projection);


var promises = [
    //  d3.json('https://d3js.org/us-10m.v1.json'),
    d3.json('https://raw.githubusercontent.com/UW-CSE442-WI20/A3-accidents-in-the-us/master/src/us.json'),
    d3.csv('https://raw.githubusercontent.com/UW-CSE442-WI20/A3-accidents-in-the-us/master/src/WA.csv')
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
        .attr('class', 'states');

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
        .attr('class', 'counties');
}

const csvData = require('./WA.csv');

// Gets data and compares it to temp and hour value
d3.csv(csvData).then(function(data) {
    data.forEach(function(d) {
            d.Severity = +d.Severity;
            d.General_Lat = ((+d.General_Lat - 45.6) * 120) + 27;
            d.General_Lng = ((+d.General_Lng + 123.6) * 80) + 310;
            d.General_Time = +d.General_Time;
            d.Temperature = +d.Temperature;
        }
    );
    draw_data(data);
});

function draw_data(data){

    console.log(data);
    d3.selectAll("circle").remove();

    var circles = svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle");

    var circleAttributes = circles
        .attr("cy", function (data) { return data.General_Lat; })
        .attr("cx", function (data) { return data.General_Lng; })
        .attr("r", 4 )
        .style("fill", function(data) {
            var returnColor;
            if (data.Severity === 2) { returnColor = "yellow";
            } else if (data.Severity === 3) { returnColor = "orange";
            } else if (data.Severity === 4) { returnColor = "red"; }
            return returnColor;
        });

}

// Update data from a now selected temperature and hour
function updateData(desired_temp, desired_hour) {
// Gets data and compares it to temp and hour value
    console.log(desired_temp)
    console.log(desired_hour)
    d3.csv(csvData).then(function (data) {
        data.forEach(function (d) {
                d.Severity = +d.Severity;
                d.General_Lat = ((+d.General_Lat - 45.6) * 120) + 27;
                d.General_Lng = ((+d.General_Lng + 123.6) * 80) + 310;
                d.General_Time = +d.General_Time;
                d.Temperature = +d.Temperature;
            }
        );
        if (desired_hour == 25 && desired_temp == 105) {
            draw_data(data);
        } else {
            draw_data(data.filter(function (row) {
                return row.Temperature == desired_temp && row.General_Time == desired_hour
            }));
        }
    });
}
window.updateData = updateData;


