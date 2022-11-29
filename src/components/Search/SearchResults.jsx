import decapitalizeString from "../../helpers/decapitalizeString"
export default function SearchResults(props) {

  let backendURL = "http://localhost:3000";
  let frontendURL = "";

  const evenOrOdd = function(number) {
    console.log(number);
    if (number % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
    
  }

  return (
    <div className="SearchResults">
      {props.searchResults.map((i, index) =>
        <a href={`${frontendURL}/character/${i.region}/${decapitalizeString(i.server)}/${decapitalizeString(i.name)}/`}>
          <div className={`Result ${evenOrOdd(index)} c${i.class_id}`}>
            {`${decapitalizeString(i.name)} ${decapitalizeString(i.server)} ${i.region}`}
          </div>
        </a>
      )
      }
    </div>
  )
}
