export const Conditional = () => {
  const isLoading = true;

  //   if (isLoading) {
  //     return <>Loading....</>;
  //   } else {
  //     return <>The data has arrived</>;
  //   }

  return <>{isLoading ? <>Loading...</> : <>The data has arrived</>}</>;
};
