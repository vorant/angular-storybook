import * as Abstract from "abstract-sdk";
import fs from "fs";
import MyEmitter from "./MyEmitter";

const token =
  "d94e43d6305d01b3d8ea00271cfa477dd5ff54a41db60211b38e199e6b88a4e7";
const maxRequestPerMinute = 60;
let lastRequestTime = 0;
let requestCounter = 0;

const client = new Abstract.Client({
  accessToken: token,
  transportMode: "api"
});

export default function downloadImages(urls, pathToPlace) {
  if (!fs.existsSync(pathToPlace)) {
    fs.mkdirSync(pathToPlace, { recursive: true });
  }

  for (let url of urls) {
    getArrayBuffer(url)
      .then(arrayBuffer => {
        const shareId = url.split("/").slice(-1)[0];
        writeFile(arrayBuffer, pathToPlace, shareId);
      })
      .catch(error => {
        MyEmitter.emit("error", error);
      });
  }
}

function writeFile(arrayBuffer, pathToPlace, shareId) {
  fs.writeFile(
    `${pathToPlace}/${shareId}.png`,
    Buffer.from(arrayBuffer),
    error => {
      if (error) {
        MyEmitter.emit("error", error);
      } else {
        MyEmitter.emit("downloaded");
      }
    }
  );
}

async function getArrayBuffer(shareUrl) {
  await canIRequest();
  const layer = await client.shares.info({
    url: shareUrl
  });

  await canIRequest();
  return await client.previews.raw(layer.descriptor);
}

async function canIRequest(n = 0) {
  if (lastRequestTime + 60 * 1000 < new Date().getTime()) {
    requestCounter = 0;
  }
  if (requestCounter < maxRequestPerMinute) {
    requestCounter++
    lastRequestTime = new Date().getTime();
    return new Promise(resolve => setTimeout(resolve, 0));
  } else {
    await new Promise(resolve => setTimeout(resolve, 60 * 1000 + 1));
    n++;
    return await canIRequest(n);
  }
}
