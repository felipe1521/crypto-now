'use client'

import React from 'react';
import styles from './navbar.module.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleRedirection = (url: string) => {
    if(pathname != url) {
      setIsLoading(!isLoading);
    }
    handleToggle();
    router.push(url);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <nav className={`${styles.navbar__list} ${(isOpen) ? `${styles.navbar__list__active}`: ''}`}>
        <div onClick={() => handleRedirection('/')} className={styles.navbar__list__item}>Inicio</div>
        <div onClick={() => handleRedirection('/home/explore')} className={styles.navbar__list__item}>Explorar</div>
        <div onClick={() => handleRedirection('/home/stats')} className={styles.navbar__list__item}>Estadisticas</div>
        <div onClick={() => handleRedirection('/home/profile')} className={styles.navbar__list__item}>Perfil</div>
      </nav>
      <label className={styles.navbar__group__icon}>
        <Bars3Icon onClick={handleToggle} className={(!isOpen) ? `${styles.navbar__icon}` : 'disable'} />
        <XMarkIcon onClick={handleToggle} className={(isOpen) ? `${styles.navbar__icon}` : 'disable'} />
      </label>
    </header>
  );
}
