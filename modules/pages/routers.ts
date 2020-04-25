import { Vue } from 'nuxt-property-decorator';
import { ActionItem } from '~/modules/actions.type';

const routerPush = (name: string) =>
    function push(this: Vue) {
        this.$router.push(name);
    };

export const goToHome: ActionItem = {
    call: routerPush('/'),
    accelerator: 'q',
};
export const goToExplorer: ActionItem = {
    call: routerPush('/explorer'),
    accelerator: 'w',
};
export const goToReader: ActionItem = {
    call: routerPush('/reader'),
    accelerator: 'e',
};
export const goToSetting: ActionItem = {
    call: routerPush('/settings'),
    accelerator: 'r',
};