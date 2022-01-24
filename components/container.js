export default function Container({ children }) {
  return (
    <div className="px-6 max-w-screen-3xl mx-auto w-full md:px-8">
      {children}
    </div>
  );
}
