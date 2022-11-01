<template>
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
      <form class="w-full max-w-xs space-y-4">
        <h1 class="flex flex-col items-center text-3xl">Register Here</h1>
        <input required type="text" placeholder="Nama" class="input input-md input-bordered input-info w-full block" />
        <input required type="email" placeholder="Email" class="input input-md input-bordered input-info w-full block" />
        <input required type="password" placeholder="Password" class="input input-md input-bordered input-info w-full block" />
        <input required type="password" placeholder="Confirm Password" class="input input-md input-bordered input-info w-full block" />
        <button class="btn w-full" to="/author">Register</button>
        <!-- Redirect link to Register -->
        <RouterLink class="flex flex-col items-end text-left" to="/author">
                Sudah punya akun? Klik disini
        </RouterLink>
      </form>
    </div>
</template>

<style>
</style>