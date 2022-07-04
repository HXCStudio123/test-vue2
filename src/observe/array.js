const oldArrayProto = Array.prototype

// newArrayProto.__proto__ = Array.prototype
let newArrayProto = Object.create(oldArrayProto)
console.log(newArrayProto)
const methods= [
  'pop',
  'push',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methods.forEach(method => {
  newArrayProto
})