import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/shared/lib/store/providers';
import StyledComponentsRegistry from './registry';
import ConfigProviderAntd from '@/shared/antd/config.provider';

export const metadata: Metadata = {
  title: 'Techno Belka',
  description: 'Сервис для администраторов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <StyledComponentsRegistry>
          <ConfigProviderAntd>
            <Providers>{children}</Providers>
          </ConfigProviderAntd>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
