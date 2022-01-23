# Star Wars Mini Wiki

Star Wars Mini Wiki is powered by [SWAPI GQL](https://swapi-graphql.netlify.app) to serve mini wiki of star wars.

## Used Libraries

- emotion: to provide css in js styling in css performance
- graphql: for better than REST API (no debate XD)

## Useful But Not Used Libraries

- any UI library: It was planned to use ThemeUI (actually it was installed on first commit), but the website UI is too minimalist to use UI library.
- lodash or any util libraries: even though there is some utilities that might be useful but lodash is too fat for this simple projects.

> The reason to not including this wonderful libraries is to only boost preformance (even though the score on this is quite low). The developer saw the opportunity to implement Next JS' SSG as a comparison to another Next JS projects which not using SSG.

## Pages

consists of 12 pages (the global & detail page), namely:

1. films + detail
2. characters + detail
3. planets + detail
4. species + detail
5. starships + detail
6. vehicles + detail

This 12 pages only use the same 2 base components, which is `<GetAllLayout />` & `<DetailLayout />`.

The only reason to separate it into 12 files in `pages` folder is to avoid heavy slug & enable the NextJS SSG + page optimization feature. If this were created with `create-react-app`, it considerable to use only 1-2 page files & spill the if else on simaltuneously with the routing.
