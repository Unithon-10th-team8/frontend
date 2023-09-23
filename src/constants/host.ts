import { RELEASE_ENV, ReleaseEnv } from "./env";

export const API_HOST_MAP: Record<ReleaseEnv, string> = {
  production: "https://api.haenu.dev/",
  development: "https://dev-api.haenu.dev",
};

export const API_HOST = API_HOST_MAP[RELEASE_ENV];
