args = process.argv.slice(2);

const timer = (time) => setTimeout(() => process.stdout.write('\x07'), time *1000);

for (let i = 0; i < args.length; i++) {
  timer(Number(args[i]));
}