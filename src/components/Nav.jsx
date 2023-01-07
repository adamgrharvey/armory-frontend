export default function Nav(props) {
  let backendURL = "http://localhost:3000";
  let frontendURL = "";

  return (
    <div className="Nav">
      <div className="Nav-items">
        <a href={`/`}>
          <div className="HomepageBtn" />
        </a>
        <a href={`/`}>
          <div className="Nav-item">
            Home
          </div>
        </a>
        <a href={`/submit`}>
          <div className="Nav-item">
            Upload
          </div>
        </a>
      </div>
    </div>
  )
}