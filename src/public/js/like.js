// @ts-check
import Action from "./Action.js";

(() => {
  new Action("like", async ({ action }) => {
    const response = await fetch("/like?action", { method: "POST" });
    if (response.ok) {
      const { data } = await response.json();
      action.count.textContent = data.likes;
    }
  });
})();
