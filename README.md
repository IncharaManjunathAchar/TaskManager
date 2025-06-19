## Frontend Setup

```bash
cd ..  # Go back to the project root

npm create vite@latest frontend --template react  
# Create a new Vite project named 'frontend' using the React template

cd frontend  # Move into the newly created frontend directory

# Install core libraries:
npm install axios react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled  
# axios – for HTTP requests  
# react-router-dom – for client-side routing  
# @mui/material – Material UI components  
# @mui/icons-material – Material UI icons  
# @emotion/react & @emotion/styled – for styling (required by MUI)

# Add drag-and-drop support:
npm install react-beautiful-dnd  
# Enables smooth drag-and-drop interactions in the UI

# Add React Query for advanced data fetching:
npm install @tanstack/react-query  
# Handles server-state caching, background updates, and syncing

# Add toast notification support:
npm install react-hot-toast  
# Shows lightweight toast messages for feedback (e.g., success, error)
```
