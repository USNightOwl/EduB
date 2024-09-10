export interface IBreadcumb {
  name: string;
  slug: string;
  id: string;
}

export interface IAttachment {
  id: string;
  name: string;
  path: string;
}

export enum AUTH_STATUS {
  LOADING = "loading",
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
}
