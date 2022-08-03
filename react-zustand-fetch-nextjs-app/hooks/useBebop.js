import create from 'zustand';

const useBebop = create((set) => {
  return {
    data: null,
    setData: async ({message}) => {
      console.log(`message`, message);
      const response = await fetch('/api/hello');
      const {data} = await response.json();
      set((state) => {
        state.data = data;
      });
    },
  };
});

export default useBebop;
