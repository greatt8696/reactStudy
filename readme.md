시작하기

1.  라이브러리 설치
npm i 

2.  서버 시작
npm run dev

3. 추가로 설치된 라이브러리
axios              (http 접속 클라이언트),
react-query        (리액트용 접속 클라이언트),
redux              (상태관리),
react-redux        (상태관리),
react-toolkit      (상태관리툴),
react-router-dom   (라우팅),
lucide-react       (아이콘)












vite에 tailwind 적용하기 (이미 적용되어있으니 무시해도 됩니다.)

1.  테일윈드 및 컴파일러 설치
npm install -D tailwindcss postcss autoprefixer

2.  테일윈드 초기 셋팅
npx tailwindcss init -p

3.  테일윈드 적용시킬 파일을 설정
tailwind.config.cjs 의 content 에 덮어쓰기
content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],

4.  최종 컴파일된 테일윈드의 css를 받기위해 
.src/index.css 에 아래내용을 넣기 
@tailwind base;
@tailwind components;
@tailwind utilities;
