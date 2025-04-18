# Project Requirements Document

## 1. Project Overview

This project is a microservices template repository designed to serve as a robust foundation for future projects. Instead of a monolith, the repository uses a true microservices approach with clearly separated concerns: Next.js applications for the frontend, a Node.js/Express API gateway, and dedicated Python microservices for handling billing, analytics, email notifications, and a placeholder for AI functionalities. The template is built to spin up with a single command and immediately provides a landing page at “/” for public access and an authenticated dashboard at “/dashboard” for signed-in users, along with integrated endpoints for authentication, billing, and more.

The main goal is to deliver a pre-built, scalable, and secure foundation that any team can fork to jumpstart their project. The success of this repository will be measured by its ease of setup, the seamless integration between services, and the clarity of documentation that allows developers to extend it effortlessly. Built with modern tools like Next.js 14, TypeScript, and Docker Compose, it adheres to the latest security standards and industry best practices to support rapid development and production deployment.

## 2. In-Scope vs. Out-of-Scope

**In-Scope:**

*   Repository structure with a fixed folder layout including:

    *   Next.js frontends for the landing page (www) and authenticated dashboard.
    *   A Node.js/Express API gateway to manage authentication and routing.
    *   Python-based microservices for billing, analytics, email notifications, and AI stub.
    *   Shared TypeScript types, UI kit, and helper functions.
    *   Supabase SQL schema for database, complete with Row-Level Security (RLS) rules.
    *   Utility scripts for local development and CI integration.
    *   Docker-compose orchestration for local development.

*   Built-in integrations:

    *   Authentication via Clerk (standard with optional MFA and RBAC).
    *   Billing with Stripe using Update.dev.
    *   Analytics integration using PostHog.
    *   Email services powered by Resend for transactional emails.
    *   An AI microservice stub for future expansion.

*   A splash/landing page at “/” and an authenticated dashboard at “/dashboard.”

*   Comprehensive documentation in README.md detailing quick-start guides and one-liners for each service.

## 3. User Flow

When a user first visits the application, they land on the marketing-focused landing page at the root URL ("/"). This landing page has been built with Next.js using Tailwind CSS and shadcn/ui components to create a visually appealing and engaging experience. The page introduces the platform and provides clear calls-to-action for users who wish to learn more or sign up. New visitors can easily navigate to authentication endpoints (login, register) provided by Clerk.

Once a user goes through the authentication process using Clerk’s standard flows (with optional MFA and role-based access control), they are redirected to the authenticated dashboard at "/dashboard." Inside this dashboard, they can access various features such as managing account settings, viewing billing and subscription information via the integrated Stripe endpoints, and monitoring analytics powered by PostHog. The dashboard interacts with the backend Node.js/Express gateway that handles routing and forwards requests to the appropriate Python microservices for billing, analytics, email, and the AI placeholder.

## 4. Core Features

*   **Frontend Applications:**

    *   A public landing page ("/") built with Next.js, Tailwind CSS, and shadcn/ui.
    *   An authenticated dashboard ("/dashboard") with state-of-the-art UI components, dark mode toggle, and role-based content accessibility.

*   **Authentication:**

    *   Integration with Clerk for handling login, logout, and registration.
    *   Support for optional multi-factor authentication (MFA) and role-based access control (RBAC).

*   **Backend API Gateway:**

    *   A Node.js/Express gateway responsible for verifying authentication and routing requests to appropriate microservices.

*   **Microservices:**

    *   Python services for:

        *   Billing (subscription management, payment processing via Stripe and Update.dev).
        *   Analytics (data handling and integration with PostHog).
        *   Email (transactional emails and notifications via Resend).
        *   AI Service Stub (a placeholder endpoint that demonstrates basic request processing).

*   **Database:**

    *   Supabase SQL schema with integrated Row-Level Security (RLS) and storage rules.

*   **Development and Operations:**

    *   Docker-compose configuration for a one-command local setup.
    *   Utility scripts to aid in development, continuous integration, and deployment.
    *   Detailed documentation and a comprehensive README.md with quick-start guides for each component.

## 5. Tech Stack & Tools

*   **Frontend:**

    *   Next.js (with App Router) for both the landing page and dashboard.
    *   Tailwind CSS for styling.
    *   shadcn/ui, Radix UI, and Lucide icon set for a beautiful and cohesive UI.
    *   TypeScript for type safety and consistency.

*   **Backend:**

    *   Node.js/Express as the API gateway.
    *   Python microservices handling domain-specific functionalities (billing, analytics, email, AI stub).

*   **Database:**

    *   Supabase (Postgres) with SQL schema, RLS, and storage rules.

*   **Authentication & Integrations:**

    *   Clerk for user authentication.
    *   Stripe (via Update.dev) for billing and subscription management.
    *   PostHog for product analytics.
    *   Resend for email notifications.

*   **Dev Tools & Deployment:**

    *   Docker-compose for local orchestration.
    *   Vercel for production deployment.
    *   Windsurf as the modern IDE with integrated AI coding capabilities.

*   **Additional Libraries:**

    *   SWR for client-side data fetching.
    *   Sonner for toast notifications.

## 6. Non-Functional Requirements

*   **Performance:**

    *   The application should start quickly with a single command using Docker-compose.
    *   Frontend should deliver responsive UI with minimal load times (aim for under 2 seconds for page rendering).

*   **Security:**

    *   Built with the latest security patches (including protection against CVE‑2025‑29927).
    *   Secure authentication flows using Clerk with optional MFA and RBAC.

*   **Scalability & Maintainability:**

    *   Codebase structured as a monorepo using Turborepo for efficient multi-zone routing.
    *   Clear separation between microservices ensures each container and service can scale independently.

*   **Usability:**

    *   User-friendly landing page and dashboard interface.
    *   Comprehensive documentation ensuring smooth onboarding for new developers.

*   **Compliance:**

    *   Follow industry best practices for security and data handling.

## 7. Constraints & Assumptions

*   The project assumes that all required services (authentication, billing, analytics, email, AI) are integrated minimally with essential endpoints.
*   It is assumed that the platform will be used publicly by multiple teams or projects and should remain generic and customizable.
*   The gateway solely handles authentication and routing, with business logic residing in dedicated microservices.
*   Availability and compatibility of third-party services and libraries (e.g., Clerk, Resend, PostHog, Stripe via Update.dev) are assumed to be stable.
*   The environment assumes Docker-compose for local development and Vercel for production deployment.
*   The chosen tech stack (Next.js 14, TypeScript, Python, Node.js, etc.) must remain consistent to avoid configuration issues.

## 8. Known Issues & Potential Pitfalls

*   API Rate Limits: Third-party services (e.g., Stripe, Clerk, Resend) may impose rate limits that could affect testing or production if not properly managed.

    *   Mitigation: Implement caching and error-handling strategies; document rate limits clearly.

*   Container Isolation: Ensuring every service runs in a completely isolated container requires careful configuration of the Docker-compose file.

    *   Mitigation: Use clear network configurations and regularly test inter-service communications.

*   Service Integration Complexity: The generic endpoints for services like billing and AI may need future enhancement, possibly leading to integration complexities.

    *   Mitigation: Clearly document each endpoint and keep the implementation minimal; encourage future extension rather than over-engineering.

*   Version Compatibility: Staying up-to-date with the latest security patches while ensuring compatibility (e.g., protecting against CVE‑2025‑29927) might require future refactoring.

    *   Mitigation: Regularly update dependencies and maintain thorough documentation of versions used.

*   Deployment Transition: Smoothly transitioning from a Docker-compose-based local development environment to Vercel’s deployment environment may pose configuration challenges.

    *   Mitigation: Establish clear CI/CD pipelines and document environment-specific settings.

This document provides a comprehensive blueprint for the microservices template repository. Every component—from the frontend landing page and dashboard with Next.js to the backend microservices and gateway—is designed for clarity, scalability, and ease of use. The template is meant to be a starting point that developers can extend, allowing multiple projects to fork and adapt the repository to their individual needs without reinventing the wheel.
