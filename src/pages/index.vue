<template>
    <v-app>
      <v-main>
        <v-snackbar
        v-model="succesAddEmp"
        :timeout="1500"
      >Успешно добавлен сотрудник
  
        <template v-slot:actions>
          <v-btn
            color="blue"
            variant="text"
            @click="succesAddEmp = false"
          >
            Закрыть
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar
        v-model="succesDelEmp"
        :timeout="1500"
      >Успешно удален сотрудник
  
        <template v-slot:actions>
          <v-btn
            color="blue"
            variant="text"
            @click="succesDelEmp = false"
          >
            Закрыть
          </v-btn>
        </template>
      </v-snackbar>
        <EmployeeTable @createdEmp="succesAddEmp= true" @deletedEmp="succesDelEmp = true"/>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import EmployeeTable from '@/components/EmployeeTable/EmployeeTable.vue'
  </script>
  
  <script>
  
    export default{
      data(){
        return{
          succesAddEmp:false,
          succesDelEmp:false,
        }
      },
    }
  </script>