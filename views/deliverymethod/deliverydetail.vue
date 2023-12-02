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
                    <h1 class="m0">Detail Delivery Method</h1>
                    <p class="mt5 mb20 tc-green">Your delivery method details</p>
                </div>
            </div>
            <div>
                <img :src="require(`../../assets/images/${item.images}`)" width="65" alt="gambar"/>
                </div>
            <hr class="uline-grey">
            <div class="mt50">
                <p>Name:</p>
                <h2>Vioni Wita Elya</h2>
            </div>
            <div class="mt10">
                <p class="detail-title-bold">Username:</p>
                <p>viowelya</p>
            </div>
            <div class="mt10">
                <p class="detail-title-bold">Email:</p>
                <p>vioniwitaelya@gmail.com</p>
            </div>
            <div>
                <p class="detail-title-bold">Roles</p>
                <label class="label-green">Super Admin</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'delivery-detail'
}
</script>