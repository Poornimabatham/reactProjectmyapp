import logo from "./logo.svg";
import "./App.css";
import { Button, TextField, Card } from "@mui/material";
import Navbar from "./component/Navbar";
import Cards from "./component/Card"; // Rename to Cards or use alias
import Form from "./component/Form";

function App() {
  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <div className="App">
      <Navbar navItems={navItems} />
      <Cards />
      <Form />
      {/* <Card>
        <TextField label="Name" variant="outlined" />
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Card> */}
    </div>
  );
}

export default App;
