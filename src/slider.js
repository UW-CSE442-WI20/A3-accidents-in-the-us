/*
CSE 442: Data Visualization
Assignment 3: Interactive Visualization
Names:  Anika Padwekar
        Kwing Li
        McKinnon Williams
        Nicole Garakanidze
*/

// Hours
var hour = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var time_select = 16;

var TimeSlider = d3
    .sliderBottom()
    .min(d3.min(hour))
    .max(d3.max(hour))
    .width(400)
    .tickFormat(d3.format(''))
    .ticks(12)
    .step(1)
    .default(12)
    .on('onchange', val => {
        time_select = val;
        console.log(time_select);
        window.updateData(temp_select, time_select)
    });

var gTimeStep = d3
    .select('div#slider-step')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)')
    .attr('fill', 'red')
    .attr('font-size', '40px');

gTimeStep.call(TimeSlider);


var Temperature = [0, 100];
var temp_select = 65;

var TempSlider = d3
    .sliderBottom()
    .min(d3.min(Temperature))
    .max(d3.max(Temperature))
    .width(400)
    .tickFormat(d3.format(''))
    .ticks(20)
    .step(10)
    .default(60)
    .on('onchange', val => {
        temp_select = val;
        console.log(temp_select);
        window.updateData(temp_select, time_select)
    });

var gTempStep = d3
    .select('div#slider-step2')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)')
    .attr('fill', 'red');

gTempStep.call(TempSlider);
