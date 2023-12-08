<script setup lang="ts">
import { Icon } from '@iconify/vue'

const accordionItems = [
    {
        value: 'item-1',
        title: 'What is the purpose of this blog?',
        content: 'This blog is dedicated to the last will of Mattie Carlyle. It is a place where we can all come together and discuss the will and what it means to us.',
    },
    {
        value: 'item-2',
        title: 'Who is Mattie Carlyle?',
        content: `Mattie Wiggs Carlyle, an African American, was born and lived her entire life in Millen, Georgia.
                    Millen, a close-knit town with a population of around 3,430 in 2009, was a place where everybody knew
                    each other, especially at the time of her passing.`
    },
    {
        value: 'item-3',
        title: 'Is this blog a non-profit?',
        content: `Yes, this blog is a non-profit.`
    }

]
</script>

<template>
    <div class="mt-20">
        <h2 class="text-4xl font-semibold pb-10">FAQs </h2>
        <AccordionRoot class=" bg-transparent w-full rounded-md" default-value="'item-1'" type="single" :collapsible="true">
            <template v-for="item in accordionItems" :key="item.value">
                <AccordionItem class="my-4" :value="item.value">
                    <AccordionHeader class="flex">
                        <AccordionTrigger
                            class="w-full text-lg flex justify-between items-center">
                            <span>{{ item.title }}</span>
                            <Icon icon="radix-icons:chevron-down"
                                class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                aria-hidden />
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-base">
                        <div class="px-5 py-4">
                            {{ item.content }}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </template>
        </AccordionRoot>
    </div>
</template>