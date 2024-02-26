import { useRouter } from 'next/router';
import * as React from 'react';

export interface ProductProps {
}

export default function Product (props: ProductProps) {

    const router = useRouter();

  return (
    <div>
      Page detail 123
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
