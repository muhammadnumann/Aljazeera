
export const mockLocationAndHistory = () => {
     // @ts-ignore
    delete window.location;
    window.location = { ...window.location, reload: jest.fn() }

     // @ts-ignore
    delete window.history;
    window.history = { ...window.history, pushState: jest.fn() }
};
