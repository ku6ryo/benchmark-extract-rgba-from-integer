
module.exports = function convert (colors) {
  const array = new Uint8Array(new Uint32Array(colors).buffer)
  const len = colors.length
  const results = []
  for (let i = 0; i < len; i++) {
    const a = array[4 * i]
    const b = array[4 * i + 1]
    const g = array[4 * i + 2]
    const r = array[4 * i + 3]
    results.push({
      r, g, b, a
    })
  }
  return results
}