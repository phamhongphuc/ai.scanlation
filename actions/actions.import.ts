/* eslint-disable import/no-cycle */
import * as dev from './electron/dev';
import * as windows from './electron/windows';
import * as folder from './explorer/folder';
import * as item from './explorer/item';
import * as select from './explorer/select';
import * as about from './help/about';
import * as open from './help/open';
import * as update from './help/update';
import * as routers from './routers';
import * as shortcuts from './settings/shortcut';

export const actions = {
    ...update,
    ...dev,
    ...folder,
    ...about,
    ...item,
    ...open,
    ...routers,
    ...select,
    ...shortcuts,
    ...windows,
};
