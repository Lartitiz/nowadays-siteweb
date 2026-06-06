## Constat

Actuel (desktop) :
- H1 : `text-5xl md:text-7xl lg:text-8xl` → ~6rem (96px) en lg → trop massif
- H2 : `text-4xl md:text-6xl` → ~3.75rem (60px)
- H3 : `text-2xl md:text-3xl` → ~1.875rem (30px)

Le H1 écrase tout, surtout dans le Hero où il prend 2 lignes.

## Nouvelle échelle proposée

| Niveau | Mobile | Desktop | Pixels desktop |
|---|---|---|---|
| H1 | text-4xl | md:text-6xl lg:text-7xl | ~72px |
| H2 | text-3xl | md:text-5xl | ~48px |
| H3 | text-xl | md:text-2xl | ~24px |

Hiérarchie conservée (72 / 48 / 24), mais plus respirable et moins "agence brutaliste".

## Fichiers à modifier

**H1** (`font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-ink`) :
- `src/components/site/Hero.tsx` ligne 62
- `src/components/site/CaseStudy.tsx` ligne 123

**H2** (`font-serif text-3xl md:text-5xl leading-[1.1] text-ink`) — 14 sections concernées :
- Hero, ManifestoSection, OffersSection, ProcessSection, DifferencesSection, ExpertiseSection, LaetitiaSection, PourquoiNowadaysSection, TestimonialsSection, PressSection, FinalCtaSection, TiredSection, VisibilityBanner, CaseStudy (contexte/influenceurs/résultats + marquee)

**H3** (`font-serif text-xl md:text-2xl leading-[1.2] text-ink`) :
- `src/components/site/OffersSection.tsx` ligne 92
- `src/components/site/CaseStudy.tsx` ligne 178

## Mémoire

Mettre à jour `mem://index.md` avec la nouvelle échelle (remplace les règles actuelles).

## Hors-scope

- Pas de changement de famille / poids / couleur (Libre Baskerville 400 ink).
- Les gros chiffres décoratifs (`StatBand`, stats Hero, valeurs résultats) restent inchangés — ce ne sont pas des titres sémantiques.
