import { remote } from 'electron';
import { ActionItem } from '~/modules/actions.type';

const currentWindow = remote.getCurrentWindow();

export const toggleDevTools: ActionItem = {
    call: currentWindow.webContents.toggleDevTools,
    title: 'Toggle Developer Tools',
    accelerator: 'ctrl+shift+i',
};
