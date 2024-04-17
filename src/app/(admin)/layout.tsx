import PrivateRoute from '@/shared/utils/privateRoute/PrivateRoute';
import { SideBar } from '@/widgets/sideBar';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrivateRoute>
        <Layout style={{ height: '100vh' }}>
          <SideBar />
          <Layout>
            <Content style={{overflowY: 'scroll', padding: '32px'}}>
              {children}
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer> */}
          </Layout>
        </Layout>
      </PrivateRoute>
    </>
  );
}
