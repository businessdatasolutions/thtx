# Polling System - Feature Idea

**Status**: Planned
**GitHub Issue**: [#1](https://github.com/businessdatasolutions/thtx/issues/1)
**Gerelateerd aan**: [Visionary Voices - Idee #4](../brainstorms/visionary-voices.md#4-visionary-voices-polls-wekelijkse-engagement-tool-)

---

## Samenvatting

Een admin-configureerbare polling tool die bezoekers een kleine poll toont en hen vraagt een keuze te maken. De poll data wordt opgeslagen voor analyse en gebruik in content/marketing.

---

## Doel

- **Engagement**: Interactie met website bezoekers verhogen
- **Lead generation**: Email addresses verzamelen (unlock results)
- **Data insights**: Begrijpen wat bezoekers drijft en welke uitdagingen ze hebben
- **Content fuel**: Poll resultaten gebruiken voor LinkedIn posts en artikelen
- **Qualification**: Bezoekers segmenteren op basis van hun antwoorden

---

## Requirements

### Admin Capabilities
- [ ] Create en configure polls
- [ ] Toggle polls on/off
- [ ] Define poll questions en answer choices
- [ ] View poll results en analytics
- [ ] Export poll data (CSV/JSON)
- [ ] Schedule polls (start/end dates)

### Visitor Experience
- [ ] Display kleine, niet-opdringerige poll widget op de site
- [ ] Allow visitors om te selecteren uit predefined choices
- [ ] Submit poll response
- [ ] Show feedback na voting (optioneel)
- [ ] Email opt-in voor gedetailleerde resultaten
- [ ] Mobile-responsive design

### Data Persistence
- [ ] Store poll responses persistent
- [ ] Implementation approach TBD (opties: backend service, third-party tool, database)
- [ ] Track anonymous vs identified voters
- [ ] Prevent duplicate voting (cookie/IP based)

---

## Voorbeeld: LinkedIn Poll Content

Zie [Issue #1 Comment](https://github.com/businessdatasolutions/thtx/issues/1#issuecomment-3504144508) voor volledig voorbeeld.

### Poll Vraag
*Welk fundamenteel domein heeft de meest urgente behoefte aan een 10X-transformatie?*

### Opties (MECE Framework)
- **Optie A**: Markt & Vraagstrategie *(Focus op externe groei en concurrentiepositie)*
- **Optie B**: Product- & Diensteninnovatie *(Focus op kernwaardepropositie en aanbod)*
- **Optie C**: Mensen & Organisatieontwerp *(Focus op talent, cultuur en operationele schaalbaarheid)*
- **Optie D**: Technologie & Data-Infrastructuur *(Focus op radicale automatisering en fundamentele tech)*

### Post Copy
```
Stop met 10% denken. Start met 10X denken.

Vandaag de dag is optimalisatie niet meer genoeg. Echte visionairs vragen:
hoe creëren we iets wat 10 keer beter is dan de status quo, niet slechts 10%?

Maar waar moet de radicale 10X transformatie beginnen?

Stem in de poll hieronder ↓

#THTX #10XMindset #ExponentiëleGroei #Leiderschap
➡️ Meer over onze aanpak: https://thtx.nl/
```

---

## Technical Considerations

### Implementatie Opties

#### Optie 1: Third-party Service (Makkelijkst)
**Tools**: Typeform, Poll Everywhere, SurveyMonkey
- ✅ Geen backend development
- ✅ Analytics included
- ✅ Email integration
- ❌ Monthly cost
- ❌ Minder custom styling
- ❌ Data ownership vragen

#### Optie 2: Formspree + Custom UI (Balanced)
**Approach**: Hergebruik bestaande Formspree setup (al gebruikt voor contact form)
- ✅ Bekend platform
- ✅ Free tier beschikbaar
- ✅ Custom UI met React
- ✅ Consistent met huidige stack
- ⚠️ Poll management moet client-side
- ⚠️ Results aggregatie moet custom

#### Optie 3: Google Forms Embed (Snelst)
**Approach**: Embed Google Form op site
- ✅ Gratis
- ✅ Instant setup
- ✅ Google Sheets integratie
- ❌ Niet on-brand styling
- ❌ Takes visitors off-site
- ❌ Niet ideaal voor UX

#### Optie 4: Custom Backend (Meest flexibel)
**Tech**: Firebase, Supabase, of custom API
- ✅ Volledige controle
- ✅ Perfect on-brand
- ✅ Advanced analytics mogelijk
- ❌ Development tijd
- ❌ Hosting/maintenance
- ❌ Overkill voor MVP

### Aanbevolen Aanpak

**MVP**: Start met **Optie 2 (Formspree + Custom UI)**
- Hergebruik bestaande Formspree account
- Bouw simpele React component voor poll UI
- Store poll config in code (hardcoded voor MVP)
- Results bekijken in Formspree dashboard

**V2**: Upgrade naar **Optie 4 (Custom Backend)** als:
- Meerdere polls tegelijk nodig
- Advanced analytics vereist
- Admin UI voor poll management gewenst

---

## UI/UX Design

### Poll Widget Plaatsing
- **Hero section**: Direct zichtbaar, hoge engagement
- **After content**: Na eerste scroll, non-disruptive
- **Sidebar**: Persistent maar niet opdringerig
- **Modal**: Pop-up na X seconden (let op: kan irritant zijn)

### Design Requirements
- THTX yellow (#d4db3e) accent color
- Light blue backgrounds (#dcebf3) voor consistency
- Mobile-first responsive design
- Smooth animations (fade in/out)
- Clear CTA buttons
- Progress indicator voor multi-step polls

---

## Privacy & GDPR

### Compliance Vereisten
- [ ] Cookie consent voor tracking
- [ ] Privacy policy update
- [ ] Data retention policy
- [ ] Right to deletion mechanism
- [ ] Transparent data usage communication

### Anonymous vs Identified Voting
- **Anonymous**: Track votes, geen PII
- **Identified**: Email opt-in voor detailed results
- Default: Anonymous, opt-in voor identification

---

## Success Metrics

### Engagement
- Poll completion rate
- Time to complete
- Bounce rate comparison (poll vs no-poll pages)

### Lead Generation
- Email opt-in rate
- Quality of leads (10X vs 10% responses)
- Conversion to contact form

### Content Value
- Poll data used in X LinkedIn posts
- Engagement on poll-based content
- Traffic from poll-based articles

---

## Integration met Andere Features

### Contact Form ([Issue #1 context](https://github.com/businessdatasolutions/thtx/issues/1))
- Pre-fill poll response in contact form
- "I answered X in poll" context voor sales

### Articles Module ([Issue #2](https://github.com/businessdatasolutions/thtx/issues/2))
- Embed polls within articles
- Write analysis articles based on poll results
- "What 500+ leaders said about..." content

### Visionary Voices Initiative
- Weekly polls als content engine
- Results feed into newsletter
- LinkedIn posts based on data

---

## Roadmap

### Phase 1: MVP (Week 1-2)
- [ ] Single hardcoded poll on homepage
- [ ] Formspree integration for data collection
- [ ] Basic UI with THTX styling
- [ ] Results viewable in Formspree dashboard

### Phase 2: Enhanced (Week 3-4)
- [ ] Multiple polls support
- [ ] Admin toggle to switch active poll
- [ ] Email opt-in for detailed results
- [ ] Basic analytics dashboard

### Phase 3: Advanced (Month 2+)
- [ ] Custom backend voor poll management
- [ ] Admin UI voor poll creation/editing
- [ ] Advanced analytics en segmentation
- [ ] A/B testing polls
- [ ] Integration met CRM/email tools

---

## Vragen om te Beantwoorden

1. ✅ Waar moet poll data worden opgeslagen? → **Start met Formspree**
2. ⏳ Moeten poll results publiek of admin-only zijn? → **TBD**
3. ⏳ Eén poll tegelijk of meerdere? → **Start met één**
4. ⏳ Moeten polls expiration dates hebben? → **Nice to have voor V2**
5. ⏳ Email opt-in verplicht of optioneel? → **Optioneel voor MVP**

---

## Gerelateerde Documenten

- [GitHub Issue #1](https://github.com/businessdatasolutions/thtx/issues/1)
- [LinkedIn Poll Voorbeeld](https://github.com/businessdatasolutions/thtx/issues/1#issuecomment-3504144508)
- [Visionary Voices Brainstorm](../brainstorms/visionary-voices.md)
- [Articles Module](./articles-module.md)

---

*Laatst bijgewerkt: 7 november 2025*
