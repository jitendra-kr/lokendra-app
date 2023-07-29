import { useGetUrl } from "./useGetUrl";

export function useAllowAnalytics(): boolean {
  const { origin } = useGetUrl();

  const localhost = "localhost";
  const vercel = "vercel.app";

  if (!origin || origin.includes(localhost) || origin.includes(vercel)) {
    return false;
  }
  return true;
}
