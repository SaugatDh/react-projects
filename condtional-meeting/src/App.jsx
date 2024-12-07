import UserGreeting from "./UserGreeting.jsx"
function App() {
  return(
  <>
    <UserGreeting isLoggedIn={true} username="Saugat Dhungana" />
    <UserGreeting isLoggedIn={true}  />
    
  </>
  );
}

export default App
