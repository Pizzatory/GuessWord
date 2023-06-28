p_one=localStorage.getItem("p1")
p_two=localStorage.getItem("p2")

playy1score=0
playy2score=0

document.getElementById("p11").innerHTML=p_one+" : ";
document.getElementById("p22").innerHTML=p_two+" : ";

document.getElementById("p11sco").innerHTML=playy1score;
document.getElementById("p22sco").innerHTML=playy2score;

document.getElementById("Quest").innerHTML="Question asked by - "+p_one;
document.getElementById("Ans").innerHTML="Answered by - "+p_two;

function send(){
    console.log("send()");
    word=document.getElementById("input").value;
    word=word.toLowerCase();
    console.log(word);
    c1=word.charAt(1);
    temp1=Math.floor(word.length/2);
    c2=word.charAt(temp1);
    temp2=Math.floor(word.length-1);
    c3=word.charAt(temp2);
    remove_c1=word.replace(c1,"_");
    console.log(remove_c1);
    remove_c2=remove_c1.replace(c2,"_");
    console.log(remove_c2);
    remove_c3=remove_c2.replace(c3,"_");
    console.log(remove_c3);

    Question="<h4 id='Q'>"+remove_c3+"</h4>";
    input_box="<br> answer: <input type='text' id='input_checkbox'><br>";
    checker="<br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row=Question+input_box+checker;
    document.getElementById("output").innerHTML=row;
    document.getElementById("input").value="";
    
}
Question_turn="p_one";
Answer_turn="p_two";
function check(){
    get_answer=document.getElementById("input_checkbox").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(Answer_turn=="p_one"){
            playy1score=playy1score+1;
            document.getElementById("p11sco").innerHTML=playy1score;
        }
        else{
            playy2score=playy2score+1;
            document.getElementById("p22sco").innerHTML=playy2score;
        }
    }
    if(Question_turn=="p_one"){
        Question_turn="p_two";
        document.getElementById("Quest").innerHTML="Question asked by - "+p_two;
    }
    else{
        Question_turn="p_one";
        document.getElementById("Quest").innerHTML="Question asked by - "+p_one;
    }
    if(Question_turn=="p_one"){
        Question_turn="p_two";
        document.getElementById("Ans").innerHTML="Answered by - "+p_two;
    }
    else{
        Question_turn="p_one";
        document.getElementById("Ans").innerHTML="Answered by - "+p_one;
    }
    document.getElementById("output").innerHTML="";
}