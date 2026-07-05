# 자카르티 (JakarTee) — Smart Booking (Clone)

자카르타 골프/식당/연습장 예약 안내 앱. 기존 JakarTee 앱의 UI/UX와 데이터를 참고하여
새로 구현한 Next.js + Tailwind PWA입니다. 예약 완료 시 와츠앱 링크 대신 앱 내 요약
화면을 보여주며, 실제 결제나 로그인은 없습니다.

- **배포 주소**: https://jakartatee.vercel.app
- **저장소**: https://github.com/4langhago/jakartatee

## 설치형 앱(PWA)으로 사용하기

- **모바일(Android Chrome / iOS Safari)**: 위 주소로 접속 후 브라우저 메뉴에서
  "홈 화면에 추가"를 선택하면 아이콘이 생성되어 일반 앱처럼 실행됩니다.
- **데스크톱(Chrome/Edge)**: 주소창 우측의 설치 아이콘을 클릭하면 독립 창으로 설치됩니다.
- 오프라인에서도 마지막으로 방문한 화면은 서비스워커 캐시를 통해 표시됩니다.

## 로컬 개발

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인합니다.

## 데이터

- `src/data/restaurantZones.ts`, `golfZones.ts`: 식당 탭의 지역 카드 및 경복궁 지역 골프 요금
- `src/data/membership.ts`: 더카드/큐골프 멤버십 코스 요금 및 지역 필터
- `src/data/golfCourses.ts`: 골프장 탭에 노출되는 32개 골프장 그린피(평일/주말) 및 연락처
- `src/data/practiceRange.ts`: 연습장(J골프) 예약 시간대

## 배포

```bash
npx vercel --prod
```
