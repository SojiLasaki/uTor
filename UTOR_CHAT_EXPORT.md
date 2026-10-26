# Utor Project — Conversation Export and Codex Handoff

Exported: October 26, 2026

This Markdown file is a portable handoff for a local Codex session. It preserves the important conversation history, product decisions, visual references, technical direction, and current implementation status. It is a cleaned project transcript, not a byte-for-byte export of ChatGPT's interface metadata.

## 1. Project Summary

Utor is a Duolingo-like reading app for children. It should teach early literacy through short, game-like activities while retaining the visual identity shown in the supplied Utor screenshots.

The application is being built with:

- React
- TypeScript
- Vite
- React Router
- CSS files, not a component framework
- `lucide-react` for interface icons
- Custom SVG artwork where a more distinctive illustration is needed

The user wants to develop the project one complete file at a time. Every response that provides code should state the exact file path and include the entire file so it can be copied and pasted. Do not package the work as a ZIP file, do not skip empty files, and do not assume that an existing file already contains working code.

## 2. Core Product Goal

The experience should help young children learn to read with:

- Letter identification
- Letter-sound recognition and pronunciation
- Listening and choosing
- Picture-to-word matching
- Filling in missing letters or words
- Rhyming
- Building words from letters
- Short decodable stories
- Repeated practice
- Checkpoint challenges
- Rewards and visible progress

The learning journey should work primarily as a connected quest map. Children begin with easy skills, repeat concepts in varied activities, complete challenges, and unlock the next section. A separate practice selector can exist, but it must not replace the guided progression path.

## 3. Non-Negotiable User Requirements

1. Do not redesign or visually alter the existing landing page or login page unless the user explicitly asks later.
2. The authenticated child experience must look like the supplied Utor product screenshots.
3. Do not turn the product into a separate fantasy, storybook, or full-screen cartoon interface.
4. The child experience should feel playful and game-like while remaining part of the established Utor dashboard system.
5. Do not use emoji as product icons.
6. Use real vector icons and original SVG illustrations.
7. Buttons should have a subtle gamified, pressable appearance.
8. Reading content must be simple enough for beginning readers.
9. Navigation must use React Router; do not reload the whole site with `window.location.href`.
10. Work one complete file at a time and always give the exact path.
11. Do not provide ZIP archives.
12. Rewrite any unsafe, offensive, or inappropriate placeholder content visible in the reference images.
13. Reports are intended for a parent, teacher, or grown-up view.
14. Public rankings and unrestricted child chat should not be part of the MVP.
15. Any child-facing reading helper must be scoped and guided rather than an open-ended chatbot.

## 4. Visual Source of Truth

The screenshots supplied by the user are the visual source of truth. They were placed in an `upload` directory in the ChatGPT workspace. In the user's local repository, put copies in a folder such as `design-references/` so the coding agent can inspect them.

Key references:

| Page or feature | Screenshot reference |
| --- | --- |
| HomeBase dashboard | `Dashboard (3).png` |
| LearnHub | `Learnhub (1).png` |
| Section details | `Single Course.png` |
| Activity and quiz layouts | `quiz.png`, `quiz (1).png`, `quiz (2).png`, `quiz (3).png` |
| Stories or media inspiration | `trig video (1).png`, `trig video (2).png` |
| Grown-up reports | `Reports.png` |
| Events or weekly view | `Events.png` |
| Help center | `Help centre.png` |
| Settings | `setting (1).png` |
| Profile reference | `setting.png` |
| Chat references, not approved for unrestricted child chat | `Chat room.png`, `Chat room (1).png`, `Chat settings.png`, `Group Chat settings.png` |
| Assistant interaction references | `Ak Copilot (1).png`, `Ak Copilot - thinking.png`, `Ak Copilot - response.png` |

The original upload paths used in the web conversation were temporary and are not expected to exist on the user's Omarchy machine.

## 5. Established Utor Design Language

The redesigned pages must inherit these characteristics from the supplied UI:

- Fixed white left sidebar
- Pale gray application background
- Large white rounded content panels
- Light-gray nested cards and task areas
- Black or near-black headings
- Restrained gray body text
- Bright Utor green for primary actions and progress
- Pale-green active navigation state
- Wide central workspace
- Narrower right information rail
- Top-right rounded-square utility controls
- Thin neutral borders
- Generous whitespace
- Compact vector line icons
- Segmented progress indicators
- Circular progress rings where appropriate
- Clean modern sans-serif typography
- Minimal gradients

Suggested design tokens:

```css
:root {
  --utor-green: #18cf4f;
  --utor-green-dark: #0fad3d;
  --utor-green-soft: #e9faef;
  --page-background: #f4f4f4;
  --surface: #ffffff;
  --surface-muted: #f7f7f7;
  --border: #e8e8e8;
  --text: #171717;
  --text-muted: #737373;
  --turquoise: #27c9c3;
  --purple: #8b6bea;
  --yellow: #f3c74f;
  --locked: #c9c9c9;
}
```

Child-friendly improvements should come from:

- Larger touch targets
- Shorter labels and instructions
- Clearer content hierarchy
- Friendly vector illustrations inside the established cards
- Subtle button depth and pressed states
- Immediate feedback
- Predictable layouts
- Limited choices per screen

They should not come from replacing the application shell with a decorative game scene.

## 6. Page Direction

### Landing and Login

- Preserve the existing visual designs.
- Keep them outside the authenticated child layout.
- Optimize local images if loading is slow, but do not change the composition without permission.

### HomeBase

Base it directly on `Dashboard (3).png`.

- Retain the white sidebar, gray page background, central content area, and right rail.
- Show a clear continue-learning card.
- Show daily progress, streak or reading days, stars, and the current learning goal.
- Use simple child-facing copy.
- Add small vector artwork inside existing card structures rather than rebuilding the page as a cartoon world.

### LearnHub

Base it directly on `Learnhub (1).png`.

- Keep the original shell and two-column content balance.
- Keep a prominent Continue Learning module near the top.
- Place the connected quest map inside a large white center-column card.
- Keep the right rail for Reading Days, Stars, Current Skill, Practice, and Stories.

### Connected Quest Map

The map is a sophisticated module within LearnHub, not a full-screen fantasy landscape.

- White outer card
- Pale-gray inner map canvas
- One continuous curved SVG route
- Alternating node positions to create rhythm
- Clear start and checkpoint grouping
- Completed nodes: Utor green
- Current node: green with a stronger ring or pulse
- Review nodes: turquoise
- Story nodes: purple
- Challenge nodes: yellow
- Locked nodes: neutral gray
- Small, contained vector landmarks only where they improve orientation
- Labels should be brief, such as `Find A`, `Hear M`, `Match It`, or `Story 1`
- Selecting the current available node should open the correct play-mode route
- Locked nodes should explain the requirement without navigating away

Suggested learning sequence:

1. Identify a letter.
2. Hear and repeat its sound.
3. Match the sound to an image.
4. Review the same skill in a different format.
5. Complete a short challenge.
6. Unlock a tiny story using learned sounds or words.
7. Continue into the next group.

### Section Detail

Base it on `Single Course.png`.

- Retain the large white course panel and compact progress treatment.
- Explain the section goal in one short sentence.
- Show the lessons in sequence.
- Clearly distinguish completed, current, and locked lessons.
- Keep the primary button bright green and pressable.

### Play Modes

Base their layout on the quiz screenshots.

- Pale-gray page background
- Back control and activity title near the top
- Progress status on the right
- Large white activity container
- Pale-gray task panel inside it
- Large, focused prompt
- Limited answer choices
- Persistent bottom controls for Back and Check/Next
- Feedback should not cause the entire layout to jump
- Support keyboard input where relevant
- Provide audio controls with visible labels

Required play modes:

1. Letter Hunt
2. Sound It Out
3. Listen and Choose
4. Picture Match
5. Fill the Blank
6. Rhyme Time
7. Word Builder
8. Story Mode

### Stories

- Provide a story library within the established dashboard shell.
- Organize stories by unlocked status, reading level, and recently read.
- Use original vector cover art instead of emoji.
- Keep titles and descriptions short.
- Locked stories should say what must be completed to unlock them.

### Story Reader

- Use the focused lesson layout rather than the full dashboard shell when reading.
- Show one short sentence or small chunk at a time.
- Highlight the current word during narration where possible.
- Include replay, previous, and next controls.
- Offer an optional word-tap pronunciation helper.
- Finish with one very simple comprehension interaction and a reward screen.

### Rewards

- Keep rewards inside the Utor shell.
- Show stars, badges, completed story items, streak milestones, and unlocks.
- Avoid manipulative countdowns or pressure mechanics.
- Reward effort, repetition, and skill mastery rather than public competition.

### Reports

Base it on `Reports.png` and make it grown-up facing.

- Skills practiced
- Accuracy trends
- Time spent
- Stories completed
- Sounds or letters needing review
- Suggested next support step

### Help Center and Settings

Base them on their supplied screenshots. Retain the card system, spacing, navigation, and overall density while simplifying wording where a child may see it.

### Events / My Week

This is optional for the MVP. If included, adapt `Events.png` into a simple weekly reading plan and milestone view rather than a social events product.

## 7. Routing Architecture

Do not use full-page location changes for internal navigation.

`main.tsx` should mount the application inside `BrowserRouter`:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/variables.css';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

`App.tsx` should own the route definitions.

Use two principal layouts:

- `KidLayout`: persistent sidebar, top bar, main content outlet
- `FocusLayout`: distraction-reduced lesson and story-reader layout

Suggested routes:

```text
/
/login
/home
/learn
/learn/section/:sectionId
/play/:mode/:lessonId
/stories
/stories/:storyId
/rewards
/help
/settings
/grown-up/reports
/week
```

Use `Link`, `NavLink`, and `useNavigate` for internal navigation.

## 8. Suggested Project Structure

```text
src/
├── App.tsx
├── main.tsx
├── assets/
│   ├── illustrations/
│   └── sounds/
├── components/
│   ├── common/
│   │   ├── AppButton.tsx
│   │   ├── IconButton.tsx
│   │   ├── ProgressBar.tsx
│   │   └── ProgressRing.tsx
│   ├── kids/
│   │   ├── KidSidebar.tsx
│   │   ├── KidTopbar.tsx
│   │   ├── QuestMap.tsx
│   │   ├── QuestNode.tsx
│   │   ├── ReadingHelper.tsx
│   │   └── RewardCard.tsx
│   └── play/
│       ├── ActivityShell.tsx
│       ├── AnswerCard.tsx
│       ├── AudioPrompt.tsx
│       └── LessonFeedback.tsx
├── data/
│   ├── learningPath.ts
│   ├── lessons.ts
│   ├── rewards.ts
│   └── stories.ts
├── layouts/
│   ├── KidLayout.tsx
│   └── FocusLayout.tsx
├── pages/
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── HomeBasePage.tsx
│   ├── LearnHubPage.tsx
│   ├── SectionPage.tsx
│   ├── PlayPage.tsx
│   ├── StoriesPage.tsx
│   ├── StoryReaderPage.tsx
│   ├── RewardsPage.tsx
│   ├── HelpPage.tsx
│   ├── SettingsPage.tsx
│   ├── ReportsPage.tsx
│   └── WeekPage.tsx
├── styles/
│   ├── variables.css
│   ├── globals.css
│   ├── layouts.css
│   ├── navigation.css
│   ├── home-base.css
│   ├── learn-hub.css
│   ├── quest-map.css
│   ├── play.css
│   ├── stories.css
│   ├── rewards.css
│   └── forms.css
└── types/
    └── learning.ts
```

## 9. Core Data Shapes

```ts
export type QuestNodeStatus = 'completed' | 'current' | 'available' | 'locked';

export type ActivityMode =
  | 'letter-hunt'
  | 'sound-it-out'
  | 'listen-and-choose'
  | 'picture-match'
  | 'fill-the-blank'
  | 'rhyme-time'
  | 'word-builder'
  | 'story';

export interface QuestNode {
  id: string;
  sectionId: string;
  title: string;
  mode: ActivityMode;
  status: QuestNodeStatus;
  route: string;
  starsAvailable: number;
  prerequisiteIds: string[];
}

export interface LearnerProgress {
  completedNodeIds: string[];
  currentNodeId: string;
  stars: number;
  readingDays: number;
  unlockedStoryIds: string[];
}
```

Progress should be data-driven. Do not hard-code the current or locked visual state separately in multiple components.

## 10. Learning and Engagement Principles

The product direction was informed by patterns used in Duolingo, Duolingo ABC, Coddy, and child-focused educational media:

- Learning by doing
- Short activities
- Repeated retrieval over time
- Repetition with variation
- A guided skill path
- Immediate corrective feedback
- Personalized review
- Learning through play
- Positive relationships and encouragement
- Inclusive stories
- Intentional pauses for children to respond

Coddy was used as a product-pattern reference for roadmaps, bite-sized tasks, and hints; it was not treated as peer-reviewed proof of educational effectiveness.

Gamification must support learning rather than distract from it. Avoid overwhelming animation, random decorative rewards, public comparison, and mechanics designed mainly to create pressure.

## 11. Accessibility and Child Safety

- Use high contrast for essential text and actions.
- Do not rely on color alone to communicate state.
- Make interactive targets at least approximately 44 by 44 CSS pixels.
- Provide visible focus styles.
- Respect reduced-motion preferences.
- Provide text labels for audio and icon-only controls.
- Avoid long paragraphs in child-facing screens.
- Keep answer options visually distinct and easy to scan.
- Never expose children to unmoderated public chat.
- Avoid public leaderboards for young children.
- Keep grown-up reports and sensitive settings behind an appropriate grown-up boundary.

## 12. Styling Troubleshooting Learned During the Conversation

The application already imports global styles in `main.tsx`:

```ts
import './styles/variables.css';
import './styles/globals.css';
```

These files only provide variables and global defaults. Component or page styling still needs to be imported. Valid strategies are:

- Import each page stylesheet from its page component, or
- Import the project stylesheets once from a central stylesheet or `main.tsx`

If the body background changes but individual elements remain unstyled, the global stylesheet is loading and the missing issue is usually one of:

- The page stylesheet was never imported.
- The JSX `className` does not match the CSS selector.
- An import path is incorrect.
- The component being viewed is not the component expected.

Do not write `src/` at the beginning of an import inside a file already located in `src` unless an alias has been configured. For example, from `src/main.tsx`, use `./styles/globals.css`, not `src/styles/globals.css`.

## 13. Conversation Timeline

The user expressed the following requests and corrections in sequence:

1. Introduced Utor as a Duolingo-like application for studying and teaching children to read.
2. Chose to begin from designs or screenshots and build the landing page first.
3. Asked whether the project should use JavaScript or TypeScript. TypeScript was selected because the existing Vite application used `.tsx` files.
4. Requested a proper file structure and code separated into the correct files.
5. Requested each change in copy-and-paste sections, with no ZIP archive.
6. Asked how `App.css` and `index.css` should be handled.
7. Reported that styling was not appearing; later confirmed that body styles changed but component-specific styles did not.
8. Shared `main.tsx` importing `variables.css` and `globals.css`.
9. Shared `App.tsx` rendering `LandingPage`.
10. Clarified that global styles only held basic rules and individual page elements remained unstyled.
11. Requested complete landing and login styles.
12. Moved on to the dashboard.
13. Reported that a local login image loaded slowly.
14. Requested that LearnHub be simplified for children and focus on letter identification, sounds, stories, fill-in-the-blank, and identifying items.
15. Requested real vector-designed icons and no emoji.
16. Requested a HomeBase redesign.
17. Requested full code.
18. Moved on to Stories and Rewards.
19. Moved on to embedded play modes.
20. Corrected the reading level as too complex.
21. Requested a Duolingo-like connected map where easy tasks, reviews, and challenges unlock later sections.
22. Reported that the routing approach was too slow and requested proper routing.
23. Asked for the resulting project structure.
24. Requested a file-by-file workflow.
25. Moved to imports, layouts, and styling.
26. Clarified that files may exist but be empty, so every file must be written completely rather than assumed to exist.
27. Asked about sharing or exporting the conversation to a local Codex instance on Omarchy.
28. Learned that the local Codex CLI cannot automatically read all ChatGPT web history.
29. Requested a file the local Codex agent could read.
30. Requested research-backed improvements to the connected map and the complete page family.
31. Rejected the first handoff design because it drifted away from the supplied Utor screenshots.
32. Corrected the direction: every page must fit the supplied UI, with the screenshots treated as the visual source of truth.
33. Requested this conversation export.

## 14. Current Status

- The design direction has been corrected to match the supplied Utor screenshots.
- A separate detailed blueprint exists as `UTOR_UI_PRODUCT_BLUEPRINT.md` in the ChatGPT workspace.
- The user is likely implementing the project locally on Omarchy, so files created in the ChatGPT workspace may not match the current state of the local repository.
- The local coding agent must inspect the actual repository before modifying it.
- `KidSidebar.tsx` was discussed or supplied earlier.
- The next likely file in the file-by-file sequence is `src/components/kids/KidTopbar.tsx`, but the agent should first ask the user which file is currently open and inspect the repository state.

## 15. Instructions for the Local Codex Agent

Use this prompt after placing this export and the blueprint in the project root:

```text
Read UTOR_CHAT_EXPORT.md and UTOR_UI_PRODUCT_BLUEPRINT.md completely.
Then inspect the repository and every screenshot in design-references/.

The screenshots are the visual source of truth. Preserve the existing Utor
shell, card system, page proportions, green accent, white sidebar, gray
surfaces, right rail, typography, and spacing. Do not invent a separate
storybook, fantasy, or cartoon interface.

Do not change the landing page or login page unless I explicitly request it.
Use React, TypeScript, React Router, CSS, lucide-react icons, and custom SVG
artwork. Do not use emoji as interface icons.

Before editing, tell me which screenshot maps to the page and summarize the
current file state. Then work on only one complete file at a time. Always give
the exact path and complete contents. Do not assume an existing file has
content. Do not create a ZIP file.
```

## 16. Recommended Next Step

1. Put this file in the local Utor repository root.
2. Put `UTOR_UI_PRODUCT_BLUEPRINT.md` beside it.
3. Copy the screenshot references into `design-references/`.
4. Start Codex from the repository root.
5. Ask Codex to inspect the repository and references before editing.
6. Continue with one complete file at a time.

