export const introspectionQuery = JSON.stringify({
    query: `
  query IntrospectionQuery {
    __schema {
      types {
        name
        description
      }
    }
  }
  `,
  });