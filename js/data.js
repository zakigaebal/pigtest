/*
뚱돼지,0
개돼지,1
씹돼지,2
귀여운돼지,3
통돼지,4
퉁돼지,5
씹덕돼지,6
개씹덕돼지,7
통구이돼지,8
왕돼지,9
지구신돼지,10
우주돼지,11
*/

const qnaList = [
  {
    q: '1. 치킨을 얼마나 자주시켜먹는가',
    a: [
      { answer: 'a. 생각날때 마다 먹음', type: [1, 2, 4, 9] },
      { answer: 'b. 나에게 보상 받고 싶을때 먹음', type: [0, 3, 6, 5, 10, 8] },
      { answer: 'c. 있으면 먹음', type: [7, 11 ] },
    ]
  },
  {
    q: '2. 당신은 보통 어떤자세로 있는가 ',
    a: [
      { answer: 'a. 앉아서 생활', type: [0, 3, 2, 8] },
      { answer: 'b. 서서 생활', type: [1, 6, 5, 10] },
      { answer: 'c. 누워서 생활', type: [7, 4, 9, 11] },
    ]
  },
  {
    q: '3. 운동합니까?',
    a: [
      { answer: 'a. 거의 안한다', type: [1, 3, 2, 10, 8] },
      { answer: 'b. 조금 한다', type: [7, 9, 11] },
      { answer: 'c. 매일 한다', type: [0, 6, 5, 4] }
    ]
  },
  {
    q: '4. 밥을 주로',
    a: [
      { answer: 'a. 시간날때 생각나면 먹는다" ', type: [1, 2, 4 ] },
      { answer: 'b. 시간에 맞춰 규칙적으로 먹는다" ', type: [7, 10, 8, 9, 11 ] },
      { answer: 'c. 다이어트하느라 별로 안먹는다" ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    q: '5. 오늘 데이트 하는 날이다. 무엇을 먹을것인가',
    a: [
      { answer: 'a. 양식', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. 한식', type: [0, 3, 6, 11]},
      { answer: 'c. 일식', type: [2, 5, 8] },
    ]
  },

  {
    q: '6. 살이 주로 어디에 찌는가',
    a: [
      { answer: 'a. 전.부', type: [4, 9, 11 ] },
      { answer: 'b. 뱃살', type: [0, 3, 6, 10 ] },
      { answer: 'c. 얼굴', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 허리둘레가 엉덩이둘레랑 비교했을때',
    a: [
      { answer: 'a. 크다', type: [1, 7, 11 ] },
      { answer: 'b. 같다', type: [2, 4, 9 ] },
      { answer: 'c. "작다', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. 음식을 먹을때',
    a: [
      { answer: 'a. 나는 청소기마냥 빠르게 흡입한다', type: [0, 4, 9 ] },
      { answer: 'b. 느리더라도 꼭꼭 씹어먹는다', type: [3, 2, 6, 5, 10, 8 ] },
      { answer: 'c. 잘 씹지않고 꿀꺽 삼키는 편이다', type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. 간식과 야식이 눈앞에 있다 무슨 생각이 드는가',
    a: [
      { answer: 'a. 난 참는다', type: [7, 0, 5, 9 ] },
      { answer: 'b. 이건 진짜 못참아', type: [1, 3, 6, 11 ] },
      { answer: 'c. 그럼 한입만 먹어볼까', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. 아침,점심,저녁 중 언제 제일 많이 먹는가',
    a: [
      { answer: 'a. 아침', type: [4, 9, 11] },
      { answer: 'b. 점심', type: [0, 2, 6, 5 ] },
      { answer: 'c. 저녁', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. 내가 추구하는 인생관은? ',
    a: [
      { answer: 'a. 맛있는거 다 먹고 원없이 행복하게 살거야', type: [1, 4, 9, 11 ] },
      { answer: 'b. 맛있는걸 먹기위해 운동을 많이 할거야', type: [7, 0, 3, 6, 10] },
      { answer: 'c. 밥은 단지 영양분을 흡수하기 위한 수단이지', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. 옷을 입을때',
    a: [
      { answer: 'a. 늘 편한옷을 즐겨입는다', type: [3, 6, 4, 9 ] },
      { answer: 'b. 옷입는게 너무 귀찮다는 생각이든다', type: [0, 2, 5, 10, 8] },
      { answer: 'c. 아무생각이 들지 않는다', type: [1, 7, 11] },
    ]
  }
]

const infoList = [
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
  {
    name: '당신 몸도 마음도 돼지군요! <돼지재능러>',
    desc: '전생에 돼지였음이 분명합니다. 당신 몸속에 돼지재능이 폭발하고 있어요'
  },
  {
    name: '당신 몸도 마음도 돼지군요! <돼지재능러>',
    desc: '전생에 돼지였음이 분명합니다. 당신 몸속에 돼지재능이 폭발하고 있어요'
  },
  {
    name: '당신 몸도 마음도 돼지군요! <돼지재능러>',
    desc: '전생에 돼지였음이 분명합니다. 당신 몸속에 돼지재능이 폭발하고 있어요'
  },
  {
    name: '당신 몸도 마음도 돼지군요! <돼지재능러>',
    desc: '전생에 돼지였음이 분명합니다. 당신 몸속에 돼지재능이 폭발하고 있어요'
  },
  {
    name: '당신 몸도 마음도 돼지군요! <돼지재능러>',
    desc: '전생에 돼지였음이 분명합니다. 당신 몸속에 돼지재능이 폭발하고 있어요'
  },
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
  {
    name: '어디서 맛있는 냄새가 나요~ 바로 당신이요! <통구이돼지>',
    desc: '미래가 보여요 무더운 여름날 당신한테 삼겹살 냄새가 나는 미래요'
  },
]
