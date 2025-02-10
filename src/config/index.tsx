import { ReactNode, Suspense } from "react";
import { Loading } from "../components/loading/Loading";

export const SuspenseContainer = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
