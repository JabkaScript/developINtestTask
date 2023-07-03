<template>
    <v-data-table :headers="headers" :items="employees">
      <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Сотрудники</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog persistent v-model="createDialog" max-width="1024px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">Добавить</v-btn>
          </template>
          <EmployeeCreateDialog @close="createDialog=false" @localstorageChanged="renewEmployees(); $emit('createdEmp')"/>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="1024px">
          <EmployeeDeleteDialog :employeeName="employeeToUpdate" :employeeToUpdateUUID="employeeToUpdateUUID" @close="dialogDelete=false" @localstorageChanged="renewEmployees(); $emit('deletedEmp')"> </EmployeeDeleteDialog>
        </v-dialog>
        <v-dialog v-model="editDialog" max-width="1024px">
          <EmployeeEditDialog :employeeData="employeeDataToUpdate" :employeeToUpdateUUID="employeeToUpdateUUID" @close="editDialog=false" @localstorageChanged="renewEmployees(); "> </EmployeeEditDialog>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item.raw)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
    </template>
    <template v-slot:item.link="{ item }">
      <router-link :to="`/employee/${item.raw.id}`">
        <v-icon size="small" class="me-2">
        mdi-account
      </v-icon>
      </router-link>
      
    </template>
    <template v-slot:no-data>
      <v-label>Сотрудников нет!</v-label>
    </template>
    </v-data-table>
</template>


<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import EmployeeCreateDialog from '../EmployeeCreateDialog/EmployeeCreateDialog.vue';
import EmployeeDeleteDialog from '../EmployeeDeleteDialog/EmployeeDeleteDialog.vue';
import EmployeeEditDialog from '../EmployeeEditDialog/EmployeeEditDialog.vue';
</script>


<script lang="ts">
export default {
    data (){return{
      createDialog:false,
      dialogDelete:false,
      editDialog:false,
      deleteItemConfirm:false,
      employeeToUpdate:'',
      employeeDataToUpdate:'',
      employeeToUpdateUUID:'',
      headers:[
    {title:'Ссылка', align: 'start', key: 'link'},
    {title:'Фамилия', align: 'start', key: 'surname'},
    {title:'Имя', align: 'start', key: 'firstname'},
    {title:'Отчество', align: 'start', key: 'fathername'},
    {title:'Должность', align: 'start', key: 'post'},
    {title:'Действия', align: 'start', key: 'actions', sortable:false}],
        employees:JSON.parse(localStorage.getItem('employees')||'[]')||[],
        }
    },
    methods:{
      renewEmployees(){
        this.employees = JSON.parse(localStorage.getItem('employees')||'[]')||[];
        this.$forceUpdate();
      },
      editItem(item){
        this.employeeDataToUpdate = item;
        this.employeeToUpdateUUID = item.id;
        this.editDialog = true;
      },
      deleteItem(item){
        this.employeeToUpdate = item.surname + ' ' + item.firstname
        this.employeeToUpdateUUID = item.id;
        this.dialogDelete = true;
      }
    }
}
</script>
<style>
    
</style>