console.log('filter-imitation')
console.log('for')
{
  const filter = (nums, f) => {
    let result = []
    for (let i = 0; i < nums.length; i++) {
      if (f(nums[i])) {
        result.push(nums[i])
      }
    }
    return result
  }
  console.log(filter([1, 2, 3, 4, 5], (_) => _ < 3))
}
console.log('reduce')
{
  const filter = (nums, f) => {
    let result = nums.reduce((a, c) => {
      const len = a.length | 0
      if (f(c)) {
        a[len] = c
      }
      return a
    }, [])
    return result
  }

  console.log(filter([1, 2, 3, 4, 5], (_) => _ < 3))
}
