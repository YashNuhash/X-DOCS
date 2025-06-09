interface DocumentsLayoutPageProps {
    children: React.ReactNode;
};

const DocumentsLayout = ({ children }: DocumentsLayoutPageProps) => {
  return (
    <main className="flex flex-col gap-y-4 items-center">
        <nav className="w-full  p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Documents Navbar</h1>
        </nav>
      {children}
    </main>
  );
}
export default DocumentsLayout;