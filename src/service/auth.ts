interface Response {
  token: string;
  user: {
    email: string;
    name: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'iudsfiuhsdhfiuhisduh',
        user: {
          name: 'André Coelho',
          email: 'andrevrcoelho@hotmail.com',
        },
      });
    }, 2000);
  });
}
