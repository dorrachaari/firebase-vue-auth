
<script>
import {GoogleAuthProvider, getAuth,signInWithPopup} from 'firebase/auth';
import Swal from 'sweetalert2'

export default {
    components :{},
    methods :{
        signInWithGoogle(){
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(),provider).then(
                (result)=>{
                    localStorage.setItem("user",JSON.stringify(result.user))
                    this.$router.push('/home');
                }
            ).catch(
                (error)=>{
                    if(error){
                        Swal.fire({
                            title: 'OPPS',
                            text:   "A problem occured while trying to sign-in with Google Account",
                            icon: 'warning',
                        
                        });
                    }
                }
            )
        },
        signInWithFacebook(){
            Swal.fire({
                title: 'Stay Tuned',
                text:   "Facebook sign-up will be available soon",
                icon: 'info',
            
            });
        },
        signInWithTwitter(){
            Swal.fire({
                title: 'Stay Tuned',
                text:   "Twitter sign-up will be available soon",
                icon: 'info',
            
            });
        },
    }
}
</script>
<template>

    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Sign in to continue to the site.</p>
                  <div class="row m-4">
                        <button class="btn btn-danger row" @click="signInWithGoogle" > Sign up with google </button>
                  </div>
                  <div class="row m-4 ">
                        <button class="btn btn-primary row " @click="signInWithFacebook" > Sign up with faceboook </button>
                  </div>
                  <div class="row m-4">
                        <button class="btn btn-success row" @click="signInWithTwitter" > Sign up with twitter </button>
                  </div>


                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>

        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            © {{ new Date().getFullYear() }}. Crafted with
            <span  class="text-danger" >Love </span> by  Limesharp
          </p>
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>

</template>
