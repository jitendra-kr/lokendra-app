import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | FireboxTools",
  description:
    "We’re sorry, the page you were looking for could not be found. Please visit our homepage or use the search bar to find what you're looking for.",
};

function NotFoundPage() {
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Page Not Found</h1>
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
        Oops! We could&apos;t find what you were looking for, but we&apos;re
        here to help. Let&apos;s get you back on track!
      </p>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link href={`/`} style={{ fontWeight: "bold" }}>
          Return to home page
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
