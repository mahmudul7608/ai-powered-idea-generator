#  AI Idea Generator

<img width="1898" height="871" alt="image" src="https://github.com/user-attachments/assets/b5643e06-74cd-483e-ab18-4be6c47c4e35" /> 

<br/>

live view : https://ai-powered-idea-generator.netlify.app/


Transform your vision into a complete project plan with AI! A modern, professional web application built with Nuxt 3 and Tailwind CSS.

##  Features

-  **AI-Powered Ideas** - Generate refined project concepts from simple prompts
-  **Feature Breakdown** - Get detailed feature lists for your project
-  **Tech Stack** - Receive technology recommendations
-  **Project Roadmap** - Step-by-step development plan
-  **UI Layout** - Layout structure suggestions
-  **Save & Share** - Save ideas and share with others
-  **Fully Responsive** - Works on mobile, tablet, and desktop

##  Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

##  Project Structure

```
.
├── assets/
│   └── css/
│       └── main.css           # Global styles
├── components/
│   ├── AppSidebar.vue         # Sidebar navigation
│   ├── TopNav.vue             # Top navigation bar
│   ├── AppFooter.vue          # Footer
│   ├── IdeaCard.vue           # Generated idea card
│   ├── IdeaHeader.vue         # Idea header
│   ├── TechStackSection.vue   # Tech stack display
│   ├── RoadmapSection.vue     # Roadmap timeline
│   └── UILayoutSection.vue    # UI layout section
├── composables/
│   ├── useAIGenerator.ts      # AI generation logic
│   └── useProjectIdeas.ts     # Ideas management
├── layouts/
│   └── default.vue            # Default layout
├── pages/
│   ├── index.vue              # Home page
│   ├── generate.vue           # Generated idea display
│   ├── saved.vue              # Saved ideas
│   ├── about.vue              # About page
│   ├── blog.vue               # Blog page
│   ├── signin.vue             # Sign up page
│   └── login.vue              # Login page
├── public/
│   ├── favicon.ico
│   └── images/                # Image assets folder
├── types/
│   └── idea.ts                # TypeScript types
└── nuxt.config.ts             # Nuxt config
```

##  Tech Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Styling**: Tailwind CSS
- **Storage**: LocalStorage
- **Icons**: SVG + Emoji

##  Design Features

- Modern dark theme with glassmorphism
- Smooth animations and transitions
- Professional gradient accents
- Responsive design for all devices

##  License

Free to use and modify!

---

Made with ❤️ using Nuxt 3 + Tailwind CSS
