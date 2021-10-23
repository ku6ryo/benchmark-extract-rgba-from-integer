
module.exports = function (colors) {
  const len = colors.length
  const results = []
  for (let i = 0; i < len; i++) {
    const c = colors[i]
    const r = (c & 0xFF000000) >> 24
    const g = (c & 0x00FF0000) >> 16
    const b = (c & 0x0000FF00) >> 8
    const a = c & 0x000000FF
    results.push({
      r, g, b, a
    })
  }
}