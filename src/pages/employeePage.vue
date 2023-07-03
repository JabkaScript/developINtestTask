<template>
    <v-app>
      <v-main>
        <router-link :to="`/`">К списку сотрудников</router-link>
        <v-text-field 
            v-model="surname"
            label="Фамилия"
            readonly="true"
            />
        <v-text-field 
            v-model="firstname"
            label="Имя"
            readonly="true"
            />
        <v-text-field 
            v-model="fathername"
            label="Отчество"
            readonly="true"
            />
        <v-text-field 
            v-model="post"
            label="Должность"
            />
        <v-text-field
            v-model="salary"
            label="Оклад"
            readonly="true"/>
        <v-checkbox
            v-model="employmentHistory"
            label="Трудовая книжка сдана"
            readonly="true"/>
        <v-text-field type="date"
        v-model="startdate"
        label="Дата начала работы"
        readonly="true"
        />
        <v-col>
            <v-label>Ставка</v-label>
            <v-row>
                <v-checkbox
                    v-model="workRate"
                    value="half"
                    label="Половина"
                    readonly="true"/>
                <v-checkbox
                    v-model="workRate"
                    value="full"
                    label="Полная"
                    readonly="true"/>
            </v-row>
        </v-col>
      </v-main>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
        employeeData:{},
        surname:'',
        firstname:'',
        fathername:'',
        post:'',
        startdate:'',
        employmentHistory:true,
        salary:'',
        workRate:''}
    },
    created(){
        let employeesArray = JSON.parse(localStorage.getItem('employees')) || '[]' || [];
        this.employeeData = employeesArray.find(({ id }) => id == this.$route.params.id)
        this.surname = this.employeeData.surname || ''
        this.firstname= this.employeeData.firstname || ''
        this.fathername= this.employeeData.fathername || ''
        this.post= this.employeeData.post || ''
        this.startdate= this.employeeData.startdate || ''
        this.employmentHistory= this.employeeData.employmentHistory || '',
        this.salary = this.employeeData.salary || 0
        this.workRate= this.employeeData.workRate || ''
    },
}
</script>