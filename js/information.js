const questionlist = [
    {
        q: 'Q1. 대학교에 갓 입학하고 학교에서는 동아리 홍보가 한창이다',
        a:[
            {answer: '다 재밌어보인다 거의 모든 동아리 홍보를 구경한다', type:['ESTJ','ESTP','ESFJ','ESFP','ENTJ','ENTP','ENFJ','ENFP']},
            {answer: '하고 싶었던 동아리 홍보 위주로 구경한다', type:['ISTJ','ISTP','ISFJ','ISFP','INTJ','INTP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q2. 종강이다(우와아아아) 종강을 하고 약속을 잡을때 나는 주로',
        a:[
            {answer: '사람과 약속은 많을수록 좋다 많은 약속을 잡고 많은 사람을 만난다', type:['ESTJ','ESTP','ESFJ','ESFP','ENTJ','ENTP','ENFJ','ENFP']},
            {answer: '친한 친구들과 만나거나 그냥 혼자서 시간을 보낸다', type:['ISTJ','ISTP','ISFJ','ISFP','INTJ','INTP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q3. 대학교에서 첫 시험을 본다 시험공부를 하는 나의 모습은',
        a:[
            {answer: '많이 풀다보면 이해가 된다 문제은행에서 기출부터 찾아 풀어본다', type:['ESTJ','ESTP','ESFJ','ESFP','ENTJ','ENTP','ENFJ','ENFP']},
            {answer: '뭐든 개념이해가 먼저다 내용과 개념부터 정리한다', type:['ISTJ','ISTP','ISFJ','ISFP','INTJ','INTP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q4. 선배와 밥약을 잡았다 선배가 먹고 싶은 걸 고르라고 했다',
        a:[
            {answer: '사람들의 후기와 추천이 제일 많은 식당으로 고른다', type:['ESTJ','ESTP','ESFJ','ESFP','ISTJ','ISTP','ISFJ','ISFP']},
            {answer: '후기는 어떨지는 모르겠지만 왠지 모르게 끌린다 여기로 가요!', type:['ENTJ','ENTP','ENFJ','ENFP','INTJ','INTP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q5. 수강신청을 하려는데 처음 오신 교수님 수업이 있다 다른 수업에 비해 경쟁률은 낮다 이때 나는 주로',
        a:[
            {answer: '초임교수님은 수업 정보가 없어 불안하다 다른 교수님을 찾는다', type:['ESTJ','ESTP','ESFJ','ESFP','ISTJ','ISTP','ISFJ','ISFP']},
            {answer: '경쟁률 낮네? 처음이지만 괜찮을거라며 듣는다', type:['ENTJ','ENTP','ENFJ','ENFP','INTJ','INTP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q6. 필수 교양수업 중 글쓰기 수업을 들어야 한다 글쓰기 수업에는 2종류가 있다',
        a:[
            {answer: '논문같은 학술적 글쓰기', type:['ESTJ','ESTP','ESFJ','ESFP','ISTJ','ISTP','ISFJ','ISFP']},
            {answer: '소설이나 시 같은 문학적 글쓰기', type:['ENTJ','ENTP','ENFJ','ENFP','INTJ','INTP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q7. 친구가 "나 시험망쳐서 너무 속상해서 와플기계 샀어"라고 했을때 내 반응은',
        a:[
            {answer: '"시험을 망쳤는데 왜 와플기계를 사?"', type:['ESTJ','ESTP','ENTJ','ENTP','ISTJ','ISTP','INTJ','INTP']},
            {answer: '"시험 많이 망쳤어? 속상했겠다 ㅜㅠ"', type:['ESFJ','ESFP','ENFJ','ENFP','ISFJ','ISFP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q8. 실험실에서 실험을 하다가 동기가 실수로 유리용기를 깨뜨렸다',
        a:[
            {answer: '위험할지도 모르니 용기부터 처리한다', type:['ESTJ','ESTP','ENTJ','ENTP','ISTJ','ISTP','INTJ','INTP']},
            {answer: '동기가 많이 놀라지 않았을까 동기부터 살핀다', type:['ESFJ','ESFP','ENFJ','ENFP','ISFJ','ISFP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q9. 교수님께서 제출한 레포트에 대한 면담 후 마지막으로 한 말씀을 해주신다 이때 더 선호하는 쪽은',
        a:[
            {answer: '주제에 적절한 논문을 잘 인용했더군', type:['ESTJ','ESTP','ENTJ','ENTP','ISTJ','ISTP','INTJ','INTP']},
            {answer: '레포트 작성이 쉽지 않았을텐데 고생했네', type:['ESFJ','ESFP','ENFJ','ENFP','ISFJ','ISFP','INFJ','INFP']}
        ]
    },
    {
        q: 'Q10. 동아리에서 종강기념으로 파티를 하자고 한다 하지만 이미 종강 후 계획을 모두 세워 놓았다 이때 나는',
        a:[
            {answer: '이미 계획을 다 세워놨기 때문에 거절한다', type:['ESTJ','ESFJ','ENTJ','ENFJ','ISTJ','ISFJ','INTJ','INFJ']},
            {answer: '종강 했으니 종강파티는 당연! 계획은 바꾸면 그만! 무조건 간다', type:['ESTP','ESFP','ENTP','ENFP','ISTP','ISFP','INTP','INFP']}
        ]
    },
    {
        q: 'Q11. 교수님께서 레포트 과제를 주셨다. 과제를 받은 나는',
        a:[
            {answer: '마감기한 먼저 확인, 자료조사부터 계획 세우고 실행한다', type:['ESTJ','ESFJ','ENTJ','ENFJ','ISTJ','ISFJ','INTJ','INFJ']},
            {answer: '과제는 받았지만 일단 나중에 생각한다', type:['ESTP','ESFP','ENTP','ENFP','ISTP','ISFP','INTP','INFP']}
        ]
    },
    {
        q: 'Q12. 교양수업신청을 하려한다 한 교수님은 내용에 대한 설명과 레포트과제를 다른 교수님은 교재내용 기반의 연극이나 프로젝트 수업을 진행하신다',
        a:[
            {answer: '프로젝트는 번거롭다 깔끔하게 레포트가 더 낫다', type:['ESTJ','ESFJ','ENTJ','ENFJ','ISTJ','ISFJ','INTJ','INFJ']},
            {answer: '일반적인 수업 뻔하다 프로젝트, 연극수업이 끌린다', type:['ESTP','ESFP','ENTP','ENFP','ISTP','ISFP','INTP','INFP']}
        ]
    }
]
const resultlist = [
    {
        type: 'ESTJ',
        detail: ''
    },
    {
        type: 'ESTP',
        detail: ''
    },
    {
        type: 'ESFJ',
        detail: ''
    },
    {
        type: 'ESFP',
        detail: ''
    },
    {
        type: 'ENTJ',
        detail: ''
    },
    {
        type: 'ENTP',
        detail: ''
    },
    {
        type: 'ENFJ',
        detail: ''
    },
    {
        type: 'ENFP',
        detail: ''
    },
    {
        type: 'ISTJ',
        detail: ''
    },
    {
        type: 'ISTP',
        detail: ''
    },
    {
        type: 'ISFJ',
        detail: ''
    },
    {
        type: 'ISFP',
        detail: ''
    },
    {
        type: 'INTJ',
        detail: ''
    },
    {
        type: 'INTP',
        detail: ''
    },
    {
        type: 'INFJ',
        detail: ''
    },
    {
        type: 'INFP',
        detail: ''
    }
]