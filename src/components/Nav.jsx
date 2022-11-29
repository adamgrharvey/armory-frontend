export default function Nav(props) {
  let backendURL = "http://localhost:3000";
  let frontendURL = "";

  return (
    <div className="Nav">
      <div className="Nav-items">
        <a href={`/`}>
          <div className="HomepageBtn" />
        </a>
        <div>
          Upload
        </div>
        <div>
          Upload
        </div>
      </div>
    </div>
  )
}