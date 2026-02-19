import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useQueryParams } from '@/hooks/useQueryParams';
import { Filter, Search } from 'lucide-react';
import { useRef } from 'react';
import { CustomCombobox } from '@/components/custom/CustomCombobox';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

export const SearchControls = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    query,
    category,
    universe,
    status,
    strength,
    activeAccordion,
    handleSetSearchParams,
    toggleParam,
  } = useQueryParams();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSetSearchParams([
        { key: 'query', value: inputRef.current?.value ?? '' },
      ]);
    }
  };

  const handleFilterChange = (
    filterKey: string,
    item: { label: string; value: string } | null
  ) => {
    if (item?.value) {
      handleSetSearchParams([{ key: filterKey, value: item.value }]);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search heroes, villains, powers, teams..."
            className="pl-12 h-12 text-lg bg-white"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            defaultValue={query}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant={
              activeAccordion === 'advanced-filters' ? 'default' : 'outline'
            }
            className="h-12"
            onClick={() =>
              toggleParam([
                { key: 'active-accordion', value: 'advanced-filters' },
              ])
            }>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          {/* <Button
            variant="outline"
            className="h-12 bg-transparent">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Name
          </Button>

          <Button
            variant="outline"
            className="h-12 bg-transparent">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Add Character
          </Button> */}
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        value={activeAccordion ?? undefined}>
        <AccordionItem value="advanced-filters">
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <Button variant="ghost">Clear All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <div className="space-y-4">
            <label className="text-sm font-medium">Team</label>
            <CustomCombobox
              placeholder="Select a team"
              items={[
                { label: 'DC', value: 'dc' },
                { label: 'MARVEL', value: 'marvel' },
              ]}
            />
          </div> */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">Category</label>
                  <CustomCombobox
                    value={category}
                    onChange={(item) => handleFilterChange('category', item)}
                    items={[
                      { label: 'All categories', value: 'all' },
                      { label: 'Heroes', value: 'hero' },
                      { label: 'Villains', value: 'villain' },
                    ]}
                    placeholder="Select a category"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-medium">Universe</label>
                  <CustomCombobox
                    value={universe}
                    onChange={(item) => handleFilterChange('universe', item)}
                    items={[
                      { label: 'All universes', value: 'all' },
                      { label: 'DC', value: 'dc' },
                      { label: 'MARVEL', value: 'marvel' },
                    ]}
                    placeholder="Select a universe"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-medium">Status</label>
                  <CustomCombobox
                    value={status}
                    onChange={(item) => handleFilterChange('status', item)}
                    items={[
                      { label: 'All statuses', value: 'all' },
                      { label: 'Active', value: 'active' },
                      { label: 'Inactive', value: 'inactive' },
                    ]}
                    placeholder="Select a status"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Minimum Strength: {strength}/10
                </label>
                {/* <div className="relative flex w-full touch-none select-none items-center mt-2">
            <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
              <div
                className="absolute h-full bg-primary"
                style={{ width: '0%' }}
              />
            </div>
            <div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors" />
          </div> */}
                <Slider
                  className="mt-3"
                  defaultValue={[strength]}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    handleSetSearchParams([
                      { key: 'strength', value: value[0].toString() },
                    ])
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SearchControls;
