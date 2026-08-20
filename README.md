# YelpCamp

Yelp-style web app for discovering, creating, and reviewing campgrounds. Built with Express, MongoDB, and Mapbox as a study project from [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) by Colt Steele.

## Features

- Browse campgrounds on a cluster map and in a card grid
- Create, update, and delete your own listings (with image upload)
- View a campground on a Mapbox map, with location and price
- Leave star ratings and text reviews on other people's campgrounds
- Register, log in, and log out with Passport local authentication
- Flash messages, Joi validation, and HTML sanitization on user input

Most write actions require an account. Only the author of a campground or review can edit or delete it.

## Tech stack

- **Runtime:** Node.js, Express
- **Views:** EJS with ejs-mate layouts
- **Database:** MongoDB via Mongoose
- **Auth:** Passport, passport-local, passport-local-mongoose
- **Sessions:** express-session stored in MongoDB (`connect-mongo`)
- **Maps:** Mapbox GL JS and Mapbox Geocoding
- **Uploads:** Multer (files land in `public/uploads`)
- **Security:** Helmet, express-mongo-sanitize, sanitize-html

See [package.json](./package.json) for the full dependency list.

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) running locally, or a remote connection string
- A [Mapbox](https://www.mapbox.com/) access token

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Required | Default |
| --- | --- | --- |
| `MAPBOX_TOKEN` | Yes (maps and geocoding) | — |
| `SECRET` | Yes (session signing) | — |
| `DB_URL` | No | `mongodb://localhost:27017/nodejs_yelpcamp` |
| `PORT` | No | `3000` |

`dotenv` is loaded only when `NODE_ENV` is not `production`.

## Getting started

```bash
git clone https://github.com/brunopas/nodejs-yelpcamp.git
cd nodejs-yelpcamp
npm install
cp .env.example .env
# Fill in MAPBOX_TOKEN and SECRET in .env
```

Then seed sample campgrounds and start the app:

```bash
npm run seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run seed` wipes existing campgrounds and inserts 25 generated listings. The seed script currently connects to local MongoDB (`mongodb://localhost:27017/nodejs_yelpcamp`) and uses a hardcoded author id, so register a user in the app (or update that id in `seeds/index.js`) if you want seeded listings to belong to you.

## Scripts

| Script | Command | What it does |
| --- | --- | --- |
| `npm run dev` | `nodemon app.js` | Start the server with auto-reload |
| `npm run seed` | `node seeds/index.js` | Reset and populate campgrounds |

## Project structure

```text
nodejs-yelpcamp/
├── app.js                 # Express app, session, Passport, error handlers
├── seeds/                 # Sample cities, helpers, and seed runner
├── public/                # Static CSS, JS, and uploaded images
└── src/
    ├── controllers/       # Campground, review, and user actions
    ├── models/            # Mongoose schemas
    ├── routes/            # Express routers
    ├── views/             # EJS templates
    ├── middleware.js
    └── schemas.js         # Joi validation
```

## License

MIT. See [LICENSE](./LICENSE).
