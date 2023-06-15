export const useScroll = () => {
  const html = document.documentElement
  const isScroll = ref(false)

  function onScroll() {
    const top = html.scrollTop || document.body.scrollTop
    const headerHeight = parseInt(html.style.fontSize)

    if (top > headerHeight * 4) isScroll.value = true
    else isScroll.value = false
  }

  onMounted(() => window.addEventListener('scroll', onScroll))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return {
    isScroll,
  }
}
