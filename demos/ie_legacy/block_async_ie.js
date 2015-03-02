(function() {

  var span = document.getElementsByTagName("span")[0];
  span.textContent = "interactive";
  span.style.display = "inline";

  var loadTime = document.createElement("div");

  // log
  setTimeout(function() {
    loadTime.innerHTML =
      "JS API : " +
      "<table><tr><td>event occur</td><td>units: ms</td></tr>" +
      "<tr><td>document FB parsed on: </td><td>" + pf.s +
      "</td></tr><tr><td>document can interactive on: </td><td>" + pf.r +
      "</td></tr><tr><td>dcl event occur on: </td><td>" + (dcl - startTime) +
      "</td></tr><tr><td>document trigger complete on: </td><td>" + pf.c +
      "</td></tr><tr><td>window.onload trigger on: </td><td>" + pf.o + "</td></tr></table>";

    loadTime.style.color = "blue";
    document.body.appendChild(loadTime);
  }, 0);


})();
