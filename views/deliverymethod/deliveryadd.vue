<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/delivery-method">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Add Delivery Method</h1>
                    <p class="mt5 mb20 tc-green">Make your customer have many choice of delivery method</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Delivery Type image</label>
                </div>
                <div class="w80">
                    <input
                    class="hidden"
                        type="file"
                        id="upload-file"/> 
                        <img
                        class="cursor-pointer"
                        src="../../assets/images/tambahfoto.png"
                        alt=""
                        @click="upload_file()"
                        
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Delivery Name</label>
                </div>
                <div class="w80 relative">
                    <input
                        class="form-text"
                        type="text"
                        maxlength="15"
                        placeholder="Masukan Delivery Name"
                    >
                    <span class = "addon-right"> | 0/15</span>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Delivery Fee</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Delivery Fee"
                    >
                </div> 
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Estimation Delivery</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Estimation Delivery"
                    >
                </div> 
            </div>
            <div class="flex mt30">
                <router-link to="/delivery-method">
                    <button class="bt-submit-green">Add Delivery Method</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'add-user'
}
</script>
<script>
export default{
    name:'add-delivery',
    methods:{
        upload_file(){
            const input_file=
            document.querySelector("#upload-file");
            input_file.click();
        },
    },
};
</script>