// Local minimal jQuery-like shim used only as a fallback when CDN is unavailable.
// This is NOT full jQuery; it's a small subset for the exercises (ready, $, on, css, text, hide/show).
(function(global){
  if (global.jQuery) return; // CDN already loaded
  function $(selector){
    const nodes = (typeof selector === 'string') ? Array.from(document.querySelectorAll(selector)) : [selector];
    nodes.text = function(s){ nodes.forEach(n => n.textContent = s); return nodes; };
    nodes.hide = function(){ nodes.forEach(n => n.style.display = 'none'); return nodes; };
    nodes.show = function(){ nodes.forEach(n => n.style.display = ''); return nodes; };
    nodes.on = function(evt, fn){ nodes.forEach(n => n.addEventListener(evt, fn)); return nodes; };
    nodes.css = function(prop,val){ nodes.forEach(n => n.style[prop] = val); return nodes; };
    nodes.val = function(v){ if(v===undefined) return nodes[0].value; nodes.forEach(n=>n.value=v); return nodes; };
    return nodes;
  }
  global.$ = global.jQuery = $;
  document.addEventListener('DOMContentLoaded', function(){ if(typeof $.ready === 'function') $.ready(); });
})(window);
