import fs from "fs";
import glob from "glob";

const abstractRegExp = /abstract:\s*?{([^}]|\n)*?}/g;
const shareRegExp = /share:\s*?(\'(.*?)\'|\"(.*?)\"|\`(.*?)\`)/g;
const urlRegExp = /(\'(.*?)\'|\"(.*?)\"|\`(.*?)\`)/g;

function parseFile(file) {
  var promise = new Promise((resolve, reject) => {
    try {
      fs.readFile(file, (err, data) => {
        if (err) throw err;
        var string = data.toString();

        var abstracts = string.match(abstractRegExp) || [];

        const shareds = abstracts.reduce((accumulator, currentValue) => {
          return [...accumulator, ...(currentValue.match(shareRegExp) || [])];
        }, []);

        const urls = shareds
          .reduce((accumulator, currentValue) => {
            return [...accumulator, ...(currentValue.match(urlRegExp) || [])];
          }, [])
          .map(url => url.replace(/\'|\"|\`/g, ""));

        resolve(urls);
      });
    } catch (error) {
      reject(error);
    }
  });

  return promise;
}

export default function getStoriesUrls(path) {
  return new Promise((resolve, reject) => {
    try {
      glob(`${path}/**/*.stories.ts`, {}, (er, files) => {
        Promise.all(files.map(parseFile)).then(urls => {
          resolve(urls.reduce((acc, cur) => [...acc, ...cur], []));
        });
      });
    } catch (e) {
      reject(e);
    }
  });
}
