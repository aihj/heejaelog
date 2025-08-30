'use client';

import { useState, useEffect, useRef } from 'react';

import CopyLinkButton from './CopyLinkButton';
import { ScrollTop } from './TocButtons'; // ScrollToComment import 제거
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { Bolt } from 'lucide-react';

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prev) => !prev);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='group fixed bottom-4 right-4 xl:hidden'>
      <div className='group relative flex flex-col-reverse'>
        <Button
          size='icon'
          variant={visible ? 'default' : 'outline'}
          onClick={toggleVisible}
          ref={buttonRef}
          className={cn('absolute bottom-0 right-0 z-10 transition')}
        >
          <Bolt size={22} />
        </Button>
        <CopyLinkButton
          size={22}
          className={cn('absolute bottom-0 right-0 transition', visible && '-translate-y-12')}
        />
        {/* ScrollToComment 제거 */}
        <ScrollTop
          className={cn('absolute bottom-0 right-0 transition', visible && '-translate-y-24')}
          size={22}
        />
      </div>
    </div>
  );
};

export default FloatingButton;
