import React, { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton, Field, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from 'clsx'

const options = [
    {id: 1, name: 'Lenguaje C'},
    {id: 2, name: 'Moonlight Code'},
    {id: 3, name: 'Lenguaje Jasmin'},
];

function ButtonChange({SelectionChange, SelectionChange2}) {
    const [selected, setSelected] = useState(options[0]);
    const [selected2, setSelected2] = useState(options[1]);
    const [query, setQuery] = useState('');
    const [query2, setQuery2] = useState('');

    const filteredOptions = query === ''
            ? options
            : options.filter((option) => {
                return option.name.toLowerCase(). includes(query.toLowerCase())
            });
         
    const handleSelectionChange = (value) => {
        setSelected(value);

        if (SelectionChange) {
            SelectionChange(value.name);
        }
    };

    const handleSelectionChange2 = (value) => {
        setSelected2(value);

        if (SelectionChange2) {
            SelectionChange2(value.name);
        }
    };

    return (
        <main className='grid grid-cols-3 gap-4 mx-6 text-center items-center justify-center'>
           
            <Combobox value={selected} onChange={handleSelectionChange}>
                <div className="relative my-2 mb-4">
                    <ComboboxInput
                        className={clsx(
                            'w-full rounded-lg bg-darkBlue py-1.5 pr-8 pl-6 text-md font-medium text-darkYellow',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                            displayValue={(option) => option?.name}
                            onChange={(event) => setQuery(event.target.value)}
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-4 justify-end">
                        <ChevronDownIcon className="h-4 w-4 fill-darkYellow group-data-[hover]:fill-lightYellow" />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >

                    <ComboboxOptions
                        anchor="bottom"
                        className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
                    >
                        {filteredOptions.map((option) => (
                            <ComboboxOption
                                key={option.id}
                                value={option}
                                className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                            >
                                <CheckIcon className="invisible h-4 w-4 fill-darkYellow group-data-[selected]:visible" />
                                    <div className="text-sm/6 text-white">
                                        {option.name}
                                    </div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </Combobox>

            
            <div className='flex p-1 justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4" aria-hidden="true" fill="#fadc71">
                    <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
                </svg>
            </div>

            <Combobox value={selected2} onChange={handleSelectionChange2}>
                <div className="relative my-2 mb-4">
                    <ComboboxInput
                        className={clsx(
                            'w-full rounded-lg bg-darkBlue py-1.5 pr-8 pl-6 text-md font-medium text-darkYellow',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                            displayValue={(option) => option?.name}
                            onChange={(event) => setQuery2(event.target.value)}
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-4 justify-end">
                        <ChevronDownIcon className="h-4 w-4 fill-darkYellow group-data-[hover]:fill-lightYellow" />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery2('')}
                >

                    <ComboboxOptions
                        anchor="bottom"
                        className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
                    >
                        {filteredOptions.map((option) => (
                            <ComboboxOption
                                key={option.id}
                                value={option}
                                className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                            >
                                <CheckIcon className="invisible h-4 w-4 fill-darkYellow group-data-[selected]:visible" />
                                    <div className="text-sm/6 text-white">
                                        {option.name}
                                    </div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </Combobox>
        </main>
    )
}

export default ButtonChange