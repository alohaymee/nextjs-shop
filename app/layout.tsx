import './globals.css';
import type {Metadata} from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '제주프렌드 - JEJU friend | 렌터카, 요트, 스파 예약까지 제주프렌드와 함께해요! ',
  description: '제주도 프리미엄 여행 서비스',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
