export const Container = ({ children }: any) => {
  return (
    <div className="flex flex-col w-full px-6 md:px-12 py-6 items-center flex-grow-0 gap-3">
      {children}
    </div>
  );
};
