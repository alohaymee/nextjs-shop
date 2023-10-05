import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles/DefaultLayout.module.scss';

export const metadata: Metadata = {
  title: '제주프렌드 - JEJU friend | 렌터카, 요트, 스파 예약까지 제주프렌드와 함께해요! ',
  description: '제주도 프리미엄 여행 서비스',
};

export default function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.wrapperBox}>
      <div className={styles.headerBox}>
        <div>
          <Image
            src={'https://jejufriend.s3.ap-northeast-2.amazonaws.com/logo/logo.png'}
            alt={'logo image'}
            width={162}
            height={38}
          ></Image>
        </div>
        <div className={styles.navBox}>
          <Link href={'/rent-car'}>렌트카</Link>
          <Link href={'/rent-car'}>렌트 안내</Link>
          <Link href={'/rent-car'}>요트</Link>
          <Link href={'/rent-car'}>스파</Link>
          <Link href={'/rent-car'}>고객센터</Link>
        </div>
        <div className={styles.loginBox}>
          <div>로그인</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
            <path d="M1 1V13" stroke="#8A8787" />
          </svg>
          <div>예약확인</div>
        </div>
      </div>
      <div>{children}</div>
      <div className={styles.footerBox}>
        <div className={styles.footerContentBox}>
          <div className={styles.sitemapBox}>
            <Link href={'https://naturemobility.com'}>회사소개</Link>
          </div>
          <div className={styles.cropBox}>
            <h4>(주)네이처모빌리티</h4>
            <p>
              대표이사: 이주상 | 통신판매번호 제2021-제주아라-0028호 <Link href={''}>[확인]</Link> | 사업자등록번호
              566-88-01036
            </p>
            <p>본사: 제주특별자치도 제주시 첨단로 330, D동 3층 M-310 (영평동, 세미양 빌딩)</p>
            <p>전화: 070-4348-3333 | 이메일: office@naturemobility.com | 개인정보관리책임자: 이주상</p>
          </div>
        </div>
      </div>
    </div>
  );
}
