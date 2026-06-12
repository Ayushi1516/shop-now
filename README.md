# ShopNow - Modern E-commerce Dashboard

ShopNow is a modern, responsive e-commerce dashboard built with Angular and Tailwind CSS. It provides a clean and intuitive interface for managing products, orders, user accounts, and even includes a scripting workspace for advanced automation.

## Features

-   **User Authentication**: Secure login and registration with role-based access (User, Retailer, Admin).
-   **Dashboard Overview**: Centralized access to various modules.
-   **Product Management**: Display products with images, descriptions, and pricing.
-   **Order History**: Track past orders with status indicators.
-   **Account & Finance**: View total balance, monthly earnings/spending, and recent transactions.
-   **User Profile**: Display and manage user details.
-   **Scripting Workspace**: A dedicated editor for writing and saving automation scripts.
-   **Reactive State Management**: Utilizes Angular Signals for efficient and reactive state handling.
-   **Lazy Loading**: Production-ready routing with lazy-loaded modules for optimized performance.
-   **JSON Server Integration**: Uses JSON Server as a mock backend for easy development and data persistence.
-   **Responsive Design**: Built with Tailwind CSS for a mobile-first and adaptive user experience.

## Technologies Used

-   **Angular**: Frontend framework
-   **TypeScript**: Programming language
-   **Tailwind CSS**: Utility-first CSS framework
-   **Angular Signals**: For reactive state management
-   **Angular Router**: For navigation and lazy loading
-   **HttpClient**: For API communication
-   **JSON Server**: For mock REST API

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
-   [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
-   JSON Server (`npm install -g json-server`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd shop-now # or your project folder name
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the JSON Server (Mock Backend):**
    Open a new terminal in the project root and run:
    ```bash
    json-server --watch db.json
    ```

2.  **Start the Angular Development Server:**
    Open another terminal in the project root and run:
    ```bash
    ng serve -o
    ```
    This will compile the application and open it in your default browser at `http://localhost:4200/`.

## Project Structure

The project follows a feature-driven structure:

```
src/app/
├── core/             # Core services (e.g., AuthService)
│   └── services/
├── features/         # Feature modules/components
│   ├── auth/         # Authentication (Login, Register)
│   │   └── service/
│   ├── dashboard/    # Main dashboard layout and sub-features
│   │   ├── accounts/
│   │   ├── cart/
│   │   ├── dashboard/
│   │   ├── orders/
│   │   ├── products/
│   │   └── profile/
│   └── workspace/    # Scripting workspace
├── shared/           # Shared components, directives, pipes
├── app.config.ts     # Application configuration
├── app.routes.ts     # Main routing configuration
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

---

**Note:** This `README.md` is generated based on the current state of the ShopNow application.