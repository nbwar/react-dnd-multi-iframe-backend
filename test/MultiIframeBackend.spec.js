import MultiIframeBackend from '../src/MultiIframeBackend';

describe('The HTML5 Backend', () => {
  describe('window injection', () => {
    it('uses an undefined window when no window is available', () => {
      const mockManager = {
        getActions: () => null,
        getMonitor: () => null,
        getRegistry: () => null,
        getContext: () => ({}),
      };
      const mockWindow = global.window;
      try {
        delete global.window;
        const backend = new MultiIframeBackend(mockManager);
        expect(backend).toBeDefined();
        expect(backend.windows).toEqual([]);

      } finally {
        global.window = mockWindow;
      }
    });

    it('uses the ambient window global', () => {
      const mockManager = {
        getActions: () => null,
        getMonitor: () => null,
        getRegistry: () => null,
        getContext: () => ({}),
      };
      const backend = new MultiIframeBackend(mockManager);
      expect(backend).toBeDefined();
      expect(backend.windows.length).toEqual(1);
    });

    it('allows a window to be injected', () => {
      const mockManager = {
        getActions: () => null,
        getMonitor: () => null,
        getRegistry: () => null,
        getContext: () => ({
          window: {
            x: 1,
          },
        }),
      };
      const backend = new MultiIframeBackend(mockManager);
      expect(backend).toBeDefined();
      expect(backend.windows[0].x).toEqual(1);
    });
  });
});
