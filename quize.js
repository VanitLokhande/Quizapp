const data=[
    {
        "que":" Which one of the following river flows between Vindhyan and Satpura ranges?",
        "a":"Narmada",
        "b":"Mahanadi",
        "c":"Son",
        "d":"Netravati",
        "correct":"a"
    },

    {
        "que":"  The Central Rice Research Station is situated in?",
        "a":"Chennai",
        "b":"Cuttack",
        "c":"Bangalore",
        "d":"Quilon",
        "correct":"b"
    },

    {
        "que":" The country that has the highest in Barley Production?",
        "a":"China",
        "b":"India",
        "c":"Russia",
        "d":"France",
        "correct":"c"
    },
    {
        "que":" The hottest planet in the solar system?",
        "a":"Mercury",
        "b":"Venus",
        "c":"Mars",
        "d":"Jupiter",
        "correct":"b"
    }
]

let index =0;
let right=0;
let wrong =0;
const total = data.length;
const option=document.querySelectorAll(".Option");
const load=()=>{
    reset();
    if(index == total){
        return endfn();
    }
    const question=document.getElementById("question");
    
    const dat = data[index];
    question.innerText=`${index+1})${dat.que}`;
    option[0].nextElementSibling.innerText=dat.a;
    option[1].nextElementSibling.innerText=dat.b;
    option[2].nextElementSibling.innerText=dat.c;
    option[3].nextElementSibling.innerText=dat.d;
}


 const submitquize =()=>{
    console.log("hhhhh");
    const Data = data[index];
    const ans = getans();
    if(ans === Data.correct){
        right++;
    }
    else{
        wrong++;
    }
    console.log("kjkkj");
    index++;
    
    load();
    return;
}


const getans =()=>{
    let answer;
    option.forEach((input)=>{
        if(input.checked){
            console.log(input.value);
            answer =input.value;
            
        }
    })
    return answer;
}

const reset=()=>{
    option.forEach((input)=>{
        input.checked = false;
    })
}

const endfn =()=>{
    console.log("endfn");
    document.getElementById("box").innerHTML=`
    <h1>Quiz Over<h1>
    <br>
    <h1>Correct Answers- ${right}<h1>
    <br>
    <h1>Wrong Answers- ${wrong}<h1>`
}

load();
//initial call for trigger first question