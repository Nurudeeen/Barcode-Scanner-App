async function printInput () {
  const streamReadAll = require('stream-read-all')
  const stdin = await streamReadAll(process.stdin)
  console.log(stdin.toString())
}
printInput()