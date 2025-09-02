
/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(
  initialState: { currentUser?: API.CurrentUser } | undefined,
) {
  const { currentUser } = initialState ?? {};
  
  return {
    canReadFoo: true,
    canReadDataFlow: (foo:any) => {
      console.log('canReadDataFlow', foo,currentUser,foo.path,currentUser?.role?.includes(foo.path));
      return currentUser?.role?.includes(foo.path);
    },
  };
}
