const spintit = () => {
  process.stdout.write('hello from spinner1.js... \rheyyy\n');
  timer = 100;
  animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  for (let i = 0; i < animation.length; i++) {
    setTimeout(() => {
      process.stdout.write(animation[i]);
    }, timer);
    timer += 200;
  }
}

spintit();
