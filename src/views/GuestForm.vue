<template>
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
      <form class="w-full max-w-xs space-y-4">
        <h1 class="flex flex-col items-center text-3xl">Viewer</h1>
        <input required type="text" placeholder="Nama" class="input input-md input-bordered input-info w-full block" />
        <input required type="email" placeholder="Email" class="input input-md input-bordered input-info w-full block" />
        <button class="btn w-full" to="/home">Submit</button>
        <!-- Redirect link to Register -->
        <RouterLink class="flex flex-col items-end text-left" to="/register">
                Mau jadi penulis? Register disini
        </RouterLink>
      </form>
    </div>
</template>

<style>
</style>