import * as React from 'react';
import { type MetaFunction, json } from '@remix-run/node'
import { Link as RemixLink, useLoaderData } from '@remix-run/react';
import { Typography, Link } from '@mui/material';

export const meta: MetaFunction = () => [
  { title: 'Remix Starter' },
  { name: 'description', content: 'Welcome to remix!' },
];

export async function loader() {
  // example
  return json({ data: [] });
}

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log({ data });
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
      <Link to="/about" color="secondary" component={RemixLink}>
        Go to the about page
      </Link>
    </React.Fragment>
  );
}
