
// TP 4: Parte 2 a)
var circlesCollection = [
	{"x_axis": 250, "y_axis": 250, "radius": 230, "color": "green" },
	{"x_axis": 250, "y_axis": 250, "radius": 155, "color": "purple" },
	{"x_axis": 250, "y_axis": 250, "radius": 80, "color": "red" }
];

var canvas = d3.select("body")
					.append("svg")
					.attr("width",500)
					.attr("height",500);	

var circles = canvas.selectAll("circle")
					.data(circlesCollection)
					.enter()
					.append("circle");

var circleAttributes = circles	
						.attr("cx", function(d){return d.x_axis;})
						.attr("cy", function(d){return d.y_axis;})
						.attr("r", function(d){return d.radius;})
						.attr("fill", function(d){return d.color;});	


// TP 4: Parte 2 b)
var canvas = d3.select("body")
				.append("svg")
				.attr("width", 500)
				.attr("height", 500);

var i;
var j;
for (i=1; i<18; i++) {
	y = i * 30;
	for (j=1; j<18; j++) {
		x = j * 30;
		canvas.append("circle")
				.attr("cx", x)
				.attr("cy", y)
				.attr("r", 10)
				.attr("fill", "rgb(" + j * 14.7 + ", " + i * 14.7 + ", 1)");
	};
};


// TP 4: Parte 2 c)
var canvas = d3.select("body")
				.append("svg")
				.attr("width", 500)
				.attr("height", 500);

var i = 1;
var j = 1;
var rx = 1;
var ry = 1;
var radio = 1;
for (i=1; i<18; i++) {
	y = i * 30;

	if (i < 10) {
			ry = i;		
	} else {
		ry = 18 - i;
	}

	for (j=1; j<18; j++) {
		x = j * 30;

		if (j < 10) {
			rx = j;
		} else {
			rx = 18 - j;
		}

		var exp = 2;
		// Función para hacer el crecimiento de los circulos de manera exponencial 
		// según la posición x e y de cada uno
		radio = (((Math.pow(rx,exp) * Math.pow(ry,exp)) / (Math.pow(9,2*exp))   ) * 9 ) + 1;

		canvas.append("circle")
				.attr("cx", x)
				.attr("cy", y)
				.attr("r", radio)   
				.attr("fill", "black");
	};
};


// TP 4: Parte 2 d)
var canvas = d3.select("body")
				.append("svg")
				.attr("width", 500)
				.attr("height", 500);
				
var i;
var j;
var punto1x;
var punto1y;
var punto2x;
var punto2y;
var punto3x;
var punto3y;

// Genera triangulos rojos
for (i=0; i<18; i++) {
	y = (i * 26) + 30;
	for (j=0; j<18; j++) {
		x = (j * 26) + 10;
		// Offset
		punto1x = 5 + x;
		punto1y = 1 + y;
		punto2x = 25 + x;
		punto2y = 1 + y;
		punto3x = 15 + x;
		punto3y = 21 + y;

		canvas.append("polygon")
				.attr("points", punto1x + "," + punto1y + " " + punto2x + "," + punto2y + " " + punto3x + "," + punto3y)
				.attr("style", "stroke:red; fill:white; stroke-width:1");
			};
		};

// Genera triangulos azules
for (i=0; i<18; i++) {
	y = (i * 26) + 51;
	for (j=0; j<18; j++) {
		x = (j * 26) + 28;
		// Offset
		punto1x = 0 + x;
		punto1y =  y;
		punto2x = 20 + x;
		punto2y = y;
		punto3x = 10 + x;
		punto3y = y - 20;

		canvas.append("polygon")
				.attr("points", punto1x + "," + punto1y + " " + punto2x + "," + punto2y + " " + punto3x + "," + punto3y)
				.attr("style", "stroke:blue; fill:yellow; stroke-width:1");
			};
		};