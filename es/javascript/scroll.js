// JavaScript Document

window.addEvent('domready', function(){
									
									
var scroll = new Fx.Scroll(window, {
	wait: false,
	duration: 1500,
	offset: {'x': 0, 'y': 0},
	transition: Fx.Transitions.Quad.easeInOut
});
 
//-------------------------------------- netsaluti ----------------------
$$('.inicio').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('inicio');
	});
});
$$('.somos').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('somos');
	});
});
$$('.hacemos').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('hacemos');
	});
});
$$('.portafolio').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('portafolio');
	});
});
$$('.contacto').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('contacto');
	});
});

//-----------------------------------------------------------------------
$$('.home').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('header');
	});
});

$$('.portfolio').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		// event = new Event(event).stop();
		scroll.toElement('portfolio');
	});
});

$$('.about').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		event = new Event(event).stop();
		scroll.toElement('about');
	});
});

$$('.contact').each(function(el){
	el.href = "javascript: void(0)";
	el.addEvent('click', function(event) {
		event = new Event(event).stop();
		scroll.toElement('contact');
	});
});
 


});

