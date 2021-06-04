import readFile from "fs-readfile-promise";
import { mock } from "intermock";

export type FileTuple = [string, string];
export type FileTuples = FileTuple[];

export function readFiles(files: string[]): Promise<FileTuples> {
  const filePromises = files.map((file) => readFile(file));
  return new Promise((resolve) => {
    Promise.all(filePromises).then((buffers) => {
      const contents: string[][] = [];
      buffers.forEach((buffer, index) =>
        contents.push([files[index], buffer.toString()])
      );
      resolve(contents as FileTuples);
    });
  });
}

async function main() {
  const filesName = ["example-file-2.ts", "example-file.ts"];
  const interfaces = ["Admin", "OutroTipo"];

  // readFiles(filesName).then((files) => {
  //   try {
  //     const result = mock({
  //       files,
  //       interfaces,
  //     });

  //     console.log(result);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // });

  const files = await readFiles(filesName);
  try {
    const result = mock({
      files,
      interfaces,
      output: "json",
    });

    const test = JSON.parse(result.toString());

    console.log(test);
  } catch (err) {
    console.log(err.message);
  }
}

main();
