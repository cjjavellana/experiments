(function($) {

	$.fn.drawStopWatch = function(options){

		//The stopwatch's frame default parameters

		var settings = $.extend({
			cx: 30,
			cy: 40,
			innerCircle: {
				sectorAngle: 315,
				radius: 24,
				fill: '#fff',
				stroke: 'none',
				stroke_width: 'none'
			},
			outerCircle: {
				radius: 28,
				fill: 'none',
				stroke_width: 3,
				stroke: '#fff'
			}
		}, options);

		//Let the top and the left buttons width and height be a function
		//of the outer's circle radius
		var topButtonSettings = {
			x: settings.cx  - (settings.outerCircle.radius / 6),
			y: settings.cy - settings.outerCircle.radius,
			height: Math.round(settings.outerCircle.radius) / 6,
			width: Math.round(settings.outerCircle.radius) / 4,
			fill: '#fff'
		};

		//draw the outer cicle
		var outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		outerCircle.setAttribute("cx", settings.cx);
		outerCircle.setAttribute("cy", settings.cy);
		outerCircle.setAttribute("r",  settings.outerCircle.radius);
		outerCircle.setAttribute("fill", settings.outerCircle.fill);
		outerCircle.setAttribute("stroke", settings.outerCircle.stroke);
		outerCircle.setAttribute("stroke-width", settings.outerCircle.stroke_width);
		this.append(outerCircle);

		//draw the inner circle
		var innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "path");
		innerCircle.setAttribute('fill', settings.innerCircle.fill);
		innerCircle.setAttribute('stroke', settings.innerCircle.stroke);
		innerCircle.setAttribute('stroke-width', settings.innerCircle.stroke_width);

		//move 0,0 by translating
		innerCircle.setAttribute('transform', 'translate(' + settings.cx + ', ' + settings.cy + ')');

		//calculate the sector's x and y
		var x = Math.sin((settings.innerCircle.sectorAngle) * Math.PI / 180) * settings.innerCircle.radius,
        y = -Math.cos((settings.innerCircle.sectorAngle) * Math.PI / 180) * settings.innerCircle.radius,
        long = (settings.innerCircle.sectorAngle > 180) ? 1 : 0;

        innerCircle.setAttribute("d", "M 0 0 v -" + settings.innerCircle.radius + " A " + settings.innerCircle.radius 
        	+ " " + settings.innerCircle.radius + " 1 " + long +" 1 " + x + " " + y + " z");
        this.append(innerCircle);

        //draw the top button
        var topButton = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        topButton.setAttribute("fill", topButtonSettings.fill);

        var p1 = {x: topButtonSettings.x, y: topButtonSettings.y},
        	p2 = {x: topButtonSettings.x, y: (topButtonSettings.y - topButtonSettings.height)},
        	p3 = {x: (settings.cx  - settings.outerCircle.radius / 4), y: (topButtonSettings.y - topButtonSettings.height)},
        	p4 = {x: (settings.cx  - settings.outerCircle.radius / 4), y: (topButtonSettings.y - (topButtonSettings.height * 2))},
        	p5 = {x: (settings.cx + topButtonSettings.width), y: (topButtonSettings.y - (topButtonSettings.height * 2))},
        	p6 = {x: (settings.cx + topButtonSettings.width), y: (topButtonSettings.y - (topButtonSettings.height))},
        	p7 = {x: settings.cx  + (settings.outerCircle.radius / 6), y: (topButtonSettings.y - topButtonSettings.height)},
        	p8 = {x: settings.cx  + (settings.outerCircle.radius / 6), y: topButtonSettings.y}

        var polygonIndices = p1.x + "," + p1.y + " " + 
        	  p2.x + "," + p2.y + " " + 
        	  p3.x + "," + p3.y + " " + 
        	  p4.x + "," + p4.y + " " + 
        	  p5.x + "," + p5.y + " " + 
        	  p6.x + "," + p6.y + " " + 
        	  p7.x + "," + p7.y + " " + 
        	  p8.x + "," + p8.y;

        topButton.setAttribute("points", polygonIndices);
        this.append(topButton);

        //The left tilted button
        var tiltedLeftButton = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        tiltedLeftButton.setAttribute("fill", topButtonSettings.fill);
        tiltedLeftButton.setAttribute("points", polygonIndices);
        tiltedLeftButton.setAttribute("transform", "translate(" + (settings.cx - settings.outerCircle.radius - 8) + "," + (settings.cy + y + 3) + ") scale(0.5, 0.5) rotate(-45)");
        this.append(tiltedLeftButton);
	};

	$.fn.drawBigStopWatch = function(options){
		//The stopwatch's frame default parameters
		var settings = $.extend({
			cx: 87.5,
			cy: 112.5,
			innerCircle: {
				radius: 70,
				fill: '#133662',
				stroke: '#fff',
				stroke_width: 10
			},
			outerCircle: {
				radius: 80,
				fill: 'none',
				stroke_width: 10,
				stroke: '#133662'
			}
		}, options);

		//draw the outer cicle
		var outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		outerCircle.setAttribute("cx", settings.cx);
		outerCircle.setAttribute("cy", settings.cy);
		outerCircle.setAttribute("r",  settings.outerCircle.radius);
		outerCircle.setAttribute("fill", settings.outerCircle.fill);
		outerCircle.setAttribute("stroke", settings.outerCircle.stroke);
		outerCircle.setAttribute("stroke-width", settings.outerCircle.stroke_width);
		this.append(outerCircle);

		//draw inner circle
		var innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		innerCircle.setAttribute("cx", settings.cx);
		innerCircle.setAttribute("cy", settings.cy);
		innerCircle.setAttribute("r",  settings.innerCircle.radius);
		innerCircle.setAttribute("fill", settings.innerCircle.fill);
		innerCircle.setAttribute("stroke", settings.innerCircle.stroke);
		innerCircle.setAttribute("stroke-width", settings.innerCircle.stroke_width);
		this.append(innerCircle);

		//Let the top and the left buttons width and height be a function
		//of the outer's circle radius
		var topButtonSettings = {
			x: settings.cx  - (settings.outerCircle.radius / 12),
			y: settings.cy - settings.outerCircle.radius,
			height: Math.round(settings.outerCircle.radius) / 6,
			width: Math.round(settings.outerCircle.radius) / 4,
			fill: '#133662'
		};

		//draw the top button
        var topButton = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        topButton.setAttribute("fill", topButtonSettings.fill);

        var p1 = {x: topButtonSettings.x, y: topButtonSettings.y},
        	p2 = {x: topButtonSettings.x, y: (topButtonSettings.y - topButtonSettings.height)},
        	p3 = {x: (settings.cx  - settings.outerCircle.radius / 6), y: (topButtonSettings.y - topButtonSettings.height)},
        	p4 = {x: (settings.cx  - settings.outerCircle.radius / 6), y: (topButtonSettings.y - (topButtonSettings.height * 2))},
        	p5 = {x: (settings.cx + topButtonSettings.width), y: (topButtonSettings.y - (topButtonSettings.height * 2))},
        	p6 = {x: (settings.cx + topButtonSettings.width), y: (topButtonSettings.y - (topButtonSettings.height))},
        	p7 = {x: settings.cx  + (settings.outerCircle.radius / 6), y: (topButtonSettings.y - topButtonSettings.height)},
        	p8 = {x: settings.cx  + (settings.outerCircle.radius / 6), y: topButtonSettings.y}

        var polygonIndices = p1.x + "," + p1.y + " " + 
        	  p2.x + "," + p2.y + " " + 
        	  p3.x + "," + p3.y + " " + 
        	  p4.x + "," + p4.y + " " + 
        	  p5.x + "," + p5.y + " " + 
        	  p6.x + "," + p6.y + " " + 
        	  p7.x + "," + p7.y + " " + 
        	  p8.x + "," + p8.y;

        topButton.setAttribute("points", polygonIndices);
        this.append(topButton);

		//The left tilted button
        var tiltedLeftButton = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        tiltedLeftButton.setAttribute("fill", topButtonSettings.fill);
        tiltedLeftButton.setAttribute("points", polygonIndices);
        tiltedLeftButton.setAttribute("transform", "translate(" + (settings.cx - settings.outerCircle.radius - 30) + "," + (settings.cy - ((settings.outerCircle.radius / 2)) + 10) + ") scale(0.5, 0.5) rotate(-45)");
        this.append(tiltedLeftButton);
	}

	$.fn.createTitleUnderline = function(options){
		var settings = $.extend({
			x: 50,
			y: 70,
			width: 130,
			height: 8,
			fill: '#fff'
		}, options);

		var underline = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
		underline.setAttribute("fill", settings.fill);
		underline.setAttribute("points", settings.x + "," + settings.y + " " +
			(settings.x + 10) + "," + (settings.y - settings.height) + " " +
			(settings.x + settings.width) + "," + (settings.y - settings.height) + " " +
			(settings.x + settings.width) + "," + settings.y);

		this.append(underline);
	}

	$.fn.createSineWavePattern = function(options) {
		var origin = { //origin of axes
		    x: 100,
		    y: -70
		};
		var amplitude = 85; // wave amplitude
		var rarity = 1; // point spacing
		var freq = 0.0125; // angular frequency
		var phase = 90; // phase angle

		for(var repetitions = 0; repetitions < 40; repetitions++){
			for (var i = -100; i < 1000; i++) {
			    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

			    line.setAttribute('x1', (i - 1) * rarity + origin.x);
			    line.setAttribute('y1', Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y);

			    line.setAttribute('x2', i * rarity + origin.x);
			    line.setAttribute('y2', Math.sin(freq * (i + phase)) * amplitude + origin.y);

			    line.setAttribute('style', "stroke:white;stroke-width:1;opacity: 0.1;");

			    this.append(line);
			}

			origin.y += 10;
		}
	}

}(jQuery));