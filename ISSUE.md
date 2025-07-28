# 이슈 트래킹

## TypeError: crypto.hash is not a function
<details>
<summary>접기/펼치기</summary>
<br>

### 발생 원인
2025년 06월 24일 vite가 7.0버전으로 업그레이드 되면서 Node.js의 최소 버전이 상향되었기 때문이다.  
vite 7.0버전에서는 Node.js 18 버전에 대한 지원이 완전히 종료되었고, 필요한 최소 버전도 20.19 또는 22.12버전 이상으로 상향되었다.  
vite 7.0버전을 사용하기 위해서는 Node.js 버전을 높이거나 vite버전을 낮춰야 한다.  
(가급적 Node.js 버전을 높이는것을 추천)

### vite 6.3.5 다운그레이드
<details>
<summary>접기/펼치기</summary>
<br>

- 기존 설치 패키지 정리
  ```
  rm -rf node_modules package-lock.json
  ```

- Vite 6.3.5 설치
  ```
  npm install vite@6.3.5 --save-dev
  ```

- @vitejs/plugin-vue 5.2.3 설치
  ```
  npm install @vitejs/plugin-vue@5.2.3 --save-dev
  ```

- 의존성 설치
  ```
  npm install
  ```

- dev 서버 실행
  ```
  npm run dev
  ```

</details>

- 오류 로그
  ```
  error when starting dev server:
  TypeError: crypto.hash is not a function
      at getHash (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:2788:21)
      at getLockfileHash (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:11673:9)
      at getDepHash (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:11676:23)
      at initDepsOptimizerMetadata (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:11137:53)
      at createDepsOptimizer (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:34611:17)
      at new DevEnvironment (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:35375:109)
      at Object.defaultCreateClientDevEnvironment [as createEnvironment] (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:35794:9)
      at _createServer (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/chunks/dep-BHkUv4Z8.js:28373:132)
      at async CAC.<anonymous> (file:///C:/Programming/workspace_vs/vue-basic-todo-app/v01/node_modules/vite/dist/node/cli.js:573:18)
  ```

</details>
<br>

## 템플릿
<details>
<summary>접기/펼치기</summary>
<br>

</details>
<br>