import { Client } from "@notionhq/client";

/**
 * check auth in notion db
 * @param key key of auth item
 * @param dbId auth db id
 * @param token access token
 * @param promptStr prompt label
 */
export function checkAuth({
  key,
  dbId,
  token,
  promptStr = "Input Password Please:",
}: {
  key: string;
  dbId?: string;
  token?: string;
  promptStr?: string;
}): boolean {
  if (!key || !dbId || !token) {
    return false;
  }
  const url = window ? window.location.hostname : "";
  const psd = prompt(promptStr);

  // Initializing a client
  const notion = new Client({
    auth: token,
  });
  return false;
}

/**
 * update service status and ip in notion db
 * @param key service key
 * @param dbId notion db id
 * @param token access token
 * @param isAlive is service alive
 * @param ip service machine ip
 */
export function updateServiceStatus({
  key,
  dbId,
  token,
  isAlive = true,
  ip = "",
}: {
  key: string;
  dbId?: string;
  token?: string;
  isAlive?: boolean;
  ip?: string;
}): boolean {
  if (!key || !dbId || !token) {
    return false;
  }
  // Initializing a client
  const notion = new Client({
    auth: token,
  });
  return false;
}
