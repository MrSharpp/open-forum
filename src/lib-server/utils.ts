export function parseDbUrl(dbUrl: string) {
  const [schema, carry] = dbUrl.split("://");
  const [username, password, host, port, db] = carry.split(/:|@|:|\//);

  return { schema, username, password, host, port, db };
}
