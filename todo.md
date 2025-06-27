## User Creation Feature Implementation

This plan outlines the steps to implement a user registration feature, allowing new users to create accounts and log in.

### Todo Items:

- [x] **1. Update Prisma Schema:**
    - Define a `User` model in `prisma/schema.prisma` with fields like `id`, `email`, `name`, and `password` (hashed).
    - Run `npx prisma db push` or `npx prisma migrate dev` to apply schema changes to the database.
- [x] **2. Create Registration API Endpoint:**
    - Create a new API route `app/api/register/route.js`.
    - Implement a `POST` handler to receive user registration data.
    - Hash the password using `bcryptjs` before saving it to the database.
    - Handle potential errors like duplicate email addresses.
- [x] **3. Create Registration Page (`app/register/page.js`):**
    - Create a new route `app/register/page.js`.
    - Design a registration form with fields for email, username, and password.
    - Implement client-side logic to submit registration data to the `/api/register` endpoint.
    - Redirect to the login page upon successful registration.
- [x] **4. Update NextAuth.js Credentials Provider:**
    - Modify the `authorize` function in `app/api/auth/[...nextauth]/route.js` to query the database for user credentials instead of using hardcoded values.
    - Compare the provided password with the hashed password from the database using `bcryptjs`.

### Review Section:
- Updated Prisma schema to include a `User` model.
- Successfully pushed Prisma schema changes to the database.
- Implemented a registration API endpoint (`/api/register`) to handle user creation with password hashing.
- Created a user registration page (`/register`) with a form for new user sign-ups.
- Modified the NextAuth.js Credentials Provider to authenticate users against the database.
- **Fixed login page:** Corrected `app/login/page.js` to send `email` instead of `username` to the NextAuth.js API route.
