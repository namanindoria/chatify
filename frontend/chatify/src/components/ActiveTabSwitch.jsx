import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex bg-slate-800/60 p-1 rounded-xl m-4 border border-slate-700/30">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 text-center py-2 text-sm font-medium rounded-lg transition-all ${
          activeTab === "chats"
            ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 shadow-sm"
            : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/20"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 text-center py-2 text-sm font-medium rounded-lg transition-all ${
          activeTab === "contacts"
            ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 shadow-sm"
            : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/20"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;

