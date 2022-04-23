import { rest } from 'msw'

export const handlers = [
  rest.get('https://backend.com/shows/:showId/details', (req, res, ctx) => {
    // return res(ctx.status(500), ctx.json({ message: 'Internal server error from msw' }))

    return res(
      ctx.json({
        id: 'adasd_asd3344',
        title: 'Fantastic Beasts: The Secrets of Dumbledore',
        imageUrl:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg',
        overview:
          "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
      })
    )
  }),
]
