import { Client } from "@notionhq/client";

/**
 * check auth in notion db
 * @param key key of auth item
 * @param dbId auth db id
 * @param token access token
 */
export function checkAuth(key: string, dbId?: string, token?: string): boolean {
  if (!key || !dbId || !token) {
    return false;
  }
  const url = window ? window.location.hostname : "";
  const psd = prompt("Input Password Please:");

  // Initializing a client
  const notion = new Client({
    auth: token,
  });
  return false;
}

/**
 * update service status and ip in notion db
 * @param key
 * @param dbId
 * @param token
 * @param isAlive
 * @param ip
 */
function updateServiceStatus(
  key: string,
  dbId?: string,
  token?: string,
  isAlive = true,
  ip?: string
): boolean {
  // Initializing a client
  const notion = new Client({
    auth: token,
  });
  return false;
}
