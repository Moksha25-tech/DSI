# Adaptive Learning Overlay for Ashray Akruti

This is a functional UI/UX prototype for the **Adaptive Learning Overlay** project, designed for deaf and hard-of-hearing school students at Ashray Akruti. The system acts as an accessibility layer alongside educational videos, adapting explanations to the student's preferred communication format (Indian Sign Language, Simplified Text, Visual Explanations, etc.).

## 🚀 Features Demonstrated

This prototype includes a fully functional 5-screen interactive flow:
1. **Preferences / Accessibility Setup**: Configure communication preferences (ISL, text, visual), explanation style (short vs. step-by-step), and interpreter speed.
2. **Educational Video Interface**: A mock video player demonstrating live sync with an interactive transcript, timestamp anchors, and technical gloss tokens.
3. **Ask a Doubt**: A context-aware modal that automatically packages the student's question with the exact video timestamp and transcript snippet.
4. **Adaptive Multimodal Answer**: An explanation screen that dynamically adapts its layout and content based on the preferences chosen in Screen 1.
5. **Human Fallback**: A safety-net screen for questions the automated system cannot reliably answer, packaging the context for human educators (like Dr. Ananya Sharma) without penalizing the student.

## 🛠️ How to Run Locally

If you are a reviewer or tester and want to run this prototype on your machine without manually setting up the environment:

### **On Windows:**
Simply double-click the **`run.bat`** file in this folder.
*It will automatically check for Node.js, install necessary dependencies if missing, and open the prototype in your default web browser.*

### **On Mac/Linux:**
Open your terminal in this folder and run:
```bash
chmod +x run.sh
./run.sh
```

### **Manual Setup (If preferred):**
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Open a terminal in this directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open the provided `http://localhost:5173` link in your browser.

## 🌐 How to Deploy to GitHub & Vercel/Netlify

### Pushing to GitHub
1. Go to [GitHub](https://github.com/) and create a new empty repository (e.g., `adaptive-learning-overlay`).
2. Open a terminal in this folder and run the following commands:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```
   *(Note: A local git repository is already initialized and the initial commit has been made for you).*

### Deploying (Vercel / Netlify)
Since this is a standard Vite + React application, deployment is extremely easy:
1. Go to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Log in with your GitHub account.
3. Click **Add New Project** and import the repository you just pushed.
4. The deployment platform will automatically detect that it is a Vite React app. Leave the default build settings (`npm run build` and `dist` output directory) and click **Deploy**.
5. You will get a live public URL in about 2 minutes!

## 🎨 Design System
This prototype strictly adheres to a highly accessible, WCAG 2.2 compliant, modern design system featuring:
- High contrast, dark teal and mint color palettes (`#00685f`, `#89f5e7`).
- Clear, legible typography using the `Inter` font family.
- Minimum 48x48px interactive touch targets.
- Responsive layout prioritizing desktop and tablet usability.
