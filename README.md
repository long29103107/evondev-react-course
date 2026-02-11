# EvonDev React Course - Learning Projects

This repository contains all the projects and exercises completed during the **ReactJS từ cơ bản đến nâng cao dành cho người mới** course from [EvonHub](https://evonhub.dev/course/khoa-hoc-reactjs-co-ban). Each folder represents a different section of the course, covering various React concepts and real-world application development.

---

## 📚 Table of Contents

1. [Simple Movie](#1-simple-movie)
2. [Monkey Logging](#2-monkey-logging)
3. [My App Redux](#3-my-app-redux)

---

## 1. Simple Movie

### Purpose
A movie discovery application that demonstrates modern React patterns including routing, data fetching, lazy loading, and custom hooks. This project focuses on building a responsive movie browsing interface with features like movie search, pagination, and detailed movie information.

### Tech Stack
- **React 19.2.0** - UI library
- **React Router DOM 7.11.0** - Client-side routing
- **SWR 2.3.8** - Data fetching and caching
- **Swiper 12.0.3** - Touch slider/carousel component
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **SASS** - CSS preprocessor
- **Vite 7.2.4** - Build tool and dev server
- **React Error Boundary** - Error handling
- **React Paginate** - Pagination component
- **PropTypes** - Runtime type checking

### Key Concepts Learned
- React Router with nested routes and route parameters
- Code splitting and lazy loading with `React.lazy()` and `Suspense`
- Custom hooks (`useFetch`, `useDebounce`, `useClickOutside`, `useLocalStorage`, etc.)
- SWR for efficient data fetching and caching
- Responsive design with Tailwind CSS
- Component composition and reusability
- Error boundaries for graceful error handling
- Pagination implementation

### Results
After completing this section, I was able to:
- Build a fully functional movie discovery application
- Implement client-side routing with dynamic routes
- Create reusable custom hooks for common functionality
- Optimize performance with code splitting and lazy loading
- Handle API data fetching efficiently with SWR
- Design responsive layouts using Tailwind CSS
- Implement search functionality with debouncing
- Handle loading and error states properly

### Prerequisites
- Basic knowledge of JavaScript (ES6+)
- Understanding of React fundamentals (components, props, state)
- Familiarity with HTML and CSS
- Node.js and npm/yarn installed

### How to Start

1. Navigate to the project directory:
```bash
cd simple-movie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (or the port shown in terminal)

5. Build for production:
```bash
npm run build
```

---

## 2. Monkey Logging

### Purpose
A full-featured blogging platform (Monkey Blogging) that demonstrates building a complete CRUD application with authentication, Firebase integration, form handling, and admin dashboard. This project covers advanced React patterns and real-world application architecture.

### Tech Stack
- **React 19.2.0** - UI library
- **Firebase 12.7.0** - Backend-as-a-Service (Authentication, Firestore)
- **React Router DOM 7.11.0** - Client-side routing
- **React Hook Form 7.70.0** - Form state management
- **Yup 1.7.1** - Schema validation
- **Styled Components 6.2.0** - CSS-in-JS styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **SASS** - CSS preprocessor
- **React Toastify** - Toast notifications
- **SweetAlert2** - Beautiful alert dialogs
- **Uploadcare** - Image upload service
- **SWR 2.3.8** - Data fetching
- **Swiper 12.0.3** - Carousel component
- **React Error Boundary** - Error handling
- **Lodash** - Utility library
- **Vite 7.2.4** - Build tool

### Key Concepts Learned
- Firebase Authentication (Sign in, Sign up)
- Firestore database operations (CRUD)
- React Hook Form for complex form handling
- Form validation with Yup
- Custom hooks for Firebase operations (`useAuth`, `useCollection`, `useDocument`, `useFirestoreActions`)
- Protected routes and role-based access control
- Admin dashboard with sidebar navigation
- Image upload and management
- Real-time data updates with Firestore listeners
- Pagination and filtering
- Error boundaries and error pages (404, 403, 401)
- Context API for global state (authentication)
- Component composition and module-based architecture

### Results
After completing this section, I was able to:
- Build a complete full-stack blogging application
- Implement user authentication with Firebase
- Create CRUD operations for posts, categories, and users
- Build an admin dashboard with role-based permissions
- Handle complex forms with validation
- Implement real-time data synchronization
- Create reusable components and hooks
- Design responsive layouts with styled-components and Tailwind
- Handle image uploads and storage
- Implement search and filtering functionality
- Create error handling and user feedback systems

### Prerequisites
- Solid understanding of React fundamentals
- Knowledge of React Router
- Basic understanding of Firebase (or willingness to learn)
- Understanding of form handling concepts
- Node.js and npm/yarn installed
- Firebase account (free tier is sufficient)

### How to Start

1. Navigate to the project directory:
```bash
cd monkey-logging
```

2. Install dependencies:
```bash
npm install
# or if using bun
bun install
```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy your Firebase config
   - Update `src/firebase-app/firebase-config.jsx` with your Firebase credentials

4. Configure Uploadcare (for image uploads):
   - Sign up at [Uploadcare](https://uploadcare.com/)
   - Get your public key
   - Update the Uploadcare configuration in the project

5. Start the development server:
```bash
npm run dev
# or if using bun
bunx vite
```

6. Open your browser and visit `http://localhost:5173`

7. Build for production:
```bash
npm run build
```

**Note:** Make sure to configure your Firebase security rules properly before deploying to production.

---

## 3. My App Redux

### Purpose
A comprehensive Redux learning project that demonstrates different state management approaches in React. This project covers vanilla Redux, Redux Toolkit, Redux Thunk, and Redux Saga, providing hands-on experience with various Redux patterns and middleware.

### Tech Stack
- **React 19.2.0** - UI library
- **Redux** - State management (vanilla implementation)
- **Redux Toolkit 2.11.2** - Official Redux toolset
- **React Redux 9.2.0** - React bindings for Redux
- **Redux Thunk** - Middleware for async actions
- **Redux Saga 1.4.2** - Middleware for side effects
- **Redux Logger 3.0.6** - Middleware for logging actions
- **Axios 1.13.2** - HTTP client
- **Tailwind CSS 4.1.18** - Styling
- **Vite 7.2.4** - Build tool
- **Prettier** - Code formatting

### Key Concepts Learned
- **Vanilla Redux:**
  - Store creation with `createStore`
  - Reducers and actions
  - Action creators
  - Combining reducers
  - Store subscription

- **Redux Toolkit:**
  - `createSlice` for simplified reducer logic
  - `configureStore` for store setup
  - Immer integration for immutable updates
  - Action creators auto-generation

- **Redux Thunk:**
  - Async action creators
  - Handling API calls
  - Loading and error states

- **Redux Saga:**
  - Generator functions
  - Side effect management
  - Saga middleware setup
  - Handling async operations with sagas

- **Middleware:**
  - Redux Logger for debugging
  - Custom middleware creation
  - Middleware composition

- **React Redux:**
  - `useSelector` hook
  - `useDispatch` hook
  - `Provider` component
  - Connecting components to Redux store

### Results
After completing this section, I was able to:
- Understand the fundamentals of Redux state management
- Implement Redux in React applications
- Use Redux Toolkit for simplified Redux code
- Handle async operations with Redux Thunk
- Manage complex side effects with Redux Saga
- Debug Redux applications using Redux Logger
- Structure Redux applications properly
- Choose the right Redux approach for different scenarios
- Integrate Redux with React Router
- Handle loading, success, and error states in Redux

### Prerequisites
- Strong understanding of React fundamentals
- Knowledge of JavaScript ES6+ (especially arrow functions, destructuring, spread operator)
- Understanding of state management concepts
- Basic knowledge of async JavaScript (Promises)
- For Redux Saga: Understanding of generator functions (helpful but not required)
- Node.js and npm/yarn installed

### How to Start

1. Navigate to the project directory:
```bash
cd my-app-redux
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

5. Explore different Redux implementations:
   - Check `src/redux/` for vanilla Redux implementation
   - Check `src/redux-toolkit/` for Redux Toolkit implementation
   - Check `src/redux-thunk/` for Redux Thunk examples
   - Check `src/sagas/` for Redux Saga examples

6. Format code (optional):
```bash
npm run format
```

7. Build for production:
```bash
npm run build
```

**Note:** This project includes multiple Redux implementations. Make sure to configure the store correctly in `src/main.jsx` to use the desired Redux approach.

---

## 🎓 Course Information

**Course:** ReactJS từ cơ bản đến nâng cao dành cho người mới  
**Course URL:** [https://evonhub.dev/course/khoa-hoc-reactjs-co-ban](https://evonhub.dev/course/khoa-hoc-reactjs-co-ban)  
**Platform:** [EvonHub](https://evonhub.dev/)  
**Instructor:** EvonDev

---

## 📝 General Notes

- All projects use **Vite** as the build tool for fast development experience
- Projects are configured with **ESLint** for code quality
- Some projects use **Prettier** for code formatting
- All projects follow modern React patterns and best practices
- Each project is independent and can be run separately

---

## 🚀 Getting Started (General)

### Requirements
- Node.js (v16 or higher recommended)
- npm, yarn, or bun package manager
- Code editor (VS Code recommended)
- Git (for version control)

### Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📄 License

This repository contains educational projects completed during the EvonDev React course. All code is for learning purposes.

---

## 🙏 Acknowledgments

Special thanks to EvonDev and the EvonHub platform for providing comprehensive React education and hands-on projects.
