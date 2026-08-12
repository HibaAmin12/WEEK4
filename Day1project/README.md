# Hiba Amin — Personal Portfolio

A responsive personal portfolio website built with React and Vite to showcase my academic background, technical skills, internship experience, projects, research interests, and professional profile.

The main purpose of this project was to build the visual and user-facing side of a web application while practicing component-based development, reusable UI design, semantic HTML, accessibility, responsive layouts, form handling, and frontend security awareness.

# 2. Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Building reusable user-interface components |
| Vite | Development server and frontend build tool |
| JavaScript | Application logic and dynamic rendering |
| HTML5 | Semantic structure of the web page |
| CSS3 | Styling, layout, and responsive design |
| Git | Version control and tracking changes |
| GitHub | Repository management and code sharing |

# 3. Project Structure

```text
portfolio/
│
├── public/
│   └── Hiba_Amin_CV.pdf
│
├── src/
│   │
│   ├── assets/
│   │   ├── portfolio.webp
│   │   ├── notes.jpeg
│   │   ├── aqi.jpeg
│   │   └── ifdl.jpeg
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

# 4. Component Architecture

I divided the portfolio into separate React components based on their responsibilities.

The main component structure is:

```text
App
│
├── Header
├── Home
├── Projects
│   └── ProjectCard
├── Experience
├── Contact
└── Footer
```

Each component is responsible for a specific part of the interface:

| Component         | Responsibility                                                      |
| ----------------- | ------------------------------------------------------------------- |
| `App.jsx`         | Combines the main components and defines the overall page structure |
| `Header.jsx`      | Handles branding, navigation, and CV access                         |
| `Home.jsx`        | Contains the Hero, About, and Skills sections                       |
| `Projects.jsx`    | Provides project information and renders project cards              |
| `ProjectCard.jsx` | Provides a reusable structure for displaying an individual project  |
| `Experience.jsx`  | Displays internship experience                                      |
| `Contact.jsx`     | Handles the contact form interface                                  |
| `Footer.jsx`      | Provides footer information, navigation, and social links           |

## Why I Used Separate Components

I separated the application into components so that each part of the interface has a clear responsibility.

For example, the navigation logic belongs in `Header.jsx`, while the contact form belongs in `Contact.jsx`. This keeps the code organized and makes individual sections easier to understand and maintain.

I also identified repeated UI structures and made them reusable. The clearest example is the project section, where every project follows the same card structure. Instead of writing the same markup repeatedly, I created a reusable `ProjectCard` component.

## Alternative Approach

I could have placed the entire portfolio inside `App.jsx`. However, this would make `App.jsx` very large and difficult to maintain.

It would also make it harder to modify one specific section without working through unrelated code.

Therefore, I chose a component-based structure where each component has a specific responsibility.


# 5. App.jsx — Application Composition

`App.jsx` is the main application component that brings together the major sections of the portfolio. It imports the individual components and renders them in the order in which they should appear on the page.

## Main Responsibilities

- Import the main React components
- Arrange the components in the required order
- Define the overall structure of the portfolio page
- Keep the application-level structure separate from the implementation details of individual sections

The structure of `App.jsx` is:

```text
App
│
├── Header
├── Home
├── Projects
├── Experience
├── Contact
└── Footer
```

## Why I Used `App.jsx` This Way

I kept `App.jsx` focused on composing the application instead of putting the actual content and styling of every section inside it.

For example, `App.jsx` does not contain the contact form implementation. That responsibility belongs to `Contact.jsx`. Similarly, project information is handled by `Projects.jsx`, while the reusable project-card structure is handled by `ProjectCard.jsx`.

This keeps `App.jsx` simple and makes the responsibilities of individual components clear. It follows the **Single Responsibility Principle**, ensuring that each component has one reason to change.

## Alternative Approach

I could have placed all of the portfolio markup directly inside `App.jsx`. However, that would:

- Make the component unnecessarily large and difficult to navigate
- Mix application composition with the implementation of individual sections
- Violate the principle of separation of concerns
- Make it harder to test and debug individual features

I therefore used `App.jsx` as the composition layer and kept individual responsibilities inside separate components. This approach makes the codebase more maintainable, scalable, and easier to collaborate on.

# 6. Header Component

The `Header.jsx` component contains the main navigation area of the portfolio.

It includes:

- Personal logo and name
- Navigation links
- CV button
- Accessibility information for the navigation

## Structure

The header contains three main parts:

```text
Header
│
├── Logo / Personal Brand
├── Navigation
└── CV Button
```

## Why I Used a Separate Header Component

I created a separate `Header.jsx` component because the navigation is a distinct part of the website and appears at the top of the page. Keeping it separate makes the component easier to maintain and allows the navigation to be modified without changing the other sections of the portfolio.

## Alternative Approach

Instead of using anchor links, I could have used React Router and created separate routes such as:
/about
/projects
/experience
/contact

However, this portfolio is designed as a single-page website, so separate routes were unnecessary. Section-based navigation keeps the application simpler and provides a smooth single-page experience.

---

# 7. Home Component

The `Home.jsx` component contains the main introductory content of the portfolio. It includes three major sections:

```text
Home
│
├── Hero Section
├── About Section
└── Skills Section
```

### Hero Section

The Hero section is the first main section users see when they visit the portfolio. It introduces my professional identity and provides quick access to the rest of the website.

It contains:

- Name
- Professional role
- Short professional description
- Project button
- Contact button
- Professional highlights
- Profile/portfolio image

#### Why I Designed the Hero This Way

I placed the most important professional information at the beginning so that visitors can quickly understand who I am, what I work with, and what they can explore on the website. I also added `View My Projects` and `Contact Me` buttons so users can directly move to the two important actions without manually searching through the page.

## Why I Kept Hero, About, and Skills in One Component

I grouped these sections in `Home.jsx` because they represent the main introductory and profile content of the portfolio. However, they are still separated into individual `<section>` elements with their own IDs:
#home
#about
#skills

This allows the navigation system to link directly to each section while keeping the implementation organized.

---

# 8. Projects Component

The `Projects.jsx` component displays the projects included in my portfolio. It contains project information and passes that information to the reusable `ProjectCard` component.

## Structure

The project section follows this structure:

```text
Projects
│
├── Section Heading
│
└── Project Grid
    │
    ├── ProjectCard
    ├── ProjectCard
    └── ProjectCard
```

## Current Projects

The three projects currently displayed are:

1. **Notes API** — A RESTful API for managing notes
2. **AQI Predictor** — Machine learning model for air quality prediction
3. **Image Forgery Detection & Localization** — Deep learning project for detecting forged images

## Why I Used a Separate Projects Component

I created `Projects.jsx` to keep project-related content separate from other portfolio sections. This makes it easier to add, remove, or update projects without changing the Hero, Experience, or Contact sections.

## Alternative Approach

I could have created separate components such as:
NotesApiCard.jsx
AqiPredictorCard.jsx
ImageForgeryCard.jsx

However, these components would contain almost the same structure and would result in unnecessary code duplication. Using one reusable `ProjectCard` component is more maintainable because changes to the card design only need to be made in one place.

---

# 9. ProjectCard Component

The `ProjectCard.jsx` component is a reusable component used to display an individual project. Instead of creating the complete project-card markup multiple times, I created one component that receives project-specific information through props.

## Props

The component accepts the following props:

| Prop | Purpose |
|---|---|
| `title` | Project name |
| `description` | Short description of the project |
| `technologies` | Technologies used in the project |
| `image` | Project image |
| `link` | GitHub or project URL |

The component receives these values through destructuring:

```jsx
function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}) {
  // Component implementation
}
```

## Why I Used Props

Each project has different information, but the structure of every project card is the same. For example, the Notes API and AQI Predictor have different titles, descriptions, technologies, and images, but both need the same card layout.

Therefore, I used props to pass the changing data into a reusable component. This follows the principle of separating:
Reusable Structure
+
Changing Data
↓
ProjectCard

## Alternative Approach

I could have hard-coded every project directly inside `Projects.jsx`. However, that would duplicate the same HTML structure for every project.

Using `ProjectCard` means that if I want to change the design of all project cards later, I only need to modify one component. This makes the application easier to maintain, extend, and reuse.

---

# 10. Experience Component

The `Experience.jsx` component displays my professional internship experience.

It currently contains experience from:

1. **10Pearls** — Data Science Intern
2. **ArhamSoft** — AI Intern

## Structure

The component follows this structure:

```text
Experience
│
├── Section Heading
│
└── Experience List
    │
    ├── 10Pearls
    │   ├── Company
    │   ├── Role
    │   ├── Description
    │   ├── Responsibilities
    │   └── Technologies
    │
    └── ArhamSoft
        ├── Company
        ├── Role
        ├── Description
        ├── Responsibilities
        └── Technologies
```

## Why I Used a Separate Experience Component

I created a separate `Experience.jsx` component because professional experience is a distinct section of the portfolio. Keeping it separate allows me to update internship information without affecting other parts of the application.

## Alternative Approach

I could have written all internship information as large paragraphs. However, that would make the content harder to scan and would not clearly separate individual responsibilities.

Using structured cards, headings, and lists makes the professional experience easier to read and maintain.

---

# 11. Contact Component

The `Contact.jsx` component provides a contact form that allows visitors to enter their information and message.

The form currently collects:

- Name
- Email
- Subject
- Message
- Optional update preference
- Preferred contact method

## Structure

The form follows this structure:

```text
Contact
│
├── Section Heading
│
└── Contact Form
    │
    ├── Name
    ├── Email
    ├── Subject
    ├── Message
    ├── Updates Checkbox
    ├── Preferred Contact Method
    └── Submit Button
```

## Why I Used a Form

I used the HTML `<form>` element because the purpose of this section is to collect structured user input. A form also provides native browser behavior for submitting and validating user-provided information.

```jsx
<form method="post" className="contact-form">
  {/* Form fields */}
</form>
```

The `method="post"` indicates that the form is intended to send data rather than retrieve it. At the current stage, the frontend does not have a backend endpoint connected to this form, so the form is primarily demonstrating the user-facing form structure and validation.

## Frontend Security Awareness

React does not automatically make a form secure. Client-side validation is mainly useful for improving the user experience. A malicious user can bypass browser validation and send a request directly to the backend.

If this form is connected to an API in the future, the backend should independently validate and sanitize all submitted data. I also need to consider security mechanisms such as:

- Authentication
- Authorization
- Rate limiting
- Input validation
- CSRF protection (where the chosen authentication mechanism requires it)

## Alternative Approach

I could have handled the form completely with React state using `useState` and manually controlled every input. However, because the current requirement is mainly to create the user-facing form and use standard browser validation, native form controls keep the implementation simpler.

When a real backend endpoint is connected, React state and event handlers can be introduced if the application needs custom validation, API submission, loading states, error messages, or success feedback.

---

# 12. Footer Component

The `Footer.jsx` component contains the bottom section of the portfolio. It provides additional navigation, personal branding, social links, and copyright information.

## Structure

The component follows this structure:

```text
Footer
│
├── Footer Brand
│   ├── Logo
│   └── Short Description
│
├── Footer Links
│   ├── Home
│   ├── Projects
│   ├── Experience
│   └── Contact
│
├── Social Links
│   ├── GitHub
│   └── LinkedIn
│
└── Copyright
```

## Why I Used a Separate Footer Component

I created `Footer.jsx` as a separate component because the footer is a distinct part of the page and contains information that is independent from the main content. Keeping it separate makes the application easier to maintain and allows the footer to be updated without modifying other components.

## Alternative Approach

I could have placed the footer markup directly inside `App.jsx`. However, that would mix the footer's implementation details with the application's main composition.

Using a separate component keeps `App.jsx` focused on arranging the major components while `Footer.jsx` handles all footer-related content.