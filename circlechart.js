// var dataset = [
// 	[ 5,     20 ],
// 	[ 480,   90 ],
// 	[ 250,   50 ],
// 	[ 100,   33 ],
// 	[ 330,   95 ],
// 	[ 410,   12 ],
// 	[ 475,   44 ],
// 	[ 25,    67 ],
// 	[ 85,    21 ],
// 	[ 220,   88 ],
// 	[ 600,   200]
// ];
var height = 200;
var width = 200;
var padding = 20;

var   dataset = []
	, xRange = Math.random() * 1000
	, yRange = Math.random() * 1000;

for (var i = 0; i < Math.random() * 1000; i++) {
	var newX = Math.round(Math.random() * xRange);
	var newY = Math.round(Math.random() * yRange);

	dataset.push([newX, newY]);
}

var svg = d3.select('body')
			.append('svg')
				.attr({
					  height: height
					, width: width
				});

var xScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function( data ) { return data[0] })])
					.range([padding, width - padding * 2]);
var yScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function( data ) { return data[1] })])
					.range([height - padding, padding]);

var rScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function( data ) { return data[1]; })])
					.range([1, 8]);

svg.selectAll('circle')
	.data(dataset)
	.enter()
	.append('circle')
		.attr({
			  r: function( data ) {
				return rScale(data[0]);
			}
			, fill: "blue"
			, cx: function( data ) {
				return xScale(data[0]);
			}
			, cy: function( data ) {
				return yScale(data[1]);
			}
			, fill: function( data ) {
				return "rgb(" + data[0] + ",0," + data[1] + ")";
			}
		});