# Portfolio Material Research Notes

작성일: 2026-06-16

목적: 웹 포트폴리오, 기존 PDF, GameJob, Google Docs, GitHub 저장소에서 PDF 포트폴리오 보강에 쓸 수 있는 원자료를 수집한다. 이 문서는 최종 PDF 문안이 아니라 근거 자료 인벤토리다.

## 접근 현황

| 자료 | 상태 | 메모 |
|---|---:|---|
| 로컬 웹 포트폴리오 | 확인 | `index.html` 기준 소개, 프로젝트 GIF 쇼케이스, 기술 스택, 연락처 확인 |
| 기존 포트폴리오 PDF | 일부 텍스트 추출 성공 | 12p, 프로젝트별 짧은 설명과 링크 중심 |
| 기존 이력서 PDF | 텍스트 추출 실패 | 이미지 기반 PDF로 보임. 현재 환경에 `tesseract`/OCR 라이브러리 없음 |
| GameJob 이력서 링크 | 부분 확인 | 공개 범위에서 학력/기술/자격/수상/지원분야 확인. 자기소개서는 기업회원 제한 |
| Google Docs 1 | 접근 실패 | export 결과 401 Unauthorized |
| Google Docs 2 | 텍스트 추출 성공 | 기어세컨드 면접 복기. 문제 해결, AI 활용, 커뮤니케이션 사례 풍부 |
| GitHub | 확인 | `gh` 인증 계정 NulMa로 private repo까지 조사 가능 |

## 기존 포트폴리오 PDF에 이미 있는 내용

- About: 학력, 병역, 수상, OPIc, 연락처, GitHub.
- 프로젝트 5개: Match3LogueLike, LostCone, IronSarcophagus, Cubika, Ghost_March.
- 각 프로젝트별 한 줄 개요, 링크, 플레이 영상 링크.
- 일부 구현 포인트:
  - Match3LogueLike: AI 협업 방식 설계.
  - LostCone: 개발일지 50회, 플레이테스트 3회, Copilot 활용, DoTween 연출.
  - IronSarcophagus: asmdef, 적 AI Raycast 노출도, 역할별 HUD.
  - Cubika: 단일 프리팹 12종, `cubeShape()`, BashColliderCheck, itch.io.
  - Ghost_March: 5주 제작, 공모전 장려상, Play Store 출시.

결론: 새 PDF는 같은 내용을 반복하기보다 "구체적 문제 해결 과정", "구조 설계", "검증 결과", "AI 협업 운영 방식"을 보강하는 쪽이 적합하다.

## GameJob에서 확인한 보강 후보

- 지원분야: 게임개발(클라이언트), 게임개발(모바일).
- 키워드: 클라이언트, 게임기획, 컨텐츠, 게임프로그래밍, 게임프로그래머.
- 보유기술: Unity, C#, Aseprite.
- 자격증: Unity Certified Associate: Game Developer, 2026.05.
- 수상: 2023 충청권 게임 인디유 공모전 장려상.
- 어학: 영어 OPIc IM2, 일본어 일상회화.

PDF 반영 후보:
- 첫 장 요약 또는 About에 `Unity Certified Associate: Game Developer (2026.05)` 추가.
- 지원 포지션을 `Unity / C# 게임 클라이언트 개발자, 모바일 클라이언트 지향`으로 명확히 표현.

## 면접 복기 문서에서 얻은 역량 근거

### 문제 해결 태도

- 개발 시작 시점: 대학 4학년 졸업작품 고민에서 시작, 이후 독학과 부트캠프를 병행.
- 문제 앞에서 오래 붙잡고 탐구하는 편이라고 설명.
- 단순히 정답을 찾는 것이 아니라, 플레이어가 보는 현상에서 원인을 역추적하는 방식이 반복됨.

### Ghost March 관련 사례

- DOTS 전환 중 적 과밀집 문제:
  - 적이 과밀집하면 충돌을 무시하고 무리를 뚫고 들어오는 문제 발생.
  - Flow Field를 적용했으나 추적 경로가 난잡해짐.
  - 반시계 방향 보정값을 넣어 흐름을 안정화하는 아이디어로 이어짐.
- 데미지 텍스트 과다 출력으로 프로파일러 스파이크 발생:
  - 큰 데미지만 표시하는 옵션.
  - 그리드당 텍스트 수 제한으로 분포를 유지하며 출력량 감소.
- 장르 차별화:
  - 뱀파이어 서바이벌 레퍼런스 기반.
  - 리듬게임/격투게임 커맨드 입력을 궁극기 게이지 수급 시스템으로 변형.

### Cubika 관련 사례

- 수박게임의 원형 병합 구조를 정사각형 큐브로 변형.
- 정형화된 플레이를 줄이기 위해 회전과 밀치기 기능을 추가.
- 두 동일 큐브가 동시에 닿을 때 둘 다 다음 단계가 되는 이슈를 인지.
  - 심각한 이슈가 아니고 이스터에그처럼 느껴질 수 있어 남김.
  - 해결한다면 우선 합쳐질 기준 또는 `이미 합쳐지는 중` 상태 데이터가 필요.

### LostCone 관련 사례

- 처음은 혼자 시작했으나 개발일지를 보고 연락한 팀원을 영입.
- 본인: 전반 기능, 레벨디자인, 리소스 제작.
- 팀원: 저장 기능 중심.
- Input System 문제:
  - 같은 코드/커밋에서도 키보드 입력이 간헐적으로 안 됨.
  - 여러 코드상 대응이 실패.
  - 원인은 노트북 터치스크린 때문에 Unity Input System이 Control Scheme을 Touch로 잡은 것.
  - AI에게 엔진 캡처를 보여주어 원인 발견, 코드로 기본 입력장치를 Keyboard&Mouse로 고정.
- 방향 전환:
  - 처음에는 퍼즐 요소가 있는 메트로배니아로 기획.
  - 실제 유저는 가수 팬층이라 게임 이해도가 낮을 수 있다고 판단.
  - 커뮤니티 설문을 통해 이스터에그를 찾는 힐링 게임 방향으로 전환.

### AI 활용 방식

- Copilot에서 시작해 Claude Code와 Codex를 병행.
- 좁은 범위 검증은 Claude, 넓은 단위 작업은 Codex가 강하다고 판단.
- 작업은 Codex, 검증/검토는 Claude Code로 나눠 결과 신뢰성을 보완.
- Unity MCP를 연결해 사용.
- 토큰 사용량 증가를 줄이기 위해 컨텍스트 압축 관련 오픈소스를 검토.
- 오픈소스 적용 시 사용자 리뷰, 신뢰도, 프로젝트 볼륨 적합성을 확인.
- 스킬을 전체관리자, UI, 레벨, 문서 등으로 분리해 관리하는 시도 중.

### 커뮤니케이션 사례

- 대학 조별과제에서 첫 회의 15분간 침묵이 이어지자 먼저 나서서 인사, 안건 정리, 역할 배분.
- 영상에는 콘티, 대본에는 초안을 제공해 협업 진입 장벽을 낮춤.
- 커뮤니케이션 역량을 "문제를 한쪽 잘못으로 단정하지 않고 회색 지점을 찾는 태도"로 설명.

## GitHub 저장소 목록에서 본 큰 흐름

| 저장소 | 공개 | 주요 언어 | 최근 push | 메모 |
|---|---:|---|---|---|
| Ghost_March | private | C# | 2026-06-13 | 출시작의 DOTS 재구성, 운영/광고/IAP/문서화까지 확장 |
| Match3LogueLike | private | HTML/C# 혼재 | 2026-06-11 | AI 협업 구조, 테스트, asmdef, EventBus 설계 |
| Cubika | private | C# | 2026-06-03 | WebGL 출시작을 모바일/광고/IAP 방향으로 보강 |
| _dashboard | public | Astro | 2026-06-03 | 외부/타 repo 기반으로 가져와 사용한 Codex 프로젝트 리뷰/진행도 대시보드. 직접 제작물로 표현 금지 |
| LostCone | private | C# | 2026-04-23 | 팬게임, DoTween, Input System 트러블슈팅 |
| IronSarcophagus | private | C# | 2026-04-20 | XR 팀 프로젝트 fork/정리본 |
| Dong_Mae | private | C# | 2025-03-25 | 메트로배니아 팀 프로젝트 |

커밋 수 참고:
- Ghost_March: 775
- Match3LogueLike: 226
- IronSarcophagus: 139
- LostCone: 132
- Cubika: 30
- _dashboard: 283 (직접 제작물이 아니므로 포트폴리오 프로젝트 지표로 사용 금지)

## Ghost March 보강 포인트

근거 파일:
- `docs/presentation/ghost-march-dev-summary.md`
- `docs/migration/flow-field-density-field-investigation.md`
- `docs/collaboration/ai-collaboration-guidelines.md`
- `docs/collaboration/context-token-optimization.md`
- `_dashboard` 최신 Ghost_March report

수집 내용:
- 출시 후 Legacy MonoBehaviour 구조를 기준본으로 격리하고 DOTS 중심 수직 슬라이스로 재구현.
- 대상: Enemy 스폰/이동/피격/사망, Bullet, Soul/Drop, Wave, 충돌/데미지 이벤트.
- 문제 인식:
  - `GameManager.instance`가 상태/입력/UI/저장/일시정지까지 소유.
  - `Weapon.Update()` switch 기반 무기 분기.
  - PoolManager prefab 배열 순서가 런타임 id 계약이 되어 씬/코드 결합.
- DOTS 전환:
  - ECS singleton component로 상태 분해.
  - ScriptableObject 설정을 ECS Blob으로 변환.
  - MonoBehaviour는 UI, 입력, 씬 부트스트랩, 외부 서비스 연동으로 제한.
- 성능/측정:
  - Legacy 1500마리 약 9fps vs DOTS 4096마리 약 67fps 기록.
  - CPU frame time 109.5ms -> 14.92ms.
  - UI Toolkit 최적화로 GPU 16.93ms -> 11.22ms, CPU 17.47ms -> 11.43ms.
  - Instanced Batches 691 -> 4배치 수준 감소.
- 트러블슈팅:
  - GPU Instancing 전환 후 플레이어/적/소울 소실: stale serialized scene value와 snapshot fallback 부재.
  - EnemySeparation 더블버퍼 버그: 절대좌표 기록이 chase 이동을 덮어씀. `PositionDelta`로 해결.
  - RenderMeshIndirect 도입 후 GPU 폭증: URP 2D와 궁합 문제로 DrawMeshInstanced 유지.
  - UI Toolkit 매 프레임 label.text 업데이트로 패널 전체 re-render. 변경감지로 dirty 빈도 감소.
  - TMP 한글 깨짐: 한글 glyph 범위, dynamic source font, sampling size 문제 분리.
- 운영/서비스:
  - AdMob integration checklist, Android release build, app update prompt, IAP/remove ads, localization workflow 문서 존재.
  - Android release AAB 문서에 Play Console 업로드 전 검증 절차가 정리됨.
    - AAB filename/versionCode/versionName naming rule.
    - `bundletool dump manifest`, `keytool`, `dexdump` 기반 검증.
    - Billing permission, Advertising ID permission, Play Billing metadata 확인.
    - 2026-06-10 기준 `3.0.7` / version code `72` release candidate 검증 기록.
    - Unity IAP / Play App Update 런타임 클래스가 R8 minification으로 제거되는 문제를 `proguard-user.txt` keep rule로 대응.
  - AdMob:
    - run result screen interstitial placement.
    - no-ads entitlement일 때 광고 skip.
    - debug/editor build는 test ad unit 사용.
    - Unity 6 Gradle/EDM path 문제를 피하기 위해 Android dependency를 `mainTemplate.gradle`에 직접 pin.
  - Save/IAP audit:
    - PlayerPrefs key inventory와 risk level 정리.
    - no-ads entitlement는 local-only first slice라 final commerce authority로는 부족하다고 명시.
  - App Update:
    - Google Play In-App Updates adapter를 app shell/main menu 서비스로 분리.
    - DOTS gameplay assembly에 Play Core 의존성을 넣지 않는 boundary 명시.
    - Play-installed build에서 runtime class missing 문제를 logcat/class 검증으로 추적.
- AI 협업:
  - Claude/Codex 작업 소유권, 병렬 금지 영역, asmdef 경계, context/token 절약 규칙 문서화.

PDF 활용 방향:
- 대표 프로젝트로 "출시 -> 성능 문제 인식 -> DOTS 재설계 -> 실측 -> 운영 기능" 흐름을 보여주기 좋음.

## Match3LogueLike 보강 포인트

근거 파일:
- `CLAUDE.md`
- `documents/dev/ai-collab-plan.md`
- `documents/dev/architecture.md`
- `documents/dev/asmdef-structure.md`
- `documents/dev/multi-agent-team-ops.md`
- `documents/planning/game-design.md`
- `_dashboard` 최신 Match3 report

수집 내용:
- Unity 6 + URP 2D, Android 우선, 세로 화면, 5x7 매치3 + 전투 + 스킬 게이지 구조.
- 아키텍처:
  - `Match3.Data -> Match3.Core -> Match3.Board / Combat / Roguelike / Meta / UI / Ads`
  - Board와 Combat 직접 참조 금지, EventBus만 허용.
  - `Match3.Data`는 MonoBehaviour 금지, SO/interface/enum 전용.
  - 원격 JSON > 로컬 캐시 > SO 기본값 우선순위.
  - Firebase -> Remote Config -> Addressables -> SOOverride -> Localization -> MainMenu 부트 순서.
- asmdef:
  - Data, Core, Board, Combat, Roguelike, Meta, UI, Ads, Tests로 분리.
  - 테스트 asmdef: EditMode/PlayMode.
- 테스트:
  - C# 테스트 파일 34개.
  - Board input recovery, Board intervention, Combat event, Reward overlay, Shop flow, Run loop scene smoke 등.
- 검증 evidence:
  - `RewardOverlayTests` PlayMode 10/10 succeeded 기록.
  - `SaveManagerPhase1SmokeTests` EditMode 4/4 passed 기록.
  - worker path guard, architecture scan, `git diff --check`, merge preview를 거친 agent evidence 존재.
  - UI/UX visual QA에서 기능 테스트가 통과해도 실제 Simulator 화면이 읽히지 않을 수 있다는 residual risk를 별도 기록.
- AI 협업 설계:
  - 범용 49-agent 템플릿이 아니라 프로젝트 모듈과 1:1 대응하는 8개 에이전트 설계.
  - arch-guardian, board-agent, combat-agent, roguelike-agent, ui-agent, data-agent, balance-agent, eventbus-agent.
  - 스킬 17개: add-enemy, add-relic, fix-bug, review-arch, eventbus-audit 등.
  - 훅 6개: Data MonoBehaviour 금지, Find 금지, Update 할당 금지, hardcode/string literal/god object 감지.
- 병렬 작업 운영:
  - Coordinator / Worker / Verify Codex 역할 분리.
  - worker별 git worktree, lane ownership, handoff format.
  - scene/prefab/SO/meta/ProjectSettings/localization table은 단일 소유.

PDF 활용 방향:
- "AI를 활용했다"가 아니라 "AI가 안전하게 일하도록 아키텍처, 규칙, 테스트, 작업 lane을 설계했다"로 표현.
- 신입 포트폴리오에서 흔치 않은 개발 프로세스 설계 사례.

## IronSarcophagus 보강 포인트

근거 파일:
- `Assets/00_Documents/Concept.md`
- `Assets/00_Documents/개발계획.md`
- `Assets/00_Documents/HUD설계.md`
- `Assets/00_Documents/작업현황.md`
- 코드: `EnemyTank.cs`, `BallisticCalc.cs`, `FireSystem.cs`, `TankStatus.cs`

수집 내용:
- 컨셉: "협동의 불편함이 재미가 된다."
- VR 협동 전차 시뮬레이션. 포수/장전수/운전수/수리공 역할 분리.
- 2인 개발 역할:
  - JWT: 네트워크 기반 구조, 포수 VR 조준 인터랙션, BallisticCalc, FireSystem, 적 AI, 게임플레이 모드.
  - LJY: VR 물리 인터랙션, 장전/운전/수리, RoleSync, UI/HUD, VFX/SFX.
- 프로젝트 구조:
  - Core, Network, Tank, Enemy, Gameplay, UI, Systems.
  - 프로젝트 C# 파일 56개, asmdef 7개.
- 포수 시스템:
  - AimController, BallisticCalc, FireSystem.
  - 포물선 탄도 시뮬레이션, TimeOfFlight 계산, Linecast 기반 착탄, 시각 발사체와 피해 판정 일치.
  - OnImpact 이벤트로 VFX/SFX 연동 경계 제공.
- 적 AI:
  - 총구에서 플레이어 5개 포인트 Linecast로 노출도 계산.
  - 20% 미만 노출은 차폐 상태로 간주.
  - 12방향 후보 중 NavMesh + 시야 확보 가능한 재배치 위치 탐색.
  - LKP(last known position)와 awareness 상태 관리.
- 전차 피해:
  - NetworkVariable 기반 부위별 HP.
  - Hull, Turret 등 부위별 장갑 두께와 관통 판정.
  - 부위 파괴 시 spillover damage.
- HUD:
  - 공용 HUD, 사수 HUD, 운전수 HUD, 수리 HUD, 장전수 HUD로 분리.
  - RoleSync와 TankStatus 이벤트 기반.

PDF 활용 방향:
- 팀 프로젝트이므로 "본인 담당"을 분명히 쓰기.
- 포수/탄도/적 AI/게임플레이 시스템을 JWT 범위로 강조.

## LostCone 보강 포인트

근거 파일:
- `README.md`
- `Assets/98_Documentation/InputSystem_Debug_Report.md`
- 면접 복기 문서

수집 내용:
- 플랫포머 팬게임, 2025.04.03 시작.
- C# 파일 121개.
- 공개 개발:
  - 개발일지 50회, 플레이테스트 3회, 피드백 수집.
  - 커뮤니티 설문으로 방향 전환.
- 리소스/연출:
  - Aseprite 직접 제작.
  - DOTween으로 아이템 왕복, fade in/out, 프롤로그 컷씬.
- Input System 트러블슈팅:
  - 모든 키보드 입력이 간헐적으로 중단.
  - ActionMap 강제 활성화, Update 체크, polling 전환, sceneLoaded 대응, Domain Reload 대응, Library 삭제, git checkout 등 실패.
  - 플레이 모드 Inspector 확인으로 Control Scheme이 Touch, Devices가 Touchscreen인 것 확인.
  - 원인: Auto-Switch + 터치스크린 장치 감지.
  - 해결: `SwitchCurrentControlScheme("Keyboard&Mouse", Keyboard.current, Mouse.current)`, prefab default scheme 변경, auto-switch 해제.

PDF 활용 방향:
- "환경/엔진 상태까지 추적한 간헐적 버그 해결" 사례로 강함.
- 팬게임이므로 상업 성과보다 유저 피드백/방향 전환/연출 집중 사례로 배치.

## Cubika 보강 포인트

근거 파일:
- `README.md`
- `My project/docs/2026-06-03-work-summary.md`
- `My project/docs/game-flow-and-monetization.md`
- `_dashboard` 최신 Cubika report

수집 내용:
- 2024.04.02 시작, Suika Game 모티브 큐브 퍼즐, 1인 제작.
- itch.io WebGL 링크 존재, v1.5.
- 2026-06-03 작업:
  - 모바일 컨트롤과 scene binding 지원.
  - Drop/reset/bash 버튼 UI 처리 수정.
  - Bash hold-to-activate에서 toggle 방식으로 변경.
  - Bash는 dropped cube의 first valid body collision에만 적용되도록 원래 의도 복원.
  - Bash effect collider는 trigger/visual 전용으로 정리.
  - Game over: over-line cube가 3초 지속될 때만 발생, countdown visual 추가.
  - MainMenu, pause popup, confirmation dialogs 추가.
  - Unity Ads, Unity IAP, remove-ads product scaffold 추가.
  - `dotnet build` 0 warnings/errors, EditMode tests pass 기록.
- 대시보드 리뷰상 보강 필요:
  - Hand 입력/회전/bash 책임 분리.
  - 핵심 큐브 병합/게임오버 PlayMode 테스트.
  - 모바일 컨트롤 생성 코드 프리팹/설정 기반으로 축소.

PDF 활용 방향:
- 작은 프로젝트라 대표성은 낮지만, "출시 후 모바일 포팅/광고/IAP로 확장하려는 운영 경험"으로 쓰기 좋음.

## _dashboard 참고 포인트

근거 파일:
- `README.md`
- `CLAUDE.md`
- `PLAN.md`
- `RISKS.md`
- `reports/*`

수집 내용:
- Bit-Unity15th 프로젝트 repo들의 자동 코드리뷰와 진행도 리포트를 모아보는 Astro 대시보드.
- 각 프로젝트 repo의 새 커밋 기준으로 Codex가 한국어 리뷰 리포트 작성.
- 진행도, 위험도, todo, backlog, 문서화 상태를 정리.
- 프로젝트 repo에는 workflow나 설정 파일을 추가하지 않고 `_dashboard`에서만 자동화 상태 관리.
- 파이프라인:
  - GitHub org repo 탐색.
  - 교육용/archived/reviewignore repo 제외.
  - 마지막 리포트 이후 새 커밋 확인.
  - 호출 간격/커밋 수 gate 확인.
  - read-only clone.
  - Codex 리뷰 프롬프트 생성.
  - Markdown report 검증.
  - `reports/{repo}` 저장.
  - Astro dashboard build.
  - GitHub Pages deploy.
- 리포트 schema:
  - project, date, commit_range, commit_count, risk_level, tags, summary, progress_estimate, doc_scores, todos, backlogs, resolved_from_backlog.
- 리스크 관리:
  - Codex 구독 한도/auth 만료.
  - org repo 수 증가.
  - prompt injection 방어.
  - PAT 최소 권한.
  - runner disk/diff size.
- 보안/검증:
  - `<student_content>` 경계로 prompt injection 완화.
  - report validator로 frontmatter, commit_range, risk_level, secret pattern 검증.
  - 프로젝트 repo는 read-only.

PDF 활용 방향:
- 사용자가 직접 만든 프로젝트가 아니므로 별도 프로젝트처럼 소개하면 안 됨.
- "외부 도구/레퍼런스를 가져와 프로젝트 관리에 적용했다"는 작업 방식 근거로만 제한.
- PDF 본문에서는 삭제하거나, AI workflow 설명의 작은 참고 항목으로만 사용.

## MyTokenMate 보강 후보

근거 파일:
- `README.md`
- `PRD.md`
- `TECH_SPEC.md`
- `IMPLEMENTATION_NOTES.md`
- `MASCOT_SPEC.md`
- 코드: `src/main/providers/*`, `src/main/ipc.ts`, `src/main/index.ts`, `src/renderer/src/App.tsx`, `src/renderer/src/components/*`

수집 내용:
- AI coding tool 사용량을 항상 위에 띄우는 Electron 데스크탑 오버레이.
- Claude Code, Gemini CLI, OpenAI Codex, GitHub Copilot 로컬 로그를 파싱.
- API key, 클라우드 계정, 네트워크 요청 없이 로컬 로그 기반 사용량 표시를 지향.
- 기술 스택:
  - Electron 31, React 18, TypeScript, Tailwind CSS, Zustand, electron-store, node-cron, electron-builder.
- 주요 기능:
  - always-on-top transparent overlay.
  - system tray.
  - refresh interval.
  - model card + progress bar.
  - color theme presets/custom color.
  - font file/folder selection.
  - 8 language UI option.
  - compact toolbar.
  - Tokkie mascot: 상태별 WebP, click animation, usage 기반 state transition.
- provider 구현:
  - Claude Code: `~/.claude/projects` JSONL, statusLine cache `%USERPROFILE%\.claude\ai-usage-overlay-status.json`에서 5-hour/7-day rate limit percentage 파싱.
  - Codex: `~/.codex/sessions` JSONL에서 `payload.rate_limits.primary/secondary` 파싱.
  - Gemini CLI: `~/.gemini/tmp` JSON에서 usageMetadata 파싱.
  - Copilot: `.copilot/otel`, GitHub Copilot logs의 OTEL token usage 파싱.
- 구현상 의미 있는 판단:
  - Claude JSONL 토큰 합산은 중복 requestId와 cache token 때문에 실제 구독 사용률과 다를 수 있어 statusLine stdin JSON을 별도 capture.
  - Codex도 raw token보다 rate limit event를 우선 표시.
  - real percentage가 없으면 임의 threshold로 `%`를 만들지 않고 `--%` 표시.
  - refresh 중 기존 metric row를 숨기지 않아 창 높이 변화를 방지.

현재 약점:
- 커밋 수 6개, 아직 개발 이력이 짧음.
- README/IMPLEMENTATION_NOTES는 최신에 가깝지만 `ROADMAP.md`, `PRD.md`, `TECH_SPEC.md`, `MASCOT_SPEC.md`는 구현 상태와 어긋나는 부분이 있음.
  - PRD/TECH_SPEC는 API key/API usage 중심으로 작성되어 있으나 현재 구현은 local log parsing 중심.
  - MASCOT_SPEC는 "기획 단계/미구현"이라고 되어 있으나 실제 `Mascot.tsx`와 assets가 존재.
- `package.json`에는 `test`, `lint`, `typecheck` script가 없음.
- installer packaging은 설정만 있고 실제 `npm run dist` 검증 기록이 없음.
- tray icon이 `nativeImage.createEmpty()` placeholder.
- Electron window에 `sandbox: false`가 설정되어 있어 보안 설명/검토가 필요.
- `build.win.icon` 경로가 `assets/icon.ico`인데 실제 파일은 `assets/Icon.ico`로 보임. Windows는 넘어가도 다른 환경/패키징에서 불안정.
- provider 파싱은 실제 로그 포맷 변화에 취약하므로 fixture 기반 테스트가 필요.

PDF 활용 판단:
- GitHub repo는 public 전환 완료. 다만 현재 근거가 짧아 게임 프로젝트들과 같은 비중으로 배치하기에는 약함.
- PDF 본문에서는 "AI coding tool 사용량을 로컬 로그 기반으로 확인하려 만든 개인 생산성 도구" 정도로 짧게 언급하는 편이 적합.
- 별도 문서나 별도 1페이지 프로젝트로 만들기보다는 AI workflow 섹션의 보조 사례로만 사용.
- 추후 빌드 검증, parser fixture test, installer/release, 실제 screenshot/GIF가 갖춰지면 독립 페이지 후보로 재검토.

추후 독립 페이지로 키울 경우의 개발 우선순위:
1. 문서 동기화:
   - README, PRD, TECH_SPEC, ROADMAP, MASCOT_SPEC를 local-log-first 제품 방향으로 통일.
   - "API key 불필요 / no network"를 제품 핵심으로 고정.
2. 빌드 검증:
   - `npm run build`, `npm run dist` 실행.
   - Windows NSIS installer 생성 여부와 실행 스크린샷 기록.
3. 테스트 추가:
   - provider별 fixture JSONL/JSON을 두고 Claude/Codex/Gemini/Copilot parser 단위 테스트.
   - BOM, duplicate requestId, missing rate_limits, credit exhausted case 테스트.
4. 포트폴리오용 시각 자료:
   - overlay 기본 상태, compact mode, settings panel, Tokkie state transition GIF.
   - 실제 Claude/Codex rate limit 표시 장면은 개인정보/사용량 노출을 마스킹.
5. 제품 완성도:
   - 실제 tray icon 적용.
   - first-run empty state / permission guide.
   - provider detection status panel.
   - click-through mode가 구현되어 있지 않다면 추가.
6. 보안/프라이버시:
   - Electron security checklist 정리.
   - `sandbox: false` 유지 이유 또는 true 전환 가능성 검토.
   - 로컬 파일 접근 범위 명시.

## Dong_Mae 보강 포인트

근거 파일:
- `README.md`

수집 내용:
- 메트로베니아 팀 프로젝트.
- 구현 리스트:
  - 타일맵, 아이템 획득, 여러 종류의 문, 로프, 점프패드, 사다리, 움직이는 플랫폼, 일방향 플랫폼, 함정, 물, 부서지는 숨겨진 벽.
  - 카메라 일시 전환, fade in/out, 레터박스 연출.
  - 일반 몬스터: 공격, 추적, 스폰 지점 복귀, 강제 이동, 처치 시 문 개방.
  - 보스: 일반 공격, 도약, 연속 도약, 촉수 프리팹 생성, 개별/글로벌 쿨타임.
  - 플레이어 이동, 공격, 대쉬.
  - 스프라이트/애니메이션 에셋 편집 및 제작.

PDF 활용 방향:
- 현재 웹 포트폴리오에는 빠져 있으나, 레벨 디자인/전투/연출 폭을 보여주는 보조 프로젝트로 활용 가능.
- 다만 대표 프로젝트 5개가 이미 많으므로 appendix나 "기타 구현 경험" 표에 넣는 편이 나음.

## 아직 부족한 자료 / 다음 조사 태스크

1. Google Docs 1 접근 권한 확보 또는 텍스트 공유 필요.
2. 기존 이력서 PDF OCR 필요. 현재 환경에는 `tesseract`, `pytesseract`, `PIL`이 없어 원본 문서나 OCR 도구가 필요.
3. 각 프로젝트별 대표 코드 파일을 2~3개씩 더 읽어 실제 코드 수준 근거를 보강.
4. Ghost March의 최신 Android release/AAB 검증 문서 확인.
5. Match3의 `.agents/evidence` 중 실제 Unity PlayMode/EditMode 검증 로그 샘플 확인.
6. LostCone의 개발일지 링크에서 조회수/피드백/플레이테스트 증거 수집.
7. Play Store / itch.io / YouTube 링크는 QR로 쓸 URL 최종 정리. 1차 정리는 `portfolio_link_inventory.md`에 완료.
8. MyTokenMate를 포트폴리오 보조 프로젝트로 넣을 경우, build/test/installer/screenshot 증거를 추가.
