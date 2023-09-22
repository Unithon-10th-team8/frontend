export type ReleaseEnv = "production" | "development";

export const RELEASE_ENV = process.env.RELEASE_ENV as ReleaseEnv;
