import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-700">
      <h1 className="text-4xl font-bold mb-6">Welcome to X-Docs</h1>
      <p className="text-lg mb-4">Collaborative Docs Writting Platform</p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        Get Started
      </Button>
      Click <Link href="/documents/123">
      <span className="text-blue-500 hover:underline">
      here
      </span></Link> to view documents ID.
    </div>
  );
}
