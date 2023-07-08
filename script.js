function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    
    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }
  
  document.querySelectorAll('a.smoth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      var targetElement = document.querySelector(this.getAttribute('href'));
      scrollTo(document.documentElement, targetElement.offsetTop, 1000);
    });
  });

function showhidden(element){
  div=document.getElementById(element);
  if(div.className == "dica hidden")
      div.className = "dica show"
  else if(div.className == "dica show")
          div.className = "dica hidden"
        else if(div.className == "resposta hidden")
                div.className="resposta show"
            else
                div.className="resposta hidden"
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hiddenHeader");
  } else {
    document.getElementById("header").classList.add("hiddenHeader");
  }
  prevScrollpos = currentScrollPos;
};