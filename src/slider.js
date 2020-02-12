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

var sliderStep = d3
    .sliderBottom()
    .min(d3.min(hour))
    .max(d3.max(hour))
    .width(300)
    .tickFormat(d3.format(''))
    .ticks(12)
    .step(1)
    .default(12)
    .on('onchange', val => {
    d3.select('p#value-step').text(d3.format('')(val));
});

var gStep = d3
    .select('div#slider-step')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

gStep.call(sliderStep);

d3.select('p#value-step').text(d3.format('')(sliderStep.value()));

var Temperature = [0, 100];

var sliderStep2 = d3
    .sliderBottom()
    .min(d3.min(Temperature))
    .max(d3.max(Temperature))
    .width(300)
    .tickFormat(d3.format(''))
    .ticks(20)
    .step(10)
    .default(60)
    .on('onchange', val => {
    d3.select('p#value-step2').text(d3.format('')(val));
});

var gStep2 = d3
    .select('div#slider-step2')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

gStep2.call(sliderStep2);

d3.select('p#value-step2').text(d3.format('')(sliderStep2.value()));
