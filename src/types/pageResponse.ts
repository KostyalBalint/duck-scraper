import { PostItem } from "./ImageItem";

export interface PageResponse {
  items: PostItem[];
  next_max_id: string;
  status: string; //ok
  more_available: boolean;
}
