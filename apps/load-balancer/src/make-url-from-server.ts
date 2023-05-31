import { env } from "./env.ts"

function makeURLFromServer(server: number) {
  return `${env.WS_PROTOCOL}://sv-${server}.${env.SITE_DOMAIN}`
}

export default makeURLFromServer