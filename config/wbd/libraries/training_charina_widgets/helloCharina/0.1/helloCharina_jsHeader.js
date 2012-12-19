
var HelloCharina = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloCharina.init()");

//			// attach an event to an HTML element
//			var self = this;
//			jQuery(".HelloCharina .myElementClass").click(function() {
//				self.myMethod();
//				// do something
//				...
//			});
		},
		
		myMethod: function() {
			alert("HelloCharina.myMethod()");
		}
		// no comma after last method
	};
}();

//jQuery(HelloCharina.init()); // Run after page loads