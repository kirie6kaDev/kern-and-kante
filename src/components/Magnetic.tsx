import {
  motion,
  type HTMLMotionProps,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

type MagneticBaseProps = {
  children: ReactNode
  strength?: number
}

function useMagnetic(strength = 0.18) {
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 230,
    damping: 20,
    mass: 0.45,
  })

  const springY = useSpring(y, {
    stiffness: 230,
    damping: 20,
    mass: 0.45,
  })

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return

    const rect = event.currentTarget.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((event.clientX - centerX) * strength)
    y.set((event.clientY - centerY) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return {
    style: reduceMotion
      ? undefined
      : {
          x: springX,
          y: springY,
        },
    handleMove,
    reset,
  }
}

type MagneticButtonProps =
  MagneticBaseProps &
  Omit<HTMLMotionProps<'button'>, 'children'>

export function MagneticButton({
  children,
  strength,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const magnetic = useMagnetic(strength)

  return (
    <motion.button
      {...props}
      style={{
        ...props.style,
        ...magnetic.style,
      }}
      onMouseMove={(event) => {
        magnetic.handleMove(event)
        onMouseMove?.(event)
      }}
      onMouseLeave={(event) => {
        magnetic.reset()
        onMouseLeave?.(event)
      }}
    >
      {children}
    </motion.button>
  )
}

type MagneticLinkProps =
  MagneticBaseProps &
  Omit<HTMLMotionProps<'a'>, 'children'>

export function MagneticLink({
  children,
  strength,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticLinkProps) {
  const magnetic = useMagnetic(strength)

  return (
    <motion.a
      {...props}
      style={{
        ...props.style,
        ...magnetic.style,
      }}
      onMouseMove={(event) => {
        magnetic.handleMove(event)
        onMouseMove?.(event)
      }}
      onMouseLeave={(event) => {
        magnetic.reset()
        onMouseLeave?.(event)
      }}
    >
      {children}
    </motion.a>
  )
}