# React and Typescript Talk

Ok, so Create React App is better than before. For one thing, it begins with some types, eg:

```typescript
const App: React.FC = () => {
  //
}
```

Hover over, you get:

```typescript
type React.FC<P = {}> = React.FunctionComponent<P>
```

Look up typescript generics.

So, from the TS Docs:

> Once we’ve written the generic identity function, we can call it in one of two ways. The first way is to pass all of the arguments, including the type argument, to the function:
>
> ```ts
> let output = identity<string>("myString");  // type of output will be 'string'
> ```
>
> Here we explicitly set `T` to be `string` as one of the arguments to the function call, denoted using the `<>` around the arguments rather than `()`.

<https://www.typescriptlang.org/docs/handbook/generics.html>



Typescript knows what React's builtin functions do. For example, in Hooks, 

```typescript
const [operator, setOperator] = useState('')
```

it knows that the type of setOperator is

```typescript
React.Dispatch<React.SetStateAction<T>>
```

You are responsible for filling in T, and for typing Operator.





Resources:

<http://2ality.com/2018/04/type-notation-typescript.html>