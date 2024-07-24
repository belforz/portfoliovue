<template>
  <Transition name="fade">
    <div v-if="isVisible" class="fixed bottom-0 left-1/2 transform  flex items-center justify-center">
      <div class="bg-white dark:bg-black p-4 rounded-lg shadow-lg max-w-sm mx-auto relative transition-all duration-500 transform z-50" :class="showLanding ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'">
        <button @click="updateVisible(false)" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
          <div class="border-2 border-gray-500 hover:border-gray-700 dark:border-gray-400 dark:hover:border-gray-300 rounded-full p-1 transition-all duration-500">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        </div>
        </button>
        <a :href="href" class="text-center text-lg dark:text-slate-300 mt-8">{{ text }}</a>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: 'Conheça o meu mais novo projeto de fotos',
  },
  showLanding: {
    type: Boolean,
    default: false
  }
});


const emit = defineEmits(['update:visible']);

const isVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
  isVisible.value = newValue;
});

const updateVisible = (value) => {
  isVisible.value = value;
  emit('update:visible', value);
};


</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
