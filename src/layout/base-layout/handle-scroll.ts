export const useScrollHandle = () => {
  const isScroll = ref(false)

  const onScroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop

    if (top > 68) isScroll.value = true
    else isScroll.value = false
  }

  onMounted(() => {
    console.log('true')

    window.addEventListener('scroll', onScroll)
  })

  return {
    isScroll,
  }
}
