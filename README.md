chai aur react series from HitestSir, practicing.

## Foundational part

# Learnd cra & vite, CSR components.

01basicreact
01vitereact

# Making custom React library and JSX, Internal workings disected

customReact

# Hooks

diving into situation where usage of hooks |some methods to update UI by react| makes me to learn it
https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js

# Counter app

# Concept stories: Virtual DOM, Fibre, Reconciliation

- ReactDOM.createRoot()

https://github.com/acdlite/react-fiber-architecture
\\Hydration proccess is better with react fiber.
\\now(from 7 y) updation algorithem of virtual dom (core) is 'react fibre',
\\ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates.
\\reconciliation:
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
\\update:
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
\\Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm
The key points are:
Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
\\functionality of fiber key points:
primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to
› pause work and come back to it later.
› assign priority to different types of work.
› reuse previously completed work.
› abort work if it's no longer needed.

-structure of a fiber | to be learn it later after having good grasp

# Tailwind & props

- https://tailwindcss.com/docs/installation/framework-guides
  used/practiced: tailwind, components, passing values in components & props extraction(handling)

## Foundational part

# bgChanger
