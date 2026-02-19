import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';

type item = {
  label: string;
  value: string;
};

interface props {
  items: item[];
  placeholder?: string;
  onChange?: (value: item | null) => void;
  value?: string;
  defaultValue?: string;
}

export const CustomCombobox = ({
  items,
  placeholder,
  onChange,
  value,
  defaultValue,
}: props) => {
  const handleItemChange = (selected: item | null) => {
    onChange?.(selected);
  };

  const selectedItem = value !== undefined
    ? items.find((i) => i.value === value) ?? null
    : undefined;
  const defaultItem = defaultValue !== undefined
    ? items.find((i) => i.value === defaultValue) ?? null
    : undefined;

  const isControlled = value !== undefined;

  return (
    <Combobox
      items={items}
      value={isControlled ? selectedItem : undefined}
      defaultValue={!isControlled ? defaultItem ?? null : undefined}
      onValueChange={(v) => handleItemChange(v as unknown as item)}>
      <ComboboxInput
        placeholder={placeholder ?? 'Select an item'}
        className={
          'h-10 w-full rounded-md border border-input bg-background py-2 text-sm'
        }
      />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem
              className={'cursor-pointer'}
              key={item.value}
              value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
