<template>
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
        <form class="w-full max-w-xs space-y-4">
            <h1 class="flex flex-col items-center text-3xl">Author</h1>
            <input required type="email" placeholder="Email" class="input input-md input-bordered input-info w-full block" />
            <input required type="password" placeholder="Password" class="input input-md input-bordered input-info w-full block" />
            <button class="btn w-full" to="/home">Masuk</button>
            <!-- Redirect link to Register -->
            <RouterLink class="flex flex-col items-end text-left text-sm" to="/register">
                    Belum punya akun penulis? Registrasi disini
            </RouterLink>
        </form>
    </div>
</template>

<style>
</style>