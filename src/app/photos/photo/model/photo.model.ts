export interface Photos {
  url: string;
  description: string;
  user: string;
}

export interface TypeImage {
  raw: string;
  thumb: string;
  small: string;
  full: string;
}

export interface PhotosReturn {
  urls: TypeImage;
  id: string;
  user: User;
  description: string;
}

export interface User {
  username: string;
  bio: string;
}
