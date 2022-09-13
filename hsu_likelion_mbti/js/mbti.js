const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 12;



function addAnswer(answerText,qIdx,idx){
    var a =document.querySelector('.aBox');
    var answer = document.createElement('button');

    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');

    answer.classList.add('fadeIn');

    a.appendChild(answer);

    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0; i<children.length;i++){
            children[i].disabled = true;

            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.Animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{

            var target = qnaList[qIdx].a[idx].type;
            var preValue = parseInt(document.getElementById(target).getAttribute('value'));
            if(idx == 0){
                parseInt(document.getElementById(target).setAttribute('value',preValue+1));
                
            }
            else{
                parseInt(document.getElementById(target).setAttribute('value',preValue));
            }
            console.log('idx='+idx);
            console.log('prevalue='+document.getElementById(target).getAttribute('value'));    

            for(let i=0;i<children.length;i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450);
    },false);
}   



function calResult(){
    var mbti = "";
        //($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
    
        parseInt(document.getElementById("EI").getAttribute('value')) <1 ? mbti += "I" : mbti += "E";
        parseInt(document.getElementById("SN").getAttribute('value')) <1 ? mbti += "N" : mbti += "S";
        parseInt(document.getElementById("TF").getAttribute('value')) <1 ? mbti += "F" : mbti += "T";
        parseInt(document.getElementById("JP").getAttribute('value')) <1 ? mbti += "P" : mbti += "J";
        console.log(document.getElementById("EI").getAttribute('value'));
        console.log(mbti);
        return mbti;
        
}

var best_conn = "";
var worst_conn = "";

function best_worst(mbti_result) {
    if (mbti_result == "ESFP") {
        best_conn = "ISTJ"
        worst_conn = "ENFJ"
    }
    else if (mbti_result == "ESTP") {
        best_conn = "ISFJ"
        worst_conn = "INFP"
    }
    else if (mbti_result == "ESFJ") {
        best_conn = "ISTP"
        worst_conn = "ENFP"
    }
    else if (mbti_result == "ENFP") {
        best_conn = "INTJ"
        worst_conn = "ISTP"
    }
    else if (mbti_result == "ENTP") {
        best_conn = "INFJ"
        worst_conn = "ISFP"
    }
    else if (mbti_result == "ENTJ") {
        best_conn = "INTP"
        worst_conn = "INFJ"
    }
    else if (mbti_result == "ESTJ") {
        best_conn = "ISFP"
        worst_conn = "INFP"
    }
    else if (mbti_result == "ENFJ") {
        best_conn = "INFP"
        worst_conn = "ISTP"
    }


    else if (mbti_result == "ISFP") {
        best_conn = "ESTJ"
        worst_conn = "ENTP"
    }
    else if (mbti_result == "ISFJ") {
        best_conn = "ESTP"
        worst_conn = "INFP"
    }
    else if (mbti_result == "ISTP") {
        best_conn = "ESFJ"
        worst_conn = "ENFP"
    }
    else if (mbti_result == "ISTJ") {
        best_conn = "ESFP"
        worst_conn = "ENFJ"
    }
    else if (mbti_result == "INFP") {
        best_conn = "ENFJ"
        worst_conn = "ESTP"
    }
    else if (mbti_result == "INFJ") {
        best_conn = "ENTP"
        worst_conn = "ESTJ"
    }
    else if (mbti_result == "INTP") {
        best_conn = "ENTJ"
        worst_conn = "ESFP"
    }
    else if (mbti_result == "INTJ") {
        best_conn = "ENFP"
        worst_conn = "ESFJ"
    }
}

function setResult(){
    let mbti_result = calResult();
    //let mbti_result = "ESFP";

    
    function find_mbti(element){
        if(element.name === mbti_result)
        return true;
    }

    const mbti_real_result = infoArray.find(find_mbti); //해당 mbti 리스트 
    

    console.log(mbti_real_result.char); //상상부기
    console.log(mbti_result);   //ESFP

    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = mbti_real_result.subtitle;

    const resultTitle = document.querySelector('.resultTitle');
    resultTitle.innerHTML = mbti_real_result.title + mbti_real_result.char;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = mbti_real_result.img;

    resultImg.src = imgURL;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = "#"+mbti_real_result.name;

    const resultDesc1 = document.querySelector('.resultDesc1');
    const resultDescTitle1 = document.querySelector('.resultDescTitle1');
    resultDesc1.innerHTML = mbti_real_result.explain;

    const resultDesc2 = document.querySelector('.resultDesc2');
    const resultDescTitle2 = document.querySelector('.resultDescTitle2');
    resultDesc2.innerHTML = mbti_real_result.favorite;

    const resultDesc3 = document.querySelector('.resultDesc3');
    const resultDescTitle3 = document.querySelector('.resultDescTitle3');
    resultDesc3.innerHTML = mbti_real_result.dislike;



    best_worst(mbti_result);

    function find_best_mbti(element){
        if(element.name === best_conn)
        return true;
    }

    function find_worst_mbti(element){
        if(element.name === worst_conn)
        return true;
    }
    console.log("best="+best_conn);

    const mbti_best_result = infoArray.find(find_best_mbti);
    const mbti_worst_result = infoArray.find(find_worst_mbti);
    
    const mbti_best_detail = document.querySelector('.mbti_best_detail');
    mbti_best_detail.innerHTML = mbti_best_result.title + mbti_best_result.char;

    const mbti_worst_detail = document.querySelector('.mbti_worst_detail');
    mbti_worst_detail.innerHTML = mbti_worst_result.title + mbti_worst_result.char;

    
    
    var mbti_best_image = document.createElement('img');
    const imgDiv1 = document.querySelector("#mbti_best_image");
    var imgURL = mbti_best_result.img;

    mbti_best_image.src = imgURL;
    mbti_best_image.classList.add('img-fluid');
    imgDiv1.appendChild(mbti_best_image);

    var mbti_worst_image = document.createElement('img');
    const imgDiv2 = document.querySelector("#mbti_worst_image");
    var imgURL = mbti_worst_result.img;

    mbti_worst_image.src = imgURL;
    mbti_worst_image.classList.add('img-fluid');
    imgDiv2.appendChild(mbti_worst_image);
}



document.getElementById("mbti_best_image").addEventListener("onclick", chanageMBTI);
document.getElementById("mbti_worst_image").addEventListener("onclick", chanageMBTI);


function chanageMBTI(event){
    var mbti = event.path[0].src.slice(-8, -4).toUpperCase();
    console.log(mbti);

    function find_mbti(element){
        if(element.name === mbti)
        return true;
    }

    const mbti_result = infoArray.find(find_mbti);

    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = mbti_result.subtitle;

    const resultTitle = document.querySelector('.resultTitle');
    resultTitle.innerHTML = mbti_result.title + mbti_result.char;


    var resultImg = document.querySelector("#resultImg").lastChild;

    var imgURL = mbti_result.img;
    resultImg.setAttribute("src", imgURL);

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = "#"+mbti_result.name;

    const resultDesc1 = document.querySelector('.resultDesc1');
    resultDesc1.innerHTML = mbti_result.explain;

    const resultDesc2 = document.querySelector('.resultDesc2');
    resultDesc2.innerHTML = mbti_result.favorite;

    const resultDesc3 = document.querySelector('.resultDesc3');
    resultDesc3.innerHTML = mbti_result.dislike;


    best_worst(mbti);

    function find_best_mbti(element){
        if(element.name === best_conn)
        return true;
    }

    function find_worst_mbti(element){
        if(element.name === worst_conn)
        return true;
    }

    const mbti_best_result = infoArray.find(find_best_mbti);
    const mbti_worst_result = infoArray.find(find_worst_mbti);
    
    const mbti_best_detail = document.querySelector('.mbti_best_detail');
    mbti_best_detail.innerHTML = mbti_best_result.title + mbti_best_result.char;

    const mbti_worst_detail = document.querySelector('.mbti_worst_detail');
    mbti_worst_detail.innerHTML = mbti_worst_result.title + mbti_worst_result.char;


    var mbti_best_image = document.querySelector("#mbti_best_image").lastChild;
    var imgURL = mbti_best_result.img;
    mbti_best_image.setAttribute("src", imgURL);

    var mbti_worst_image = document.querySelector("#mbti_worst_image").lastChild;
    var imgURL = mbti_worst_result.img;
    mbti_worst_image.setAttribute("src", imgURL);
}



function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";            
        }, 450);
    },450);
    setResult();
    
}


function goNext(qIdx){

    if(qIdx == endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    var countstatusNum = document.querySelector('.countStatus');
    countstatusNum.innerHTML = (qIdx+1)+"/"+endPoint;

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+"%";
}

function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=> {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        },450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
}

function shareFacebook() {
    var sendUrl = "https://hsu-likelion-mbti.netlify.app/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function clip() {

    var url = 'https://hsu-likelion-mbti.netlify.app/';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    /* url = window.document.location.href;*/
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.")
}


