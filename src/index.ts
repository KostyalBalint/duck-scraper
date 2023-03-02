import { requestPage } from "./requestPage";
import { saveResponseJson } from "./saveResponseJson";
import { PageResponse } from "./types/pageResponse";
import { downloadImage } from "./downloadImage";
import { MediaType } from "./types/ImageItem";

let page: PageResponse;
let next_max_id: string | undefined = undefined;

const saveImages = async (page: PageResponse) => {
  for (const item of page.items) {
    if (item.media_type === MediaType.Image) {
      const url = item?.image_versions2.candidates[0].url;
      await downloadImage(url);
    } else if (item.media_type === MediaType.Album) {
      for (const carouselItem of item.carousel_media) {
        const url = carouselItem?.image_versions2.candidates[0].url;
        await downloadImage(url);
      }
    }
  }
};

do {
  try {
    page = await requestPage({
      userName: "duckofig",
      count: 12,
      max_id: next_max_id,
    });
    await saveResponseJson(page);
    await saveImages(page);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  next_max_id = page.next_max_id;
  console.log(
    "Scraped: " + page.items.length + " images, next page: " + next_max_id
  );
} while (page.more_available);

console.log("All Done");
