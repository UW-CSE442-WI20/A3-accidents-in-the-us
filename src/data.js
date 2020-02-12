const csvData = require('./WA_Core_Info.csv');

d3.csv(csvData).then(function(data) {
    data.forEach(function(d) {
            d.Severity = +d.Severity;
            d.General_Lat = +d.General_Lat;
            d.General_Lng = +d.General_Lng;
            d.General_Time = +d.General_Time;
            d.General_Tmp = +d.General_Tmp;
        }
    );
    console.log(data);
})

