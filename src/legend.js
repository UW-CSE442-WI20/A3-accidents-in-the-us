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

var keys = ['Severity 2', 'Severity 3', 'Severity 4'];
var colors = ['yellow', 'orange', 'red'];

var color = d3.scaleOrdinal()
                .domain(keys)
                .range(colors);

var legendRectSize = 20;
var legendSpacing = 5;

var legend = d3.select('svg')
    .append("g")
    .selectAll("g")
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
        var height = legendRectSize;
        var x = 0;
        var y = (i * height);
        return 'translate(' + x + ',' + y + ')';
    });

legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color);

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - (legendSpacing/2))
    .text(function(d) { return d; })
    .attr('fill', 'white');
