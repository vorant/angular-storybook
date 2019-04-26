import minimist from "minimist";
import cliProgress from "cli-progress";
import getStoriesUrls from "./parse-stories";
import downloadImages from "./download-images";
import MyEmitter from "./MyEmitter";

const argv = minimist(process.argv.slice(2));
const errors = {
  errors: [],
  add(error) {
    this.errors.push(error);
  },
  show() {
    if (this.errors.length) {
      console.log("\x1b[31m","Errors count: ", this.errors.length, "\x1b[0m");
      this.errors.forEach(error => {
        console.log(...error);
      });
    }
  }
};
// const bar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);
const bar = new cliProgress.Bar(
  {
    format:
      "Progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Errors: {errors}"
  },
  cliProgress.Presets.shades_classic
);

let successfullCounter = 0;
let errorCounter = 0;
let urlLength = 0;
getStoriesUrls(argv.s || "./stories").then(urls => {
  urlLength = urls.length;
  bar.start(urlLength, 0, { errors: 0 });
  downloadImages(urls, argv.a || "assets");
});

MyEmitter.on("downloaded", () => {
  successfullCounter++;
  bar.update(successfullCounter + errorCounter);
  if (successfullCounter + errorCounter === urlLength) {
    bar.stop();
    errors.show();
  }
});

MyEmitter.on("error", error => {
  errorCounter++;
  bar.update(successfullCounter + errorCounter, { errors: errorCounter });
  if (error && error.name === "NotFoundError") {
    errors.add([
      "\x1b[31m",
      "\n Can't open share link: ",
      "\x1b[32m",
      error.data.path,
      "\x1b[0m"
    ]);
  } else if (error && error.name === "RateLimitError") {
    errors.add([
      "\x1b[31m",
      "\n RateLimitError: Too many requests: ",
      "\x1b[32m",
      " Reset at",
      error.data.resetsAt,
      "\x1b[0m"
    ]);
  } else {
    errors.add([
      "\x1b[31m",
      "\n An error: ",
      error,
      "\x1b[0m"
    ]);
  }
  if (successfullCounter + errorCounter === urlLength) {
    bar.stop();
    errors.show();
  }
});
