$(document).ready(function(){$(".js-section-features").waypoint(function(n){"down"===n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")},{offset:"60px;"}),$(".js-scroll-to-plan").click(function(){$("html, body").animate({scrollTop:$(".js-section-plans").offset().top},1e3)}),$(".js-scroll-to-start").click(function(){$("html, body").animate({scrollTop:$(".js-section-features").offset().top},1e3)}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top},1e3),!1}})}),$(".js-wp-1").waypoint(function(n){$(".js-wp-1").addClass("animated fadeIn")},{offset:"40%"}),$(".js-wp-2").waypoint(function(n){$(".js-wp-2").addClass("animated fadeInUp")},{offset:"40%"}),$(".js-wp-3").waypoint(function(n){$(".js-wp-3").addClass("animated fadeIn")},{offset:"40%"}),$(".js-wp-4").waypoint(function(n){$(".js-wp-4").addClass("animated pulse")},{offset:"40%"}),$(".js-mob-nav-icon").click(function(){var n=$(".js-main-nav"),o=$(".js-mob-nav-icon i");n.slideToggle(200),o.hasClass("ion-navicon-round")?o.removeClass("ion-navicon-round").addClass("ion-close-round"):o.removeClass("ion-close-round").addClass("ion-navicon-round")});var n=new GMaps({div:".map",lat:28.1173563,lng:-15.35,zoom:12});n.addMarker({lat:28.1173563,lng:-15.4746367,title:"Las Palmas",infoWindow:{content:"<p>Omnifood Lisbon office</p>"}})});