declare module 'v-tooltip' {
    import { PluginObject } from 'vue';

    type Triggers =
        | 'hover'
        | 'click'
        | 'focus'
        | 'hover click'
        | 'hover focus'
        | 'click focus'
        | 'click hover focus'
        | 'manual';

    type Placement =
        | 'auto'
        | 'auto-start'
        | 'auto-end'
        | 'top'
        | 'top-start'
        | 'top-end'
        | 'right'
        | 'right-start'
        | 'right-end'
        | 'bottom'
        | 'bottom-start'
        | 'bottom-end'
        | 'left'
        | 'left-start'
        | 'left-end';

    export interface TooltipSettings {
        content: string;
        classes?: string[];
        targetClasses?: string[];
        html?: boolean;
        delay?:
            | number
            | {
                  show: number;
                  hide: number;
              };
        placement?: Placement;
        trigger?: Triggers;
        show?: boolean;
        offset?: number;
        container?: string;
        boundariesElement?: HTMLElement;
        template?: any;
        arrowSelector?: string;
        innerSelector?: string;
        autoHide?: boolean;
        hideOnTargetClick?: boolean;
        loadingClass?: string[];
        loadingContent?: string;
        popperOptions?: any;
    }

    const plugin: PluginObject<Record<string, unknown>>;

    export default plugin;
}
