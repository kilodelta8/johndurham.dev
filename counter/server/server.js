const express = require('express');
const fs = require('fs'); // File system module
const path = require('path'); // Path module
const cors = require('cors'); // CORS middleware
const app = express();
const port = 4000; // Ensure this matches the port used in client-side.js

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable parsing JSON request bodies

app.post('/track', (req, res) => {
  const data = req.body;
  console.log('Received data:', data); // Add this line

  try {
    const logFilePath = path.join(__dirname, './website_logs.json');
    console.log('Log file path:', logFilePath); // Add this line

    // Read the existing log file
    fs.readFile(logFilePath, 'utf8', (err, fileData) => {
      if (err && err.code !== 'ENOENT') {
        console.error('Error reading log file:', err);
        return res.status(500).json({ error: 'Error reading log file' });
      }

      let logs = [];
      if (fileData) {
        try {
          logs = JSON.parse(fileData);
        } catch (parseErr) {
          console.error('Error parsing log file:', parseErr);
          return res.status(500).json({ error: 'Error parsing log file' });
        }
      }

      // Add the new log entry
      const logEntry = {
        timestamp: new Date().toISOString(),
        type: data.type,
        page: data.page,
        timeSpent: data.timeSpent,
        operatingSystem: data.operatingSystem,
        location: data.location
      };
      logs.push(logEntry);

      // Write the updated logs back to the file
      fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (writeErr) => {
        if (writeErr) {
          console.error('Error writing to log file:', writeErr);
          return res.status(500).json({ error: 'Error writing to log file' });
        }

        console.log('Log updated successfully');
        res.json({ message: 'Data received and logged' }); // Send a success response
      });
    });

  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Error processing data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});