<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Delivery Method</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your Delivery Method for teh convenience of your customer</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-delivery">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>  
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Search by invoice number, name, amount..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>DELIVERY NAME</th>
                            <th>DELIVERY FEE</th>
                            <th>ESTIMATION DELIVERY</th>
                            <th>DELIVERY TYPE IMAGE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of delivery_method" :key="item.id">
                            <td class="center">{{ item.deliveryName }}</td>
                            <td class="center">{{ item.deliveryFee }}</td>
                            <td class="center">{{ item.estimationDelivery }}</td>
                            <td class="center">
                                <div>
                                <img :src="require(`../../assets/images/${item.images}`)" width="100" alt="gambar"/>
                            </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/delivery-update">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/delivery-detail">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'delivery-method',
	components: {
		Menu
	},
    data(){
        return {
            delivery_method: [
                {
                    id: "1",
                    deliveryName: "REGULAR",
                    deliveryFee: "Rp 9000",
                    estimationDelivery: "3-4 Hari",
                    images: "regulerdelivery.png"
                },
                {
                id: "2",
                deliveryName: "KARGO",
                deliveryFee: "Rp 15.000",
                estimationDelivery: "3-4 Hari",
                images: "kargo.png"
                    
                },
                {
                id: "3",
                deliveryName: "SAME DAY",
                deliveryFee: "Rp 9000",
                estimationDelivery: "6-8 Jam",
                images: "sameday.png"
                    
                },
                {
                id: "4",
                deliveryName: "INSTANT",
                deliveryFee: "Rp 20.000",
                estimationDelivery: "1-2 Jam",
                images: "instant.png"
                },

            ]
        }
    }
}
</script>