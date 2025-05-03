import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Enhanced error handling and debugging
try {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    console.log("Root element found, attempting to render");
    
    // Remove the test element creation
    
    // Now try to render the React app
    setTimeout(() => {
      try {
        createRoot(rootElement).render(
          // Remove StrictMode temporarily as it can cause double-rendering
          <App />
        );
        console.log("React rendering completed");
      } catch (renderError) {
        console.error("React rendering error:", renderError);
        rootElement.innerHTML = `<div style="color: white; padding: 20px;">
          React rendering error: ${renderError.message}
          <br><br>
          Please check the console for more details.
        </div>`;
      }
    }, 100); // Small delay to ensure test element is visible
    
  } else {
    console.error("Root element not found");
    document.body.innerHTML = '<div style="color: white; padding: 20px;">Error: Root element not found</div>';
  }
} catch (error) {
  console.error("Critical error:", error);
  document.body.innerHTML = `<div style="color: white; padding: 20px;">
    Critical error: ${error.message}
    <br><br>
    Please check the console for more details.
  </div>`;
}



