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
                    <h1 class="m0">Update Delivery Method</h1>
                    <p class="mt5 mb20 tc-green">Update delivery method</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Delivery Name</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your full name"
                    >
                    
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
                        placeholder="Input your username"
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
                        placeholder="Input your email"
                    >
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/delivery-method">
                    <button class="bt-submit-green">Update Delivery Method</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'delivery-update'
}
</script>