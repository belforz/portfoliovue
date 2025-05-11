<template>
    <div class="p-4 text-white bg-black min-h-screen">
      <input v-model="input" placeholder="Digite algo..." class="p-2 text-black rounded w-1/2" />
      <button @click="sendMessage(input)" class="bg-blue-600 px-4 py-2 rounded ml-2">Enviar</button>
  
      <div class="mt-6 space-y-2">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.fromUser ? 'text-green-400' : 'text-yellow-300'">
          {{ msg.text }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useChat } from "@/composables/useChat";
  
  const { messages, sendMessage } = useChat();
  const input = ref("");
  </script>
  