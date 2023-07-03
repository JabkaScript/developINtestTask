<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Удалить сотрудника {{ employeeName }}</span>
        </v-card-title>
        <v-card-text>
            <span class="text">Подтвердите удаление сотрудника</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="$emit('close', $event)">
            Закрыть
          </v-btn>
          <v-btn color="primary" variant="text" @click="deleteEmployee();">
            Подтвердить
          </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>

</script>
<script>

export default {
    props:{employeeName:'', employeeToUpdateUUID:''},
    methods: {
        deleteEmployee(){
            let employeesArray = JSON.parse(localStorage.getItem('employees')) || '[]' || [];
            employeesArray = employeesArray.filter(e => e.id != this.employeeToUpdateUUID);
            localStorage.setItem('employees', JSON.stringify(employeesArray));
            this.$emit('localstorageChanged');
            this.$emit('close');
        }
    },
}
</script>
<style>
    
</style>