# 📋 Next.js Job Board Application

This project is a functional Job Board application built with **Next.js**. It demonstrates advanced routing capabilities (static and dynamic), REST API integration, state management, and responsive UI design using Material UI.

---

## 📚 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure & Routing](#-project-structure--routing)
- [API Integration](#-api-integration)

---

## 🌟 Features

The application has been fully implemented with the following core functionalities:

### 1. Navigation
* **Global NavBar:** A persistent navigation bar utilizing the Next.js `Link` component to seamlessly switch between the **Home** page and the **Saved Jobs** page without full page reloads.

### 2. Saved Jobs Dashboard (`/saved-jobs`)
* **Data Fetching:** Automatically fetches saved job data upon page load using `useEffect`.
* **Loading States:** Displays a loading indicator while data is being retrieved.
* **Management:**
    * **Delete:** Users can remove jobs from their saved list. This triggers a router reload to refresh the list instantly.
    * **Apply:** Users can click "Apply" on any saved job to be redirected to the specific application page.

### 3. Dynamic Application Pages (`/apply/[id]`)
* **Dynamic Routing:** Uses Next.js dynamic routes to render unique pages for every job ID.
* **Responsive Layout:** Built with **MUI Grid**:
    * **Desktop:** Split screen (Form on Left / Details on Right).
    * **Mobile:** Stacked layout (Form on Top / Details on Bottom).
* **Application Form:**
    * Fully controlled form inputs.
    * Submits application data via a POST request to the backend.
    * **Success Feedback:** Upon successful submission, the form is replaced by a success message component.

---

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
* **Frontend Library:** React
* **Styling:** Material UI (MUI)
* **Backend/Database:** Prisma & SQLite (Local API routes)
* **HTTP Client:** Fetch API (encapsulated in utility functions)

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites
* Node.js installed
* npm installed

### Installation

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Generate the Database:**
    *Important:* You must run this command to initialize the local Prisma database before starting the server.
    ```bash
    npm run generate-db
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

4.  **Access the App:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure & Routing

The project follows standard Next.js routing conventions:

| Page Path | Description |
| :--- | :--- |
| `pages/index.js` | **Home Page**: Lists available jobs. Includes functionality to navigate directly to the application page. |
| `pages/saved-jobs.js` | **Saved Jobs**: Lists jobs saved by the user. Allows deletion and navigation to apply. |
| `pages/apply/[id].js` | **Apply Page**: A dynamic route that captures the `jobId` from the URL parameters to fetch specific job details and handle applications. |

---

## 📡 API Integration

The application interacts with a local REST API located in `pages/api`. Key utility functions used for data fetching (located in `utils/api/jobs.js`) include:

* **`getSavedJobsDetails()`**: Fetches the list of saved jobs.
* **`deleteSavedJob(id)`**: Removes a job from the saved list.
* **`getJob(id)`**: Fetches details for a specific job based on ID.
* **`postApplication(data)`**: Submits the user's application form data.

---

## Screenshot
![Expected Output](readme-gifs/expected_output.gif)
