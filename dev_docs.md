# Development Document

## require

- [ ] 할 일 목록(List)이 출력돼야 합니다.
- [ ] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다.
- [ ] 할 일 항목을 수정할 수 있어야 합니다.
- [ ] 할 일 항목을 삭제할 수 있어야 합니다.
- [ ] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

## option

- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요. (추천 라이브러리 - [SortableJS](http://sortablejs.github.io/Sortable/))
- [ ] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 최신 수정일을 표시해보세요.
- [ ] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 할 일과 관련된 기타 기능도 고려해보세요.

## 적용할 기능

- to do list 출력, 수정, 추가, 삭제
- 배포 (vercel, netlify ...)
- DnD js로 구현 (블로그 참고)
- react (useCallback, useMemo등 성능 올리는 방향으로 구현)
- loading
- 최산 수정일

## 프로젝트 구성

### 스킬셋

- 언어 및 주요 라이브러리
  - react
    - todolist 도메인 자체가 spa에 적합한 프로젝트이고 상태관리를 유연하게 할 수 있기 때문에 선택했습니다.
  - typescript
    - 타입의 안정성을 생각해서 선택했습니다.
  - post css, scss
    - 도메인 특성상 비슷한 이름이 자주 사용되어 컴포넌트 분리시 중복되는 이름이 다수 생길 수 있기 때문에 파일단위로 css파일을 관리합니다, scss도입시 DX가 상승된다는 점을 생각해서 scss를 선택했습니다.
- 코드 컨벤션
  - eslint
    - ts는 eslint로 컨벤션 유지
  - style sheet
    - prettier로 코드 포메팅
- 번들러
  - webpack
    - 다른 번들러는 구성이 간단하고 세세한 설정이 필요 없기 때문에 선택했습니다.
    - 이전 과제에서 hot reload기능을 사용해보지 못해서 다시 webpack을 도전하게 되었습니다.

### Configuration files

파일이름은 확실하지 않습니다.

- eslintrc
- pretterrc
- prettierignore
- eslintignore
- tsconfig
- postcss
- gitignore
- .vscode

### 파일 구성

- tsx, ts, style.scss

### 폰트

- 프론트 서버에서 같이 제공합니다.

### 추가 가능 및 고려사항

- to do list title에 line gradient를 넣습니다.
- DnD를 직접 구현합니다. (가능하면 이 부분은 객체 지향적으로 작성해보기)
- lazy loading을 적용합니다.
- useCallback, useMemo를 적극적으로 사용합니다.
- fallback, error page를 만듭니다.
- 에러 헨들링 파일을 따로 만들고 axios의 Error객체를 활용합니다.
- 번들된 파일을 mapping하여 에러의 위치를 정확히 찾을 수 있도록 설정합니다.
- 문법을 어느버전의 ECMA변환할 것인지 고려한 뒤 설정합니다.
- scss가 js와css중 어떤 포멧으로 번들링되는지 확인하고, 가능하다면 css파일은 따로 분리합니다.
- xss에 주의하여 작성합니다.
- 시멘틱 태그, 접근성, 브라우저 호환성을 살펴봅니다.

### 에러

Module not found: Error: Can't resolve 'core-js/modules/es.array

core-js에서 배열관련 메서드를 찾지 못했다는 에러가 wepback에서 일어났고

`npm i --save-dev core-js`로 core-js를 설치해줘서 문제 해결
