<template>
  <div class="fixed bottom-4 right-4 w-[95%] max-w-md bg-black text-white border rounded-lg shadow-lg">
    <!-- Cabeçalho -->
    <div class="flex items-center justify-between p-3 border-b">
      <h2 class="font-bold">Mini Leandro</h2>
      <button @click="clearMessages" class="bg-white text-black px-4 py-2 rounded hover:bg-red-200">
        Limpar
      </button>
    </div>

    <!-- Introdução inicial -->
    <div v-if="messages.length === 0" class="flex flex-col items-center text-center px-4 py-6">
      <img
        :src="botAvatar"
        alt="Avatar do bot"
        class="w-16 h-16 rounded-full border border-white mb-2"
      />
      <p class="text-sm text-gray-300">
        Sou um assistente de inteligência artifcial e estou aqui para ajudar você sobre o Leandro como profissional. Pergunte-me algo =)
      </p>
    </div>

    <!-- Mensagens -->
    <div
      v-else
      class="flex flex-col p-4 space-y-2 max-h-[60vh] overflow-y-auto"
    >
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="flex items-end gap-2"
        :class="msg.fromUser ? 'flex-row' : 'flex-row-reverse'"
      >
        <img
          :src="msg.fromUser ? userAvatar : botAvatar"
          alt="Avatar"
          class="w-8 h-8 rounded-full border border-white"
        />
        <div
          :class="msg.fromUser ? 'bg-gray-700 self-start' : 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 self-end'"
          class="p-2 rounded-lg max-w-[75%] whitespace-pre-wrap"
        >
          {{ msg.animatedText }}
        </div>
      </div>

      <!-- Efeito "Digitando..." -->
      <div v-if="loading" class="flex items-end gap-2 flex-row-reverse">
        <img
          :src="botAvatar"
          alt="Avatar"
          class="w-8 h-8 rounded-full border border-white"
        />
        <div class="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 self-end p-2 rounded-lg max-w-[75%] animate-pulse">
          Digitando...
        </div>
      </div>
    </div>

    <!-- Campo de entrada -->
    <form @submit.prevent="handleSubmit" class="flex border-t p-3 gap-2 bg-black">
      <textarea
        v-model="inputText"
        placeholder="Digite algo... (Ctrl+Enter para enviar)"
        @keydown="handleKeydown"
        rows="2"
        class="flex-1 p-2 rounded bg-gray-800 text-white resize-none"
      ></textarea>
      <button
        type="submit"
        :disabled="loading"
        class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import portfolio from "@/portfolio";
import { useChat } from "@/composables/useChat";

const userAvatar = ref(portfolio.iconsImages.userImage);
const botAvatar = ref(portfolio.iconsImages.botImage);
const inputText = ref('');

const { messages, sendMessage, clearMessages, loading } = useChat();

watch(messages, (newVal) => {
  console.log("[MiniLeandro.vue] Mensagens atualizadas:", newVal);
});

watch(loading, (val) => {
  console.log("[MiniLeandro.vue] Estado de loading:", val);
});

function handleSubmit() {
  const text = inputText.value.trim();
  if (!text) {
    console.warn("[MiniLeandro.vue] Tentativa de envio com texto vazio");
    return;
  }
  console.log("[MiniLeandro.vue] Enviando:", text);
  sendMessage(text);
  inputText.value = '';
}

function handleKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    handleSubmit();
  }
}
</script>
