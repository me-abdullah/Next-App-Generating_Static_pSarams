import Link from 'next/link';

import React from 'react';

export default function Home() {
  return (
    <div>
      Hello World
      <br />
      <Link href="/irfan">Go to Irfan Page</Link>
      <br />
      <Link href="/usman">Go to Usman Page</Link>
      <br />
      <Link href="/basit">Go to Basit Page</Link>
    </div>
  );
}
