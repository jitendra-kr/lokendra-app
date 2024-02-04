import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function UIRegistry({ children }: React.PropsWithChildren) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
