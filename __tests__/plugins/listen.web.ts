import { ipcRenderer, IpcRenderer, IpcRendererEvent } from 'electron';

describe('plugins/listen', () => {
    beforeAll(() => {
        jest.spyOn(console, 'info').mockImplementation();
        jest.spyOn(ipcRenderer, 'on').mockImplementation(function listenerFn(
            this: IpcRenderer,
            channel,
            listener,
        ) {
            listener({} as IpcRendererEvent, channel);
            return this;
        });
    });
    it('should listen event', async () => {
        expect.assertions(0);
        await import('~/plugins/listen');
    });
});
