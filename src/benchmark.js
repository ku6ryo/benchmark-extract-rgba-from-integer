const convertUintArray = require("./uintarray")
const convertBitmask = require("./bitmask")

function benchmark(tag, process, times) {
  const start = new Date().getTime()
  for (let i = 0; i < times; i++) {
    process()
  }
  console.log(`${tag}: Finished in ${new Date().getTime() - start} ms`)
}

;(() => {
  // HD, full HD, 4K, 8K
  [921600, 2073600, 8294400, 33177600].forEach(px => {
    const colors = Array(px).fill(0x01020304)
    benchmark(px + " / UintArray", () => {
      convertUintArray(colors)
    }, 10)
    benchmark(px + " / Bitmask", () => {
      convertBitmask(colors)
    }, 10)
  })
})()
