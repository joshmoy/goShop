export const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      type: 'spring',
      stiffness: 5
    }
  }
}

export const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, trasition: { type: 'spring', stiffness: 3 } }
}

export const item2 = {
  hidden: { opacity: 0.5, y: 30 },
  show: { opacity: 1, y: 0, trasition: { type: 'spring', stiffness: 3 } }
}

export const container2 = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      delayChildren: 1,
      staggerChildren: 0.4,
      type: 'spring',
      stiffness: 5
    }
  }
}
