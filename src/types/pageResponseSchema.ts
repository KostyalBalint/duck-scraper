import { JSONSchemaType } from "ajv";
import { PageResponse } from "./pageResponse";

/*export const pageResponseSchema: JSONSchemaType<PageResponse> = {
  type: "object",
  required: ["items", "next_max_id", "status", "more_available"],
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        required: ["image_versions2"],
        properties: {
          image_versions2: {
            type: "object",
            required: ["candidates"],
            properties: {
              candidates: {
                type: "array",
                items: {
                  type: "object",
                  required: ["url", "height", "width"],
                  properties: {
                    url: {
                      type: "string",
                    },
                    height: {
                      type: "number",
                    },
                    width: {
                      type: "number",
                    },
                  },
                },
              },
            },
          },
          caption: {
            type: "object",
            required: ["text"],
            properties: {
              text: {
                type: "string",
              },
            },
          },
          media_type: {
            type: "number",
          },
          original_width: {
            type: "number",
          },
          original_height: {
            type: "number",
          },
        },
      },
    },
    next_max_id: {
      type: "string",
    },
    status: {
      type: "string",
    },
    more_available: {
      type: "boolean",
    },
  },
  additionalProperties: true,
};
*/
