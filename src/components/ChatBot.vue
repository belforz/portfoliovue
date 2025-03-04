<template>
  <div
    class="fixed bottom-4 right-4 w-16 h-16 cursor-pointer transition-all motion-reduce:transition-none duration-500"
    :class="showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'"
    @click="toggleChat"
  >
    <img :src="botAvatar" alt="Avatar do Chatbot" class="w-16 h-16 rounded-full shadow-lg border border-gray-300 dark:border-white">
  </div>

  <div
    v-if="isChatOpen"
    class="fixed bottom-16 right-4 w-[90%] sm:w-[400px] h-[70vh] sm:h-[80vh] bg-gray-100 dark:bg-black shadow-lg rounded-lg flex flex-col border border-white border-opacity-30 transition-all motion-reduce:transition-none duration-500"
    :class="showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'"
  >
    <!-- Cabeçalho -->
    <div
      class="p-4 bg-gradient-to-r from-gray-50 to-gray-300 dark:from-gray-800 dark:to-gray-600 text-black dark:text-white flex justify-between items-center rounded-t-lg shadow-md"
    >
      <span class="font-semibold">Mini Leandro</span>
      <button
        @click="toggleChat"
        class="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
      >
        ✖
      </button>
    </div>

    <!-- Área de Mensagens -->
    <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="flex items-center space-x-2"
        :class="msg.fromUser ? 'justify-start' : 'justify-end'"
      >
        <img
          v-if="msg.fromUser"
          :src="userAvatar"
          alt="Avatar de Usuário"
          class="w-8 h-8 rounded-full border border-gray-300 dark:border-white"
        />
        <div
          :class="
            msg.fromUser
              ? 'bg-gray-300 text-gray-900 max-w-[75%] sm:max-w-[65%] border border-white border-opacity-40 rounded-lg p-2'
              : 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white dark:text-black max-w-[75%] sm:max-w-[65%] border border-white border-opacity-40 rounded-lg p-2'
          "
          class="shadow-md transition-opacity duration-500"
        >
          {{ msg.fromUser ? msg.text : msg.animatedText }}
        </div>
        <img
          v-if="!msg.fromUser"
          :src="botAvatar"
          alt="Avatar do Mini-Leandro"
          class="w-8 h-8 rounded-full border border-gray-300 dark:border-white"
        />
      </div>

  
      <div v-if="loading" class="flex items-center space-x-2 justify-end">
        <span class="text-gray-500 text-sm animate-fade">Digitando...</span>
        <img :src="botAvatar" alt="Avatar do Mini-Leandro" class="w-8 h-8 rounded-full border border-gray-300 dark:border-white" />
      </div>
    </div>

    <!-- Entrada de Texto -->
    <div
      class="p-4 border-t flex items-center gap-2 bg-white dark:bg-black rounded-b-lg border border-white border-opacity-30"
    >
      <input
        v-model="inputText"
        @keyup.enter="sendMessage"
        class="flex-1 p-2 rounded-md border bg-gray-200 dark:bg-gray-700 text-black dark:text-white w-full sm:w-auto placeholder-gray-400"
        placeholder="Digite uma mensagem..."
      />
      <button
        @click="sendMessage"
        class="bg-white dark:bg-black text-black dark:text-white p-2 rounded-md border border-white border-opacity-30 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        Enviar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick , reactive} from "vue";
import { useScroll } from "@vueuse/core";
import portfolio from "@/portfolio";

const messages = ref([]);
const inputText = ref("");
const loading = ref(false);
const chatContainer = ref(null);
const isChatOpen = ref(false);
const showLanding = ref(true);
useScroll(chatContainer);

const userAvatar = ref(portfolio.iconsImages.userImage);
const botAvatar = ref(portfolio.iconsImages.botImage);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};

const typeWriterEffect = (text, callback) => {
  let accumulatedText = '';
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      accumulatedText += text[i]; // Acumula o texto
      callback(accumulatedText); // Passa o texto acumulado
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
};

const sendMessage = async () => {
  if (!inputText.value.trim()) return;

  messages.value.push({ text: inputText.value, fromUser: true });
  inputText.value = "";
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    // Usar reactive() para garantir que as mudanças sejam detectadas(igual ao set do React)
    const botResponse = reactive({
      text: "Segundo os documentos acessados, o Leandro pode parecer um bicho do mato, mas é um bom profissional.", 
      fromUser: false, 
      animatedText: "" 
    });
    
    messages.value.push(botResponse); 

    typeWriterEffect(botResponse.text, (newText) => {
      botResponse.animatedText = newText; // Atualização reativa
      nextTick(() => (chatContainer.value.scrollTop = chatContainer.value.scrollHeight));
    });
  }, 1000);
};
</script>


<style>
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade {
  animation: fade 1s ease-in-out;
}
</style>
