const csvData = require('./WA_Core_Info.csv');

d3.csv(csvData).then(function(data) {
    console.log(data);
})

