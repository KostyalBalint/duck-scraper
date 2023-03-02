import fs from "fs";
import crypto from "crypto";

export const saveResponseJson = (json: unknown) => {
  const date = new Date().toISOString().replace(/:/g, "-");
  const hash = crypto
    .createHash("md5")
    .update(JSON.stringify(json))
    .digest("hex");
  const name = `${date}-${hash}`;

  //Create folder if not exists
  if (!fs.existsSync("data/meta")) {
    fs.mkdirSync("data/meta", { recursive: true });
  }

  fs.writeFile(`data/meta/${name}.json`, JSON.stringify(json), (err: any) => {
    if (err) {
      return console.log(err);
    }
  });
};
