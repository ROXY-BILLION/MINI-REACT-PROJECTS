import Box from "./components/Box";

function App() {
  return (
    <div>
      <h1>My Dashboard</h1>

      <Box title="Profile">
        <p>Name: David</p>
        <p>Course: React</p>
      </Box>

      <Box title="Notifications">
        <p>You have 3 new messages.</p>
      </Box>

      <Box title="Tasks">
        <p>Finish the React project.</p>
      </Box>
    </div>
  );
}

export default App;
