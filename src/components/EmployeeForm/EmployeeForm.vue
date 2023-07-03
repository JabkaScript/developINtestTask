<template>
    <v-form ref="form" fast-fail @submit.prevent>
        <v-text-field 
            v-model="surname"
            label="Фамилия"
            :rules="nameRules"
            />
        <v-text-field 
            v-model="firstname"
            label="Имя"
            :rules="nameRules"
            />
        <v-text-field 
            v-model="fathername"
            label="Отчество"
            :rules="nameRules"
            />
        <v-text-field 
            v-model="post"
            label="Должность"
            :rules="nameRules"
            />
        <v-text-field
            v-model="salary"
            :rules="salaryRules"
            label="Оклад"/>
        <v-checkbox
            v-model="employmentHistory"
            label="Трудовая книжка сдана"/>
        <v-text-field type="date"
        v-model="startdate"
        label="Дата начала работы"
        />
        <v-col>
            <v-label>Ставка</v-label>
            <v-row>
                <v-checkbox
                    v-model="workRate"
                    value="half"
                    label="Половина"/>
                <v-checkbox
                    v-model="workRate"
                    value="full"
                    label="Полная"/>
            </v-row>
        </v-col>
    </v-form>
</template>
<script setup>

</script>
<script>
export default {
    props:{employeeData:{default:{}}},
    data(){
        return{
        surname:'',
        firstname:'',
        fathername:'',
        post:'',
        startdate:'',
        employmentHistory:true,
        salary:'',
        workRate:'',
        
        nameRules:[
            value => {
                if (/[^A-Za-zА-Яа-я]/.test(value)) return 'Не должно содержать цифр и/или специальных символов'
                if (value?.length<3) return 'Должно содержать не менее 3 символов'
                return true
            }
        ],
        salaryRules:[
            value => {
                if(isNaN(value)) return 'Должно быть валидным числом'
                if (value?.length<3) return 'Должно содержать не менее 3 символов'
                if(Math.sign(Number(value))<=0) return 'Должно быть положительным числом'
                return true
            }
        ]
        }
    },
    created(){
        this.surname = this.employeeData.surname || ''
        this.firstname= this.employeeData.firstname || ''
        this.fathername= this.employeeData.fathername || ''
        this.post= this.employeeData.post || ''
        this.startdate= this.employeeData.startdate || ''
        this.employmentHistory= this.employeeData.employmentHistory || '',
        this.salary = this.employeeData.salary || 0
        this.workRate= this.employeeData.workRate || ''
    },
    methods:{
        async validate(){
            const {valid} = await this.$refs.form.validate();
            return valid;
        },
        async checkIfValid(){
            const {valid} = await this.$refs.form.validate();
            return valid;
        },
        getAllDataAsObject(){
            console.log(this.startdate);
            return {'surname':this.surname, 'firstname':this.firstname, 'fathername':this.fathername,
                    'salary':this.salary, 'workRate':this.workRate, 'employmentHistory':this.employmentHistory,
                    'post':this.post, 'startdate':this.startdate}
        }
    }

    
}
</script>