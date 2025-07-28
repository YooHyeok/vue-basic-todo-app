# Vue(2/3) 기본 및 todo 프로젝트
## [유투브](https://youtube.com/playlist?list=PLTb3qGCzYjS1lkhdZL1z4uZJ72F7b5gIr&si=hwwLjHA5L2zxzFW4) 참조

## 개발환경 설치
<details>
<summary>접기/펼치기</summary>
<br>

- Vite 기반 Vue 프로젝트 생성 명령어
  ```bash
  > npm create vue@latest .
  ```

- 패키지 설치 확인 (y입력)
  ```bash
  Need to install the following packages:
    create-vite@6.5.0
  Ok to proceed? (y) y
  ```
  
- 프로젝트 이름 입력
  ```bash
  ◆  Package name:
  │  {프로젝트 이름 입력}
  ```
  
- 프로젝트 기능 선택 - [none]
   (방향키 ↑↓로 이동, 스페이스로 선택, a로 전체 선택, 엔터로 완료) 
  ```bash
  ◆  Select features to include in your project:
  │  ◻ TypeScript
  │  ◻ JSX Support
  │  ◻ Router (SPA development)
  │  ◻ Pinia (state management)
  │  ◻ Vitest (unit testing)
  │  ◻ End-to-End Testing
  │  ◻ ESLint (error prevention)
  │  ◻ Prettier (code formatting)
  ```

- 실험적 기능 선택 - [none]
  (방향키 ↑↓로 이동, 스페이스로 선택, a로 전체 선택, 엔터로 완료) 
  ```bash
  ◆  Select experimental features to include in your project:
  │  ◻ Oxlint (experimental)
  │  ◻ rolldown-vite (experimental)
  ```

- 예제 코드 없이 빈 프로젝트로 시작 여부 선택 - [Yes]
  (방향키 ←→로 이동, 스페이스로 선택, 엔터로 완료) 
  ```bash
  ◆  Skip all example code and start with a blank Vue project?
  │  ● Yes / ○ No
  ```

- 프로젝트 의존성 패키지 설치
  ```bash
  npm install
  ```

- Vite 개발 서버를 실행
  ```bash
  npm run dev
  ```

- 전체 내용
  ```bash
  > npm create vue@latest .
  Need to install the following packages:
    create-vue@3.18.0
  Ok to proceed? (y) y

  ◆  Package name:
    v01

  ◆  Select features to include in your project:
    none

  ◆  Select experimental features to include in your project:
    none

  ◆  Skip all example code and start with a blank Vue project?
    Yes

  ✔ Scaffolding project in current directory...
  ✔ Done. Now run:

    npm install
    npm run dev
  ```  
</details>


## [v01/README.md](v01/README.md)