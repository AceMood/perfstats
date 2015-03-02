/**
 * Author: AceMood
 * Email: zmike86@gmail.com
 */

/**
 * For Legacy Internet Explorer, we only record four key points:
 * 1: The first bytes read by Browser, means that the FB have been accepted
 *    by Browser and will be parsed immediately.
 * 2: Script can interact with webpage, means the DOM have been constructed
 *    and css have been download and parsed, the CSSOM have been constructed.
 *    It's very important for us because it indicates that end user could now
 *    see the text and style on the page.
 * 3: Dom Complete. IE only supports DCL event from 9.0. So we could not use
 *    it directly, and on the other hand, time between DCL START and DCL END
 *    often be occupied by js library such as jQuery. We record the time that
 *    document.readyState becomes 'complete' (which triggered after DCL END).
 * 4: At last we record the onload time of window which means all resources
 *    (in critical path or not) have been loaded.
 *
 * Arguments Note:
 * g: global object, commonly is window;
 * d: document object;
 * D: NATIVE Object Date;
 * a: pingback server address;
 * k: get current time;
 * p: pf object provide methods push data and record time point;
 * b: bind internal method;
 * i: image object for pingback;
 */

/**
 * Usage:
 * see "../demos/ie_legacy.html"
 */

(function(g,d,D,a,k,p,b,i){
  k=function(){return D.now?D.now():(+new D)};
  g.pf=p={s:_t_?_t_:k(),r:0,c:0,o:0};
  g._t_=function(c){p[c]=k()-p.s;};
  // helper function bind event
  b=function(o,e,h){
    if(o.addEventListener){o.addEventListener(e,h,0)}
    else if(o.attachEvent){o.attachEvent('on'+e,h)}
    else{o['on'+e]=h}
  };
  // record window.onload time point
  b(g,'load',function(){
    p.o=k()-p.s;
    i=new Image();
    i.src=a+['?s='+p.s,'r='+p.r,'c='+p.c,'o='+p.o].join('&')
  });
  // record doc.readystatechange time point
  b(d,'readystatechange',function(){if(d.readyState=='complete'){p.c=k()-p.s}})
})(window,document,Date,'//ping.zhushou.sogou.com/pf.gif');