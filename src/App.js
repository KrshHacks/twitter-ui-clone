import Nav from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <div className="container h-100">
        <div className="row h-100">
          <Nav />
          <div className="col-7">Main Tweets</div>
          <div className="col-3">Aside Data</div>
        </div>
      </div>
    </div>
  );
}
