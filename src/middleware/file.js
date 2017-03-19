import fs from 'fs';
import path from 'path';
import querystring from 'querystring';

const writeFile = (data, boundary) => {
  return new Promise((resolve, reject) => {
    let file = querystring.parse(data, '\r\n', ':');
    let parseData = data.toString('binary');
    let contentType = file['Content-Type'].substring(1).split('/');
    let typeReg = new RegExp('image/*');
    // if (typeReg.test(contentType[0])) {
    // 获取文件开始的位置
      let upperBoundary = parseData.indexOf(contentType[1]) + contentType[1].length;
      let shorterData = parseData.substring(upperBoundary);

      // 替换开始位置的空格
      // \s 空格 ^\s 开头为空格 \s*多个空格 \s*$结尾为多个空格
      let binaryDataAlmost = shorterData.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      let binaryData = binaryDataAlmost.substring(0, binaryDataAlmost.indexOf(`--${boundary}--`));
      let date = new Date().getDate();
      fs.writeFile(path.join(__dirname, `../../upload/images/dog.${contentType[1]}`), binaryData, 'binary', (err) => {
        if (err) {
          reject(err);
          return;
        };
        resolve('ok');
      });
    // };
  });
};

export default writeFile;