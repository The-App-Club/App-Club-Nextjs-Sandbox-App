import {css, cx} from '@emotion/css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div>
        <Link href={`/max-width`}>
          <a className="hover:underline">max-width</a>
        </Link>
      </div>
      <div>
        <Link href={`/sidebar`}>
          <a className="hover:underline">sidebar</a>
        </Link>
      </div>
    </div>
  );
}
