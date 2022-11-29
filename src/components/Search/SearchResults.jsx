import decapitalizeString from "../../helpers/decapitalizeString"
export default function SearchResults(props) {

  let backendURL = "http://localhost:3000";
  let frontendURL = "";

  return (
    <div className="SearchResults">
      {props.searchResults.map((i) =>
        <a href={`${frontendURL}/character/${i.region}/${decapitalizeString(i.server)}/${decapitalizeString(i.name)}/`}>
          <div>
            {`${decapitalizeString(i.name)} ${decapitalizeString(i.server)} ${i.region}`}
          </div>
        </a>
      )
      }
    </div>
  )
}