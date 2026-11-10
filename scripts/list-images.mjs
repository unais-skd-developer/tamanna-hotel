import fs from "fs";

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = dir + "/" + f.name;
    if (f.isDirectory()) scan(full);
    else {
      console.log(full);
    }
  }
}
scan("public/images");

