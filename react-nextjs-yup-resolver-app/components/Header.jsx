import {css, cx} from '@emotion/css';
import {gsap} from 'gsap';
import {Observer} from 'gsap/dist/Observer';
import {useEffect, useRef, useState} from 'react';

gsap.registerPlugin(Observer);

const Header = () => {
  const headerDomRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      const headerDom = headerDomRef.current;
      Observer.create({
        target: window,
        type: 'scroll',
        tolerance: 50,
        onUp: () => {
          headerDom.classList.remove('is-hidden');
        },
        onDown: () => {
          headerDom.classList.add('is-hidden');
        },
      });
    }
  }, []);
  return (
    <header
      ref={headerDomRef}
      className={cx(
        css`
          transition: transform 0.4s ease;
          &.is-hidden {
            transform: translateY(-100%);
          }
        `,
        `fixed top-0 min-h-[3rem] w-full border-2 bg-white z-10 flex items-center justify-center shadow-md`
      )}
    >
      Header
    </header>
  );
};

export default Header;
