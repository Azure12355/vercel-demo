export const metadata = { title: "Vercel Demo", description: "Vercel 从 0 到 1 入门演示" };
export default function RootLayout({ children }) {
  return (<html lang="zh-CN"><body style={{ fontFamily: "system-ui", margin: 0 }}>{children}</body></html>);
}
