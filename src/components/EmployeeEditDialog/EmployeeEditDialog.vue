<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Изменить сотрудника</span>
        </v-card-title>
        <v-card-text>
            <EmployeeForm ref="form" :employeeData="this.employeeData"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="$emit('close', $event)">
            Закрыть
          </v-btn>
          <v-btn color="primary" type="submit" variant="text" @click="tryToSave();">
            Сохранить
          </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import EmployeeForm from '@/components/EmployeeForm/EmployeeForm.vue'

</script>
<script>
import { uuid } from 'vue-uuid'; 

export default {
    props:{employeeData:'', employeeToUpdateUUID:''},
    methods:{
        async tryToSave(){
            const  valid = await this.$refs.form.checkIfValid();
            if(valid){
                let employeesArray = JSON.parse(localStorage.getItem('employees')||'[]') || [];
                let newEmployeeData = this.$refs.form.getAllDataAsObject();
                employeesArray = employeesArray.filter(e => e.id != this.employeeToUpdateUUID);
                newEmployeeData.id = this.employeeToUpdateUUID;
                employeesArray.push(newEmployeeData);
                localStorage.setItem('employees', JSON.stringify(employeesArray));
                this.$emit('localstorageChanged');
                this.$emit('close');
            }
        }
    }
}

</script>
<style>
    
</style>