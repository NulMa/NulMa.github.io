# Portfolio Link / QR Inventory

작성일: 2026-06-16

목적: PDF 포트폴리오에 넣을 링크와 QR 후보를 공개 상태, 검증 상태, 사용 우선순위별로 정리한다.

## 원칙

- 공개 접근 가능한 링크를 QR 우선 후보로 쓴다.
- private GitHub repo는 QR로 넣어도 채용 담당자가 접근하지 못할 수 있으므로 주의한다.
- private repo 링크는 공개 전환, collaborator 초대, zip 제출, 또는 영상/웹 포트폴리오 대체 링크가 있을 때만 본문에 적극 사용한다.
- 개인정보, 인증서 SHA1, keystore path, AdMob real id, 내부 로컬 경로는 PDF에 넣지 않는다.
- QR은 짧은 링크보다 대상이 명확한 원본 링크를 우선한다. 단, 긴 Google Drive 링크는 QR 전용으로 처리하고 텍스트 표기는 축약한다.

## 공개 링크 검증

검증 방법: `Invoke-WebRequest -Method Head -MaximumRedirection 5`  
검증일: 2026-06-16

| 대상 | URL | 상태 | PDF 권장 |
|---|---|---:|---|
| Ghost March Play Store | https://play.google.com/store/apps/details?id=com.NullMa.GhostMarch&hl=ko | 200 | 최우선 QR |
| Cubika itch.io | https://nullma.itch.io/cubika | 200 | 최우선 QR |
| Ghost March YouTube | https://youtu.be/E25iW69OW6k | 200 | 프로젝트 페이지 QR |
| Match3Roguelike YouTube | https://youtu.be/mGgBsoj-2JA | 200 | 프로젝트 페이지 QR |
| Cubika YouTube Shorts | https://youtube.com/shorts/A6-j0cwDtW4?feature=share | 200 | 선택 QR |
| IronSarcophagus YouTube | https://youtu.be/l2X7-3QnWKs | 200 | 프로젝트 페이지 QR |
| LostCone YouTube | https://youtu.be/6QyYSIKdJPw | 200 | 프로젝트 페이지 QR |
| LostCone 개발일지 | https://gall.dcinside.com/mgallery/board/view/?id=yonezkensi&no=114242&search_head=30&page=1 | 200 | 공개 개발 근거 QR |
| GitHub profile | https://github.com/NulMa | 200 | Contact QR |
| Web portfolio repo/site source | https://github.com/NulMa/NulMa.github.io | 200 | 선택 |

## GitHub Repo 공개 상태

검증 방법: `gh repo view --json isPrivate,url,pushedAt`  
검증일: 2026-06-16

| Repo | URL | 공개 상태 | 최근 push | PDF 권장 |
|---|---|---|---|---|
| Ghost_March | https://github.com/NulMa/Ghost_March | private | 2026-06-13 | QR 비추천. Play Store/영상 우선 |
| Match3LogueLike | https://github.com/NulMa/Match3LogueLike | private | 2026-06-11 | QR 비추천. 영상/구조 다이어그램 우선 |
| Cubika | https://github.com/NulMa/Cubika | private | 2026-06-03 | QR 비추천. itch.io 우선 |
| LostCone | https://github.com/NulMa/LostCone | private | 2026-04-23 | QR 비추천. 개발일지/영상 우선 |
| IronSarcophagus | https://github.com/NulMa/IronSarcophagus | private | 2026-04-20 | QR 비추천. 영상 우선 |
| Team IronSarcophagus | https://github.com/Bit-Unity15th-XRProjects/IronSarcophagus | private | 2026-04-02 | QR 비추천. 권한 없으면 접근 불가 |
| MyTokenMate | https://github.com/NulMa/my-token-mate | public | 2026-05-07 | 공개 전환 완료. 단 PDF에서는 짧은 보조 언급 권장 |

## 프로젝트별 QR 추천

### Ghost March

권장 QR:
- Play Store: https://play.google.com/store/apps/details?id=com.NullMa.GhostMarch&hl=ko
- Gameplay video: https://youtu.be/E25iW69OW6k

보조 텍스트:
- Google Play 출시
- 2023 충청권 게임 인디유 공모전 장려상
- Android release/AAB 검증 기록은 PDF 본문에서 요약하고 내부 로컬 경로/서명 정보는 제외

### Match3LogueLike

권장 QR:
- Gameplay video: https://youtu.be/mGgBsoj-2JA

GitHub:
- private이므로 공개 전환 전에는 QR 비추천.
- PDF에는 architecture diagram, tests/evidence summary, AI workflow 표가 더 유효.

### IronSarcophagus

권장 QR:
- Gameplay video: https://youtu.be/l2X7-3QnWKs

GitHub:
- team repo와 personal fork 모두 private.
- PDF에서는 역할 분담표와 시스템 흐름을 본문 증거로 사용.

### LostCone

권장 QR:
- Gameplay video: https://youtu.be/6QyYSIKdJPw
- 개발일지: https://gall.dcinside.com/mgallery/board/view/?id=yonezkensi&no=114242&search_head=30&page=1

주의:
- 개발일지 플랫폼 특성상 채용 담당자에게 낯설 수 있음. PDF 본문에는 "공개 개발 기록"으로 설명하고 QR은 보조로 배치.

### Cubika

권장 QR:
- itch.io: https://nullma.itch.io/cubika
- Gameplay short: https://youtube.com/shorts/A6-j0cwDtW4?feature=share

GitHub:
- private이므로 QR 비추천.

### MyTokenMate

현재 권장:
- GitHub repo는 public 전환 완료: https://github.com/NulMa/my-token-mate
- 다만 installer/release, 빌드 검증, parser fixture test, demo 영상 근거가 부족하므로 별도 프로젝트 페이지나 QR 주력 배치는 보류.
- PDF에서는 AI workflow 섹션의 보조 사례로 텍스트 링크를 넣는 정도가 적합.

추가 개발 후 재검토:
- Windows installer 또는 release page 생성.
- README screenshot/GIF와 parser fixture test 추가.
- 빌드/실행 검증 기록 확보 후 QR 후보로 승격.

### _dashboard

표기 원칙:
- 직접 제작물이 아니므로 QR/프로젝트 페이지로 넣지 않는다.
- "외부 도구를 적용해 AI 리포트 기반으로 프로젝트 상태를 관리했다" 정도의 작업 방식 참고로만 사용.

## Contact 링크

| 항목 | 값 | PDF 사용 |
|---|---|---|
| Email | jungwt524@gmail.com | 텍스트 |
| GitHub | https://github.com/NulMa | QR + 텍스트 |
| Phone | 010-4738-4382 | 이력서에는 가능, 공개 포트폴리오 PDF에는 배포 범위에 따라 판단 |

## PDF 링크 배치 제안

1. 각 프로젝트 페이지 우측 상단: 1개 대표 QR.
2. Ghost March / Cubika처럼 실제 배포된 프로젝트는 "Play / Store" 링크를 영상보다 우선.
3. Match3 / Iron / LostCone은 영상 QR 우선.
4. 마지막 Contact 페이지에는 GitHub profile과 웹 포트폴리오 QR을 모음.
5. private GitHub repo는 본문 텍스트로만 두거나 아예 제거. 공개 전환 후 QR 추가.
