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
  };
}
