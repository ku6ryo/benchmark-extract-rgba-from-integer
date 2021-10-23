Speed comparison of RGBA extraction from integer.

UintArray: Converts interger array to UintArray and gets by indexes.
```
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
```

Bitmask: Bitmasking and bit shifting
```
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
```


Node.js (14.16.0 on Windows 10)

|         | UintArray | Bitmask |
|---------|-----------|---------|
| HD      | 1501      | 556     |
| full HD | 3367      | 1379    |
| 4K      | 13706     | 4668    |
| 8K      | 71298     | 20553   |

Chrome browser (94.0.4606.81 on Windows10)

|         | UintArray | Bitmask |
|---------|-----------|---------|
| HD      | 546       | 851     |
| full HD | 939       | 1990    |
| 4K      | 3209      | 9157    |
| 8K      | 11872     | 42438   |