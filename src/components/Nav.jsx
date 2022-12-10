export default function Nav(props) {
  let backendURL = "https://api.armoryclassic.com";
  let frontendURL = "";

  return (
    <div className="Nav">
      <div className="Nav-items">
        <a href={`/`}>
          <div className="HomepageBtn" />
        </a>
        <a href={`/submit`}>
          <div>
            Upload
          </div>
        </a>
      </div>
    </div>
  )
}