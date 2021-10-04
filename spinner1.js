// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 1700);

const chars = ['|', '/', '-', '\\', '|', '/', '-', '|'];
for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    i !== chars.length - 1 ? process.stdout.write(`\r${chars[i]}   `) : process.stdout.write(`\r${chars[i]}   \n`);
  }, 100 + i * 200);
}