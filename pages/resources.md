# Resource

## React/Next

- [You might not need an effect](https://react.dev/learn/you-might-not-need-an-effect) - Official article from react team on when not to use `useEffect`
- [Awesome React](https://github.com/enaqx/awesome-react) - A collection of popular react libraries
- [Next Examples](https://github.com/vercel/next.js/tree/deprecated-main/examples) - Official examples from Next.js team
- React Patterns
  - [React Design Patterns](https://refine.dev/blog/react-design-patterns/)
  - [5 Advanced react pattern](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)

## Apollo/GraphQL

### [Mutation - useMutation](https://www.apollographql.com/docs/react/data/mutations/)

> Recommended [options][mutationOptions] to read

- `refetchQueries` - queries to fetch after mutation
- `awaitRefetchQueries` - return loading as true until both mutation and refetch queries are completed
- `onCompleted` - callback after mutation is completed
- `onError` - callback after mutation fails

### [Query - useQuery, useLazyQuery](https://www.apollographql.com/docs/react/data/queries/)

> Recommended [options][queryOptions] to read

- `onCompleted` - callback after query is completed
- `onError` - callback after query fails
- `skip` - skip query execution based on a condition(e.g if a variable is not present)
- `fetchPolicy` - how to fetch data from cache/network
- `pollInterval` - refetch data at a specific interval

 <!-- links -->

[queryOptions]: https://www.apollographql.com/docs/react/data/queries/#options
[mutationOptions]: https://www.apollographql.com/docs/react/data/mutations/#options
