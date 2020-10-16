import { readFileSync, writeFileSync } from "fs";

export default function Database(name) {
  const fileName = ".DB_" + name + ".json";
  const filePath = "./src/db/" + fileName;
  try {
    readFileSync(filePath);
  } catch (e) {
    console.log("Creating", fileName);
    writeFileSync(filePath, JSON.stringify({}));
  }
  return {
    get() {
      return JSON.parse(readFileSync(filePath));
    },
    set(updates) {
      writeFileSync(filePath, JSON.stringify({ ...this.get(), ...updates }));
    },
    query(key, value) {
      const data = this.get();
      switch (key) {
        case "id": {
          return data[value];
        }
        default: {
          const output = {};
          for (let id of data) {
            if (data[id][key] && data[id][key] === value) {
              output[id] = data[id];
            }
          }
          return output;
        }
      }
    },
  };
}
