var system ={}; 
 var p = navigator.platform; 
 system.win = p.indexOf("Win") == 0; 
 system.mac = p.indexOf("Mac") == 0; 
 system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
 $.getScript("https://cdn.jsdelivr.net/gh/ivampiresp/special-JavaScript/yinghua.js");
 }
