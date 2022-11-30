export default function Nav(props) {
  let backendURL = "production-env.eba-q3dkmdph.us-west-2.elasticbeanstalk.com";
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