# Subpage structure (mirror of Framer source)

Skeletons for the four non-blog routes. Section hierarchy and image-filename order
are captured here for layout work; full paragraph copy lives in `pages/*.html` and
the route-keyed entries in `searchIndex.json`.

Image `oIcRoAwu3Pt4mxq9Ne4ZEzYkmc.png` appears at the top of every case study —
likely Belle's avatar or page-header element.

---

## /projects

Project index page. Same project tiles as the homepage but with a few extras
that aren't on the home grid.

Sections (`<h4>`):
- Blizzard – Design systems
- Blizzard – Battle.net content & Shop
- MyFoodData
- Other projects

Tile titles (`<h6>`, in addition to the homepage 8):
- Improving product detail page for both new and returning players
- Revamping news strategy for Blizzard
- Case study: Making it easier to browse by heroes
- (plus 6 more — see `searchIndex.json`)

Images in DOM order (13 unique):

| # | File | Reused from home? |
|---|------|---|
| 1 | `Cmlo64j3ZKWNskG9UwrI9wTP3I8.png` | yes (Base UI) |
| 2 | `a7SsOMuSb8zYN6LcZbLdJQgGB4.png` | yes (Components in Atomic Design) |
| 3 | `c2IhcUPVmt9dF4bzr03KCNO3oCM.png` | yes (Battle.net Shop) |
| 4 | `1s6H47DREMTOHZXuSkbEzEy2yaM.png` | yes (Battle.net News) |
| 5 | `eO9S6sj64DAgidQkJb9kSeYuM.png` | yes (Battle.net Blog & CMS) |
| 6 | `dTXTZamiPLCxmaEfxPuM8nz4Hlc.png` | new |
| 7 | `AtHr2qW6MTccv5MNWfK5Vjd8PU.png` | yes (MyFoodData) |
| 8 | `J0FKniqfnuY3a2nCtWnRmfjR8aU.png` | new |
| 9 | `iQJQQZRahZ37wOpGqIdG4xTijNw.png` | new |
| 10 | `R15oLV7610gEKYDEjAoycLVJgA0.png` | new |
| 11 | `FW7hbhxIJaxQnmzNhhcQP4NgxlM.jpg` | new |
| 12 | `7Ojpc9lUajZz9tP2Ar9Z0G3C5s.png` | new |
| 13 | `hCgQYSA53OoL0vqBV9ja2BTSs.png` | yes (Idiom) |

---

## /idiom

Case study for the language-learning app.

Sub-title (`<h4>`): "A context-based language learning app for vocabulary acquisition"

Meta block (`<h6>`): Role · Date · Deliverables

Body sections:

- **Project** (`<h4>`)
  - Challenges (`<h4>`)
  - Solution (`<h4>`)
- **Process** (`<h2>`)
  - User interviews (`<h3>`)
  - User persona (`<h3>`)
  - User journey (`<h3>`)
- **Proposed Solution** (`<h2>`)
  - Welcome screen (`<h3>`)
  - Interactive onboarding (`<h3>`)
  - Empty states design (`<h3>`)
  - Highlights — Reimagined (`<h3>`)
  - Highlights — Flash Cards (`<h3>`)
  - First article open (`<h4>`)
  - First word lookup (`<h4>`)
  - Sentence view (old) (`<h4>`)
  - Definition view (new) (`<h4>`)
  - (+ 3 more h3 sections — see searchIndex)

Images in DOM order (8 unique):
1. `oIcRoAwu3Pt4mxq9Ne4ZEzYkmc.png` (page header)
2. `3Wtu0n2CXZrqlIvs98gAye6couk.png`
3. `pzXPpPTP6DXb6T816dE3KuxB8aE.png`
4. `IXNDBYunfPa35RAVjb2d2Ya5p8.png`
5. `SLO3LKDiM9nz79OQUqx2zsDe4v4.png`
6. `v5VuUhFh3IdrQlbvAbsBSTIrdzE.jpeg`
7. `liwaX1hoVdZwxVDJZXWTGtQJ7cY.png`
8. `ksi3lIw9Tk3wwAzeG51lhBCdTwA.png`

---

## /base-ui/building-multi-brand-design-system

Case study for the Blizzard / Battle.net design system.

Sub-title (`<h4>`): "Base UI: Building a multi-brand design system"

Meta block (`<h6>`): Role · Date · Deliverables

Body sections:

- **Project** (`<h4>`)
- **Process** (`<h4>`)
- **Design Tokens** (`<h2>`)
  - Base tokens (`<h3>`)
- **Component Library** (`<h2>`)
  - Component library in Figma (`<h3>`)
  - Theme switcher in Figma & Code (`<h3>`)
  - Flexible components (`<h3>`)
- **Documentation** (`<h2>`)
  - Documentation (`<h3>`)
  - Shared strategy for cohesive design (`<h3>`)
- **Implementation** (`<h2>`)
  - Tracking design in JIRA (`<h3>`)
  - Next steps (`<h3>`)

Images in DOM order (10 unique):
1. `oIcRoAwu3Pt4mxq9Ne4ZEzYkmc.png` (page header)
2. `SZmRU1zXPPl6UvOvYCuAKkkwc.png`
3. `hreedeyssnEIj6paF9dT9F7iD4.png`
4. `SLvXfUuie973T6Dok3N35D5aE.png`
5. `DYZOCi3xhIiBS80IBeHWW4NOjI.png`
6. `zKpW4cbyzjHeTNWTNo48XLG9s.png`
7. `9JDWvL4PotBpYol902B7yVA6his.png`
8. `KZk0upTlnrgfaXABrMHE6G7gJI.png`
9. `GqZC80SuZz541FSzIRMbrxF3Ctw.png`
10. `XmJgtb8uvExQ4118fGfU0Mkw7U.png`

---

## /base-ui/components-atomic-design

Companion case study on component design within the Base UI system.

Sub-title (`<h4>`): "Designing components for a design system"

Meta block (`<h6>`): Role · Date · Deliverables

Body sections:

- **Project** (`<h4>`)
- **Component Design Principles** (`<h2>`)
  - Slot concept (`<h3>`)
  - Decoupling layout from purpose (`<h3>`)
  - Separating breakpoints from configuration (`<h3>`)
- **Refactoring existing components** (`<h2>`)
  - Refactoring complex components (`<h3>`)
  - Refactoring sections (`<h3>`)
  - Identifying stylistic discrepancies (`<h3>`)
- **Design Systems Adoption** (`<h2>`)
  - Workflow: Designing WITH Base UI (`<h3>`)
  - Creating culture (`<h3>`)

Images in DOM order (5 unique):
1. `oIcRoAwu3Pt4mxq9Ne4ZEzYkmc.png` (page header)
2. `j7X2z9lJpNywWFUxfPhJsCDUgeg.png`
3. `KZk0upTlnrgfaXABrMHE6G7gJI.png` (shared with /base-ui/building-multi-brand-design-system)
4. `XmJgtb8uvExQ4118fGfU0Mkw7U.png` (shared)
5. `IYrbr599e2cCVg5WDw0LgEmrrVw.png`
