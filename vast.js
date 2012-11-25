/*
var c = v(document.getElementById('canvas')),
    ctx = c.ctx;
ctx.moveTo(10, 10);
ctx.lineTo(100, 100);
ctx.stroke()
*/

(function(window) {
	'use strict';

	// For more compact mathematical expressions
	var sin = Math.sin, cos = Math.cos, tan = Math.tan;
	var acos = Math.acos, sqrt = Math.sqrt, abs = Math.abs;
	var pi = Math.PI, twopi = Math.PI * 2;
	var rand = Math.random;

	// Define a local copy of Vast
	function Vast(node) {
		node = node[0] || null;
		// this.canvas = node[0];
		// this.ctx = this.canvas.getContext('2d');

		// If node exists
		if (node) {
			// Make node an Element if it isn't one already
			node = (node.nodeType === 1) ? node : document.getElementById(node);

			// If node is not a canvas create one and append it to the node
			if (node.nodeName.toLowerCase() !== 'canvas') {
				// Check for an existing canvas with ID vast just in case
				if (document.getElementById('vast') === null) {
					this.canvas = document.createElement('canvas');
					this.canvas.id = 'vast';
					this.container.appendChild(this.canvas);
					throw 'The node provided was not a canvas element. A new canvas with ID "vast" was created and appended within the node.';
				} else {
					// A canvas with ID 'vast' exists so use it
					this.canvas = document.getElementById('vast');
				}
			}
			else {
				// node IS a canvas element!
				this.canvas = node;
			}

			this.ctx = this.canvas.ctx = this.canvas.getContext('2d');
			this.canvas.width = this.canvas.width;
			this.canvas.height = this.canvas.height;
		}
		// If node is undefined
		else {
			throw 'There was no node provided.';
		}
	}

	Vast.prototype = {
		log: function() {
			console.log(this.ctx);
			return this;
		},

		arc: function() {

		},
		arcTo: function() {

		},
		circle: function() {

		},

		rect: function() {

		},
		rectangle: function() {

		},
		roundRectangle: function() {

		},

		moveTo: function() {

		},
		lineTo: function() {

		},
		line: function() {

		},
		lineCap: function() {

		},
		lineJoin: function() {

		},
		lineWidth: function() {

		},

		font: function() {

		},
		measureText: function() {

		},
		textAlign: function() {

		},
		textBaseline: function() {

		},

		bezierCurveTo: function() {

		},
		quadraticCurveTo: function() {

		},
		quadraticCurveToFixed: function() {

		},

		beginPath: function() {

		},
		closePath: function() {

		},
		clearRect: function() {

		},

		save: function() {

		},
		restore: function() {

		},
		reset: function() {

		},

		currentPos: function() {

		},
		isPointInPath: function() {

		},
		boundingBox: function() {

		},
		miterLimit: function() {

		},

		clip: function() {

		},
		rotate: function() {

		},
		scale: function() {

		},
		translate: function() {

		},
		transform: function() {

		},
		setTransform: function() {

		},

		globalAlpha: function() {

		},
		globalCompositeOperation: function() {

		},

		createImageData: function() {

		},
		putImageData: function() {

		},
		drawImage: function() {

		},

		createLinearGradient: function() {

		},
		createRadialGradient: function() {

		},
		createPattern: function() {

		},

		shadowBlur: function() {

		},
		shadowColor: function() {

		},
		shadowOffsetX: function() {

		},
		shadowOffsetY: function() {

		},

		fill: function() {

		},
		fillCircle: function() {

		},
		fillRect: function() {

		},
		fillStyle: function() {

		},
		fillText: function() {

		},

		stroke: function() {

		},
		strokeCircle: function() {

		},
		strokeRect: function() {

		},
		strokeStyle: function() {

		},
		strokeText: function() {

		}

	};


	// The wrapper
	function V() {
		return new Vast(arguments);
	}

	// Reveal X to the global object.
	// Window is the global object in most situations:
	window.V  = window.v = window.vast = V;

})(window);