export default {
  github: 'https://github.com/MGOPW/SNResourcesNow',
  docsRepositoryBase: 'https://github.com/MGOPW/SNResourcesNow',
  titleSuffix: ' – ResourcesNow',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">ResourcesNow</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Because I can't organize my bookmarks
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ResourcesNow: for when google fails you" />
      <meta name="og:description" content="ResourcesNow: for when google fails you" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="" /> // gotta fill in
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="http://resourcesnow.snadmin.net" />
      <meta name="og:title" content="ResourcesNow: for when google fails you" />
      <meta name="og:image" content="" /> // gotta fill in
      <meta name="apple-mobile-web-app-title" content="ResourcesNow" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: false,
  nextLinks: false,
  footer: false,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © ResourcesNow.</>,
  unstable_faviconGlyph: '👋',
}
