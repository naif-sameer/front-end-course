import "./App.css";

const Header = () => {
  const isAdmin = false;

  if (isAdmin) {
    return (
      <>
        <h1>Admin header</h1>
        <ul>
          <li>users</li>
          <li>permissions</li>
        </ul>
      </>
    );
  }

  return (
    <div>
      <h1>Header</h1>

      {/* if inside the component */}
      {isAdmin ? (
        <div>okay 2</div>
      ) : (
        <div>not okay</div>
      )}

      <ul>
        <li>1 item</li>
        <li>2 item</li>
        <li>3 item</li>
        <li>4 item</li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div>footer</div>
      <div>footer 2</div>
    </>
  );
};

function App() {
  return (
    <div>
      <Header />
      <div>html here</div>
      <h1>Vite + React</h1>
      footer start
      <Footer />
      footer end
    </div>
  );
}

export default App;
