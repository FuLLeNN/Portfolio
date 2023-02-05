import {Configuration, OpenAIApi} from "openai";
const api = "sk";
const score = "-";
const key = "yUHzOsdQh2WegvNE8JRYT3BlbkFJM91ln2R1VtPrh5ldNm5M";
const configuration = new Configuration({
  apiKey: api + score + key,
});

export default async function handler(req, res) {
  if (!req.body.prompt)
    return res
      .status(400)
      .json({message: "Pass in prompt field for image generation"});
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: "1024x1024",
  });

  if (!response.data) throw new Error("Unable to get image");
  console.log("received url " + response.data.data[0].url);

  res.status(200).json({imageURL: response.data.data[0].url});
}
