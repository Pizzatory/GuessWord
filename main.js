function UseR(){
    p1_name=document.getElementById("p1input").value;
    p2_name=document.getElementById("p2input").value;
    localStorage.setItem("p1",p1_name);  
    localStorage.setItem("p2",p2_name);
    window.location="game_page.html";    
}
