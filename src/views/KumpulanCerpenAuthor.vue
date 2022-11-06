<template>
    <!-- Table -->
    <div class="overflow-x-auto mr-36 ml-36 mt-20">
        <table class="table table-compact w-full">
            <thead>
            <tr>
                <th></th> 
                <th>Name</th> 
                <th>Job</th> 
                <th>company</th> 
                <th>location</th> 
                <th>Last Login</th> 
                <th>Favorite Color</th>
            </tr>
            </thead> 
        <tbody>
            <tr>
                <th>20</th> 
                <td>Lorelei Blackstone</td> 
                <td>Data Coordiator</td> 
                <td>Witting, Kutch and Greenfelder</td> 
                <td>Kazakhstan</td> 
                <td>6/3/2020</td> 
                <td>Red</td>
            </tr>
            </tbody> 
        </table>
    </div>
</template>

<script>

import axios from "axios";
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
        nama: "",

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
  },
};

</script>