# Contact Form Project

![](./src/assets/design/desktop-preview.jpg)

A modern, reusable, and responsive contact form built with React and Tailwind CSS. This project focuses on creating elegant form components with scalable validation logic, toast notifications, and an easy-to-extend architecture for real-world applications.

Table of Contents

- Features

- Demo

- Installation

- Usage

- Folder Structure

- Technologies Used

- Contributing

- License

## Features

- Reusable Form Components: Inputs, radio buttons, checkboxes, and textareas with validation.

- Form Validation: Custom validation logic with clear error messages.

- Toast Notifications: Success or error messages displayed on form submission.

- Responsive Design: Fully responsive form built with Tailwind CSS.

- Scalable Architecture: Easy to extend with new fields or validation rules.

- Clean Code: Written with readability and maintainability in mind.

### 🚀Demo

[🔗 View project](https://divine-contact-form.netlify.app/)

### Installation

1. Clone the repository:

```
git clone https:/DivineUgorji/frontendmentor-projects.git

```

2. Navigate into the project directory:

```
cd contact-form
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

```
src/
│
├── components/
│   ├── FormInput/        => Input, textarea, select components
│   ├── UI/               => Buttons, toast notifications, etc.
│   └── FormContactCard/  => Main form component
│
├── hooks/
│   └── useForm.js        => Reusable form logic (validation, reset, error handling)
│
├── assets/               => Images, icons
├── App.js
└── index.js
```

## Technologies Used

- React – Frontend library for building UI components.

- Tailwind CSS – Utility-first CSS framework for styling.

- React Context API – For managing toast notifications.

- Motion (Framer Motion) – Smooth animations for toast and UI interactions.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

1. Fork the repository.

2. Create your feature branch: `git checkout -b feature/YourFeature`

3. Commit your changes: `git commit -m 'Add some feature'`

4. Push to the branch: `git push origin feature/YourFeature`

5. Open a Pull Request.

### License

This project is licensed under the MIT License.
