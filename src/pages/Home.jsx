import { Link } from "react-router-dom";

// Inside your component's return statement


function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
      <h1>Home</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
        <Link to="/buttons">Buttons</Link>
        <Link to="/live-type">Live Type</Link>
        <Link to="/slider">Slider</Link>
      </nav>
    </div>
  );
}

export default HomePage;
