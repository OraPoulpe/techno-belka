import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/shared/lib/store/providers';
import ConfigProviderAntd from '@/shared/antd/config.provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
        <AntdRegistry>
          <ConfigProviderAntd>
            <Providers>{children}</Providers>
          </ConfigProviderAntd>
        </AntdRegistry>
      </body>
    </html>
  );
}
