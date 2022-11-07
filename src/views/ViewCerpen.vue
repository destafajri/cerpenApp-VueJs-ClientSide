<template>
    <div class="flex flex-wrap w-screen min-h-screen bg-slate-300">
        <div class="rounded-md justify-center w-screen bg-slate-200 mb-12 mt-12 ml-20 mr-20">
            <!-- Contains -->
            <div v-if="isFetching">Loading...</div>
            <div v-if="error" class="flex font-mono pt-5 pl-3 italic">Cerpen Not Found ...</div>
            <div v-if="data" :key="data.data.id_cerpen" class="pl-5 pr-5 min-h-screen">
                <h1 v-text="data.data.judul" class="px-10 py-6 text-5xl font-bold"/>
                <h1 v-text="data.data.nama_author" class="px-10 py-0 text-md font-bold"/>
                <p v-text="data.data.isi" class="px-10 py-6 text-justify indent-8"/>
            </div>
            <!-- Contains End -->
            <!-- Home -->
            <button class="flex pt-10 pl-14">
                <a class="flex" href="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Home
                </a>
            </button>
            <!-- Home End -->
            <!-- Pagination -->
            <div class="btn-group flex justify-end pr-14 pb-5">               
                <button class="btn btn-sm" @click="handleDecrementOrder">«</button>
                <button class="btn btn-sm" @click="handleIncrementOrder">»</button>
            </div>
            <!-- Pagination End -->
        </div>
    </div>
</template>

<script setup>
import { ref, watch} from "vue";
import { useFetch } from '@vueuse/core'
import { useRouter, useRoute} from "vue-router";

//menabahkan url selanjutnya
const router = useRouter()
//mengambil query params
const routes = useRoute()
const {query} = routes
//constanta pagination
var order = ref(0)

const URL = ref(`https://api-ecerpen-bangdaud-golang.herokuapp.com/read?order=${query.order}`)

// console.log(URL.value)

//http request fetch data di API
const { isFetching, error, data } = useFetch(URL, { refetch: true }).get().json();

// console.log(data)
function handleDecrementOrder(){
    order.value -= 1
    if (order.value <1){
        order.value = 1
    }
    router.push({name: 'Cerpen', query: {order: order.value}})
}

function handleIncrementOrder(){
    order.value += 1
    if (order.value <1){
        order.value = 1
    }
    router.push({name: 'Cerpen', query: {order: order.value}})
}

//memantau perubahan nilai page, setiap ada perubahan pada page maka merubah query parameter
watch(order, () => {
    URL.value = `https://api-ecerpen-bangdaud-golang.herokuapp.com/read?order=${order.value}`
})

</script>