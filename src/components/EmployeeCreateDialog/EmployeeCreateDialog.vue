<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Добавить сотрудника</span>
        </v-card-title>
        <v-card-text>
            <EmployeeForm ref="form"/>
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
    methods:{
        async tryToSave(){
            const  valid = await this.$refs.form.checkIfValid();
            if(valid){
                let array = JSON.parse(localStorage.getItem('employees')||'[]') || [];
                let newEmployee = this.$refs.form.getAllDataAsObject();
                newEmployee.id = uuid.v4();
                array.push(newEmployee);
                localStorage.setItem('employees', JSON.stringify(array));
                this.$emit('localstorageChanged');
                this.$emit('close');
            }
        }
    }
}

</script>
<style>
    
</style>