import { ref, watch, onMounted } from "vue";
import { sendChatMessage } from "@/services/chatService";

const STORAGE_KEY = "mini-leandro-chat-history";

export function useChat() {
  const messages = ref([]);
  const loading = ref(false);

  onMounted(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        messages.value = parsed.map((msg) => ({
          fromUser: msg.fromUser,
          animatedText: msg.animatedText || "",
        }));
        console.log("[useChat] Mensagens carregadas do localStorage:", messages.value);
      }
    } catch {
      console.warn("[useChat] Falha ao carregar histórico do localStorage");
      messages.value = [];
    }
  });

  watch(
    messages,
    (val) => {
      const persistable = val.map((msg) => ({
        fromUser: msg.fromUser,
        animatedText: msg.animatedText,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
      console.log("[useChat] Mensagens salvas:", persistable);
    },
    { deep: true }
  );

  const sendMessage = async (userMessage) => {
    const text = userMessage.trim();
    if (!text) {
      console.warn("[useChat] Mensagem vazia ignorada");
      return;
    }

    console.log("[useChat] Enviando mensagem do usuário:", text);

    loading.value = true;

    messages.value.push({
      fromUser: true,
      animatedText: text,
    });

    try {
      const response = await sendChatMessage(text);
      console.log("[useChat] Resposta recebida do backend:", response);

      const reply = String(response?.reply || "⚠️ Sem resposta");

      messages.value.push({
        fromUser: false,
        animatedText: reply,
      });

      console.log("[useChat] Resposta do bot adicionada:", reply);
    } catch (error) {
      console.error("[useChat] Erro ao obter resposta:", error);
      messages.value.push({
        fromUser: false,
        animatedText: "⚠️ Erro ao obter resposta.",
      });
    }

    loading.value = false;
    console.log("[useChat] Fim do envio. loading = false");
  };

  const clearMessages = () => {
    localStorage.removeItem(STORAGE_KEY);
    messages.value = [];
    console.log("[useChat] Mensagens limpas");
  };

  return {
    messages,
    loading,
    sendMessage,
    clearMessages,
  };
}
