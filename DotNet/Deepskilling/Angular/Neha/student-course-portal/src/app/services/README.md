# services

- `course.service.ts` — course CRUD over HttpClient with RxJS operators (map/tap/retry/catchError)
  (Hands-On 6 → refactored in Hands-On 8)
- `enrollment.service.ts` — tracks enrolled course IDs; demonstrates service-to-service injection
  (Hands-On 6)
- `auth.service.ts` — hardcoded login flag used by the route guard (Hands-On 7)
- `notification.service.ts` — intentionally provided at component level, not root (Hands-On 6)
- `loading.service.ts` — BehaviorSubject-backed global loading flag driven by the loading interceptor
  (Hands-On 8)
