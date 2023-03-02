import { PageResponse } from "./types/pageResponse";
import fetchCookie from "fetch-cookie";
import nodeFetch from "node-fetch";
import Ajv from "ajv";
const fetch = fetchCookie(nodeFetch);

const ajv = new Ajv();

// validate is a type guard for MyData - type is inferred from schema type
//const validate = ajv.compile(pageResponseSchema);

export const requestPage = async (props: {
  userName: string;
  count: number;
  max_id?: string;
}): Promise<PageResponse> => {
  const res = await fetch(
    `https://www.instagram.com/api/v1/feed/user/${props.userName}/username/?count=${props.count}` +
      (props.max_id ? `&max_id=${props.max_id}` : ""),
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,hu-HU;q=0.8,hu;q=0.7",
        "sec-ch-prefers-color-scheme": "dark",
        "sec-ch-ua":
          '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "viewport-width": "812",
        "x-asbd-id": "198387",
        "x-csrftoken": "mo42XsU1ddZIKJsR1MF8zmtyviw6YaJv",
        "x-ig-app-id": "936619743392459",
        "x-ig-www-claim":
          "hmac.AR0v04A8J4QuUMyDdfraqMrm4pP_sA6qKZTYotUSXvbMqLtb",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          "mid=Y_5rwwAEAAGXtIE6LJ8WrWD1iAQ8; " +
          "ig_did=39E3C96B-B62C-4226-9810-2A5EDBBE685B; " +
          "dpr=2; " +
          'shbid="7408\\05414045503232\\0541709154206:01f7471e5dcaef01b7f16521c07d5f82be42ea1191290e371ff7d4d62886305fa6471080"; ' +
          'shbts="1677618206\\05414045503232\\0541709154206:01f76a0d298421d24450aef2f52660ba1263e81be062fda3155947bffcdf86d63674380c"; ' +
          "datr=6XT-Y-DSeyBMKs7PKHLoHZ1I; " +
          "csrftoken=mo42XsU1ddZIKJsR1MF8zmtyviw6YaJv; " +
          "ds_user_id=6311402450; " +
          "sessionid=6311402450%3Ak3a0jFBdmVsCak%3A1%3AAYfvh9-i0p8w0giWckQX4RPNfQUVPZAH4oyOolKxxA; " +
          'rur="CLN\\0546311402450\\0541709157465:01f7c80ae8489df9cb6544fc7bcd68f4ce62718eeae036b59553e2dac4d8c4103e3087ba"',
        Referer: "https://www.instagram.com/duck.unity/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );

  const json = await res.json();
  console.log(json);

  /*if (!validate(json)) {
    console.log(validate.errors);
    throw new Error("Invalid response");
  }*/

  return json as PageResponse;
};
