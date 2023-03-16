import * as Prismic from "@prismicio/client";

export function createClient(options?: Prismic.ClientConfig | undefined) {
  return Prismic.createClient(process.env.API_ENDPOINT as string, {
    ...options,
    accessToken: process.env.ACCESS_TOKEN as string,
  });
}
