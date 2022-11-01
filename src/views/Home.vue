<template>
    <div class="flex flex-row w-screen h-screen bg-slate-200">
        <!-- Side Bar -->
        <div class="w-1/5 h-full bg-slate-200">
            <!-- E-Cerpen -->
            <div class="navbar">
                <a class="btn btn-ghost normal-case text-xl" href="/home">E-Cerpen Web</a>
            </div>
            <!-- E-Cerpen End -->

            <!-- Menu -->
            <ul class="menu w-56 p-2 rounded-box">
            <li>
                <a href="/home">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Home
                </a>
            </li>
            <li v-if="author">
                <a href="/upload">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Upload Cerpen
                </a>
            </li>
            <li v-if="author">
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Kumpulan Cerita-mu
                </a>
            </li>
            </ul>
            <!-- Menu End -->
            <!-- Button Logout -->
            <div class="absolute bottom-0">
                <button v-if="author" class="btn btn-sm ml-20">Logout</button>
                <p v-if="!author" class="pt-5 pl-6 pb-3 text-center">Mau Jadi Author? 
                    <span class="font-bold">
                        <a href="/register">Klik disini</a>
                    </span>
                </p>
            </div>
            <!-- Button Logout End -->
        </div>
        <!-- Side Bar End -->

        <!-- Contains -->
        <div class="w-4/5 h-full pt-5 pl-0 pr-5 bg-slate-200">
            <h1 class="pb-3 pl-3 text-inherit text-lg font-medium font-mono">Latest</h1>
            <!-- Cerpen -->
            <div class="mb-5">
                <div v-for="c in cerpens" class="card lg:card-side bg-base-100 shadow-xl mb-6">
                    <div class="card-body">
                        <h1 class="card-title">{{c.judul}}</h1>
                        <h3 class="text-sm">Author: <span class="text-red-400 font-semibold">{{c.nama_author}}</span></h3>
                        <div class="overflow-hidden pr-1 pb-12 h-3">
                            <p class="text-justify text-xs">{{c.isi}}</p>
                        </div>
                        <div class="pr-1 pt-0">
                            <a class="card-actions text-sm justify-end" href="">Read more ....</a>
                            <p class="text-xs italic">#{{c.tema}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Cerpen End -->

            <!-- Pagination -->
            <div class="btn-group flex justify-end mt-6 pr-5">               
                <button class="btn btn-xs">«</button>
                <!-- <button class="btn btn-xs">Page 1</button> -->
                <button class="btn btn-xs">»</button>
            </div>
            <!-- Pagination End -->
        </div>
    </div>
    <!-- Footer -->
    <div>
        <footer class="flex w-screen h-full bg-slate-200 footer items-center p-4 text-slate-600">
            <div class="flex justify-center items-center w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
                <p class="text-sm">Copyright © 2022 - All right reserved - <a class="font-semibold italic underline" href="https://www.linkedin.com/in/destafajri/">Desta Fajri</a></p>
            </div> 
        </footer>
    </div>
    <!-- Footer End -->
</template>

<script>
import Cerpen from "../services/cerpen"

export default{
data() {
    return {
      cerpens: [],
    };
  },
  methods: {
    getCerpens() {
      Cerpen.getAll()
        .then((response) => {
          this.cerpens = response.data.data;
          console.log(this.cerpens);
        })
        .catch((e) => {
          console.log(e);
        })
    }
  },
  mounted() {
    this.getCerpens();
  },
//   computed:{
//     customCerpens(){
//         return this.cerpens.map(item=>{
//         return {...cerpens, isi:cerpens.isi.substring(1, 4)}
//     }
//   }
};
</script>