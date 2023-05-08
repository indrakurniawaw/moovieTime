<template>
  <header class="bg-zinc-900">
    <div
      class="max-w-7xl text-white py-4 px-6 flex justify-between items-center m-auto"
    >
      <h1 class="text-xl font-bold">Movie App</h1>
      <div class="flex justify-center items-center">
        <div class="">
          <input
            type="text"
            class="px-3 py-1 rounded w-5/6 bg-black"
            placeholder="Search..."
            style="width: 150%"
          />
        </div>
      </div>

      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-gray-300">Categories</a></li>
          <li><a href="#" class="hover:text-gray-300">Movies</a></li>
          <li><a href="#" class="hover:text-gray-300">Tv Shows</a></li>
          <li><a href="#" class="hover:text-gray-300">Login</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header-main",
};
</script>

<style>
/* Customize the styling as needed */
</style>
