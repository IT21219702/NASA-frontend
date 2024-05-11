# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Astronomy Adventurer
 
Astronomy Adventurer is a React frontend application that allows users to explore astronomy-related data fetched from NASA's public APIs. This README provides comprehensive documentation on setting up, running, testing, and contributing to the project.
 
## Installation
 
1. Clone the repository:
 
    ```bash
    git clone https://github.com/sliitcsse/se3040-assignment02-IT21219702.git
    ```
 
2. Navigate to the project directory:
 
    ```bash
    cd nasa-explorer
    ```
 
3. Install dependencies:
 
    ```bash
    npm install
    ```
 
## Usage
 
To start the development server:
 
```bash
npm run dev
```
 
Open http://localhost:5173 in your browser to view the application.
 
## Features
1. View daily or historical astronomy-related data.
2. Responsive design for seamless experience across devices.
3. Integration with NASA's APIs for fetching data.
4. Optional user authentication for personalized features.
 
## APIs Used
NASA Explorer integrates data from the following NASA APIs:
 
1. Mars Rover Photos API: Provides photos taken by NASA's Mars rovers.
2. Astronomy Picture of the Day API: Offers a different astronomy-related picture or photograph every day.
3. 
For more details on these APIs, refer to the NASA API Portal.
 
## Testing
We have implemented unit and integration tests using Jest and React Testing Library. Run the following command to execute the tests:
 
```bash
  npm test
```
Deployment
The application is hosted on Netlify. Automatic deployments are triggered upon changes to the main branch.
 
## Contributing
Contributions are welcome! Please follow these steps:
 
1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature.
3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Submit a pull request.
 
## License
This project is licensed under the MIT License. See the LICENSE file for details.