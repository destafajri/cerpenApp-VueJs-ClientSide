<template>
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
      <form class="w-full max-w-xs space-y-4">
        <h1 class="flex flex-col items-center text-3xl">Admin</h1>
        <input type="email" required placeholder="Email" class="input input-md input-bordered input-info w-full block"/>
        <input type="password" required placeholder="Password" class="input input-md input-bordered input-info w-full block"/>
        <button class="btn w-full" to="/home">Masuk</button>
        <RouterLink class="flex flex-col items-end text-left text-lg" to="/welcome">
                    Bukan admin? klik disini
        </RouterLink>
      </form>
    </div>
</template>

<style>
</style>