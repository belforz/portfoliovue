import { ref, onMounted, onUnmounted } from 'vue';

/**
 * @function onIntersect
 * @param {HTMLElement} elementToWatch - Element to observe
 * @param {Boolean} once - If true, only run once
 * @param {Object} options - Intersection Observer API options
 * @returns {ref<boolean>} - Ref object representing visibility state
 */
export const onIntersect = (elementToWatch, once = true, options = { threshold: 0.15 }) => {
    // Toggleable visibility
    const visible = ref(false);

    // Initialize the observer
    const observer = new IntersectionObserver(([entry]) => {
        // If the element to watch is intersecting within the threshold
        if (entry && entry.isIntersecting) {
            // Set to visible
            visible.value = true;

            // If should only run once, unobserve the element
            if (once) {
                observer.unobserve(entry.target);
            }
        }
        // If the element is not intersecting, set visibility to false
        else {
            visible.value = false;
        }
    }, options);

    // Hook into component's onMounted and onUnmounted lifecycles for setup and cleanup
    onMounted(() => observer.observe(elementToWatch.value));
    onUnmounted(() => observer.disconnect());

    return visible;
};

// Credit: Megan Valcour & Tim Spears - https://www.imarc.com/blog/adding-intersection-observer-to-your-vue-animation
