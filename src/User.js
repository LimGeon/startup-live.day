export default function User(){
  const [user, setUser] = useState([
    {
      img: 'https://stackblitz.com/files/react-paf8v5/github/LimGeon/START_feedUP/main/src/Img/image%206%20(1).png',
      name: 'Ho & Gun',
      data: [
        {
          tag: '웨비나',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205.png',
          time: '4월 28일(목) 오후 7시',
          name: '상시 학습이 일어나는 학습 조직 만들기',
          which: [
            '스타트업에서 만난 살아 숨쉬는 학습조직 - 박세헌 | 언픽셀 경영지원총괄 & 기업전략실',
            '카훗과 함께 멋진 학습 조직 만들기 - 제임스 미클웨이트 | Kahoot! at work 부사장',
            '상시 학습이 일어나는 조직을 만들 때 피해야 할 3가지 실수 - 이채린 | 클라썸 CEO',
            '질의응답',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대포님',
            '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀',
            '4대보험 신고부터 모든 HR업무를 나홀로 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
        {
          tag: '보험',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205%20(1).png',
          time: '5월 12일(목) 오후 5시',
          name: '케이스별 4대보험 신고 마스터하기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
      ],
    },
    {
      img: 'https://stackblitz.com/files/react-paf8v5/github/LimGeon/START_feedUP/main/src/Img/image%206.png',
      name: 'flex',
      data: [
        {
          tag: '보험',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205%20(1).png',
          time: '5월 12일(목) 오후 5시',
          name: '케이스별 4대보험 신고 마스터하기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            ' 4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
        {
          tag: '기획',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205.png',
          time: '4월 28일(목) 오후 7시',
          name: '상시 학습이 일어나는 학습 조직 만들기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            ' 4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
      ],
    },
  ]);
  for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < user[i].data.length; j++) {
      if (!tagList.includes(user[i].data[j].tag)) {
        setTagList([...tagList, user[i].data[j].tag]);
      }
    }
  }
}