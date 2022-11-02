export default function standardizeRealmName(realm) {
  realm = realm.replace("\'", "");
  realm = realm.replace(" ", "-");
  return realm;
}