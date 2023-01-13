import { checkAuth, updateServiceStatus } from "../browser";

const key1 = "";
console.log(
  `checkAuth[${key1}]:`,
  checkAuth({
    key: key1,
    dbId: process.env.AUTH_DB_ID,
    token: process.env.AUTH_TOKEN,
  })
);

const key2 = "";
console.log(
  `checkAuth[${key2}]:`,
  checkAuth({
    key: key2,
    dbId: process.env.AUTH_DB_ID,
    token: process.env.AUTH_TOKEN,
  })
);

updateServiceStatus({
  key: "",
  dbId: process.env.SERVICE_DB_ID,
  token: process.env.SERVICE_STATUS_TOKEN,
  isAlive: true,
  ip: ["1.1.1.1", "2.3.4.5"].toString(),
});
