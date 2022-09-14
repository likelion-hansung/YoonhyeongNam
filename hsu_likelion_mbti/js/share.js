//페이스북 공유
function shareFacebook() {
    var sendUrl = "https://hsu-likelion-mbti.netlify.app/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나와 닮은 상상부기 프렌즈는?',
            description: '#MBTI #상상부기 #한성냥이 #꼬꼬꾸꾸 #상찌 # #HSU #멋사 #운영진수고했다',
            imageUrl: './img/thumbnail.png',
            link: {
                mobileWebUrl: 'https://hsu-likelion-mbti.netlify.app/',
                webUrl: 'https://hsu-likelion-mbti.netlify.app/',
            },
        },
        buttons: [
            {
                title: '테스트 하러가기!!',
                link: {
                    mobileWebUrl: 'https://hsu-likelion-mbti.netlify.app/',
                    webUrl: 'https://hsu-likelion-mbti.netlify.app/',
                },
            },
        ],
    })
}

//클립보드에 복사
function clip() {

    var url = 'https://hsu-likelion-mbti.netlify.app/';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.")
}