// A mock function to mimic making an async request for data
export const signIn = () => {
  return new Promise<{data: string}>(resolve =>
    setTimeout(() => resolve({data: 'test'}), 500),
  );
};
