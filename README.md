# Executive Coach (EBS) – optimierte Programmseite

Statische HTML-Seite ohne Framework, Build-Schritt oder Paketinstallation. Erstellt am 15. Oktober 2026 auf Basis der offiziellen EBS Programmseite und der lokalen Markenrichtlinien.

## Vorschau und Übernahme in Ihr GitHub Repo

- `index.html` direkt im Browser öffnen oder den gesamten Ordner mit einem statischen Webserver bereitstellen.
- `index.html`, `styles.css`, `app.js`, `.nojekyll` und `assets/` gemeinsam in den gewünschten Ordner Ihres Repositories kopieren. Relative Assetpfade funktionieren auch bei GitHub Pages unter einem Projektpfad.
- Bei GitHub Pages den entsprechenden Branch und Veröffentlichungsordner auswählen. Wenn die Seite die Startseite werden soll, diese Dateien in das Veröffentlichungswurzelverzeichnis kopieren.
- `README.md`, `SOURCES.md`, `asset-sources.json` und `qa-results.json` sind Dokumentation und müssen nicht mit veröffentlicht werden.

## Formular: absichtlich nur ein Platzhalter

Auf ausdrücklichen Nutzerwunsch ist das Formular nicht absendbar. Der Button hat `type="button"` und `aria-disabled="true"`. Eingabetaste und Submit-Ereignisse lösen keinen Versand aus. Es gibt keine Speicherung, kein CRM, keine Analytics, keine Cookies und keine Versandbestätigung. Der sichtbare Hinweis erklärt die Vorschau.

Vor Nutzung zur Leadgenerierung muss ein freigegebener Backend-/CRM-Endpunkt implementiert werden. Dann serverseitige Validierung, Spam-Schutz, Rate-Limits, Versand-/CRM-Fehlerbehandlung, Datenschutztext und eine echte Erfolgsbestätigung ergänzen. Geheimnisse gehören nicht in das Frontend. Den Vorschauhinweis erst nach erfolgreichem Integrationstest entfernen. Das Einwilligungs- und Datenschutzkonzept ist auf den tatsächlichen Versandprozess abzustimmen. Marketingeinwilligung, sofern vorgesehen, separat und freiwillig behandeln.

## Vor dem produktiven Einsatz

1. Programmstart, sämtliche Termine, Kosten, Zulassung, Kontakt und ECTS erneut mit EBS abstimmen. Der Faktenstand hier ist der 15. Oktober 2026. Nach dem Startdatum muss die Seite aktiv gepflegt werden.
2. Originalassets und Schriften sind lokal eingebunden; die Nutzungsfreigabe gilt im Rahmen Ihrer EBS Verwendung. Keine Stockbilder, Rankingsiegel oder erfundenen Referenzen ergänzt. Das Programmbild liegt im Original nur mit 458 × 367 Pixeln vor. Die responsive Ausgabe skaliert diese Datei nicht künstlich hoch. Für Retina-Qualität sollte EBS eine höher aufgelöste freigegebene Originaldatei liefern.
3. Solange dies eine separate Entwurfs-/Testseite mit nicht absendbarem Formular ist, `noindex, follow` unverändert lassen. Für eine freigegebene Produktionsseite mit vollständigem Anfrageprozess auf `index, follow` ändern.
4. Die Canonical-URL verweist derzeit bewusst auf die bestehende offizielle EBS Programmseite. Bei deren Ersatz ist das korrekt. Falls eine neue eigenständig zu indexierende URL verwendet wird, Canonical, `og:url`, WebPage-/Course-IDs und URLs im JSON-LD, den letzten Breadcrumb und `og:image` auf die endgültige URL anpassen. Den Quellenlink im Footer weiterhin auf die offizielle EBS Quelle belassen. Keine parallelen indexierbaren Duplikate erzeugen.
5. `og:image` zeigt gegenwärtig auf das Originalbild bei EBS. Für eine eigenständige Bereitstellung eine absolute URL des eigenen freigegebenen Social-Bildes setzen; relative URLs sind für Social Crawler weniger zuverlässig.
6. Sitemap auf Host-/CMS-Ebene um die finale indexierbare URL ergänzen; robots.txt im Domainwurzelverzeichnis prüfen. Diese Entwurfsseite liefert absichtlich keine erfundene Domain oder pauschale robots.txt mit.
7. HTTPS, Komprimierung und Caching über das Hosting konfigurieren. HTML kurz cachen, versionierte Assets lange. Bei eigenen Security-Headern JSON-LD und lokale Schriften berücksichtigen. GitHub Pages unterstützt keine frei konfigurierbaren Response-Header über dieses HTML Paket.
8. Nach Veröffentlichung reale Core Web Vitals, Search Console und den kompletten Anfrageprozess prüfen. Feldwerte für LCP, INP und CLS lassen sich durch lokale Browserprüfungen nicht nachweisen.

## Inhalt und Conversion

- Infomaterial ist der durchgängige primäre CTA; Anmeldung zum kostenpflichtigen Lehrgang konkurriert nicht mit der Informationsanfrage.
- Start, Format, Umfang, Abschluss und Preis werden bereits im Einstieg sichtbar.
- Voraussetzungen stehen vor dem Curriculum und unterstützen qualifizierte Anfragen.
- Nutzenargumentation, Praxisbezug, Dozent, Termine und FAQ beantworten typische Entscheidungsfragen.
- Formularentwurf mit drei Kontaktfeldern, ohne Postanschrift und Telefonnummer als unnötige Pflichtfelder.
- Mobile CTA-Leiste blendet sich im Formularbereich und Footer aus.

Diese Entscheidungen sind Conversion-Hypothesen. Eine maximale Leadzahl ist nicht garantiert. Nach Aktivierung per A/B-Test bewerten: bestätigte Anfragen pro qualifiziertem Besuch, Formularabbrüche und Leadqualität. CTA-Klicks alleine sind keine Leads. Tracking erst mit freigegebenem Datenschutz-/Consent-Konzept integrieren.

## Technik, SEO und GEO

- Semantisches HTML; eine H1, geordnete Abschnitte und direkt lesbare Programminhalte.
- Native Details-/Summary-Elemente für Curriculum und FAQ, auch ohne JavaScript bedienbar.
- Skip-Link, sichtbare Fokusmarkierungen, beschriftete Felder, native Menübedienung und Escape-Unterstützung.
- Responsive Layouts ab 320 Pixeln, reduzierte Bewegung berücksichtigt.
- Lokale SRH Fonts, STIX Two Text, AVIF mit WebP-Fallback, korrekte Bildgrößen, `fetchpriority="high"` im Hero und Lazy-Loading nachgelagerter Bilder.
- Suchmaschinen-Metadaten, Canonical und Social Metadaten vorbereitet.
- JSON-LD für WebPage, Course, EducationalOrganization und BreadcrumbList. Kein unbelegtes Review-/Rating-Markup und kein Versprechen von Rich Results.
- GEO: klare, eigenständig verständliche Antworten, explizite Programmeinheit und überprüfbare Fakten mit Quelle und Prüfdatum. Keine Garantie für Aufnahme in KI-Antworten und keine wirkungslose robots-Freigabe als Rankingversprechen.

## Prüfung

Microsoft Edge mit Playwright: 320, 375, 390, 768, 1024, 1440 und 1920 Pixel. Keine horizontalen Dokumentüberläufe, keine fehlenden lokalen Assets, keine ungültigen Sprunglinks, keine Browser-JavaScriptfehler. Modulaufklappung, mobiles Menü, Escape und Ausblendung der mobilen CTA im Formularbereich geprüft. Formular erzeugt bei Buttonklick und Eingabetaste keine POST-Anfrage. JSON-LD ist syntaktisch gültig. Desktop- und Mobilansicht visuell geprüft. Ergebnisse: `qa-results.json`.

Kein vollständiges WCAG-Audit, keine realen Core Web Vitals, kein bestätigter Google-Rich-Results-Test und kein Backend-/E-Mail-Versandtest. Das Formular bleibt wie beauftragt ein Platzhalter.
