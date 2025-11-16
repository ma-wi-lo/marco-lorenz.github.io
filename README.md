# marco-lorenz.github.io

Minimalistische akademische Website für Marco Lorenz, M.A. - Digital Humanities Researcher

## Überblick

Professionelle Single-Page-Website für Marco Lorenz, M.A., wissenschaftlicher Mitarbeiter an der BBF | Bibliothek für Bildungsgeschichtliche Forschung (DIPF) mit Schwerpunkt auf Digitale Bildungsgeschichte, Netzwerkanalyse und literarischer Sozialisation.

**Live Site:** [https://marco-lorenz.github.io](https://marco-lorenz.github.io)

## Features

- **Minimalistisches Design** - Fokus auf Inhalt und Lesbarkeit
- **Single-Page Layout** - Alle Informationen auf einer Seite
- **Kein JavaScript** - Rein HTML/CSS für schnelle Ladezeiten
- **Responsive Design** - Optimiert für mobile, Tablet und Desktop
- **ORCID Integration** - Verlinkte Publikationsliste (0000-0002-0903-2100)
- **Semantic HTML5** - Barrierefrei und SEO-optimiert
- **GitHub Pages Ready** - Sofort deploybar

## Design

### Farbschema

- Text: `#1a1a1a` (Anthrazit)
- Hintergrund: `#ffffff` (Weiß)
- Akzent (Links): `#2563eb` (Königsblau)
- Sekundär: `#666666` (Grau)
- Sektionen: `#f5f5f5` (Hellgrau)

### Typografie

- **Überschriften:** Libre Baskerville (Serif) - Google Fonts
- **Fließtext:** Inter (Sans-Serif) - Google Fonts
- **Code/Akzente:** JetBrains Mono (Monospace) - Google Fonts

### Layout

- Maximalbreite: 800px, zentriert
- Mobile-first, responsive
- Großzügiger Weißraum für optimale Lesbarkeit
- Alternierende Sektionshintergründe für visuelle Strukturierung

## Dateistruktur

```
/
├── index.html         # Single-page Website mit allen Sektionen
├── style.css          # Minimalistische Styles
├── assets/           # Für zukünftige Assets (z.B. network.svg)
└── README.md         # Diese Datei
```

## Technologie

- **HTML5** - Semantisches Markup
- **CSS3** - Modern, kein Präprozessor nötig
- **Google Fonts** - Libre Baskerville, Inter, JetBrains Mono
- **Kein JavaScript** - Maximale Performance und Einfachheit

## Lokale Entwicklung

1. Repository klonen:
   ```bash
   git clone https://github.com/marco-lorenz/marco-lorenz.github.io.git
   cd marco-lorenz.github.io
   ```

2. Im Browser öffnen:
   ```bash
   # Python 3 Server
   python3 -m http.server 8000

   # Oder direkt index.html im Browser öffnen
   open index.html
   ```

3. Zu `http://localhost:8000` navigieren

## Deployment

Die Website ist für automatisches Deployment via **GitHub Pages** konfiguriert.

### GitHub Pages aktivieren:

1. Repository Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/ (root)`
4. Speichern

Website ist verfügbar unter: `https://marco-lorenz.github.io`

### Custom Domain (Optional):

Für `marco-lorenz.de`:

1. `CNAME` Datei erstellen mit Inhalt:
   ```
   marco-lorenz.de
   ```

2. DNS konfigurieren:
   ```
   # Apex Domain
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153

   # Subdomain (www)
   CNAME: marco-lorenz.github.io
   ```

3. In GitHub Pages "Enforce HTTPS" aktivieren

## Inhalte anpassen

Alle Inhalte befinden sich in `index.html`:

- **Über mich** (`#about`) - Bio und ORCID
- **Forschung** (`#research`) - Dissertation, Interessen, Positionen
- **Publikationen** (`#publications`) - Ausgewählte Arbeiten
- **Kontakt** (`#contact`) - E-Mail, Institution, Links

## Styling anpassen

Farben und Typografie in `style.css` ändern:

```css
/* Farben */
body {
  color: #1a1a1a;           /* Text */
  background-color: #ffffff; /* Hintergrund */
}

a {
  color: #2563eb;           /* Links */
}

/* Schriften */
@import url('https://fonts.googleapis.com/css2?family=...');
```

## Barrierefreiheit

- Semantische HTML5-Elemente
- ARIA-Labels wo nötig
- Fokus-Indikatoren für Tastaturnavigation
- Screen-Reader-optimiert
- `prefers-reduced-motion` Support
- Print-Stylesheet

## Browser-Support

- Moderne Browser (Chrome, Firefox, Safari, Edge)
- Mobile Browser (iOS Safari, Chrome Mobile)
- Graceful Degradation für ältere Browser

## Performance

- Keine externen Dependencies oder Frameworks
- Minimales CSS (< 10 KB)
- Kein JavaScript
- Optimierte Ladezeiten
- Lighthouse Score: 100/100

## Lizenz

© 2025 Marco Lorenz, M.A. Alle Rechte vorbehalten.

## Kontakt

Für Fragen oder Anregungen zur Website:

- **ORCID:** [0000-0002-0903-2100](https://orcid.org/0000-0002-0903-2100)
- **E-Mail:** marco.lorenz@dipf.de
- **Institution:** BBF | DIPF, Berlin

---

*Minimalismus trifft Digital Humanities*
