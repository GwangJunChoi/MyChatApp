# 🔥 NextChat - 실시간 채팅 웹앱

NextChat은 **Next.js**, **Firebase**, **Tailwind CSS**로 만든 실시간 채팅 애플리케이션입니다.
Google 계정으로 로그인하고, 다양한 사용자들과 실시간으로 메시지를 주고받을 수 있습니다.

<br/>

## 🚀 데모

🔗 [Live Demo 보기](https://your-app.vercel.app)

<br/>

## 🧪 기술 스택

- **Next.js 14** – React 기반 SSR/CSR 지원 프레임워크
- **TypeScript** – 정적 타입으로 안정성 확보
- **Firebase**
  - **Authentication** – Google OAuth 로그인
  - **Firestore** – 실시간 데이터베이스
- **Tailwind CSS** – 유틸리티 기반 CSS 프레임워크
- **Vercel** – 배포 플랫폼

<br/>

## 🖼️ 미리보기

| 로그인 화면 | 채팅 화면 |
|-------------|-----------|
| ![Login](./public/screenshots/login.png) | ![Chat](./public/screenshots/chat.png) |

<br/>

## ⚙️ 주요 기능

- 🔐 Google 로그인 / 로그아웃
- 💬 실시간 채팅 (Firestore `onSnapshot`)
- 📱 반응형 디자인 (모바일 최적화)
- 🔄 메시지 자동 스크롤
- ⏰ 메시지 타임스탬프
- 🚫 비로그인 사용자 접근 제한

<br/>

## 📁 폴더 구조
```
my-chat-app/
├── app/                 # App Router 기반 페이지 및 레이아웃
│   ├── layout.tsx
│   ├── page.tsx
│   └── login/
│       └── page.tsx
├── components/          # 공통 UI 컴포넌트
│   ├── ChatBox.tsx
│   └── Message.tsx
├── lib/                 # Firebase 초기화 등 외부 연동
│   └── firebase.ts
├── hooks/               # 커스텀 훅
│   └── useAuth.ts
├── styles/              # 전역 스타일 및 Tailwind 설정
│   └── globals.css
├── public/              # 정적 파일 (이미지, 아이콘 등)
│   └── screenshots/
├── .env.local           # 환경 변수 (Firebase 설정)
├── package.json
├── tailwind.config.js
└── tsconfig.json
```


<br/>

## 🧑‍💻 로컬 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/your-username/nextchat.git
cd nextchat
```
2. 패키지 설치
```bash
npm install
```

3.   `.env.local` 파일 생성 후 Firebase 설정 입력
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🌱 향후 개선 아이디어

- [ ] 채팅방 기능 (1:1, 그룹 채팅)
- [ ] 이미지 업로드 및 전송 (Firebase Storage 연동)
- [ ] 메시지 삭제 / 수정 기능
- [ ] 실시간 온라인 사용자 표시
- [ ] 알림 기능 (브라우저 푸시, 이메일 등)
- [ ] 메시지 읽음 표시 (읽음 여부 UI)
- [ ] 다크 모드 지원
- [ ] 유저 프로필 설정 기능 (닉네임, 프로필 이미지)

## 🙋‍♂️ 개발자

- **이름**: 홍길동
- **GitHub**: [https://github.com/your-id](https://github.com/your-id)
---
