window.onload = () => {
  const hanoi = async (num, start, dest, work) => {
    if (num < 1) return
    hanoi(num - 1, start, work, dest)
    console.log(`${num} move ${start} to ${dest}`)
    // alert('click')
    hanoi(num - 1, work, dest, start)
  }

  hanoi(3, 'A', 'B', 'C')
}
