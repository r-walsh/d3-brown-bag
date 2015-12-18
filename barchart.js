var dataset = [115, 60, 90, 4, 19, 25, 44, 186, 110];
var height = 200;
var width = 200;
var padding = 5;

var svg = d3.select('body')
			.append('svg')
				.attr('height', height)
				.attr('width', width);

svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
		.attr('height', function( data ) {
			return data;
		})
		.attr('width', function( data ) {
			return (width / dataset.length) - padding;
		})
		.attr('fill', 'blue')
		.attr('x', function( data, index ) {
			return index * (width / dataset.length)
		})
		.attr('y', function( data ) {
			return height - data;
		});

svg.selectAll('text')
	.data(dataset)
	.enter()
	.append('text')
		.attr('fill', 'pink')
		.attr('x', function( data, index ) {
			return index * (width / dataset.length) + 2;
		})
		.attr('y', function( data ) {
			return height - data + 15;
		})
		.text(function( data ) {
			return data;
		})
		.attr('font-size', '10px')
		.attr('font-family', 'sans-serif');