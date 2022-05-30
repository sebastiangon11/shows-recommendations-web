import { rest } from 'msw'

export const handlers = [
  rest.get(
    'http://production.eba-yiwuwvhk.us-east-1.elasticbeanstalk.com/shows/:showId',
    (req, res, ctx) => {
      // return res(ctx.status(500), ctx.json({ message: 'Internal server error from msw' }))

      return res(
        ctx.json({
          id: 1,
          title: 'The Gift',
          genres: ['Thriller', 'Horror'],
          year: 2000,
          cover: 'https://image.tmdb.org/t/p/w500/nQdBE1P0r4ZrgGqy5EX8sL2kXG6.jpg',
          type: 'MOVIE',
          overview:
            "When a local woman disappears and the police can't seem to find any leads, her father turns to a poor young woman with psychic powers. Slowly she starts having visions of the woman chained and in a pond. Her visions lead to the body and the arrest of an abusive husband, but did he really do it?",
        })
      )
    }
  ),
  rest.get(
    'http://production.eba-yiwuwvhk.us-east-1.elasticbeanstalk.com/users/:userId/shows/:showId',
    (req, res, ctx) => {
      // return res(ctx.status(500), ctx.json({ message: 'Internal server error from msw' }))
      return res(
        ctx.json({
          id: '1',
          title: 'The Gift',
          genres: ['Thriller'],
          year: '2000',
          cover: 'https://image.tmdb.org/t/p/w500/nQdBE1P0r4ZrgGqy5EX8sL2kXG6.jpg',
          type: 'MOVIE',
          overview:
            "When a local woman disappears and the police can't seem to find any leads, her father turns to a poor young woman with psychic powers. Slowly she starts having visions of the woman chained and in a pond. Her visions lead to the body and the arrest of an abusive husband, but did he really do it?",
          user_review: {
            rating: null, // 0 | 1,
          },
          positive_reviews_qty: 1,
          negative_reviews_qty: 0,
        })
      )
    }
  ),
]
