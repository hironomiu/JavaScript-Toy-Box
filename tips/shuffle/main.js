console.log('Simple Array Nums Shuffle')

const nums = [...new Array(100).keys()]

console.log(nums)

nums.sort(() => Math.random() - 0.5)

console.log(nums)

console.log('Fisher-Yates Array Nums Shuffle')

const nums2 = [...new Array(100).keys()]

console.log(nums2)

const length = nums2.length
for (let i = length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1))
  ;[nums2[i], nums2[j]] = [nums2[j], nums2[i]]
}

console.log(nums2)
