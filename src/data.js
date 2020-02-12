const csvData = require('./WA.csv');

// Gets data and compares it to temp and hour value
d3.csv(csvData).then(function(data) {
    data.forEach(function(d) {
            d.Severity = +d.Severity;
            d.General_Lat = (+d.General_Lat - 45.6) * 100;
            d.General_Lng = (+d.General_Lng + 123.6) * 100;
            d.General_Time = +d.General_Time;
            d.Temperature = +d.Temperature;
        }
    );
    draw_data(data.filter(function(row){
        return row.Temperature == 60
    }));
});

function draw_data(data){

    console.log(data)

    var svgContainer = d3.select("footer").append("svg")
                                        .attr("width", 1000)
                                        .attr("height", 1000);

    var circles = svgContainer.selectAll("circle")
                              .data(data)
                              .enter()
                              .append("circle");

    var circleAttributes = circles
                           .attr("cy", function (data) { return data.General_Lat; })
                           .attr("cx", function (data) { return data.General_Lng; })
                           .attr("r", 1 )
                            .style("fill", function(data) {
                                     var returnColor;
                                     if (data.Severity === 2) { returnColor = "blue";
                                         } else if (data.Severity === 3) { returnColor = "green";
                                         } else if (data.Severity === 4) { returnColor = "red"; }
                                     return returnColor;
                            });

}

