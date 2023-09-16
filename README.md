# Add at least 3 Project feature:
1. Here is the Credit Hour Remaining which cannot take more than 20hours.
2. no course can be registered more than once.
3. selected button has been used which on click will show total credit hour, total price but each course will be calculated only once.


# Discuss how you managed the state in your assignment project.
=> React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.

Here are all the state included in the react:

useState
useReducer
useMemo & useCallback
useEffect
useRef
Context and Custom Hooks
React Query & React Location
Zustand
Valtio
Jotai
Redux
The new use hook
Recommendations
Outroduction

i use only two state in my project they are 
1.useState &
2.useEffect

useState:The useState hook is a simple yet powerful way to manage state in functional components. Before hooks were introduced, class components were the only way to manage state in React. However, useState has made it possible to manage state in functional components as well, leading to more concise and readable code.
usestate is one of the hooks in react
usestate hooks to allow maintaining state in react
State refers to data that can change over time and affect what is displayed on the page. 
usestate refers to an array with two elements 
current state value 
function to update that value 


useEffect:The useEffect hook is used to perform side effects in functional components, such as fetching data, setting up event listeners, or updating the DOM. It serves as a replacement for the lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.i can pass an array of dependencies as the second argument to useEffect. The side effect will only run when one of the dependencies changes.
 By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
   
