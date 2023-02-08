/**
 * popup a short message
 * @param content
 * @param delay
 */
export function notice(content: string, delay = 3000) {
  if (!content) return;
  const wrapper = document.createElement("div");

  wrapper.style.position = "absolute";
  wrapper.style.left = "0";
  wrapper.style.top = "0";
  wrapper.style.width = "100%";
  wrapper.style.display = "flex";
  wrapper.style.padding = "1rem";
  wrapper.style.justifyContent = "center";

  const element = document.createElement("span");
  element.style.padding = "1rem";
  element.textContent = content;
  element.style.color =
    document.getElementsByTagName("body")[0].style.color || "black";
  element.style.background =
    document.getElementsByTagName("body")[0].style.background || "white";
  element.style.boxShadow = "rgb(149 157 165 / 20%) 0px 8px 24px";
  element.style.borderRadius = "0.4rem";

  wrapper.append(element);
  document.body.append(wrapper);

  setTimeout(() => {
    wrapper.parentNode?.removeChild(wrapper);
  }, delay);
}
