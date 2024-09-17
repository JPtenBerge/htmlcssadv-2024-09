addEventListener("message", (e) => {
  console.log("[worker]", e.data);
  let result = fibo(e.data);
  postMessage(result);
});

const fibo = (n) => {
  if ([0, 1].includes(n)) {
    return 1;
  }
  return fibo(n - 2) + fibo(n - 1);
};


// geen toegang:
// - DOM
// - window/globalThis
// - navigator

// "berekeningen"
// - JSON.parse()
// - overviewberekeningen
// - websockets/fetch()
// - "change detection" - virtual DOM
// - camerabeeldanalyse
// - AI model/bitcoin miner
