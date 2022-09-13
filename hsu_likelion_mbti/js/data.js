// E : 0
// I : 1
// S : 2
// N : 3
// T : 4
// F : 5
// P : 6
// J : 7

const qnaList = [
    {
        q: "친구를 만나러 나가려던 참에 급한일이 생겨 못만날 것 같다고 연락이 왔다. 당신의 반응은?",
        a: [
            {
                answer: "준비 다했는데... 다른 친구한테 오늘 시간 되냐고 물어봐야겠다.",
                type: "EI",
            },
            {
                answer: "오히려 좋아, 밀린 드라마 봐야지",
                type: "EI",
            },
        ],
    },

    {
        q: "이번 학기에 팀플 같이하는 친구들과 친해지려 같이 상상파크에 갔다. 이때 당신은? ",
        a: [
            {
                answer: "새로운 대화의 주제를 꺼내면서 대화를 유도한다.",
                type: "EI",
            },
            {
                answer: "친구들의 질문에 열심히 대답한다.",
                type: "EI",
            },
        ],
    },

    {
        q: "같이 밥을 먹는 동기가 학교에 안와서 혼자 밥을 먹게 되었다. 이때 당신은? ",
        a: [
            {
                answer: "혼밥은 역시 학식당이지. 소금구이 덮밥 있으면 좋겠당ㅎㅎ",
                type: "EI",
            },
            {
                answer: "포장해갈까..? 배고픈거 참고 집에 가서 먹어야겠다!",
                type: "EI",
            },
        ],
    },
    
    {
        q:"내일 대면으로 기말고사를 보는 당신 ! 열심히 공부하고 쉬고 있는 도중 당신은 ?",
        a: [
            {
                answer: "중간 고사 때 잘 못봐서 이번 기말 고사 땐 잘봐야돼 !! 교수님이 중요하시다 한 것부터 해야겠다.",
                type: "SN",
            },
            {
                answer: "내일 태풍이 와서 비대면으로 시험 봤으면 좋겠다... 내일 갑자기 다음주에 시험 본다고 했으면 좋겠다 ㅠㅠ",
                type: "SN",
            },
        ],
    },

    {
        q: "한성대에 입학한 당신 ! 한성대 마스코트인 상상부기가 반겨주고 있다 이때 당신이 드는 생각은 ?", 
        a: [
            {
                answer: "귀엽네, 한성+꼬부기 인건가",
                type: "SN",
            },
            {
                answer: "동글동글하고 너무 귀엽다, 상상부기는 언제 만들어졌을까, 따라 그리기 쉽겠는데? 나중에 그려봐야지 !",
                type: "SN",
            },
        ],
    },

    {
        q: "상상빌리지에 살고있는 당신! 오늘은 B1 조리실에 가서 떡볶이 만들기에 도전해볼것이다!",
        a: [
            {
                answer: "백종원님의 떡볶이 레시피 검색! 아 근데 재료가 하나 없네.. 담에 만들어야겠다..",
                type: "SN",
            },
            {
                answer: "저번에 백종원님 티비 프로에서 어떻게 하는지 다 봐놨지!! 음 설탕이 없네 대신 꿀 넣어야겠당",
                type: "SN",
            },
        ],
    },

    {
        q: "수업이 시작된지 10분이 지났는데도 친구가 오지 않는다. 카톡을 해봤더니 몸이 안좋다며 코로나일 것 같다는 답장이 왔다",
        a: [
            {
                answer: "자가키트 해봤어? 교수님한테 말씀부터 드려! 결석처리 될라 ㅠㅠ",
                type: "TF",
            },
            {
                answer: "몸 많이 안좋아 ..? 코로나 아니었음 좋겠다.. 일단 수업 걱정하지말구 푹 쉬어. 수업은 걱정마 내꺼 필기 보여줄게! ",
                type: "TF",
            },
        ],
    },

    {
        q: "친구가 우울해서 머리를 잘랐다고 한다. 이때 당신은 ?",
        a: [
            {
                answer: "머리 자른거 잘 어울리네, 무슨 일 있었어??",
                type: "TF",
            },
            {
                answer: "무슨 일 있었어? 괜찮아??",
                type: "TF",
            },
        ],
    },

    {
        q: "친구가 과제를 하던 중 노트북이 갑자기 꺼져서 과제가 다 날라간 것 같다고 한다. 이때 당신은 ?",
        a: [
            {
                answer: "갑자기?! 그거 구글링하면 복구하는 법 뜰거야 빨리 그것부터 찾아서 해봐... 어카냐..",
                type: "TF",
            },
            {
                answer: "헐???? 빨리 다시 켜봐! 제발 자동 백업 되어 있어라.. 어떡해..... 너 그거 하루종일 했잖아..",
                type: "TF",
            },
        ],
    },

    {
        q: "교수님이 다음 주 과제까지 e-class에 등록하셨다. 이때 당신은 ?",
        a: [
            {
                answer: "일요일까지? 일단 플래너에 마감 날짜 적어야겠다. 과제 보니까 적어도 수요일날에는 강의 들어야 할 수 있겠다.",
                type: "JP",
            },
            {
                answer: "일요일까지라고? 목요일쯤 강의 들으면 되겠지.",
                type: "JP",
            },
        ],
    },

    {
        q: "동기들과 스타동에서 밥을 먹고 와글즈에 가서 술도 먹었다. 오늘 모든 계산을 내가 했다. 집을 가는 동안 당신은 ?",
        a: [
            {
                answer: "어우 어지러.. 스타동이랑 와글즈 합치고 계산하면.. 단톡에 정산하기 보내두고 빨리 자야겠다",
                type: "JP",
            },
            {
                answer: "아 피곤하다.. 하 돈계산은.. 내일 해야지.. ",
                type: "JP",
            },
        ],
    },

    {
        q: "힘들지만 재밌었던 농촌 체험활동을 끝내고 드디어 집에 돌아왔다. 짐들이 산더미처럼 쌓여있다.",
        a: [
            {
                answer: "아오 삭신이야.. 짐 풀고 빨래 돌리고 씻어야겠다..",
                type: "JP",
            },
            {
                answer: "몰라몰라 피곤해 삭신이 쑤신다.. 일단 씻고 자야지..",
                type: "JP",
            },
        ],
    },

];

var index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var infoArray = 
        [
            { 
                    favorite: "프렌즈들과의 파티", 
                    dislike: "너 혼자 해<br>재밌게 얘기하다가 갑자기 진지한 대화", 
                    char: "상상부기", 
                    name: "ESFP", 
                    title: "노는게 제일 좋아 ", 
                    subtitle: "동에번쩍 서에번쩍", 
                    explain: "노는게 제일 좋은 상상부기는 꽤나 단순하고 열정적이에요. 쉬는 날에도 프렌즈들과 놀고 프렌즈들의 친구도 자신의 친구라고 생각하기 때문에 발이 아주 넓어요. 한성대에서 부기를 모르는 사람이 없을 정도랍니다! 어떤 자리에 가도 부기를 만날 수 있을 정도로 노는 것을 좋아하는 부기는 사실은 나가기 전 까진 꽤나 귀찮아하는 편이에요. <br>부기는 즉흥적이고 성격이 급해서 섣불리 일을 시작하는 경우가 많답니다. 그렇다고 걱정이 없는 건 아니에요, 다만 그 걱정은 미래의 자신에게 맡길 뿐... ", 
                    img: "img/mbti/esfp.png" 
            },
            { 
                favorite: "인정받는게 좋아요", 
                dislike: "아무생각 내뱉은 말에 상처 잘 받아..!",
                char: "상상부기", 
                name: "ESFJ", 
                title: "슈퍼핵인싸 ", 
                subtitle: "친구 사귀는게 제일 쉬웠어요", 
                explain: "슈퍼핵인싸 상상부기는 프렌즈들에게 관심도 많고 정이 아주 많아 모두를 잘 챙긴답니다. 어쩔 땐 자신보다도 남을 더 챙기고 은근히 상처도 잘 받아요. 어색한 분위기를 싫어하는 부기는 먼저 말을 걸어주기 때문에 새로운 친구를 잘 사귀고 사회생활을 잘 한다는 얘기도 많이 들어요. 누구에게나 자상하고 스윗한 부기는 감성적이라 눈물을 잘 흘린답니다. <br>일어나지 않은 일에대한 걱정이 조금 있는 편이라 어릴 적 부터 함께한 가족과 프렌즈들에겐 잔소리가 있는 편이에요. 부기가 잔소리를 시작하면 상찌는 등껍질 가방에 숨는답니다.", 
                img: "img/mbti/esfj.png" 
            },
            
            { 
                favorite: "똑똑하단 말이 좋아요", 
                dislike: "카톡 답장이 너무 느리다...!?!?!!?<br>장기적인 프로젝트 너무 질려", 
                char: "꼬꼬꾸꾸", 
                name: "ESTP", 
                title: "내일은 없어 ", 
                subtitle: "일단 하고 보자고 !!!", 
                explain: "내일은 없어 꼬꼬꾸꾸는 재미를 우선으로 생각하고 즉흥적이에요. 그렇기 때문에 내기, 번개만남을 좋아해요.  문제 해결에 있어서는 누구보다 이성적이고 현실적이지만 자신이 하고 싶은 일에 있어서는 자신의 상황보단 자신이 하고 싶은 일이 먼저에요. 도전적이고 주장도 강한 편이기 때문에 프렌즈들의 걱정에도 해야할 일을 일단 미뤄버리고 막무가내로 저질러 버릴 때가 많아요. 타고 있는 스포츠카도 충동구매의 산물이랍니다.. (상상부기에게 엄청 혼났다는..) <br>다행히(?) 다소 충동적인 행동에 비해 해야할 일은 어떻게든 해내긴 하기 때문에 스스로에 대한 자신감이 넘칩니다. ", 
                img: "img/mbti/estp.png" 
            },
            
            { 
                favorite: "일 잘한다는 말이 제일 짜릿해", 
                dislike: "약속을 했으면 끝까지 지켜!<br>나 무시하지마!!", 
                char: "꼬꼬꾸꾸", 
                name: "ESTJ", 
                title: "멋쟁이 워커홀릭 ", 
                subtitle: "계획은 지키라고 있는거죠", 
                explain: "멋쟁이 워커홀릭 꼬꼬꾸꾸는 어떤 일이든 정확하고 꼼꼼하게 해내요. 자신이 세운 계획을 완벽하게 해내야 한다는 생각이 아주 강해요. 꼬꼬꾸꾸는 현실적이고 이성적이기 때문에 자신과 다른 프렌즈들에게 잔소리를 많이 하는 편이에요. 프렌즈들은 꼬꼬꾸꾸의 뼈 때리는 잔소리에 점점 순살프렌즈가 되어가고 있답니다.. 뭐든 객관적으로 바라보기에 프렌즈들의 고민에 정신적 지지보단 현실적 조언을 해주는 편이에요. <br>여유가 생기면 안주하지 않고 일을 찾아서 하는 성격이라 항상 바빠요. 약간은 딱딱해 보이는 꼬꼬꾸꾸지만 사실은 그 누구보다 프렌즈들을 아끼고 좋아한답니다. ", 
                img: "img/mbti/estj.png" 
            },
            
            { 
                favorite: "새로운 친구 사귀기", 
                dislike: "믿고 잘 따랐는데 배신하지마.. ㅜ <br>놀고 싶은데 날 말리지마!", 
                char: "상상부기", 
                name: "ENFP", 
                title: "댕댕이 탈을 쓴 ", 
                subtitle: "365일 저세상 텐션", 
                explain: "댕댕이 탈을 쓴 상상부기는 친구들이 너무 좋아요! 처음 만나는 사람들도 다 부기의 친구가 돼요!  정문부터 잔디광장까지 인사하느라 바쁜 부기랍니다. 관심을 받는것도 관심을 주는것도 좋아요. 모두가 부기는 항상 신나보인다 얘기하지만, 사실은 예민하고 감성적이랍니다. <br>혼자있는 시간도 너무 중요해요. 그리고 이건 비밀인데요, 댕댕이 탈을 쓴 상상부기가 생각하는 진정한 친구는 생각보다 많지 않아요. ", 
                img: "img/mbti/enfp.png" 
            },
            
            { 
                favorite: "믿음직스럽다는 말 <br>프렌즈들의 신뢰", 
                dislike: "나 두고 몰래 하지마....", 
                char: "상상부기", 
                name: "ENFJ", 
                title: "긍정파워 전도사 ", 
                subtitle: "나의 해피바이러스를 받아라 ~!", 
                explain: "긍정파워 전도사 상상부기는 친구들의 의견을 긍정적으로 받아들이고 눈치도 빨라요. 그래서 꼬꼬와 꾸꾸가 싸울 때 마다 빠르게 등껍질 가방에서 큐피트 화살을 꺼내서 중재해준답니다! <br> 조언도 아주 잘해주어서 프렌즈들의 신뢰를 한 몸에 받아요. 프렌즈들의 부기를 향한 신뢰에서 살아있음을 느끼는 유형이랍니다. 언제나 밝고 씩씩해보이는 부기지만, 공감을 잘해주는 만큼 사실은 상처도 잘 받아요. ", 
                img: "img/mbti/enfj.png" 
            },
            
            { 
                favorite: "너가 제일 재밌어", 
                dislike: "내 말에 경청 안해주는 것", 
                char: "꼬꼬꾸꾸", 
                name: "ENTP", 
                title: "노브레이크 ", 
                subtitle: "빠꾸없는 자유로운 영혼", 
                explain: "노브레이크 꼬꼬꾸꾸는 끊임없는 아이디어와 함께 새로운 시도를 합니다.인생은 '재미'라고 생각하기 때문에 하고 싶은게 생기면 즉흥적으로 실행해요. 꼬꼬꾸꾸는 솔직하고 입담이 좋아 프렌즈들에게 항상 새로운 재미를 선사해주기 때문에 인기가 아주 많아요. 다만 솔직한만큼 자신의 의견을 직설적이고 강하게 내새워 자신도 모르게 프렌즈들의 감정을 상하게 할 때도 있어요.<br>어릴 적 부터 어디로 튈지 모르는 행동을 하던 꼬꼬꾸꾸이기 때문에 꼬꼬꾸꾸의 프렌즈들은 한 번씩은 부모님께 꼬꼬꾸꾸와 놀면 안된다는 소리를 들어보았답니다. 하지만 프렌즈들의 우정은 변치않아요♡", 
                img: "img/mbti/entp.png" 
            },
            
            { 
                favorite: "결과물에 대한 칭찬", 
                dislike: "팀플에서 무임승차하지마!<br>게으르고 멍청한 행동하지마!", 
                char: "꼬꼬꾸꾸", 
                name: "ENTJ", 
                title: "조별과제 버스담당 ", 
                subtitle: "극극극한의 효율쟁이", 
                explain: "조별과제 버스담당 꼬꼬꾸꾸는  끈기와 책임감이 뛰어나요. 비효율적이고 답답한 걸 싫어해서 맡은 일을 빠르고 정확하게 끝낸답니다. 먼저 나서서 이끄는 것을 좋아하진 않지만, 프렌즈들에게 맡기는 것보단 자신이 하는 것이 낫다고 생각해요. <br> 정신차리면 조장이 돼있는 꼬꼬꾸꾸에요. 논리적이고 카리스마 넘쳐보이지만 사실은 상상력도 풍부하고 은근히 관심 받는 것도 즐긴답니다. ", 
                img: "img/mbti/entj.png" 
            },
            
            { 
                favorite: "적당한 관심은 꽤나.. 좋은 것 같기도..", 
                dislike: "갑자기 전화하는거 싫어요.. 용건은 텍스트로..<br>사람 많고 시끌버쩍한 술집 싫어...", 
                char: "상찌", 
                name: "ISFP", 
                title: "집돌이 집순이 ", 
                subtitle: "역시 집이 최고야♡", 
                explain: "집돌이 집순이 상찌는 집이 제일로 좋아요. 하지만 프렌즈들이 어딜 함께 가자고 할 때 거절은 잘 하지 않는 편이에요. 약속이 취소되면 내심 기뻐할 때도 있지만 막상 만나서는 재밌게 놀다 들어갑니다. <br>프렌즈들과 만나기로 하여 외출을 하는 날은 은행, 미용실, 동사무소 등 상찌가 집에 있는 동안 처리하지 못했던 일들을 모두 처리하는 날이에요. 은근히 개그욕심도 있어 프렌즈들 사이에선 상찌 정말 웃기다는 소리를 들어요. 항상 남들의 의견과 부탁을 잘 들어주는 상찌는 착하다는 소릴 많이 듣는데요, 사실은 기분이 상해도 겉으로 티를 안 낼 뿐이지 마음 속에 쌓아두고 있어요. 남들과 불편한 대화를 하느니 상찌 스스로 삭이는게 낫다고 생각하거든요.", 
                img: "img/mbti/isfp.png" 
            },
            
            { 
                favorite: "혼자 노는것도 너무 좋아요<br>예의가 바른 사람 좋아요 빠른 인정과 사과", 
                dislike: "요령 피우는거 싫어요<br>책임감 없이 행동하는거 싫어요", 
                char: "한성냥이", 
                name: "ISFJ", 
                title: "맑은 영혼 ", 
                subtitle: "내가 바로 한성대의 나이팅게일", 
                explain: "맑은 영혼 한성냥이는 프렌즈들 사이에서 가장 차분하고 인내심이 강해요. 프렌즈들의 감정을 잘 파악하기 때문에 공감을 잘해줘요. <br>사려가 깊고 생각도 많은 한성냥이기에 프렌즈들은 고민이 생기면 한성냥이부터 찾아요. 한성냥이도 프렌즈들을 정말 좋아하고 도움을 주고 싶어하기에 한성냥이의 기억력을 총동원하며 최선을 다해 얘기를 들어주어요. 기억력이 좋고 생각이 많은 만큼 약간은 쓸데없는 걱정도 많고 자신에게 엄격하여 사실은 한성냥이도 고민상담이 필요하답니다. 계획을 짜고 메모하는 것을 좋아하는 한성냥이는 자신이 게으르다고 생각하지만 차근차근 계획을 지켜나갑니다.", 
                img: "img/mbti/isfj.png" 
            },
            
            { 
                favorite: "활동적인거 좋아요", 
                dislike: "이래라 저래라 하는게 제일 싫어요. 하기 싫은건 죽어도 안해!<br>예고없이 갑자기 회의하자고 하지마악!", 
                char: "한성냥이", 
                name: "ISTP", 
                title: "침착한 반항아 ", 
                subtitle: "굳이? 일단은 누워 있을래", 
                explain: "침착한 반항아 한성냥이는 효율적인 것을 좋아해 쓸데없는 행동을 하지 않으려고해요. 그래서 어떤일을 하기 전 '굳이 해야할까?'라는 질문을 던진답니다. 남들에게 무심한 편이고 융통성이 있어 프렌즈들이 어떤 행동을 하더라도 웬만하면 그럴 수 있다고 생각해요. 하지만 자신에게 피해를 주는 행동을 하거나 자신의 행동에 대한 간섭만은 참을 수 없어요. 웬만하면 화를 내지 않는 한성냥이지만 한 번 화가나면 정말 무섭답니다. <br>마음에 없는 말은 못하고 정서적으로 공감도 잘 못해주는 한성냥이이기에 프렌즈들은 처음엔 약간의 상처를 받았었지만, 그 누구보다 솔직하고 차분한 한성냥이의 진심을 알게된 지금은 한성냥이에게 푹 빠져있답니다.", 
                img: "img/mbti/istp.png" 
            },
            
            { 
                favorite: "계획대로 착착 진행 너무 짜릿해요!", 
                dislike: "MBTI에 나를 맞추지 말아주세요 ㅡㅡ 유사과학임<br>내 물건 함부로 다루지 말아줬으면 해.", 
                char: "상찌", 
                name: "ISTJ", 
                title: "사실은 있는..! ", 
                subtitle: "피도 눈물도", 
                explain: "피도 눈물도 사실은 있는..! 상찌는 뭐든지 계획을 세워서 체계적이고 신중하게 하는 것을 좋아해요. 과묵하고 차분하며 원리원칙을 따지는 모습에 기계같다고 느끼는 친구들이 종종 있답니다. 완벽을 추구하고 일에 대한 책임감이 매우 강하기 때문에 어떤 일이든 한 번 시작하면 완벽하게 끝을 볼 때까지 공부합니다. 그래서 한성대학교 상상 프렌즈학과의 과탑은 매번 상찌의 차지입니다. <br>고정 관념이 강하고 자신의 경험에 의존하려는 경향이 있어 융통성이 없는 편이지만 이러한 상찌도 사실은 능글맞은 장난끼를 탑재하고 있다는 점..! 상찌 혼자서만 알고 있는 것 같아 문제이지만요. ", 
                img: "img/mbti/istj.png" 
            },
            
            { 
                favorite: "먼저 말 걸어주세요", 
                dislike: "싸..싸우지마...<br>세속적이고 거짓된 사람 별로야", 
                char: "상찌", 
                name: "INFP", 
                title: "상처가득 쿠크다스 ", 
                subtitle: "상상부기가 상추를 먹었어..!", 
                explain: "쿠크다스 상찌는 정이 많은 만큼 상처도 잘 받아요. 자신이 상처를 잘 받는만큼 남들도 많이 받을거라 생각해 쓴소리도 못한답니다. 따라서 프렌즈들의 의견을 대부분 받아들이고, 분위기에 잘 맞추는 편이에요. 귀차니즘력이 강한 상찌지만 꽂히는 취미가 생기면 하루종일 그것만 하기도 해요. 프렌즈들과 놀러가기 전까진 귀찮고 부담스럽지만 막상 만나면 행복한 상찌에요. <br>상상력과 창의력이 풍부한 상찌는 요즘 프렌즈들의 초상화를 그려주는 취미에 푹 빠져있답니다. 스스로 엄청 쎈 상찌라고 생각하지만 프렌즈들이 보기엔 작고 소중하기만 한 상찌에요.", 
                img: "img/mbti/infp.png" 
            },
            
            { 
                favorite: "배움이 있는 활동이 좋아요<br>뒤에서 내가 서포트 해줄게!", 
                dislike: "선 넘지 말아주세요..하하<br>너무 나한테 시선 집중하지마 부끄러....", 
                char: "상찌", 
                name: "INFJ", 
                title: "외유내강 ", 
                subtitle: "건드리면 물거다...", 
                explain: "외유내강 상찌는 다정하고 자상해 보이지만 어쩐지 조금 어렵다고 느끼는 친구들이 있어요. 자신만의 선이 정해져 있고 상대방의 감정을 잘 읽기 때문에 신중하게 행동하기 때문이에요. <br>깊게 생각하고 상상하는 것을 좋아하여 인문학,심리학,사회과학 분야를 선호해요. 상찌는 감정 조절을 잘하여 자신의 감정 기복을 잘 나타내지 않고 화나는 일이 있다면 겉으론 웃어도 속으로는 누구보다 거친 상상을 하며 삭이는 편이기에 멘탈이 튼튼해요. 낯을 가리고 무의미하다고 느껴지는 단체 활동을 싫어하여 새로운 친구들을 만나기보단 이미 친하고 잘 맞는 프렌즈들과 노는 것이 좋아요", 
                img: "img/mbti/infj.png" },
            
            { 
                favorite: "복잡한 영화보고 토론하면 너무 재밌어!<br>난 남들이 가지 않는 길을 선택한다.", 
                dislike: "비논리적으로 말 하는 것<br>지나친 말장난은 그만.", 
                char: "한성냥이", 
                name: "INTP", 
                title: "중립기어 두는 ", 
                subtitle: "\"그럴 수 있지\" X 100", 
                explain: "중립기어 두는 한성냥이는 남들에게 피해주는 것도 싫어하고 관심도 그리 많지 않아요. 사적인 감정을 드러내는 것도 실어해서 프렌즈들끼리 점심 메뉴에 대한 의견이 갈릴 때 모든 의견에 공감을 하는듯 보이지만 어느 한 쪽을 지지하지는 않아요. 하지만 논리적이지 못하고 고집을 부리는 친구들에겐 대놓고 팩트폭행을 하는 편이랍니다. <br>머리가 아주 좋고 창의적이라 아이디어가 넘쳐나고 대화의 주제가 다양해요. 반복되는 일상을 지겨워하고 호기심이 많아 자신의 삶에 변화를 주는 것을 좋아합니다. 한성냥이만의 세계관도 존재하여 프렌즈들의 눈에 한성냥이는 항상 딴 생각을 하는 것 같아 보여요.", 
                img: "img/mbti/intp.png" 
            },
            
            { 
                favorite: "머리쓰는게 좋아요!", 
                dislike: "정해진 규칙에 절 가두려하지 마세요!<br>너무 큰 소리로 호들갑 떨지마.", 
                char: "한성냥이", 
                name: "INTJ", 
                title: "무표정의 츤데레 ", 
                subtitle: "알고보면 한없이 따뜻해요", 
                explain: "무표정의 츤데레 한성냥이는 독립적인 성향이 강하고 감정에 휘둘리는 자신의 모습을 싫어해요. 따라서 매우 현실적이고 이성적이게 보이지만 사실은 공상도 많이하고 종종 감성에 젖기도 합니다. <br>효율성을 극도로 추구하기에 비효율적인 것을 보면 어떤 수단과 방법을 동원해서라도 창의적인 해결 방법을 찾아내는 편이에요. 또한 자신의 관심분야 밖에는 무신경하지만 관심분야에는 그 누구보다 과몰입을 하기에 요즘 문구류에 꽂힌 한성냥이의 필통엔 없는 문구가 없어요. 절친에겐 그 누구보다 따뜻한 한성냥이는 프렌즈들에게만 허당미를 보여줍니다. ", 
                img: "img/mbti/intj.png" }
        ]   