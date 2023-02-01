import { rest } from 'msw'

export const handlers = [
  rest.all('http://localhost:6006/all', (_, res, ctx) => {
    return res(
      ctx.json({
        description: 'this file is used to mock all requests (any component)',
      }),
    )
  }),
]
