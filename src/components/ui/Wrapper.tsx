import { ReactNode } from 'react';

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full mt-16 flex justify-center">
      <div className="w-[25rem] md:w-[30rem] lg:w-[45rem] xl:w-[65rem]">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;