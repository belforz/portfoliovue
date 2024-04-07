<template>
    <section class="min-h-screen w-full" ref="aboutSection" id="about-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">😎 Sobre </h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div class="order-2 xl:order-none">
                <p v-for="paragraph in content.autobiography">{{ paragraph }}<br/><br/></p>
                <div>
                    <!-- <p class="pb-3" :style="{ color: textSub }">Hard Skills</p>
                    <ul class="flow flow-col list-['\2705'] pl-6 sm:grid sm:grid-rows-2 sm:grid-flow-col gap-8">
                        <li v-for="tech in content.techStack" class="pl-2">{{ tech }}</li>
                    </ul> -->
                </div>

                <div>
                    <!-- <p class="pb-3" :style="{ color: textSub }">Soft Skills</p>
    <ul class="flow flow-col list-['\2705'] pl-6 sm:grid sm:grid-rows-2 sm:grid-flow-col gap-4">
      <li v-for="skill in content.softSkills" :key="skill" class="pl-2">{{ skill }}</li>
    </ul> -->
                </div>
            </div>
            <div class="grid gap-y-4 order-1 xl:order-none">
                <div class="grid grid-cols-2 gap-x-4">
                    <div>
                        <img :src="getImageUrl(content.photo1Link)" class="shadow-md" loading="lazy"/>
                    </div>
                    <div>
                        <img :src="getImageUrl(content.photo2Link)" class="shadow-md" loading="lazy"/>
                    </div>
                </div>
                <!-- <div>
                    <img :src="getImageUrl(content.photo3Link)" class="shadow-md" loading="lazy"/>
                </div> -->
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Object,
    transitions: Object
})

const aboutSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(aboutSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

// Static Images
let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>