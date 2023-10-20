export const introspectionQuery = JSON.stringify({
    query: `
    query IntrospectionQuery {
      __schema {
        queryType {
          name
          fields {
            name
            type {
              name
            }
          }
        }
      }
    }
  `,
  });