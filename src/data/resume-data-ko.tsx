import IconGithub from '@/components/icon/Github';

export const RESUME_DATA_KO = {
  name: '김희재',
  initials: '희재',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: '도전을 좋아하는 프론트엔드 개발자',
  summary:
    '유저 입장에서 생각하고 소통하며, 공감력 있는 서비스를 만들고 싶은 개발자',
  
  contact: {
    email: 'heejae9102@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/aihj',
        icon: IconGithub,
      },
      
    ],
  },
 
  work: [
    {
      company: '크라우드웍스',
      link: 'https://www.crowdworks.ai/',
      title: 'Front-end Developer',
      start: '재직중',
      end: null,
      description: '네이버, LG, KT 등 국내 주요 ICT기업을 포함해 다양한 산업의 500개 이상 기업에게 솔루션을 제공하는 대한민국 대표 AI 테크 상장 기업',
      points: ['RAG 시스템 구축을 위한 B2B 솔루션 FE 개발 _ 신한은행 납품',
        '비정형 데이터를 처리할 수 있는 기업용 PDF.JS 솔루션',
        'pdf 상에서 크롭, 텍스트 추출, 파싱,OCR 관련 기능 고도화',
        '빠른 기획을 바탕으로 한 V0 디자인 반영',
        '자사 B2C 서비스 플랫폼 여러개를 동시에 운영하며 JIRA를 통해 QA팀, 디자이너 및 다양한 직군과 커뮤니케이션, 장애 대응',
        '매주 리뷰 진행내용을 바탕으로 기능 RnD 및 UI/UX 반영',
        '사용기술 React.js Next.js',
      ],
    },
    {
      company: '케어네이션',
      link: 'https://www.carenation.co.kr/',
      title: 'Front-end Developer',
      start: '2023',
      end: '2025. 01.',
      description: '국내 1위 간병인 구인구직 플랫폼(가입자 43만명) 개발 및 유지보수',
      points: [
        '보호자 앱 2.0 개발 – 일정 관리/복약 서비스, 병원·약국 찾기 기능',
        '간병인 통계 DataLab 페이지, 고객센터 정산 UI, IR 소개 페이지 등 기업 웹서비스 다수 개발',
        'React Native + FCM: Firebase Cloud Messaging 구현 및 디버깅',
        '일정 관리/복약 서비스 풀스택 개발',
        '공고 조회 페이지 개편',
        'DataLab 어드민 대시보드 개선',
      ],
    },
    {
      company: '보로노이',
      link: 'https://voronoi.io/',
      title: 'AI researcher',
      start: '2021. 02.',
      end: '2024. 02.',
      description: '폐암 및 유방암 등 항암제 분야 표적치료제 개발에 AI를 활용하는 신약개발 연구기업',
      points: [
        'small molecule hits의 통계적 분석 및생체 내 약효 예측 모델 구현',
        'Rdkit 라이브러리를 활용한 화합물 분자의 통계적 정보 가시화 및 R과의 연동',
        '사용기술 python react.js django REST Framework',
      ],
    },
  ],
  skills: ['Javascript', 'Typescript', 'React.js', 'Next.js', 'Nest.js', 'React Native'],
} as const;
