# 🔥 MyChatApp - 실시간 채팅 웹앱

MyChatApp은 **Next.js**, **Firebase**, **Tailwind CSS**로 만든 실시간 채팅 애플리케이션입니다.
이메일 링크로 로그인하고, 다양한 사용자들과 실시간으로 메시지를 주고받을 수 있습니다.

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

## 🏷️ Conventional Commits

| 접두사      | 설명                                                |
|-------------|-----------------------------------------------------|
| `feat`      | ✨ 새로운 기능 추가 (Feature)                        |
| `fix`       | 🐛 버그 수정 (Bug Fix)                              |
| `docs`      | 📝 문서 관련 변경 (README, 주석 등)                 |
| `style`     | 💄 코드 스타일 변경 (세미콜론, 공백 등 – 기능 변화 없음) |
| `refactor`  | ♻️ 코드 리팩토링 (동작 변경 없이 구조 개선)          |
| `test`      | ✅ 테스트 코드 추가 또는 수정                        |
| `chore`     | 🔧 빌드 설정, 패키지 등 개발 환경 설정 변경         |
| `build`     | 🏗️ 빌드 관련 변경 (webpack, vite, babel 등)         |
| `ci`        | 👷 CI 관련 설정 또는 스크립트 수정                   |
| `perf`      | ⚡ 성능 개선                                         |
| `revert`    | ⏪ 이전 커밋 되돌리기                                |

### ✅ 예시

```bash
feat: 채팅 입력창 자동 포커싱 기능 추가
fix: 로그인 시 발생하는 토큰 오류 수정
docs: README에 설치 방법 섹션 추가
style: ChatBox 컴포넌트 들여쓰기 정리
refactor: Firebase 로직 모듈화
test: useAuth 훅 유닛 테스트 작성
chore: eslint 설정 업데이트
```
> [Conventional Commits](https://www.conventionalcommits.org/) 형식을 따르는 것을 권장합니다.

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
├── components/          # 공통 UI 컴포넌트
├── lib/                 # Firebase 초기화 등 외부 연동
├── hooks/               # 커스텀 훅
├── styles/              # 전역 스타일 및 Tailwind 설정
├── public/              # 정적 파일 (이미지, 아이콘 등)
├── .env.local           # 환경 변수 (Firebase 설정)
├── package.json
├── tailwind.config.js
└── tsconfig.json
```


<br/>

## 🧑‍💻 로컬 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/your-username/mychatapp.git
cd mychatapp
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

## 🌱 향후 개선

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
