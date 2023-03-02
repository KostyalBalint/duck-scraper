import request from "request";
import fs from "fs";

export const downloadImage = (url: string) => {
  const fileName = url.split("?")[0].split("/").pop();

  request.head(url, function (err, res, body) {
    //    console.log("content-type:", res.headers["content-type"]);
    //   console.log("content-length:", res.headers["content-length"]);

    //Create folder if not exists
    if (!fs.existsSync("data/images")) {
      fs.mkdirSync("data/images", { recursive: true });
    }

    request(url).pipe(fs.createWriteStream("data/images/" + fileName));

    console.log("Downloaded: " + fileName);
  });
};
