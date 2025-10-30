# TD-RTW

A modern, local-first Todo app with drag-and-drop sorting, theming, and offline-aware sync.

## 🚀 Technologies

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![dnd-kit](https://img.shields.io/badge/dnd--kit-enabled-000?style=for-the-badge)

## 📱 Overview

TD-RTW is a simple and efficient task manager that supports:

- Creating, editing, completing, and deleting tasks
- Drag-and-drop reordering (powered by dnd-kit)
- Deadlines for tasks and visual deadline block
- Filtering by status: all, active, completed
- Local-first persistence (LocalStorage) with background sync to MockAPI
- Delete confirmation (single and bulk completed)
- Light/Dark theme toggle
- Network status detection with inline notifications

## 🌐 Data & Sync

- Local persistence: tasks are stored in LocalStorage for instant load and offline usage
- Remote sync: data is synchronized with a MockAPI backend
  - Base URL is defined in `src/constants/todos.js` as `API_URL`
  - CRUD operations live in `src/hooks/useTodoApi.js`

> Current API URL:
>
> `https://68b4a68045c901678770dd32.mockapi.io/api/v1/todos`

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended: 18 or 20)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/gkirber/td-rtw
cd td-rtw

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:5173`.

### Available Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint over the project

## 📁 Project Structure

```text
src/
├── assets/                    # Static assets (icons, images)
├── components/                # UI components
│   ├── AddTodo.jsx            # Add new todo form
│   ├── CheckboxButton.jsx     # Reusable checkbox button
│   ├── DeadlineBlock.jsx      # Deadline display for a todo
│   ├── DeleteCompletedButton.jsx
│   ├── DeleteConfirmModal.jsx # Confirmation modal
│   ├── Notification.jsx       # Online/offline notifications
│   ├── SortableItem.jsx
│   ├── SortableTodo.jsx       # dnd-kit sortable wrapper
│   ├── TodoEditForm.jsx       # Inline editing form
│   ├── TodoFilter.jsx         # Filter controls (all/active/completed)
│   ├── TodoItem.jsx           # Single todo item
│   ├── TodoList.jsx           # List with sortable items
│   ├── TodoTextDisplay.jsx
│   └── ToggleTheme.jsx        # Theme toggle + network notice
├── constants/
│   └── todos.js               # API_URL and LocalStorage key
├── contexts/
│   └── NetworkContext.js      # Network status context
├── helpers/
│   ├── dateUtils.js           # Date/format helpers
│   ├── getInitialTheme.js
│   └── toggleTheme.js
├── hooks/
│   ├── useLocalStorage.js     # Load/save tasks locally
│   ├── useTodoActions.js      # Add/update/delete/toggle/reorder logic
│   ├── useTodoApi.js          # CRUD calls to API_URL
│   ├── useTodoHelpers.js      # Builders/sorting/toggling helpers
│   └── useTodoManagement.js   # Orchestrates state + initial load/sync
├── providers/
│   └── NetworkProvider.jsx    # Listens to online/offline events
├── App.jsx                    # Root UI
├── main.jsx                   # App entry
├── index.css                  # Tailwind layers/utilities
└── App.css                    # Component styles (minimal)
```

## 🌟 Key Features

- React 19 with modern hooks and composition
- Vite 7 for fast DX and HMR
- TailwindCSS 4 for styling
- Drag-and-drop sorting with `@dnd-kit/*`
- Local-first with resilient background sync to MockAPI
- Accessible controls with ARIA labels
- Offline awareness and subtle notifications
- Delete confirmation (single item and bulk completed)

## ♿ Accessibility

- Interactive elements use clear focus states and ARIA labels where appropriate
- Keyboard-friendly controls via dnd-kit listeners and standard buttons

## 🔧 Configuration

- API base URL lives in `src/constants/todos.js` (`API_URL`). Update it to point to your backend if needed.

## ❓ Troubleshooting

- If the API is unreachable, the app still loads tasks from LocalStorage. When the connection is restored, the app attempts to synchronize changes.
