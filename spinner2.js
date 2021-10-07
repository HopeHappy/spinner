const chars = ['|', '/', '-', '\\', '|', '/', '-', '|'];
for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    i !== chars.length - 1 ? process.stdout.write(`\r${chars[i]}   `) : process.stdout.write(`\r${chars[i]}   \n`);
  }, 100 + i * 200);
}