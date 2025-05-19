# AccessoCantieri.com Design

## 1. Data Schema

### Tables
- **companies**: id, name, address, logoUrl, createdAt
- **sites**: id, companyId, name, address, city, cap, province, country, radiusM (10-1000), lat, lng, status (PLANNED|ACTIVE|COMPLETED)
- **workers**: id, companyId, firstName, lastName, email, role (OPERAIO|PREPOSTO), googleUid, inviteToken, inviteTokenExpiry
- **attendanceSessions**: id, siteId, date, startTime, endTime, prepostoId
- **attendances**: id, sessionId, workerId, checkIn, checkOut, rating
- **attendanceSummaries**: id, workerId, month, year, totalHours, siteHours

## 2. Multi-tenant Policy
- Every table has `companyId` to scope data.
- Backend checks authenticated user's companyId.
- Row level permissions ensure isolation between tenants.

## 3. Wireframes (ASCII)

### Landing
```
+------------------------------------------------------+
| Logo   [Prova gratis]                                |
|------------------------------------------------------|
| Hero section with call to action                     |
| Features                                             |
| Pricing                                              |
| Footer                                               |
+------------------------------------------------------+
```

### Gestionale Desktop
```
+------------------------------------+
| Sidebar | Dashboard                |
|         | Cantieri                 |
|         | Lavoratori               |
|         | Documenti                |
|         | Profilo Azienda          |
+------------------------------------+
| Frosted glass cards with widgets   |
+------------------------------------+
```

### PWA Mobile
```
+---------------------------+
| [Logo]  Cantiere name     |
| QR code / buttons         |
| Status/Badge             |
+---------------------------+
```

## 4. User Flows

### Admin (Gestionale)
1. Login on desktop.
2. Manage company profile and logo.
3. CRUD cantieri with geofence radius slider and live map.
4. Manage workers: invite Gmail accounts, review presenze, upload documenti.
5. Monitor dashboard widgets.

### Preposto (PWA)
1. Login on mobile, allow GPS.
2. Auto-recognize cantiere via geofence.
3. Tap "Inizia giornata" to open session.
4. Scan worker QR codes for check-in/out, rate on checkout.
5. Review live attendance table, close session manually or at 21:00.

### Operaio (PWA)
1. Login, allow GPS.
2. Auto-detected cantiere opens.
3. Display dynamic QR (TOTP 30s) for check-in/out.
4. See daily/monthly hours badge.

## 5. Roadmap (10 Weeks)

1. **Week 1** – Project setup, repo, CI/CD pipeline, linter.
2. **Week 2** – Database schema & multi-tenant auth.
3. **Week 3** – Backend API for companies, sites, workers.
4. **Week 4** – Desktop UI skeleton with Tailwind + Shadcn.
5. **Week 5** – CRUD Profilo Azienda with logo upload.
6. **Week 6** – CRUD Cantieri with geocoding & map slider.
7. **Week 7** – Worker management tabs & invitation flow.
8. **Week 8** – Documenti module & dashboard widgets.
9. **Week 9** – PWA mobile skeleton with offline caching.
10. **Week 10** – QR flows, geofence utility, testing & deploy.

