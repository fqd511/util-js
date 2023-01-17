/**
 * handle const value from query, stored in localStorage/sessionStorage/global
 * @param name const name
 */
export function useConst(name: string) {
  // url query is the only data source
  // ?1=2 : '2' ; '?1' : '' ; '?' : null
  const fromQuery = new URL(window.location.toString()).searchParams.get(name);
  const queryValue =
    fromQuery === null
      ? undefined
      : fromQuery === ""
      ? false
      : JSON.parse(fromQuery);
  // maybe undefined
  const globalValue = window[name] as string | null;
  let sessionStorageValue, localStorageValue;
  try {
    sessionStorageValue = JSON.parse(window.sessionStorage.getItem(name) || "");
    localStorageValue = JSON.parse(window.localStorage.getItem(name) || "");
  } catch {
    sessionStorageValue = "";
    localStorageValue = "";
  }
  if (queryValue !== undefined) {
    window[name] = queryValue;
    window.localStorage.setItem(name, queryValue);
    window.sessionStorage.setItem(name, queryValue);
  } else if (localStorageValue) {
    window[name] = localStorageValue;
    window.sessionStorage.setItem(name, localStorageValue);
  }
  return queryValue ?? localStorageValue ?? sessionStorageValue ?? globalValue;
}
