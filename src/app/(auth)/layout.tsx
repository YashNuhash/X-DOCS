interface AuthLayoutPageProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutPageProps) => {
  return (
    <main className="flex flex-col gap-y-4 items-center">
        <nav className="w-full  p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Auth Navbar</h1>
        </nav>
      {children}
    </main>
  );
}
export default AuthLayout;