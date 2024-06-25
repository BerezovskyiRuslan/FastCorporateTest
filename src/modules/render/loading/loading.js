import { loadingTemplate } from "../../template/loading/loading.template"

export const loadingRender = (container) => {
  if (!container) {
    return loadingTemplate();
  }

  return container.innerHTML = loadingTemplate();
}