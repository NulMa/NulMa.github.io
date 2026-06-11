# 포트폴리오 웹사이트 제작 맥락

> 작성일: 2026-03-21
> 작업 폴더: `C:\Users\NullMa\Desktop\PORTFOLIO\PortfolioWeb`

---

## 목표

게임 클라이언트 개발자 취업용 포트폴리오 웹사이트 제작

## 레퍼런스 스타일

- Apple 자사 기기 소개 페이지 스타일
- 깔끔하고 트렌디한 반응형 웹페이지

---

## 유저 정보

- GitHub: https://github.com/NulMa
- 주요 기술: C#, Unity, ShaderLab, HLSL, UGUI
- 방향성: 게임 클라이언트 개발자

---

## 소개할 프로젝트 4개

| 레포 | 핵심 포인트 | 분석 상태 |
|------|------------|-----------|
| [LostCone](https://github.com/NulMa/LostCone) | 유저 피드백 반영 경험 | 미완료 |
| [Ghost_March](https://github.com/NulMa/Ghost_March) | 플레이스토어 출시 경험 | 완료 |
| [Dong_Mae](https://github.com/NulMa/Dong_Mae) | 팀프로젝트, 기획·아트·개발자와의 유연한 협업 | 완료 |
| [Cubika](https://github.com/NulMa/Cubika) | itch.io 웹 업로드 경험 | 미완료 |

---

## 프로젝트 분석 내용

### Ghost_March (완료)
- **장르:** 모바일 뱀파이어 서바이벌 류 / 한국 무속 신앙 테마
- **개발 형태:** 솔로 개발
- **플랫폼:** Android (Google Play Store 출시, v1.7, 2024-03-02)
- **기술 스택:** ShaderLab 49.7%, C# 40.1%, HLSL 10.2%, Unity, UGUI
- **주요 구현:**
  - 웨이브 기반 몬스터 스폰 시스템
  - 캐릭터 성장 (경험치, 레벨업)
  - 다양한 무기(검, 활, 식칼) 및 악세서리 시스템
  - 특수기 커맨드 입력 시스템
  - 일시정지 기능, 시각적 피드백
- **오디오:** BGM 라이선스 취득, SFX Freesound.org (CC0/CC BY 4.0)

### Dong_Mae (완료)
- **장르:** 메트로이드바니아
- **개발 형태:** 팀 프로젝트 (기획자, 아트, 개발자 협업)
- **기술 스택:** C# 70.5%, ShaderLab 14.3%, HLSL 12.7%, Unity
- **주요 구현:**
  - 레벨 디자인: 타일맵, 아이템 획득, 도어 시스템(아이템/퍼즐/트랩), 로프, 점프패드, 사다리, 이동 플랫폼, 함정, 수중 메커닉, 파괴 가능한 숨겨진 벽
  - 연출: 카메라 전환, 페이드 트랜지션, 보스 레터박스 이펙트
  - 전투: 일반 적(추적, 귀환), 보스(도약·연속도약·촉수 소환), 공격 쿨다운 분리
  - 플레이어: 이동, 기본 공격, 대시
  - 스프라이트 및 애니메이션 에디팅

### LostCone (완료)
- **장르:** 플랫포머 팬게임
- **개발 시작:** 2025.04.03
- **기술 스택:** C# 84.8%, ShaderLab 12.6%, HLSL 2.6%
- **도구:** DoTween, GitHub Copilot (Vibe Coding)
- **핵심 포인트:** 실제 유저 피드백 수집 및 반영 개발 사이클 경험

### Cubika (완료)
- **장르:** 큐브 병합 퍼즐 (수박게임 류)
- **개발:** 2024.04.02 ~ 2024.05.04 (v1.5)
- **플랫폼:** itch.io WebGL (https://nullma.itch.io/cubika)
- **핵심 메커닉:** 큐브 회전·낙하·밀기, 같은 종류 병합, 점수 시스템
- **핵심 포인트:** 원형→사각형 아이디어 전환, itch.io 웹 빌드 출시

---

## 진행 상태

- [x] GitHub 프로필 분석
- [x] Ghost_March 레포 분석
- [x] Dong_Mae 레포 분석
- [x] LostCone 레포 분석
- [x] Cubika 레포 분석
- [x] 자기소개서(이력서) 수령 — 이미지로 확인
- [x] 페이지 구성 기획
- [x] HTML/CSS/JS 코드 작성 (index.html, style.css, script.js)
- [ ] 포트폴리오 PDF 수령 (pdftoppm 미설치로 자동 읽기 불가)
- [ ] 중간 점검 및 피드백 반영
- [ ] 최종 배포

## 생성된 파일
- index.html — 전체 페이지 구조
- style.css — Apple 스타일 다크 테마
- script.js — Intersection Observer 애니메이션, 패럴랙스

## 다음 단계
1. 브라우저로 index.html 열어서 중간 점검
2. 포트폴리오 PDF 내용 공유 시 About 섹션 보강
3. 배포 (GitHub Pages 또는 Netlify)
