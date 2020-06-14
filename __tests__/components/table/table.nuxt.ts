import { shallowMount } from '@vue/test-utils';
import { Vue } from 'nuxt-property-decorator';
import table from '~/components/table/table.vue';
import {
    TableOptions,
    TableGroupItem,
    TableFields,
    TableObject,
} from '~/components/table/table';

interface TempObject extends TableObject {
    id: number;
    key: string;
}

describe('components/table/table', () => {
    it('should mounted', () => {
        expect.hasAssertions();

        const groupItems: TableGroupItem<TempObject> = [
            [
                { id: 1, key: 'a' },
                { id: 2, key: 'b' },
            ],
        ];
        const fields: TableFields<TempObject> = [
            {
                key: 'id',
                label: '#',
            },
        ];
        const options: TableOptions<TempObject> = {
            rowClick: jest.fn(),
            rowDblclick: jest.fn(),
            headClick: jest.fn(),
            headDblclick: jest.fn(),
        };

        const wrapper = shallowMount<
            Vue & {
                isEmpty: boolean;
            }
        >(table, {
            propsData: {
                groupItems,
                fields,
                options,
            },
        });
        expect(wrapper.vm).toBeInstanceOf(Vue);
        expect(wrapper.vm.isEmpty).toStrictEqual(false);

        const row = wrapper.vm.$el.querySelector<HTMLTableRowElement>(
            'tbody > tr',
        );
        expect(row).toBeInstanceOf(HTMLTableRowElement);

        row?.click();
        row?.dispatchEvent(new Event('dblclick'));

        expect(options.rowClick).toHaveBeenCalledWith(groupItems[0][0]);
        expect(options.rowDblclick).toHaveBeenCalledWith(groupItems[0][0]);

        const head = wrapper.vm.$el.querySelector<HTMLTableCellElement>(
            'thead > tr > th',
        );
        expect(head).toBeInstanceOf(HTMLTableCellElement);

        head?.click();
        head?.dispatchEvent(new Event('dblclick'));

        expect(options.headClick).toHaveBeenCalledWith(fields[0]);
        expect(options.headDblclick).toHaveBeenCalledWith(fields[0]);
    });
});