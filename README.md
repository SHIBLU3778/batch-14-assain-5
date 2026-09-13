# 🧱 Dev Stack — Build Your Ideal Development Stack

A React web app for developers to browse frontend, backend, database, and
tooling technologies, compare them side by side, and build a personal "stack"
by picking one technology per category.

## 🛠️ Built With

- React.js (Vite)
- Tailwind CSS v4
- React-Toastify (alerts)
- JavaScript (ES6+)
- JSON (local technology data)

## ✨ Features

1. **Browse & compare technologies** — 15 technologies across 7 categories
   (Frontend, Backend, Database, Language, Styling, DevOps, Tools), each shown
   as a card with rating, difficulty, and a short description.
2. **Build your own stack** — add technologies to a "Your Stack" sidebar,
   remove one at a time, or clear the whole stack with one click. Duplicate
   adds are blocked with a warning toast.
3. **Fully responsive, gradient-themed UI** — one shared orange → pink →
   violet gradient powers the brand name, hero heading, and primary buttons,
   and the layout adapts from mobile (1 column) to tablet (2 columns) to
   desktop (3 columns).

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🧠 React Questions

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like markup directly inside JavaScript. React uses it
because it's easier to read and write UI this way than calling
`React.createElement()` by hand for every element.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component
receiving them can't change them. State is data a component manages
*itself*, and it can change over time (for example, when the user clicks a
button).

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component remember a value between renders and re-render
when that value changes. I used it in `Technologies.jsx` to track the list of
technologies, the user's selected stack, the loading status, and in
`Navbar.jsx` to track whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders, which is where "side
effects" like network requests belong. Fetching the technologies JSON file is
a side effect (it happens outside of React's normal render process), so it
needs to run inside `useEffect` — with an empty dependency array `[]` so it
only runs once when the page first loads.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items apart between renders, so it knows exactly
which item was added, removed, or changed instead of re-rendering the whole
list. Without a stable unique key, React can mix up items or re-render more
than it needs to.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. In
`YourStack.jsx`, I check `stack.length === 0` — if true, it shows "Your stack
is empty", otherwise it renders the list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props, e.g.
`<TechnologyCard tech={tech} />`. For a child to send something back up, the
parent passes a function down as a prop (e.g. `onAdd`), and the child calls
that function — e.g. `onAdd(tech)` — which runs the parent's logic with the
data the child provides.
