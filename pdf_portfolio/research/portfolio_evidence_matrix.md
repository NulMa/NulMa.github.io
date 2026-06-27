# Portfolio Evidence Matrix

작성일: 2026-06-16

목적: 수집한 원자료를 PDF 포트폴리오 구성에 바로 연결하기 위한 판단표.  
기준은 "무엇을 만들었는가"가 아니라 "어떤 역량을 증명할 수 있는가"다.

## 1. PDF에서 증명할 핵심 역량

| 역량 | 가장 강한 근거 | 보조 근거 | PDF 표현 방향 |
|---|---|---|---|
| 출시/완성 경험 | Ghost March, Cubika | LostCone 공개 개발 | 완성한 결과물, 배포 링크, 실제 유저 접근 경로 |
| 성능 최적화/재설계 | Ghost March DOTS 전환 | Match3 테스트/구조 | 수치, 문제 원인, 재설계 판단, 검증 방식 |
| 아키텍처 설계 | Match3LogueLike | Ghost March asmdef, IronSarcophagus asmdef | 의존성 방향, EventBus, 데이터/런타임 경계 |
| 트러블슈팅 | LostCone Input System, Ghost March UI/GPU/Separation | Cubika bash/game-over | 문제-시도-원인-해결-교훈 구조 |
| AI 협업/작업 방식 | Match3LogueLike, Ghost March 협업 문서 | MyTokenMate, 면접 복기 | "AI 사용"이 아니라 "AI가 안전하게 일하는 환경 설계" |
| 팀 협업 | IronSarcophagus | LostCone 팀원 영입, 면접 커뮤니케이션 사례 | 역할 경계, 인터페이스 합의, 충돌 방지 |
| 도구 제작/생산성 | MyTokenMate | _dashboard 적용 경험 | 직접 제작 도구와 외부 도구 적용 경험을 구분해 표현 |
| 콘텐츠/연출 감각 | LostCone, Cubika | Dong_Mae | 유저층 이해, 레퍼런스 변형, 감성/조작 차별화 |

## 2. 프로젝트 우선순위

| 우선순위 | 프로젝트 | 추천 분량 | 이유 |
|---:|---|---:|---|
| 1 | Ghost March | 2p | 출시작 + DOTS 재설계 + 성능 수치 + 운영/광고/IAP 확장까지 가장 강함 |
| 2 | Match3LogueLike | 1.5~2p | AI 협업 설계, asmdef, EventBus, 테스트, 모바일 설계가 차별점 |
| 3 | IronSarcophagus | 1~1.5p | 팀 프로젝트에서 본인 담당 범위와 시스템 구현이 명확함 |
| 4 | LostCone | 1p | 공개 개발, 유저 피드백, Input System 트러블슈팅 사례가 좋음 |
| 5 | Cubika | 0.5~1p | 출시/포팅/수익화 보조 사례. 작은 프로젝트라 압축 배치 적합 |
| 6 | MyTokenMate | 짧은 보조 언급 | GitHub는 public 전환 완료. 다만 현재 근거가 짧아 별도 페이지보다 AI workflow 보조 사례가 적합 |
| 7 | Dong_Mae | appendix/table | 구현 폭은 넓지만 현재 근거 문서가 README 중심이라 보조 경험으로 적합 |
| 제외/주의 | _dashboard | 본문 프로젝트 제외 | 직접 제작물이 아니므로 "적용/참고한 외부 도구"로만 표현 |

## 3. 프로젝트별 증거 카드

### Ghost March

**주장 후보**
- 출시 이후에도 기술 부채를 인지하고, Legacy 기준본을 보존한 채 DOTS 수직 슬라이스로 재설계했다.
- 대량 적 처리, 렌더링, UI Toolkit 비용을 수치 기반으로 분석하고 개선했다.
- 모바일 출시/운영 관점에서 광고, IAP, localization, Android release build까지 확장했다.

**증거**
- `docs/presentation/ghost-march-dev-summary.md`
- `docs/migration/dots-vs-legacy-perf-baseline.md`
- `docs/migration/flow-field-density-field-investigation.md`
- `docs/collaboration/ai-collaboration-guidelines.md`
- `docs/operations/admob-integration-guide.md`
- `docs/operations/android-release-build.md`
- `docs/operations/playerprefs-save-iap-audit.md`
- `docs/operations/app-update-prompt.md`
- repo metric: 775 commits, 195 C# files, 72 docs md, 12 asmdefs

**수치**
- Legacy 1500 enemies: 약 9 fps.
- DOTS 4096 enemies: 약 67 fps.
- CPU frame time: 109.5 ms -> 14.92 ms.
- UI Toolkit optimization: GPU 16.93 ms -> 11.22 ms, CPU 17.47 ms -> 11.43 ms.
- Instanced batches: 691 -> 약 4 batches.

**PDF에 넣을 장면**
- DOTS vs Legacy 성능 비교 표.
- Assembly 경계 다이어그램.
- GPU Instancing / UI Toolkit dirty 최적화 트러블슈팅 박스.
- Android release checklist: AAB manifest/version/signing/Billing/App Update 검증.
- Play Store QR.

**주의**
- 기존 PDF의 "5주 제작/수상/출시"만 반복하면 약함. 새 PDF에서는 출시 후 재설계와 운영 경험을 강조.
- keystore path, certificate SHA1, AdMob real id 같은 민감하거나 불필요한 운영 세부값은 PDF에 직접 노출하지 않기.

### Match3LogueLike

**주장 후보**
- AI 협업을 단순 코드 생성이 아니라 프로젝트 구조와 작업 규칙으로 설계했다.
- Board/Combat/UI/Data를 asmdef와 EventBus로 분리하고, 테스트로 회귀를 막는 구조를 만들었다.
- 모바일 portrait 매치3 로그라이크의 GDD, 데이터, 밸런스, UI를 문서와 코드로 함께 관리했다.

**증거**
- `CLAUDE.md`
- `documents/dev/architecture.md`
- `documents/dev/asmdef-structure.md`
- `documents/dev/ai-collab-plan.md`
- `documents/dev/multi-agent-team-ops.md`
- `documents/planning/game-design.md`
- `.agents/evidence/20260601-173641-unity-mcp-playmode.md`
- `.agents/evidence/20260601-174323-unity-mcp-editmode.md`
- `.agents/evidence/20260601-uiux-visual-qa.md`
- repo metric: 226 commits, 34 C# test files, 11 asmdefs

**구조**
- `Match3.Data -> Match3.Core -> Board / Combat / Roguelike / Meta / UI / Ads`
- Board와 Combat 직접 참조 금지, EventBus 통신.
- Data 영역 MonoBehaviour 금지.
- 원격 JSON > 로컬 캐시 > SO 기본값.

**PDF에 넣을 장면**
- asmdef 의존성 그래프.
- AI agents/skills/hooks 표.
- PlayMode/EditMode 테스트 evidence: RewardOverlayTests 10/10, SaveManagerPhase1SmokeTests 4/4.
- Board -> EventBus -> Combat 이벤트 흐름.
- Visual QA finding: 기능 테스트와 실제 화면 가독성 검증을 분리한 사례.

**주의**
- "AI가 만들어줌"처럼 보이면 역효과. "AI가 구조를 지키도록 규칙/훅/역할을 설계"로 표현.

### IronSarcophagus

**주장 후보**
- 2인 팀에서 본인 담당 시스템을 명확히 맡아 VR 전차의 포수/탄도/피격/적 AI 흐름을 구현했다.
- 팀 협업을 위해 문서, 네임스페이스, asmdef, 인터페이스 경계를 정리했다.
- 협동의 불편함이라는 컨셉을 역할별 HUD와 시스템 경계로 구현했다.

**증거**
- `Assets/00_Documents/Concept.md`
- `Assets/00_Documents/개발계획.md`
- `Assets/00_Documents/HUD설계.md`
- `Assets/00_Documents/작업현황.md`
- `EnemyTank.cs`, `BallisticCalc.cs`, `FireSystem.cs`, `TankStatus.cs`
- repo metric: 139 commits, 56 project C# files, 7 project asmdefs

**본인 담당으로 표현 가능한 범위**
- 네트워크 기반 구조.
- 포수 VR 조준 인터랙션.
- BallisticCalc / FireSystem.
- 적 AI.
- 게임플레이 모드.

**기술 포인트**
- 탄도 시뮬레이션과 TimeOfFlight.
- 시각 발사체와 피해 판정 위치 일치.
- EnemyTank 5-point exposure check.
- NavMesh 기반 재배치 후보 탐색.
- NetworkVariable 기반 부위별 HP, 장갑/관통/부위 파괴.

**PDF에 넣을 장면**
- 역할 분담 표.
- 포수 발사 흐름: AimController -> BallisticCalc -> FireSystem -> TankStatus.
- 적 AI 노출도 판정 다이어그램.

**주의**
- 팀원 담당 UI/HUD/장전/운전/수리를 본인 구현처럼 쓰지 않기.

### LostCone

**주장 후보**
- 팬층 특성을 고려해 기획 방향을 전환하고, 공개 개발/플레이테스트로 유저 반응을 반영했다.
- Unity Input System의 간헐적 환경 버그를 런타임 상태까지 추적해 해결했다.
- DoTween/Aseprite를 활용해 원작 감성을 연출 중심으로 재현했다.

**증거**
- `README.md`
- `Assets/98_Documentation/InputSystem_Debug_Report.md`
- 면접 복기 문서
- repo metric: 132 commits, 121 C# files

**트러블슈팅 구조**
- 증상: 같은 코드/커밋에서도 키보드 입력이 간헐적으로 중단.
- 실패한 시도: ActionMap 강제 활성화, polling 전환, sceneLoaded, Domain Reload, Library 삭제, git checkout.
- 원인: 터치스크린 노트북에서 Input System이 Control Scheme을 Touch로 auto-switch.
- 해결: Keyboard&Mouse로 control scheme 강제, prefab default scheme 변경, auto-switch 해제.
- 교훈: 코드 외적 런타임/환경 상태 확인.

**PDF에 넣을 장면**
- 트러블슈팅 타임라인.
- 공개 개발 사이클: 개발일지 -> 플레이테스트 -> 설문 -> 방향 전환.
- 개발일지/플레이 영상 QR.

**주의**
- 팬게임 소재는 저작권/상업성보다 "유저 이해와 피드백 반영" 관점으로 배치.

### Cubika

**주장 후보**
- 작은 게임을 빠르게 완성하고 WebGL로 itch.io에 배포했다.
- 출시 후 모바일 조작, 게임오버, 광고/IAP scaffold까지 확장했다.
- 단순 수박게임 클론이 아니라 정사각형 큐브의 회전/밀치기 변형으로 차별화했다.

**증거**
- `README.md`
- `My project/docs/2026-06-03-work-summary.md`
- `My project/docs/game-flow-and-monetization.md`
- repo metric: 30 commits

**보강 포인트**
- Bash mechanics first-contact intent 복원.
- Game over 3초 grace period와 countdown feedback.
- MainMenu / pause popup / confirmation dialogs.
- Unity Ads/IAP remove-ads scaffold.
- `dotnet build`와 EditMode test pass 기록.

**PDF에 넣을 장면**
- WebGL/itch.io 출시 QR.
- Bash mechanic 설명.
- 모바일 포팅/수익화 확장 박스.

**주의**
- 규모가 작고 문서/테스트가 상대적으로 약하므로 메인보다는 압축 배치.

### MyTokenMate

**주장 후보**
- AI coding tool을 여러 개 쓰는 실제 문제를 로컬 데스크탑 도구로 해결하려 했다.
- Claude/Codex의 raw token 합산 한계를 이해하고, rate limit event/statusLine cache를 우선 사용하는 파서를 구현했다.
- API key 없이 local-only로 동작하는 privacy-first Electron overlay를 만들었다.

**증거**
- `README.md`
- `IMPLEMENTATION_NOTES.md`
- `src/main/providers/claude-code.ts`
- `src/main/providers/codex.ts`
- `src/main/providers/gemini-cli.ts`
- `src/main/providers/copilot.ts`
- `src/renderer/src/components/ModelCard.tsx`
- `src/renderer/src/components/Mascot.tsx`
- repo metric: 6 commits, 80 files

**좋은 점**
- 제품 문제 정의가 명확함: AI 사용량을 작업 중 한눈에 확인.
- local log parsing이라 프라이버시/보안 메시지가 좋음.
- Electron/React/TypeScript로 게임 외 기술 폭을 보여줌.
- Tokkie mascot, compact mode, settings, i18n 등 시각 자료 만들기 좋음.

**현재 약점**
- `ROADMAP.md`, `PRD.md`, `TECH_SPEC.md`, `MASCOT_SPEC.md`가 실제 구현과 불일치.
- test/lint/typecheck script 없음.
- `npm run dist` 검증 기록 없음.
- tray icon placeholder.
- provider parser fixture test 없음.

**PDF에 넣기 전 추가하면 좋은 개발**
- 문서 최신화.
- build/dist 검증.
- parser fixture test.
- 실제 overlay screenshot/GIF.
- tray icon/first-run guide/provider status 보강.

**추천 배치**
- 지금: AI workflow 섹션 안에서 2~3줄 보조 언급.
- 별도 문서/별도 1페이지 프로젝트로 쓰기에는 현재 근거가 약함.
- 추가 개발, 빌드 검증, parser fixture test, screenshot/GIF가 갖춰진 뒤에만 "AI Workflow Tool" 독립 페이지 후보로 재검토.

### Dong_Mae

**주장 후보**
- 메트로배니아 장르에서 레벨 기믹, 전투, 보스 패턴, 연출까지 넓은 구현 경험이 있다.

**증거**
- `README.md`

**PDF 활용**
- 기타 구현 경험 표에 적합.
- "레벨 기믹 구현 폭"을 보여주는 보조 자료.

**주의**
- 현재 수집 근거가 README 중심이라 깊은 기술 페이지로 쓰기엔 부족.

### _dashboard

**표기 원칙**
- 직접 제작 프로젝트로 넣지 않는다.
- 외부/타 repo 기반으로 가져와 사용한 프로젝트 관리 도구로만 언급 가능.
- "AI 기반 자동 리뷰 대시보드를 적용해 진행도/리스크/todo를 추적했다" 정도의 작업 방식 근거로 제한.

## 4. 추천 PDF 구성안

### 구성안 A: 게임 클라이언트 중심

1. Cover / Summary
2. About + 기술 요약
3. Ghost March: 출시 후 DOTS 재설계
4. Ghost March: 성능/렌더/UI 트러블슈팅
5. Match3LogueLike: AI 협업 아키텍처
6. Match3LogueLike: GDD/테스트/모바일 구조
7. IronSarcophagus: 팀 프로젝트 역할과 VR 시스템
8. LostCone: 공개 개발과 Input System 트러블슈팅
9. Cubika + 기타 프로젝트 요약
10. Contact / Links

### 구성안 B: AI workflow 차별화 강화

1. Cover / Summary
2. About + 기술 요약
3. Ghost March: 출시/운영/성능 재설계
4. Match3LogueLike: AI 협업 시스템 설계
5. IronSarcophagus: 팀 VR 시스템 구현
6. LostCone/Cubika: 유저 피드백과 배포 경험
7. Appendix: 기타 구현 경험, 링크 QR, MyTokenMate 짧은 언급

현재 목적이 게임 클라이언트 취업이면 A가 안정적이다.  
AI 활용 역량을 강하게 어필할 회사라도 MyTokenMate는 별도 페이지보다 AI workflow 섹션 안의 짧은 사례로만 쓰는 편이 낫다.

## 5. 다음 수집/정리 태스크

| 우선순위 | 태스크 | 이유 |
|---:|---|---|
| 1 | MyTokenMate 문서 최신화/빌드 검증 여부 확인 | 추후 독립 프로젝트로 키울지 판단할 때 필요. 현재 PDF에는 짧은 언급만 반영 |
| 2 | Ghost March 최신 release/AAB 검증 문서 확인 | 대표 프로젝트의 운영 경험 강화 |
| 3 | Match3 `.agents/evidence` 샘플 3~5개 확인 | AI 협업/검증 루프의 실제 증거 |
| 4 | LostCone 개발일지/플레이테스트 외부 링크 증거 확인 | 공개 개발 수치 검증 |
| 5 | 기존 이력서 PDF OCR | 현재 환경에 OCR 도구 없음. 원본 문서나 OCR 도구가 있으면 GameJob에서 안 보이는 자기소개/경력 보완 가능 |
| 6 | Google Docs 1 권한 확보 | 면접 복기 추가 자료 |
| 완료 | 프로젝트별 QR 링크 최종 목록 작성 | `portfolio_link_inventory.md` 1차 작성 완료 |
