export default function standardizeRealmName(realm) {
  realm = realm.replace(/'/g, "");
  realm = realm.replace(/ /g, "-");
  return realm;
}