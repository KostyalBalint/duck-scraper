export enum MediaType {
  Image = 1,
  Video = 2,
  Album = 8,
}

type BaseItem = {
  id: string;
  caption: {
    text: string;
  };
  original_width: number;
  original_height: number;
};

type RawImageItem = {
  id: string;
  image_versions2: {
    candidates: {
      url: string;
      height: number;
      width: number;
    }[];
  };
  media_type: MediaType.Image;
};

type CarouselItem = {
  carousel_media: RawImageItem[];
  media_type: MediaType.Album;
} & BaseItem;

type ImageItem = RawImageItem & BaseItem;

export type PostItem = CarouselItem | ImageItem;
