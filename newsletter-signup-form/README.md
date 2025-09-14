# 📧 Newsletter Signup Form

A responsive React + Tailwind CSS project that allows users to subscribe to a newsletter.  
The app validates user input, shows error states for invalid emails, and displays a success card once the subscription is confirmed.

---

## 🖼️ Preview

![](./src/assets/design/desktop-preview.jpg)

## ✨ Features

- ✅ Responsive design with **Tailwind CSS**
- ✅ Email input validation (custom, not browser default)
- ✅ Error states with styled feedback
- ✅ Success card with confirmation message
- ✅ Smooth transitions with **Framer Motion**

---

**Newsletter Card**

- Input your email to subscribe.
- Invalid email → shows an error message.
- Valid email → shows success confirmation card.

**Success Card**

- Displays a thank-you message and the submitted email.
- Includes a dismiss button to return to the newsletter form.

---

## 🚀 Tech Stack

- [React](https://reactjs.org/) — UI Library
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations

---

## 📂 Project Structure

```
src/
├─ assets/
├─ components/
│ ├─ UI/
│ ├─ NewsLetterCard/
│ ├─ SuccessCard/
├─ pages/
│ ├─ Main.jsx
│ ├─ Header/
├─ App.jsx
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/DivineUgorji/frontendmentor-projects.git

cd newsletter-signup-form
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the development server

```
npm run dev
```

### 🧩 Components

#### NewsLetterCard

- Renders the signup form

- Handles email validation

- Calls onSuccess(email) when a valid email is submitted

#### SuccessCard

- Displays a thank-you message

- Shows the entered email

- Provides a dismiss button (onDismiss) to go back

#### Main

Controls the UI flow between NewsLetterCard and SuccessCard

### 🔮 Future Improvements

- Add backend integration (e.g., Mailchimp / custom API)

- Store subscriptions in a database

- Improve animations (card flip, fade in/out)

- Add tests (React Testing Library / Jest)

### 📜 License

This project is licensed under the MIT License.
