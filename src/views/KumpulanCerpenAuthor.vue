<template>
    <!-- Table -->
    <div class="overflow-x-auto mr-36 ml-36 mt-20">
        <!-- <table class="table table-auto h- h-full w-screen border-separate border border-green-800">
            <thead>
            <tr>
                <th>ID Cerpen</th> 
                <th>Judul</th> 
                <th>Tema</th> 
                <th>Created At</th> 
                <th>Is Publish</th> 
                <th>Edit</th> 
            </tr>
            </thead> 
            <tbody>
            <tr v-for="c in cerpen" class="align-baseline">
                <th>{{c.id_cerpen}}</th> 
                <td class="max-w-xs overflow-x-auto">{{c.judul}}</td> 
                <td class="max-w-xs overflow-x-auto">{{c.tema}}</td> 
                <td>{{c.created_at}}</td> 
                <td>{{c.is_publish}}</td> 
                <td>........</td>
            </tr>
            </tbody> 
        </table> -->
        <div class="ml-20 inline-grid gap-14 grid-cols-2">
          <div v-for="c in cerpen" class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{{c.judul}}</h2>
              <p>Tema: {{c.tema}}</p>
              <p>Created: {{c.created_at}}</p>
              <p>Publish? {{c.is_publish}}</p>
              <p>Deleted? {{c.is_deleted}}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-xs">Edit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>

import axios from "axios";
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
        cerpen:{}
    };
  },
  async created() {
    const response = await axios.get(
      `https://api-ecerpen-bangdaud-golang.herokuapp.com/author/${localStorage.getItem("id_author")}/cerpen?page=1`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(response)
    this.cerpen = response.data.data
  },
};

//     this.user = response.data.data;
//     let myDate = new Date(response.data.data.created_at).getFullYear();
//     this.date = myDate;
//     const responseThought = await axios.get(
//       `/thought/${localStorage.getItem("user_id")}`
//       // {
//       //   headers: {
//       //     Authorization: localStorage.getItem("token"),
//       //   },
//       // }
//     );
//     const thoughttt = (this.thought = responseThought.data.data);
//     console.log(thoughttt);
//     const userinfo = (this.user = response.data.data);
//     console.log(userinfo);
//   },
//   computed: {
//     ...mapGetters(["user"]),
//   },
//   methods: {
//     async handleUpdate() {
//       const response = await axios.patch(
//         `/user/${localStorage.getItem("user_id")}`,
//         {
//           firstname: this.firstname,
//           lastname: this.lastname,
//           username: this.username,
//           email: this.email,
//           phone: this.phone,
//           gender: this.gender,
//           birthplace: this.birthplace,
//           birthday: this.birthday,
//         }
//       );
//       if (response.status == "200") {
//         console.log(response.data);
//       } else {
//         console.log("update failed");
//       }
//     },
</script>