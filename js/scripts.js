

$(document).ready(function() {
  var blanks = ["header","paragraph", "image"];
  var elements =["h1","p","img"];

      elements.forEach(function(element) {
        $(element).click(function() {
          index=elements.indexOf(element);
          alert("This is " + blanks[index] + ".");
      });
    });
  });
