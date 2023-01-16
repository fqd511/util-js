/**
 * handle const value from query, stored in localStorage/sessionStorage/global
 * @param name const name
 */
export function useConst(name: string): string {
  // url query is the only data source
  // ?1=2 : '2' ; '?1' : '' ; '?' : null
  const queryValue = new URL(window.location.toString()).searchParams.get(name);
  // maybe undefined
  const globalValue = window[name];

  let sessionStorageValue, localStorageValue;
  try {
    sessionStorageValue = window.sessionStorage.getItem(name);
    localStorageValue = window.localStorage.getItem(name);
  } catch {
    sessionStorageValue = "";
    localStorageValue = "";
  }
  if (queryValue) {
    window[name] = queryValue;
    window.localStorage.setItem(name, queryValue);
    window.sessionStorage.setItem(name, queryValue);
  } else if (localStorageValue) {
    window[name] = localStorageValue;
    window.sessionStorage.setItem(name, localStorageValue);
  }
  return queryValue || localStorageValue || sessionStorageValue || globalValue;
}
