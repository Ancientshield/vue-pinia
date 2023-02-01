import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);

	// 也可以用 arrow function，結果都一樣，store 都可以直接呼叫
	const addCount = () => {
		count.value += 2;
	};
	function increment() {
		count.value++;
	}

	return { count, doubleCount, increment, addCount };
});
