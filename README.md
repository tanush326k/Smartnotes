# <p align="center"><img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sparkles.svg" width="32" height="32" alt="Logo" style="vertical-align: middle; margin-right: 8px;" /> SmartNotes AI</p>

<p align="center">
  <strong>Write. Summarize. Improve. Everything powered by client-side note intelligence.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-emerald?style=for-the-badge&logo=github" alt="Build Status" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Animations-Framer_Motion-ff007f?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <a href="https://smartnotes-nu.vercel.app/" target="_blank"><strong>⚡ Try the Live Demo →</strong></a>
</p>

---

## 📋 Table of Contents
- [🔍 Overview](#-overview)
- [⚡ Features](#-features)
- [🏗️ System Architecture & Diagrams](#-system-architecture--diagrams)
  - [Architecture Diagram](#architecture-diagram)
  - [Application Workflow](#application-workflow)
  - [Component Hierarchy](#component-hierarchy)
  - [State Diagram](#state-diagram)
  - [Sequence Diagram](#sequence-diagram)
  - [User Journey](#user-journey)
  - [Data Flow Diagram](#data-flow-diagram)
- [📂 Folder Structure](#-folder-structure)
- [💻 Technology Stack](#-technology-stack)
- [🚀 Performance Optimizations](#-performance-optimizations)
- [♿ Accessibility](#-accessibility)
- [⚙️ Installation & Development](#-installation--development)
- [🗺️ Future Roadmap](#-future-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [💖 Acknowledgements](#-acknowledgements)

---

## 🔍 Overview
**SmartNotes AI** is an ultra-minimalist, high-performance web-based helper application that empowers creators, students, and engineers to clean, organize, and refine raw text content instantly.

Designed with inspiration from premium tools like **Linear**, **Vercel**, and **Notion AI**, SmartNotes AI works entirely local-first, allowing users to:
- Instantly capture thoughts inside an auto-resizing text editor.
- Summarize long text blocks using advanced client-side linguistic helpers.
- Extract clear, action-oriented bulleted key points.
- Automatically polish grammar, tone, and formatting for a professional appearance.

---

## ⚡ Features

| Feature | Description | Status |
| :--- | :--- | :---: |
| **AI Summarization** | Condenses paragraphs into core, readable takeaway messages. | ✅ |
| **Key Point Extraction** | Automatically converts unstructured text into clean numbered items. | ✅ |
| **Writing Improvement** | Professional phrasing upgrade, syntax normalization, and typo corrections. | ✅ |
| **Keyboard Friendly** | Complete support for shortcut combinations (`Ctrl+Enter` to Summarize). | ✅ |
| **Framer Motion Micro-Interactions** | 60FPS spring actions, scale events, and list layouts. | ✅ |
| **Copy & Clipboard Indicator** | One-click copy handler with a green feedback success icon. | ✅ |
| **Dark & Light Mode** | Smooth state changes leveraging Tailwind custom CSS variables. | ✅ |

---


## 🏗️ System Architecture & Diagrams

### Architecture Diagram
Describes how the user interface components communicate with local business logic modules.

```mermaid
graph TD
    UI[React User Interface] --> Hooks[State & Theme Hooks]
    UI --> Utils[AI Processing & Clipboard Utils]
    Utils --> SimulatedAI[Linguistic Rules Engine]
```

### Application Workflow
Illustrates the user interactions and operational sequence.

```mermaid
graph TD
    A[User Enters Text] --> B[Clicks Command Button or Presses Ctrl+Enter]
    B --> C[Card Enters Loading Shimmer State]
    C --> D[AI Processing Engine Resolves Output]
    D --> E[Framer Motion Animates Output Card Entrance]
    E --> F[User Clicks Copy Button]
    F --> G[Toast Notification Success Message Displayed]
```

### Component Hierarchy
The UI Component tree structure inside the single-page application.

```mermaid
graph TD
    App["App.tsx"] --> Navbar["Navbar.tsx"]
    App --> Hero["Hero.tsx"]
    App --> NoteEditor["NoteEditor.tsx"]
    App --> OutputCard1["OutputCard.tsx (Summary)"]
    App --> OutputCard2["OutputCard.tsx (Key Points)"]
    App --> OutputCard3["OutputCard.tsx (Improved Version)"]
    App --> ToastContainer["ToastContainer.tsx"]
```

### State Diagram
Defines the lifecycle state machine of the editor.

```mermaid
graph TD
    IdleState[Idle] -->|User enters characters| TypingState[Typing]
    TypingState -->|Trigger Summarize / Improve| ProcessingState[Processing]
    ProcessingState -->|Processing Finished| CompletedState[Completed]
    CompletedState -->|Clicks Copy| CopiedState[Copied]
    CopiedState -->|Modifies text| TypingState
    CompletedState -->|Modifies text| TypingState
    CompletedState -->|Clicks Clear| IdleState
```

### Sequence Diagram
Sequence of interactions when triggering an action.

```mermaid
sequenceDiagram
    actor User
    participant Editor as NoteEditor
    participant App as App Context
    participant AI as AI Processor
    participant Card as OutputCard
    participant Toast as Toast Container
    
    User->>Editor: Enters Note
    User->>Editor: Presses Ctrl+Enter
    Editor->>App: Trigger Action (summarize)
    App->>Card: Set Loading (true)
    App->>AI: Request linguistic resolve
    AI-->>App: Return summarized text
    App->>Card: Set Loading (false) & update content
    App->>Toast: Dispatch success notification
    Toast->>User: Animate Toast Item
```

### User Journey
User goals and actions step by step.

```mermaid
graph LR
    step1[1. Open App] --> step2[2. Write Note]
    step2 --> step3[3. Click Summarize]
    step3 --> step4[4. See Loading Skeleton]
    step4 --> step5[5. View Clean Summary]
    step5 --> step6[6. Copy to Clipboard]
```

### Data Flow Diagram
Tracks textual data mutation throughout the app.

```mermaid
graph LR
    UserNotes["Raw Input Notes"] -->|Raw String| Processor["AI Processing Utility"]
    Processor -->|Linguistic Rules Transformation| ResultsState["App Results State"]
    ResultsState -->|Partial State Objects| CardOutput["Card Displays"]
```

---

## 📂 Folder Structure

```
src/
 ├── components/
 │    ├── Hero.tsx            # Decorative grid CSS illustration & header text
 │    ├── Navbar.tsx          # Branding & Light/Dark toggler
 │    ├── NoteEditor.tsx      # Main inputs, counters & buttons
 │    ├── OutputCard.tsx      # Card renderer with spring transitions & skeletons
 │    └── ToastContainer.tsx  # Dynamic Framer Motion toast list
 ├── hooks/
 │    ├── useTheme.ts         # Dark Mode class manager & LocalStorage
 │    └── useToast.ts         # Toast event notifier dispatcher
 ├── utils/
 │    ├── aiProcessor.ts      # Summary & polishing logic
 │    └── clipboard.ts        # Safe Clipboard APIs & counter utilities
 ├── App.tsx                  # Main state container & orchestrator
 ├── index.css                # Tailwind base, variables & CSS illustration design
 └── main.tsx                 # Client app compiler mounting point
```

---

## 💻 Technology Stack

| Technology | Purpose | Version |
| :--- | :--- | :--- |
| **React** | Reactive component state & UI engine. | `^19.2.7` |
| **TypeScript** | Strict compile-time checks and interface safety. | `~6.0.2` |
| **Tailwind CSS** | Styling using native variables and utility utilities. | `^4.3.3` |
| **Framer Motion** | GPU-accelerated spring animations and list enters. | `^11.x` |
| **Lucide React** | Premium quality, clean line icons. | `^0.x` |
| **Vite** | Modern, lightning-fast bundler server. | `^8.1.1` |

---

## 🚀 Performance Optimizations
- **No Cumulative Layout Shift (CLS)**: Output cards have fixed spring dimensions and loading layouts so text loading does not cause page layout jumps.
- **GPU Accelerated Rendering**: All transition paths (`Framer Motion` elements) use properties that are processed directly on the GPU (`transform` and `opacity`) rather than properties that trigger layout re-paints (`width`, `height`, or `margin`).
- **No Heavy External Images**: The hero illustration runs purely on HTML layout nodes combined with standard CSS variables.

---

## ♿ Accessibility
- **Semantic Tags**: Includes descriptive landmarks (`<header>`, `<main>`, `<footer>`).
- **Tab Focus Rings**: Outlines explicitly configured using focus variables.
- **Keyboard Shortcuts**: Key handlers mapped inside the textarea trigger summary creation seamlessly.

---

## ⚙️ Installation & Development

### 1. Clone the project
```bash
git clone <repository-url>
cd smart-notes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run dev server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## Live URL: [https://smartnotes-nu.vercel.app/](https://smartnotes-nu.vercel.app/)

---
## 🗺️ Future Roadmap
- [ ] **PDF & Text Upload**: Direct file drag-and-drop support.
- [ ] **Export Options**: Export summary results as Markdown, HTML, or JSON formats.
- [ ] **Speech-to-Text**: Voice input capabilities.
- [ ] **Multi-Language Support**: Summarize and translate between 10+ languages.

---

## 🤝 Contributing
Contributions are welcome! Please feel free to open a Pull Request with improvements, performance fixes, or UI components.

---

## 📄 License
Licensed under the [MIT License](LICENSE).

---

## 💖 Acknowledgements
- **Framer Motion** for bringing smooth transitions.
- **Lucide Icons** for the modern clean line icon sets.
- **Vercel** for optimal client hosting.
- **Google Build with AI Bootcamp** for inspiration.
