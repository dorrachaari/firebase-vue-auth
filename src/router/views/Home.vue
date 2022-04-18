<template>

    <div class="row">
        <div class="col-4"/>
        <div class="col-4 p-4 pt-0 text-uppercase "> <span v-if="user" > Hello <span class="font-weight-bold text-danger "> {{user.displayName}} </span> </span></div>
        <div class="col-4">   <button class="float-right btn btn-danger"  @click="logout" > Log out</button> </div>
    </div>

    <h1><img src="https://limesharp.net/images/case-studies/grenson-logo.svg" alt="Grenson"></h1>
    <div>A showcase for a traditional British shoemaker</div>
    <img src="https://limesharp.net/images/case-studies/grenson-laptop.png" alt="Grenson" class="laptop-image load-transition loaded">


</template>

<script>
import {signOut,getAuth} from "firebase/auth"
export default {
    data (){
        return{ 
            user : {}
        }
    },
    mounted(){
        this.user =JSON.parse( localStorage.getItem('user'))
    },
    methods :{
        logout (){
            signOut(getAuth()).then(
                () =>{
                    localStorage.removeItem('user')
                    this.$router.push('/');
                }
            )
        }
    }

}
</script>