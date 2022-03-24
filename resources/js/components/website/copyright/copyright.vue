<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Copyright </h1>
            <h6 align=center>Copyright is an important topic for Bogiyo.</h6>
        </div>
        <hr>
        <div class="sub-container" >
            <p>
                Bogiyo (“Bogiyo”) respects the intellectual property rights of others and expects its users to do the same.
                In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S.
                Copyright Office website at <a href="http://www.copyright.gov/legislation/dmca.pdf">http://www.copyright.gov/legislation/dmca.pdf</a> ,
                Bogiyo will respond expeditiously to claims of copyright infringement committed using the Bogiyo service
                and/or the Bogiyo website (the “Site”) if such claims are reported to Bogiyo’s Designated Copyright Agent.
            </p>
            <p>
                If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under
                copyright, please report alleged copyright infringements taking place on or through the Site by completing the following
                DMCA Notice of Alleged Infringement and delivering it to Bogiyo’s Designated Copyright Agent. Upon receipt of Notice as
                described below, Bogiyo will take whatever action, in its sole discretion, it deems appropriate, including removal of the
                challenged content from the Site.
            </p>
            <h2 align="center">Important note on copyrighted material</h2>
            <p>
                You should only use music , and photo galleries for files that you have the legal right to share with others
                (for example music that you personally created). You do not have the right to share files unless you own the
                copyright in them or have been given permission by the copyright owner to share them. Purchasing or legally acquiring
                music does not give you the right to share that material with third parties over the Internet.
            </p>
            <p>
                If you have any doubts about whether you have the legal right to share certain files, you should not share them.
                By uploading your music on us you represent that files placed in your account does not violate the Bogiyo's <a href="terms"><a>Terms
                and Conditions</a></a>  and that you own all copyrights to them or have been given permission by the copyright owner to share
                them. Bogiyo has adopted a policy of terminating the accounts of users who repeatedly infringe copyright or whose
                accounts are subject to multiple infringement allegations. If you repeatedly share files that infringe others’ copyrights,
                your account will be terminated
            </p>
            <h2 align="center">Qualifying for Content ID</h2>
            <p>
                Content ID acceptance is based on an evaluation of each applicant's actual need for the tools. Applicants must be able to
                provide evidence of the copyrighted content for which they control exclusive rights.
            </p>
            <p>
                Content ID will match a user's reference content against every upload to Bogiyo. Therefore, applicants must have the exclusive
                rights to the material that is evaluated. Common examples of items that may not be exclusive to individuals include:
            <ul>
                <li>Mashups, “best of”s, compilations, and remixes of other works</li>
                <li>Trailers and unlicensed music</li>
                <li>Music or video that was licensed, but without exclusivity</li>
                <li>Recordings of performances (including concerts, events, speeches, shows)</li>
            </ul>
            </p>
            <p>
                If accepted to use the Content ID tools, applicants will be required to complete an agreement explicitly stating that only
                content with exclusive rights can be used as references. Additionally, accepted applicants will need to provide the geographic
                locations of exclusive ownership, if not worldwide
            </p>
            <p>
                Content ID applicants may be rejected if other tools better suit their needs. These other tools include the copyright notification
                web form and the Content Verification Program (CVP).
            </p>
            <h2 align="center">DMCA Notice of Alleged Infringement (“Notice”)</h2>
            <p><b>1.</b>Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you may provide a
                representative list of the copyrighted works that you claim have been infringed</p>
            <p>
                <b>2.</b>Identify the material or link you claim is infringing (or the subject of infringing activity) and to which access is to be disabled, including
                at a minimum, if applicable, the URL of the link shown on the Site or the exact location where such material may be found.
            </p>
            <p>
                <b>3.</b>Provide your company affiliation (if applicable), mailing address, telephone number, and, if available, email address.
            </p>
            <p>
                <b>4.</b>Include both of the following statements in the body of the Notice:
            <ul>
                <li>“I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by
                    the copyright owner, its agent, or the law (e.g., as a fair use).”</li>
                <li>“I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of, the owner,
                    of the copyright or of an exclusive right under the copyright that is allegedly infringed.”</li>
            </ul>
            </p>
            <p><b>5.</b> Provide your full legal name and your electronic or physical signature.</p>
            <p align="center">E-mail this Notice, with all items completed, to copyright@bogiyo.com</p>
        </div>
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
             <hr v-if="show">
            <app-login id="#login" v-if="show"></app-login>
        </div>

        <hr>

    </div>
</template>
<script>
    import {buss} from '../../../app'
    import login from  '../../website/login/mobile_login.vue'
    export default {
        components: {
            appLogin: login,

        },
        data () {
            return {
                show:true,
            }
        },

        created(){
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor','')
            window.scrollTo(0,0)
        }

    }
</script>
<style scoped>
    a{
        color: #b76666;
    }
    a:hover{
        color: #b76666;
    }
</style>

