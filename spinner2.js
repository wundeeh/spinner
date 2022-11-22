
let iteration = 200;

const spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   \n"];

for (const img of spinner) {
  setTimeout(() => {
    process.stdout.write(img)
  }, iteration);
  iteration += 200;
}
