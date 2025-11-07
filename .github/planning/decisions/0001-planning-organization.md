# ADR 0001: Repository Planning & Documentatie Structuur

**Status**: Geaccepteerd
**Datum**: 7 november 2025
**Beslissers**: THTX Team

---

## Context

THTX.nl heeft behoefte aan een manier om brainstorms, feature ideeën en planning documenten te organiseren, met de volgende requirements:

- **Version control** voor belangrijke beslissingen
- **Collaborative brainstorming** mogelijkheden
- **Clear roadmap** naar implementatie
- **Integratie** met bestaande GitHub Issues workflow
- **Lage drempel** - geen complexe tools of processen
- **Schaalbaarheid** - moet meegroeien met project

### Huidige Situatie

- Repository: React/Vite landing page voor THTX.nl
- Deployment: GitHub Pages via `/docs` folder
- Documentatie: `CLAUDE.md` voor project instructies
- Issue tracking: GitHub Issues (al in gebruik voor #1 Polling, #2 Articles)
- Team: Klein, code-focused

### Onderzochte Alternatieven

1. **GitHub Wiki**
   - ✅ Makkelijk editable, clean presentatie
   - ❌ Niet granular version-controlled
   - ❌ Minder geïntegreerd met code workflow

2. **GitHub Discussions**
   - ✅ Zeer collaboratief, interactief
   - ✅ Perfect voor brainstorming
   - ❌ Niet version-controlled
   - ❌ Geen immutable decision records

3. **Dedicated docs/ folder**
   - ✅ Version controlled
   - ❌ Conflicteert met build output in `/docs`

4. **`.github/planning/` directory**
   - ✅ Version controlled met code
   - ✅ GitHub native, prominente zichtbaarheid
   - ✅ Makkelijk linken vanuit Issues
   - ✅ Geen extra tools nodig
   - ✅ Clear separation van build output
   - ✅ Schaalbaar

---

## Beslissing

We implementeren een **`.github/planning/` directory structuur** met de volgende organisatie:

```
.github/planning/
├── README.md              # Index van alle planning docs
├── brainstorms/           # Creatieve sessies en ideeën
│   └── visionary-voices.md
├── feature-ideas/         # Concrete feature voorstellen
│   ├── polling-system.md
│   └── articles-module.md
└── decisions/             # Architecture Decision Records (ADRs)
    └── 0001-planning-organization.md (dit document)
```

### Workflow

1. **Nieuwe ideeën** → Brainstorm document in `brainstorms/`
2. **Concrete features** → Document in `feature-ideas/` + GitHub Issue
3. **Belangrijke beslissingen** → ADR in `decisions/`
4. **Ready to build** → GitHub Issue toewijzen en implementeren

### Document Types

**Brainstorms:**
- Exploratieve ideeën en team discussies
- Kunnen evolve over tijd
- Focus op creativiteit en mogelijkheden

**Feature Ideas:**
- Mature feature voorstellen
- Linked aan GitHub Issues
- Technical considerations en implementation details

**Decisions (ADRs):**
- Immutable records van belangrijke beslissingen
- Context, decision, consequences
- Genummerd voor referentie

---

## Consequenties

### Positief

✅ **Version control**: Alle planning documentatie zit in git, met volledige history
✅ **Discoverability**: `.github/` directory is prominent in GitHub UI
✅ **Integration**: Makkelijk linken tussen Issues, code en planning docs
✅ **No extra tools**: Werkt met bestaande GitHub workflow
✅ **Scalability**: Kan groeien met project maturity
✅ **Decision trail**: Clear audit trail voor nieuwe contributors
✅ **Consistency**: Past bij bestaande `CLAUDE.md` aanpak

### Uitdagingen

⚠️ **Discipline vereist**: Team moet docs up-to-date houden
⚠️ **Learning curve**: Nieuwe contributors moeten structuur begrijpen
⚠️ **File-based**: Minder interactief dan GUI-based tools zoals Discussions

### Mitigaties

- **Clear README**: Index document maakt navigatie makkelijk
- **Templates**: Kunnen later toegevoegd worden voor consistentie
- **Linking**: Cross-references tussen docs, Issues en code
- **Future expansion**: Kan later GitHub Discussions toevoegen voor meer collaborative brainstorming

---

## Toekomstige Overwegingen

We kunnen later toevoegen:

1. **GitHub Discussions** voor meer interactieve brainstorming
2. **RFC templates** voor gestandaardiseerde feature proposals
3. **GitHub Projects** voor roadmap visualisatie
4. **Templates** voor verschillende document types

Deze kunnen de `.github/planning/` directory **aanvullen**, niet vervangen.

---

## Referenties

- [GitHub .github directory best practices](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
- [Architecture Decision Records (ADRs)](https://adr.github.io/)
- Discussie met Claude Code op 7 november 2025

---

*Dit is ADR #0001 - Alle toekomstige belangrijke beslissingen worden gedocumenteerd als genummerde ADRs*
