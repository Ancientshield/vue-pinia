import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { axios } from 'Axios';

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

	const dataList = ref([]);

	const axiosAPI = async () => {
		try {
			const res = await axios.get('http://172.16.27.167/api/user/info');
			dataList.value = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	return { count, doubleCount, increment, addCount, dataList, axiosAPI };
});
