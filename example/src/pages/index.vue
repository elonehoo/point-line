<script setup lang="ts">
import {decode,encode} from '@elonehoo/point-line'
const morse: string = $ref('')
let mossText:string = $ref('')

function moss(test:string){
  // console.log(test.substring(0,1))
  if(test.substring(0,1) === '.' || test.substring(0,1) === '-'){
    mossText = decode(test)
  }else{
    mossText = encode(test)
  }
}
</script>

<template>
  <div>

    <p>Point Line</p>

    <div class="py-4" />

    <input
      v-model="morse"
      placeholder="Enter text to be encrypted?"
      class="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
      autoComplete="false"
      type="text"
    >

    <div class="py-4" />

    <input
      v-model="mossText"
      disabled
      placeholder="Moss"
      class="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
      autoComplete="false"
      type="text"
    >

    <div>
      <button :disabled="morse.length <= 0" class="m-3 text-sm btn" @click="moss(morse)">
        Go
      </button>
    </div>
  </div>
</template>
