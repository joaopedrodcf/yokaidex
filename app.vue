<template>
    <UApp>
        <NuxtPwaManifest />
        <ClientOnly>
            <AppPwaUpdatePrompt />
        </ClientOnly>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
