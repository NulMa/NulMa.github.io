// 정우태 포트폴리오 → PDF (헤드리스 크롬, 화면 그대로 렌더)
// 사용법:
//   1) 이 폴더에 정우태_포트폴리오_v38.dc.html, support.js, assets/ 가 함께 있어야 함
//   2) npm i puppeteer        (최초 1회)
//   3) node make_pdf.mjs
//
// 브라우저 "인쇄 → PDF 저장"과 달리 1122×793 px 페이지를 1:1로 렌더하므로
// 색감·그라데이션·질감이 화면과 동일하게 나옵니다.

import puppeteer from 'puppeteer';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const INPUT = '정우태_포트폴리오_v38.dc.html';
const OUTPUT = '정우태_포트폴리오.pdf';

// 페이지 1장의 픽셀 크기 (= A4 가로 @96dpi)
const PAGE_W = 1122;
const PAGE_H = 793;

const fileUrl = pathToFileURL(path.resolve(INPUT)).href;

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--allow-file-access-from-files'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: PAGE_W, height: PAGE_H, deviceScaleFactor: 2 });

  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60000 });

  // 15페이지가 모두 렌더될 때까지 대기
  await page.waitForFunction(
    "document.querySelectorAll('[data-pg]').length >= 15",
    { timeout: 60000 }
  );
  // 폰트 + 이미지 로딩 대기
  await page.evaluate(async () => {
    try { await document.fonts.ready; } catch (e) {}
    const imgs = Array.from(document.images).filter((i) => !i.complete);
    await Promise.allSettled(imgs.map((i) => i.decode().catch(() => {})));
  });
  await new Promise((r) => setTimeout(r, 1200));

  await page.pdf({
    path: OUTPUT,
    width: `${PAGE_W}px`,
    height: `${PAGE_H}px`,
    printBackground: true,   // 배경·그라데이션 유지
    pageRanges: '',          // 전체
    preferCSSPageSize: false,
  });

  console.log(`✓ 저장 완료: ${OUTPUT}`);
} finally {
  await browser.close();
}
