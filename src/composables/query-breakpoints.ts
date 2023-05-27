export const breakpointsEnum = {
  md: 1440,
  sm: 720,
}

export function useQueryBreakpoints() {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum))

  const isMobile = breakpoints.smaller('sm')
  const isPad = breakpoints.between('sm', 'md')
  const isDesktop = breakpoints.greater('md')

  return {
    breakpoints,
    isMobile,
    isPad,
    isDesktop,
  }
}
