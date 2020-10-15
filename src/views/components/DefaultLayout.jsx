import React from "react";

export default function DefaultLayout({
  children,
  description,
  title,
  scripts = [],
}) {
  return (
    <html>
      <head lang="en">
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </head>
      <body>
        <main id="main">{children}</main>
      </body>
      {scripts.length > 0 &&
        scripts.map((script) => (
          <script key={script} src={script} type="module" />
        ))}
    </html>
  );
}
