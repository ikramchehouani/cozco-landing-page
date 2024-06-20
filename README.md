# Cozco Website

This project is a new version for the Cozco website.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repo

   git clone https://github.com/ikramchehouani/cozco-landing-page.git

2. Navigate to the project directory

    cd cozco-website

3. Install NPM packages

    npm install

### Environment Variables

Create a .env file in the root of your project and add the following variables:

    REACT_APP_EMAIL_JS_SERVICE_ID='your_emailjs_service_id'
    REACT_APP_EMAIL_JS_TEMPLATE_ID='your_emailjs_template_id'
    REACT_APP_EMAIL_JS_USER_ID='your_emailjs_user_id'
    REACT_APP_BACKEND_URL='your_backend_url'

Make sure to replace your_emailjs_service_id, your_emailjs_template_id, your_emailjs_user_id, and your_backend_url with your actual EmailJS service ID, template ID, user ID, and backend URL.

### Usage

1. Start the development server

    npm start

This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

2. Build the app for production

    npm run build

This will build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### Using EmailJS

This project uses EmailJS to send emails directly from the client-side.

To configure EmailJS:

    Sign up for an account on EmailJS.
    Create an email service, email template, and obtain your user ID.
    Add your EmailJS credentials (service ID, template ID, and user ID) to your .env file as mentioned above.
    For detailed documentation, refer to the EmailJS Documentation.

### License

Distributed under the MIT License. See LICENSE for more information.

### Contact
Ikram Chehouani - ikram_chehouani@outlook.fr