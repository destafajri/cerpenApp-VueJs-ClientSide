<template>
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
        <form  @submit.prevent="handleSubmit" class="w-full max-w-xs space-y-4">
            <h1 class="flex flex-col items-center text-3xl">Author</h1>
            <input id="email" v-model="email" required type="email" placeholder="Email" class="input input-md input-bordered input-info w-full block" />
            <input id="password" v-model="password" required type="password" placeholder="Password" class="input input-md input-bordered input-info w-full block" />
            <button id="submit-login-btn-author"  @click="submit" class="btn w-full">Masuk</button>
            <!-- Redirect link to Register -->
            <RouterLink class="flex flex-col items-end text-left text-sm" to="/register">
                    Belum punya akun penulis? Registrasi disini
            </RouterLink>
        </form>
    </div>
</template>

<script setup>
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
        email:"",
        password:"",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("https://api-ecerpen-bangdaud-golang.herokuapp.com/login/author", {
        email: this.email,
        password:this.password,
      },
      );
      if (response.status == "200") {
        console.log(response)
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("id_author", response.data.data.id);
        localStorage.setItem("role", response.data.data.role);
        // this.$store.dispatch("role", response.data.data);
        this.$router.push("/home");
      } else {
        this.$router.push("/login");
      }
      const usertoken = localStorage.getItem("token");
      console.log(usertoken);
      const authorid = localStorage.getItem("id_author");
      console.log(authorid);
      const role = localStorage.getItem("role");
      console.log(role);
      const responseAuthor = axios.get(
        `https://api-ecerpen-bangdaud-golang.herokuapp.com/author/${response.data.data.id}/cerpen`,{
            headers: {
          Authorization: localStorage.getItem("token"),
        }
    });
      console.log(responseAuthor);
      localStorage.setItem("author", responseAuthor.data.data);
    },
  },
};
</script>