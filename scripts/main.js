var aboutBut  = document.getElementById("aboutBut"),
    projectsBut = document.getElementById("projectsBut"),
    resumeBut = document.getElementById("resumeBut"),
    aboutDiv = document.getElementById("aboutDiv"),
    projectsDiv = document.getElementById("projectsDiv"),
    resumeDiv = document.getElementById("resumeDiv");

aboutBut.addEventListener("click", function(){
    aboutDiv.style.display = "block";
    projectsDiv.style.display = "none";
    resumeDiv.style.display = "none";
});

aboutBut.addEventListener("mouseover", function(){
    aboutBut.style.backgroundColor = "sandybrown";
    aboutBut.style.color = "white";
});

aboutBut.addEventListener("mouseout", function(){
    aboutBut.style.backgroundColor = "antiquewhite";
    aboutBut.style.color = "grey";
});

projectsBut.addEventListener("click", function(){
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "block";
    resumeDiv.style.display = "none";
});

projectsBut.addEventListener("mouseover", function(){
    projectsBut.style.backgroundColor = "sandybrown";
    projectsBut.style.color = "white";
});

projectsBut.addEventListener("mouseout", function(){
    projectsBut.style.backgroundColor = "antiquewhite";
    projectsBut.style.color = "grey";
});

resumeBut.addEventListener("click", function(){
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    resumeDiv.style.display = "block";
});

resumeBut.addEventListener("mouseover", function(){
    resumeBut.style.backgroundColor = "sandybrown";
    resumeBut.style.color = "white";
});

resumeBut.addEventListener("mouseout", function(){
    resumeBut.style.backgroundColor = "antiquewhite";
    resumeBut.style.color = "grey";
});

