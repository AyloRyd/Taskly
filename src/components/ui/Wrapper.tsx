import { ReactNode } from 'react';

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full mt-16 flex justify-center">
      <div className="w-full lg:w-[45rem]">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;