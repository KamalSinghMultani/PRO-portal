Pro Portal - Candidate Flagging System

This project simulates a candidate flagging system based on application screening rules.

Technologies Used:
- Node.js
- Express.js
- TypeScript
- AngularJS 1.x
- PrimeNG
- Bootstrap

Project Structure:
- backend/
  - src/index.ts          (Server setup)
  - src/evaluate.ts       (Flagging evaluation logic)
  - src/save.ts           (Saving evaluations)
- frontend/
  - index.html            (Frontend UI form)
  - app.js                (AngularJS controller)

Setup Instructions:

1. Clone the repository or unzip the provided project folder.

2. Backend Setup:
   - Open terminal.
   - Navigate to backend folder:
       cd backend
   - Install dependencies (if needed):
       npm install
   - Run backend server:
       npx ts-node src/index.ts
   - Backend server will start at:
       http://localhost:3000

3. Frontend Setup:
   - Open another terminal window.
   - Navigate to frontend folder:
       cd frontend-angularjs
   - Start frontend server using:
       npx serve .
   - Frontend will open at a local address like:
       http://localhost:5173

4. Usage:
   - Fill in candidate information on the form.
   - Click "Evaluate" to trigger flags if applicable.
   - Review flags and override if necessary.
   - Click "Save Evaluation" to store data.

Notes:
- Evaluations are saved to a local JSON file (saved-evaluations.json) inside the backend folder.
- Ensure backend is running before evaluating or saving.