'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Logo from '../../public/LOGO 2.png';
import Image from 'next/image';
import style from '../../styles/sidebar.module.css';

export default withPageAuthRequired(function MembersOnly() {
  return (
    <div className={style.logoContainer}>
      <Image src={Logo} width={600} />
    </div>
  );
});
