### Ecommerce Web

---

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen) ![Maintainability](https://img.shields.io/badge/maintainability-A-brightgreen)

---

### Overview

This is an Ecommerce web application built with React. It features a variety of pages including landing, product, cart, checkout, signup, and login pages. The application ensures consistent design and functionality across different pages to provide a seamless shopping experience.

### Table of Contents

- [Technologies](#technologies)
- [Pages](#pages)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [API Deployment](#api-deployment)
- [Features](#features)
- [License](#license)

---

### Technologies

- **React** - A JavaScript library for building user interfaces.
- **Redux** - State management library.
- **Styled Components** - Utilizes tagged template literals to style your components.
- **Jest** - JavaScript testing framework.
- **React Router** - For routing and navigation.

---

### Pages

#### Landing Page

- **Product List**: Displays a list of different products.
- **Recommended Products**: A slider showcasing recommended products.
- **Signup Option**: Allows users to sign up.
- **Menu**: Contains navigation options.

#### Product Page

- **Product List**: Shows a variety of products.
- **Add to Cart**: Users can add products to their cart.

#### Cart Page

- **Add to Cart**: Users can add products to the cart.
- **Suggested Products**: A slider showing suggested products.

#### Checkout Page

- **Checkout Items**: Users can review their items before checkout.
- **Modify Cart**: Users can delete or increase the quantity of items before payment.

#### Signup Page

- **Sign Up**: Allows users to sign up or use third-party platforms like Google for signup.

#### Login Page

- **Log In**: Allows users to log in or use third-party platforms like Google for login.

---

### Getting Started

#### Prerequisites

Ensure you have Node.js and npm installed on your computer by running `node -v` and `npm -v` in your terminal. If you don't have Node.js installed, go to the [Node.js website](https://nodejs.org/), and follow the download instructions.

#### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/DaisyMicheal/Ecommerce-web.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd ecommerce-web
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

#### Usage

1. **Run the development server:**
   ```sh
   npm start
   ```
2. **Open your browser and navigate to:**
   ```sh
   http://localhost:3000
   ```

---

### Testing

1. **Run unit tests:**
   ```sh
   npm test
   ```

---

### API Deployment

The API endpoint is hosted [here](https://api.yourdomain.com).

---

### Features

- **Reusable Components:** Modular components for easy integration.
- **Customizable:** Flexible props to tailor components to your needs.
- **Accessible:** Built with accessibility in mind.
- **Tested:** Thoroughly tested components to ensure reliability.

---

### License

This project is licensed under the MIT License.

---

### Additional Notes

- **Ensure the components are accessible with proper focus management and ARIA attributes.**
- **Test the components on various devices and screen sizes for responsiveness.**
- **Review the styles to ensure they align with the overall design system.**

For more information, check the documentation in each component's respective `.md` file.
