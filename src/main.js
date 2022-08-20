console.log('--- MAIN START ---');

(async () => {
  const a = await import('./a');
  const b = await import('./b');

  console.log(a.foo, b.bar);
})();

console.log('--- MAIN END ---');
